// file: app/login/keycloak/callback/route.ts
import * as AuthController from "@/controller/auth.controller";
import { keycloak } from "@/lib/auth/auth";
import { OAuth2RequestError } from "arctic";
import { cookies } from "next/headers";

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");

  const storedState = cookies().get("keycloak_oauth_state")?.value ?? null;
  const storedCodeVerifier = cookies().get("keycloak_oauth_code_verifier")?.value ?? null;
  if (!code || !state || !storedState || !storedCodeVerifier || state !== storedState) {
    return new Response(null, {
      status: 400,
    });
  }

  try {
    const tokens = await keycloak.validateAuthorizationCode(code, storedCodeVerifier);

    // Fetch user info manually since getUserInfo is not available
    const resp = await fetch(
      `${process.env.KEYCLOAK_REALMURL}/protocol/openid-connect/userinfo`,
      {
        headers: {
          Authorization: `Bearer ${tokens.accessToken}`,
        },
      },
    );
    const userInfo = await resp.json();

    await AuthController.save({
      id: userInfo.sub,
      name: userInfo.name,
      email: userInfo.email,
    });

    // Set an authentication cookie or session
    cookies().set("auth_session", userInfo.sub, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });

    return new Response(null, {
      status: 302,
      headers: {
        Location: "/",
      },
    });
  } catch (e) {
    console.error(e);
    if (e instanceof OAuth2RequestError) {
      // invalid code
      return new Response(null, {
        status: 400,
      });
    }
    return new Response(null, {
      status: 500,
    });
  }
}

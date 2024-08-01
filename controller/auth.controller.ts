import { db } from "@/db";
import { findUserByEmail } from "@/db/queries";
import { user } from "@/db/schema";
import { lucia } from "@/lib/auth/auth";
import { generateId } from "lucia";
import { cookies } from "next/headers";

interface UserAuth {
  id: string;
  name: string;
  email: string;
}

export const save = async (data: UserAuth) => {
  const { name, email } = data;

  const existingUser = await findUserByEmail(email);

  console.log(name, email, "Current GOOGLE USEr");

  if (!existingUser) {
    // User doesn't exist, save their data first
    const userId = generateId(15);
    await db.insert(user).values({
      id: userId,
      name,
      email,
    });

    // Create a new session for the new user
    await createSessionAndSetCookie(userId);
    return redirectToHomepage();
  }

  // User exists, create a new session
  await createSessionAndSetCookie(existingUser.id);
  return redirectToHomepage();
};

async function createSessionAndSetCookie(userId: string) {
  const session = await lucia.createSession(userId, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
}

function redirectToHomepage() {
  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
}

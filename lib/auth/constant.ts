import { env } from '@/env';

export const GOOGLE_URL = new URL('/login/google', env.BASE_URL).toString();

export const LOG_OUT_URL = new URL('/logout', env.BASE_URL).toString();

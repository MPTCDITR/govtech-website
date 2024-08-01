import { env } from '@/env';

export const GOOGLE_URL = new URL('/login/google', env.BASE_URL).toString();

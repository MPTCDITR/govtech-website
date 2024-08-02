import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
    server: {
        DATABASE_URL: z.string().url().min(1),
        DATABASE_TOKEN: z.string().min(1),
        GOOGLE_CLIENT_ID: z.string().optional(),
        GOOGLE_CLIENT_SECRET: z.string().optional(),
        BASE_URL: z.string().optional(),
    },
    client: {},
    runtimeEnv: {
        DATABASE_URL: process.env.DATABASE_URL,
        DATABASE_TOKEN: process.env.DATABASE_TOKEN,
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
        BASE_URL: process.env.BASE_URL,
    },
});

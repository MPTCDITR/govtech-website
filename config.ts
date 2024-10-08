import type { LocalePrefix, Pathnames } from 'next-intl/routing';

export const locales = ['en', 'km'] as const;

export const pathnames = {
    '/': '/',
} satisfies Pathnames<typeof locales>;

export const localePrefix: LocalePrefix<typeof locales> = 'always';

export type AppPathnames = keyof typeof pathnames;

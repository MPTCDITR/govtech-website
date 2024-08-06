import createMiddleware from 'next-intl/middleware';
import { localePrefix, locales, pathnames } from './config';

export default createMiddleware({
    defaultLocale: 'en',
    locales,
    pathnames,
    localePrefix,
});

export const config = {
    matcher: [
        // Enable a redirect to a matching locale at the root
        '/',

        // Set a cookie to remember the previous locale for
        // all requests that have a locale prefix
        '/(km|en)/:path*',

        // Enable redirects that add missing locales
        // (e.g. `/pathnames` -> `/en/pathnames`)
        // matches any route that doesn't start with "_next", "_vercel", "api", "login", or "logout",
        // and doesn't contain a file extension.
        '/((?!_next|_vercel|api|login|logout|.*\\..*).*)',
    ],
};

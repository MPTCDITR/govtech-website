'use client';

import { useParams } from 'next/navigation';
import { type ReactNode, useTransition } from 'react';

import { usePathname, useRouter } from '../../navigation';

type Props = {
    children: ReactNode;
    toggleLocale: string;
};

export default function LocaleSwitcherSelect({ children, toggleLocale }: Props) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();
    const params = useParams();

    function onToggleLocale() {
        startTransition(() => {
            router.replace(
                // @ts-expect-error -- TypeScript will validate that only known `params`
                // are used in combination with a given `pathname`. Since the two will
                // always match for the current route, we can skip runtime checks.
                { pathname, params },
                { locale: toggleLocale },
            );
            router.refresh();
        });
    }

    return (
        <button
            type='button'
            className={`relative shrink-0 ${isPending ? 'opacity-30' : ''}`}
            onClick={onToggleLocale}
            disabled={isPending}
            aria-label={`Switch to ${toggleLocale}`}
        >
            {children}
        </button>
    );
}

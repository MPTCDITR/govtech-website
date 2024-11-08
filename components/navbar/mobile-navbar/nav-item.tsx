import Link from 'next/link';

import { SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

interface NavItemProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

export function NavItem({ href, children, className }: NavItemProps) {
    return (
        <li className='w-full'>
            <SheetClose asChild>
                <Link href={href}>
                    <button
                        type='button'
                        className={cn(
                            'w-full rounded-md bg-background px-4 py-4 text-left font-medium text-sm hover:bg-primary hover:text-white md:text-base',
                            className,
                        )}
                    >
                        {children}
                    </button>
                </Link>
            </SheetClose>
        </li>
    );
}

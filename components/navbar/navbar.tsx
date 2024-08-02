import { Button } from '@/components/ui/button';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { validateRequest } from '@/lib/auth';
import { GOOGLE_URL } from '@/lib/auth/constant';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { NAV_DATA } from './data';
import { MobileNavBar } from './mobile-navbar/mobile-navbar';

export async function NavBar() {
    const { user } = await validateRequest();

    const navigationItems = NAV_DATA;
    const NavigationMenus = () => (
        <NavigationMenu className='relative z-10 hidden w-full flex-1 items-center justify-center lg:flex'>
            <NavigationMenuList>
                {navigationItems.map((item, index) => (
                    <NavigationMenuItem key={index} className='p-5 hover:bg-gray-100'>
                        {item.href ? (
                            <Link prefetch={true} href={item.href} legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    {item.label}
                                </NavigationMenuLink>
                            </Link>
                        ) : (
                            <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                        )}
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
    return (
        <header className=' sticky top-0 z-40 border-b bg-background py-3 sm:flex sm:justify-between'>
            <div className='relative flex h-14 w-full items-center justify-between px-4 sm:px-6 lg:px-8'>
                <div className=' flex h-14 w-full items-center text-center text-primary lg:px-20'>
                    <b>GovTech</b>
                </div>
                <nav className='mx-6 flex w-full items-center space-x-4 md:block lg:space-x-6'>
                    <NavigationMenus />
                </nav>
                <div className='flex items-center text-white lg:px-20 '>
                    {user ? (
                        <Button asChild className='bg-primary hover:bg-sky-500'>
                            <Link href='/logout'>Log out</Link>
                        </Button>
                    ) : (
                        <Button asChild className='bg-primary hover:bg-sky-500'>
                            <Link href={GOOGLE_URL}>Login</Link>
                        </Button>
                    )}
                    <Sheet>
                        <SheetTrigger>
                            <Menu
                                className='ml-4 h-8 w-8 text-blue-950 lg:hidden'
                                aria-label='Open mobile menu'
                            />
                        </SheetTrigger>
                        <SheetContent side='right' className='w-[300px] sm:w-[400px]'>
                            <nav className='mt-3 flex flex-col gap-4'>
                                <MobileNavBar />
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}

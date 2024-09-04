import { Menu } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LocaleSwitcher from '../lang/locale-switcher';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { MobileNavBar } from './mobile-navbar/mobile-navbar';

export async function NavBar() {
    const t = useTranslations('Navbar');
    const NavigationMenus = () => (
        <nav className='hidden flex-row items-center space-x-10 lg:flex'>
            <Link href='/'>
                <span className='rounded-md px-3 py-2 font-medium text-gray text-sm transition duration-500 ease-in-out hover:bg-primary hover:text-white'>
                    {t('home')}
                </span>
            </Link>
            <Link href='/agenda'>
                <span className='rounded-md px-3 py-2 font-medium text-gray text-sm transition duration-500 ease-in-out hover:bg-primary hover:text-white'>
                    {t('agenda')}
                </span>
            </Link>
            <Link href='/floor-plan'>
                <span className='rounded-md px-3 py-2 font-medium text-gray text-sm transition duration-500 ease-in-out hover:bg-primary hover:text-white'>
                    {t('floorPlan')}
                </span>
            </Link>
            <Link href='/speakers'>
                <span className='rounded-md px-3 py-2 font-medium text-gray text-sm transition duration-500 ease-in-out hover:bg-primary hover:text-white'>
                    {t('speakers')}
                </span>
            </Link>
            <Link href='/exhibition'>
                <span className='rounded-md px-3 py-2 font-medium text-gray text-sm transition duration-500 ease-in-out hover:bg-primary hover:text-white'>
                    Exhibition
                </span>
            </Link>
        </nav>
    );

    return (
        <header className='sticky top-0 z-40 border-b bg-background py-4'>
            <div className='container mx-auto px-4'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <Link href='/'>
                            <b className='text-primary'>GovTech</b>
                        </Link>
                    </div>
                    <div className=' items-center justify-center'>
                        <NavigationMenus />
                    </div>
                    <div className='flex items-center'>
                        <LocaleSwitcher />
                        <Sheet>
                            <SheetTrigger>
                                <Menu
                                    className='ml-4 h-8 w-8 text-blue-950 lg:hidden'
                                    aria-label='Open mobile menu'
                                />
                            </SheetTrigger>
                            <SheetContent side='right' className='w-[300px] md:w-[400px]'>
                                <nav className='mt-3 flex flex-col gap-4'>
                                    <MobileNavBar />
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}

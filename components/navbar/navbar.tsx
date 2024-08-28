import { Menu } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LocaleSwitcher from '../lang/locale-switcher';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { MobileNavBar } from './mobile-navbar/mobile-navbar';

export async function NavBar() {
    const t = useTranslations('Navbar');
    const NavigationMenus = () => (
        <div className='mx-6 flex hidden w-full items-center justify-center space-x-20 lg:flex '>
            <Link href='/'>
                <p className='text-gray-900 hover:text-primary'>{t('home')}</p>
            </Link>
            <Link href='/agenda'>
                <p className='text-gray-900 hover:text-primary'>{t('agenda')}</p>
            </Link>
            <Link href='/floor-plan'>
                <p className='text-gray-900 hover:text-primary'>{t('floorPlan')}</p>
            </Link>
            <Link href='/speakers'>
                <p className='text-gray-900 hover:text-primary'>{t('speakers')}</p>
            </Link>
        </div>
    );
    return (
        <header className=' sticky top-0 z-40 border-b bg-background py-3 sm:flex sm:justify-between'>
            <div className='relative flex h-14 w-full items-center justify-between px-4 lg:px-8'>
                <div className=' flex h-14 w-full items-center text-center text-primary md:px-20'>
                    <Link href='/'>
                        <b>GovTech</b>
                    </Link>
                    <div className='mx-6 flex w-full items-center space-x-4'>
                        <NavigationMenus />
                    </div>
                </div>

                <div className='flex items-center text-white'>
                    <LocaleSwitcher />
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

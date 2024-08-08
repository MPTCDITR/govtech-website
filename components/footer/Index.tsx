import Link from 'next/link';
import Text from '../ui/text';
import { Contact } from './Contact';
import { QuickLink } from './QuickLink';

export default function Footer() {
    return (
        <footer className=' bg-primary px-10 pt-5 pb-5 text-white'>
            <div className='flex flex-col gap-8 md:justify-between lg:flex-row lg:flex-wrap lg:justify-around lg:gap-5'>
                <div className='flex flex-col gap-4'>
                    <Link href='/'>
                        <Text variant='subheading'>GovTech</Text>
                    </Link>
                </div>
                <div>
                    <Contact />
                </div>
                <div>
                    <QuickLink />
                </div>
            </div>
        </footer>
    );
}

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Text from '../ui/text';
import { Contact } from './Contact';
import { QuickLink } from './QuickLink';

export default function Footer() {
    const t = useTranslations('Footer');
    return (
        <footer className=' bg-primary px-8 pt-5 pb-5 text-white'>
            <div className='grid list-none grid-cols-1 flex-col gap-8 p-4 md:grid-cols-3 lg:grid-cols-3'>
                <div className='flex flex-col gap-4'>
                    <Link href='/'>
                        <Text variant='subheading'>GovTech</Text>
                    </Link>
                </div>
                <div>
                    <QuickLink />
                </div>
                <div>
                    <Contact />
                </div>
            </div>
            <div className='border ' />
            <Text variant='body' className='mt-5 text-center text-slate-300'>
                © 2024 GovTech - {t('department')} - {t('allRights')}.
            </Text>
        </footer>
    );
}

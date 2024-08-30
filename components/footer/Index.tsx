import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Text from '../ui/text';
import { Contact } from './Contact';
import { QuickLink } from './QuickLink';

export default function Footer() {
    const t = useTranslations('Footer');
    return (
        <footer className='bg-primary py-8 text-white'>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
                    <div className='space-y-4'>
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
                <hr className='my-8 border border-white-600' />
                <Text variant='body' className='text-center text-slate-300'>
                    © 2024 GovTech - {t('department')} - {t('allRights')}
                </Text>
            </div>
        </footer>
    );
}

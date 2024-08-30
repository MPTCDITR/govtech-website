import { useTranslations } from 'next-intl';
import Link from 'next/link';
import TextElement from '../TextElement';

export default function AboutGovtech() {
    const t = useTranslations('Home');
    return (
        <div className='container flex flex-col items-center gap-8 p-4 lg:flex-row lg:items-start lg:justify-around'>
            <div className='grid w-full gap-6'>
                <TextElement variant='subheading' className='text-primary xl:mt-10'>
                    {t('aboutGovTech')}
                </TextElement>
                <TextElement variant='body'>{t('description')}</TextElement>
                <Link href='/agenda'>
                    <TextElement variant='body' className='text-primary underline'>
                        {t('conferenceDate')}
                    </TextElement>
                </Link>
                <TextElement variant='body'>{t('govTechExpected')}</TextElement>
            </div>
            <div className='w-full lg:max-w-2xl xl:mt-auto'>
                <img className='w-full' src='HRTechx 1.png' alt='' />
            </div>
        </div>
    );
}

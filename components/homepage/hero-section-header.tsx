import { useTranslations } from 'next-intl';
import TextElement from '../TextElement';

export const HeroSectionHeader = () => {
    const t = useTranslations('Home');
    return (
        <div className="flex h-96 flex-col items-center justify-center bg-[length:1750px_600px] bg-[url('/darkblue.png')] bg-center">
            <TextElement
                variant='heading'
                id='what-we-do-heading'
                className='mb-4 text-center text-white'
            >
                {t('govTechConference')}
            </TextElement>
            <TextElement
                variant='body'
                id='what-we-do-heading'
                className='mb-4 text-center text-white'
            >
                {t('empowering')}
            </TextElement>
        </div>
    );
};
export default HeroSectionHeader;

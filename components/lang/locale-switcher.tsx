import { useLocale } from 'next-intl';
import Image from 'next/image';
import enIcon from '../../public/lang-icon/en.svg';
import kmIcon from '../../public/lang-icon/km.svg';
// import { locales } from '../../config';
import LocaleSwitcherSelect from './lang-switcher';

export default function LocaleSwitcher() {
    // const t = useTranslations('LocaleSwitcher');
    const locale = useLocale();
    const toggleLocale = locale === 'km' ? 'en' : 'km';

    const flagSrc = locale === 'km' ? enIcon : kmIcon;

    return (
        <LocaleSwitcherSelect toggleLocale={toggleLocale}>
            <Image src={flagSrc} alt={`switch to ${toggleLocale}`} width={100} height={100} />
        </LocaleSwitcherSelect>
    );
}

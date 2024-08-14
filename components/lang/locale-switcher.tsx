import { useLocale } from 'next-intl';
import Image from 'next/image';
import LocaleSwitcherSelect from './lang-switcher';

export default function LocaleSwitcher() {
    const locale = useLocale();
    const toggleLocale = locale === 'en' ? 'km' : 'en';
    const flagSrc = `lang-icon/${locale}.svg`;

    return (
        <LocaleSwitcherSelect toggleLocale={toggleLocale}>
            <Image src={flagSrc} alt={`Switch to ${toggleLocale}`} width={32} height={32} />
        </LocaleSwitcherSelect>
    );
}

import Link from "next/link";
import type React from "react";

import { Mail, MapPin, Phone } from "lucide-react";

interface ContactListItemProps {
  Icon: React.ElementType;
  contactInfo: string;
  href: string;
  textColor?: string;
}

const ContactListItem: React.FC<ContactListItemProps> = ({
  Icon,
  contactInfo,
  href,
  textColor = "text-white",
}) => (
  <li className="flex items-center gap-2">
    <Icon />
    <Link prefetch={true} href={href} className={`${textColor} hover:text-blue-500`}>
      {contactInfo}
    </Link>
  </li>
);

interface ContactUsListProps {
  textColor?: string;
}

export const ContactUsList: React.FC<ContactUsListProps> = ({ textColor }) => {
  return (
    <>
      <ContactListItem
        Icon={Phone}
        contactInfo="+885 9999 9999"
        href="tel:+885 9999 9999"
        textColor={textColor}
      />
      <ContactListItem
        Icon={Mail}
        contactInfo="info@govtech.com.kh"
        href="mailto:name@example.com"
        textColor={textColor}
      />
      <ContactListItem
        Icon={MapPin}
        contactInfo="Building 13, Monivong Blvd, Kangkat Srah Chak, Khan Daun Penh Phnom Penh, Cambodia"
        href="https://maps.app.goo.gl/Fxxc1tBzabx7rYYS7"
        textColor={textColor}
      />
    </>
  );
};

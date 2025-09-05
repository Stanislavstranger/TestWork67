import { Mail, MapPin, Phone } from 'lucide-react';

import style from './ContactInfo.module.scss';

const icons = {
  phone: <Phone size={14} />,
  email: <Mail size={14} />,
  address: <MapPin size={14} />,
};

export type ContactItem = {
  type: keyof typeof icons;
  text: string;
  href?: string;
};

export function ContactInfo({ items }: { items: ContactItem[] }) {
  return (
    <div className={style.contacts}>
      {items.map((item) => {
        const icon = icons[item.type];
        const linkContent = (
          <span className={style.contactItem}>
            {icon}
            <span>{item.text}</span>
          </span>
        );

        if (item.href) {
          return (
            <a key={item.text} href={item.href} className={style.link}>
              {linkContent}
            </a>
          );
        }

        return <div key={item.text}>{linkContent}</div>;
      })}
    </div>
  );
}

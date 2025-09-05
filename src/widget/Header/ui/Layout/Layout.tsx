import { ContactInfo, type ContactItem } from '@/shared/ui';

import style from './Layout.module.scss';

const contactItems: ContactItem[] = [
  {
    type: 'phone',
    text: '+021-95-51-84',
    href: 'tel:+021-95-51-84',
  },
  {
    type: 'email',
    text: 'shop@abelohost.com',
    href: 'mailto:shop@abelohost.com',
  },
  {
    type: 'address',
    text: '1734 Stonecoal Road',
    href: 'https://www.google.com/maps/search/?api=1&query=1734%20Stonecoal%20Road',
  },
];

export function Layout({
  logo,
  nav,
  profile,
}: {
  logo?: React.ReactNode;
  nav?: React.ReactNode;
  profile?: React.ReactNode;
}) {
  return (
    <header className={style.header}>
      <div className={style.topBar}>
        <div className={style.container}>
          <ContactInfo items={contactItems} />
          <div className={style.topBarRight}>{profile}</div>
        </div>
      </div>

      <div className={style.mainBar}>
        <div className={style.container}>{logo}</div>
      </div>

      <div className={style.navBar}>
        <div className={style.container}>{nav}</div>
      </div>
    </header>
  );
}

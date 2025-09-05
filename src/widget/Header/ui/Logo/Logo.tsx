import Link from 'next/link';

import { ROUTES } from '@/shared/config/routes';

import style from './Logo.module.scss';

export function Logo() {
  return (
    <Link href={ROUTES.home} className={style.logo}>
      <span className={style.blue}>AbeloHost</span> Shop<span className={style.dot}>.</span>
    </Link>
  );
}

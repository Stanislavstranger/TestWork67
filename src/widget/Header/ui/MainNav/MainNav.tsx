'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ROUTES } from '@/shared/config/routes';

import style from './MainNav.module.scss';

const navLinks = [
  { href: ROUTES.home, label: 'Home' },
  { href: '/hot-deals', label: 'Hot Deals' },
  { href: '/categories', label: 'Categories' },
  { href: '/laptops', label: 'Laptops' },
  { href: '/smartphones', label: 'Smartphones' },
  { href: '/cameras', label: 'Cameras' },
  { href: '/accessories', label: 'Accessories' },
];

export function MainNav({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const pathname = usePathname();

  return (
    <nav>
      <ul className={clsx(style.list, { [style.open]: isOpen })}>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.label}>
              <Link
                href={link.href}
                className={clsx(style.link, isActive && style.active)}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

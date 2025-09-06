'use client';

import clsx from 'clsx';
import { useState } from 'react';

import { useBodyScrollLock } from '@/shared/hooks/useBodyScrollLock';

import style from './MobileNavToggle.module.scss';
import { MainNav } from '../MainNav/MainNav';

export function MobileNavToggle() {
  const [isOpen, setIsOpen] = useState(false);

  useBodyScrollLock(isOpen);

  return (
    <>
      <button
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        className={clsx(style.hamburger, { [style.open]: isOpen })}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={style.hamburgerLine}></span>
        <span className={style.hamburgerLine}></span>
        <span className={style.hamburgerLine}></span>
      </button>
      <div className={clsx(style.navWrapper, { [style.open]: isOpen })}>
        <button
          aria-label="Close navigation menu"
          className={style.closeButton}
          onClick={() => setIsOpen(false)}
        >
          &times;
        </button>
        <MainNav isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
}

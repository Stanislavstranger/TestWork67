'use client';

import { useSessionStore } from '@/entities/session/model/session.store';

import style from './Footer.module.scss';

export function Footer() {
  const { user } = useSessionStore();
  const year = new Date().getFullYear();
  return (
    <footer className={style.footer}>
      <div className="container">{user ? `${year} • Logged as ${user.email}` : `${year}`}</div>
    </footer>
  );
}

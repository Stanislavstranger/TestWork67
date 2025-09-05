'use client';

import { User } from 'lucide-react';
import Link from 'next/link';

import { useSessionStore } from '@/entities/session/model/session.store';
import { ROUTES } from '@/shared/config/routes';

import style from './Profile.module.scss';

export function Profile() {
  const { user, logout } = useSessionStore();

  if (!user) {
    return (
      <Link href={ROUTES.singIn} className={style.profile}>
        <User size={14} />
        Login
      </Link>
    );
  }

  return (
    <div className={style.profile}>
      <span className={style.name}>
        {user.firstName} {user.lastName}
      </span>
      <button onClick={logout} className={style.logout}>
        Logout
      </button>
    </div>
  );
}

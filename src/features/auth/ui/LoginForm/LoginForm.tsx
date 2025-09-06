'use client';

import { isAxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { useRef } from 'react';

import { useSessionStore } from '@/entities/session/model/session.store';
import { login } from '@/shared/api';
import { ROUTES } from '@/shared/config/routes';
import { validateCreds } from '@/shared/lib/validators';
import Button from '@/shared/ui/Button/Button';
import Input from '@/shared/ui/Input/Input';

import style from './LoginForm.module.scss';

export default function LoginForm() {
  const router = useRouter();
  const { login: put } = useSessionStore();

  const [username, setU] = useState('');
  const [password, setP] = useState('');
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [errors, setErrors] = useState<{ username?: string; password?: string }>({});
  const [busy, setBusy] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const v = validateCreds(username, password);
    setErrors(v);
    setApiError(null);
    if (v.username || v.password) {
      if (v.username && usernameRef.current) {
        usernameRef.current.focus();
      } else if (v.password && passwordRef.current) {
        passwordRef.current.focus();
      }
      return;
    }

    try {
      setBusy(true);
      const user = await login({ username, password: password || '' });
      put(user);
      router.replace(ROUTES.home);
    } catch (err: unknown) {
      if (isAxiosError(err) && err.response?.data?.message) {
        setApiError(err.response.data.message);
      } else {
        setApiError('Login failed. Check your credentials.');
      }
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className={style.formWrapper}>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <label>
          <span className="srOnly">Username</span>
          <Input
            ref={usernameRef}
            placeholder="Username"
            value={username}
            onChange={(e) => setU(e.target.value)}
            error={errors.username}
            autoComplete="username"
          />
        </label>
        <div className={style.spacer} />
        <label>
          <span className="srOnly">Password</span>
          <Input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setP(e.target.value)}
            error={errors.password}
            autoComplete="current-password"
          />
        </label>
        <div className={style.spacer} />
        <Button type="submit" disabled={busy}>
          {busy ? 'Loading…' : 'Login'}
        </Button>
        {apiError && (
          <div className={style.apiError} role="alert">
            {apiError}
          </div>
        )}
      </form>
    </div>
  );
}

import { InputHTMLAttributes } from 'react';

import s from './Input.module.scss';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

export default function Input({ error, ...rest }: Props) {
  return (
    <div>
      <input className={s.input} {...rest} />
      {error ? <div className={s.error}>{error}</div> : null}
    </div>
  );
}

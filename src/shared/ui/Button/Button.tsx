import { ButtonHTMLAttributes } from 'react';

import s from './Button.module.scss';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export default function Button({ variant = 'primary', ...rest }: Props) {
  return (
    <button className={`${s.button} ${variant === 'secondary' ? s.secondary : ''}`} {...rest} />
  );
}

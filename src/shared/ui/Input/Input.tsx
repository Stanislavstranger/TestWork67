import clsx from 'clsx';
import { InputHTMLAttributes, forwardRef } from 'react';

import style from './Input.module.scss';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

const Input = forwardRef<HTMLInputElement, Props>(({ error, className, ...rest }, ref) => {
  return (
    <div>
      <input
        className={clsx(style.input, className, { [style.error]: error })}
        ref={ref}
        {...rest}
      />
      {error ? <div className={style.error}>{error}</div> : null}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;

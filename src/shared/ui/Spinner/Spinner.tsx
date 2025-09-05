'use client';
import styles from './Spinner.module.scss';

export default function Spinner() {
  return (
    <div className={styles.spinner} role="status" aria-live="polite" aria-busy="true">
      <div className={styles.ring} />
    </div>
  );
}

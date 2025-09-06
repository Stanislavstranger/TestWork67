import { Footer, Header } from '@/widget';

import style from './layout.module.scss';

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className={style.wrapper}>
        <Header variant="auth" />
        {children}
        <Footer />
      </main>
    </>
  );
}

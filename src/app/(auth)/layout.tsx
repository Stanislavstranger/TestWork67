import { Footer, Header } from '@/widget';

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header variant="auth" />
      {children}
      <Footer />
    </>
  );
}

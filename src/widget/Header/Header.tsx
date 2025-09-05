import { Layout, Logo, MainNav, Profile } from './ui';

export function Header({ variant }: { variant: 'auth' | 'public' }) {
  const isProfile = variant !== 'auth';
  return <Layout logo={<Logo />} nav={<MainNav />} profile={isProfile && <Profile />} />;
}

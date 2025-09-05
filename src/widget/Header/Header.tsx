import { Layout, Logo, MobileNavToggle, Profile } from './ui';

export function Header({ variant }: { variant: 'auth' | 'public' }) {
  const isProfile = variant !== 'auth';
  return <Layout logo={<Logo />} nav={<MobileNavToggle />} profile={isProfile && <Profile />} />;
}

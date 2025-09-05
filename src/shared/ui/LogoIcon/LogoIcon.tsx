import Image from 'next/image';

export function LogoIcon() {
  return (
    <Image src="/logo.svg" alt="logo" width={30} height={30} style={{ height: 'auto' }} priority />
  );
}

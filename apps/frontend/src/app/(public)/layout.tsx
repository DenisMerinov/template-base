import { ReactNode } from 'react';
import { Header } from '@/widgets/Header';

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
    </>
  );
}

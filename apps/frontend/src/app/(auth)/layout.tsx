import { ReactNode } from 'react';
import { Header } from '@/widgets/Header';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <div className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full">{children}</div>
      </div>
    </>
  );
}

'use client';

import { ReactNode } from 'react';
import { DashboardLayout } from '@/widgets/DashboardLayout';
import { useAuth } from '@/entities/auth';
import { redirect } from 'next/navigation';

export default function PrivateLayout({ children }: { children: ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Загрузка...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    redirect('/login');
  }

  return <DashboardLayout>{children}</DashboardLayout>;
}

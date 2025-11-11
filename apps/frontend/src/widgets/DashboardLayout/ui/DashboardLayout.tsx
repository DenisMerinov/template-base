'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAtom } from 'jotai';
import { useAuth, authApi } from '@/entities/auth';
import { navSidebarCollapsedAtom } from '@/shared/store';

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useAuth();
  const [isNavCollapsed, setIsNavCollapsed] = useAtom(navSidebarCollapsedAtom);

  const handleLogout = async () => {
    await authApi.logout();
    router.push('/login');
  };

  const navigation = [
    { name: 'Главная', href: '/dashboard', icon: '🏠' },
    { name: 'Каталог таблиц', href: '/dashboard/tables', icon: '📊' },
    { name: 'Мои заказы', href: '/dashboard/orders', icon: '📦' },
    { name: 'Корзина', href: '/dashboard/checkout', icon: '🛒' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link
                href="/dashboard"
                className="text-xl font-bold text-blue-600"
              >
                SOLBER Dashboard
              </Link>
              <nav className="hidden md:flex space-x-4">
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                  На главную сайта
                </Link>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-sm">
                <span className="text-gray-600">Привет, </span>
                <span className="font-medium">{user?.name}</span>
              </div>
              <button
                onClick={handleLogout}
                className="text-sm text-red-600 hover:text-red-700"
              >
                Выйти
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar + Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar с кнопкой сворачивания */}
          <aside
            className={`flex-shrink-0 transition-all duration-300 relative ${
              isNavCollapsed ? 'w-16' : 'w-64'
            }`}
          >
            {/* Кнопка сворачивания */}
            <button
              onClick={() => setIsNavCollapsed(!isNavCollapsed)}
              className="absolute -right-3 top-0 z-10 bg-white border border-gray-300 rounded-full p-1.5 shadow-md hover:bg-gray-50 transition-colors"
              title={
                isNavCollapsed ? 'Развернуть меню' : 'Свернуть меню'
              }
            >
              <svg
                className={`w-4 h-4 text-gray-600 transition-transform duration-300 ${
                  isNavCollapsed ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <nav className="space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    title={isNavCollapsed ? item.name : undefined}
                    className={`flex items-center ${
                      isNavCollapsed ? 'justify-center' : 'space-x-3'
                    } px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-600 font-medium'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    {!isNavCollapsed && <span>{item.name}</span>}
                  </Link>
                );
              })}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">{children}</main>
        </div>
      </div>
    </div>
  );
}

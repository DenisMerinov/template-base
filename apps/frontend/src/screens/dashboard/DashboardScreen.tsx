'use client';

import { useAuth } from '@/entities/auth';
import Link from 'next/link';

export function DashboardScreen() {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Добро пожаловать, {user?.name}!</h1>
        <p className="text-gray-600">Личный кабинет для управления покупками таблиц</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard
          title="Каталог таблиц"
          description="Просмотр и выбор доступных таблиц с данными"
          href="/dashboard/tables"
          icon="📊"
        />
        
        <DashboardCard
          title="Мои заказы"
          description="История покупок и загрузка таблиц"
          href="/dashboard/orders"
          icon="📦"
        />
        
        <DashboardCard
          title="Корзина"
          description="Оформление и оплата выбранных таблиц"
          href="/dashboard/checkout"
          icon="🛒"
        />
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2">Как это работает?</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Выберите нужные таблицы в каталоге, используя фильтры</li>
          <li>Добавьте таблицы в корзину</li>
          <li>Оформите заказ и произведите оплату</li>
          <li>Скачайте купленные таблицы в разделе "Мои заказы"</li>
        </ol>
      </div>
    </div>
  );
}

interface DashboardCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
}

function DashboardCard({ title, description, href, icon }: DashboardCardProps) {
  return (
    <Link href={href}>
      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
        <div className="text-4xl mb-3">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </Link>
  );
}


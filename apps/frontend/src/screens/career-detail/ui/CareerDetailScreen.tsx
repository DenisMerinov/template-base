import {
  MOCK_CAREERS,
  CAREER_STATUS_LABELS,
  CareerStatus,
} from '@/entities/career';
import { Container } from '@/shared/ui';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface CareerDetailScreenProps {
  slug: string;
}

export const CareerDetailScreen = ({ slug }: CareerDetailScreenProps) => {
  const career = MOCK_CAREERS.find((c) => c.slug === slug || c.id === slug);

  if (!career) {
    notFound();
  }

  const statusColors: Record<CareerStatus, string> = {
    active: 'bg-green-100 text-green-800',
    closed: 'bg-red-100 text-red-800',
  };

  return (
    <div className=" bg-gray-50 py-12">
      <Container>
        <Link
          href="/careers"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          ← Вернуться к списку
        </Link>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-start justify-between mb-6">
            <h1 className="text-4xl font-bold text-gray-900">{career.name}</h1>
            <span
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                statusColors[career.status]
              }`}
            >
              {CAREER_STATUS_LABELS[career.status]}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-1">
                  Область
                </h3>
                <p className="text-lg text-gray-900">{career.region}</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-1">
                  Район
                </h3>
                <p className="text-lg text-gray-900">{career.district}</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-1">
                  Адрес
                </h3>
                <p className="text-lg text-gray-900">{career.address}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-1">
                  Добываемые материалы
                </h3>
                <p className="text-lg text-gray-900">{career.materials}</p>
              </div>
            </div>
          </div>

          <div className="border-t pt-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Описание
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {career.description}
            </p>
          </div>

          {/* Блок с контактами - расширенная "приманка" */}
          <div className="border-t pt-8">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white relative overflow-hidden">
              {/* Декоративные элементы */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">
                      📞 Контактная информация
                    </h2>
                    <p className="text-blue-100 text-lg">
                      Получите прямой доступ к контактам этого карьера
                    </p>
                  </div>
                  <div className="bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold">
                    PREMIUM
                  </div>
                </div>

                {/* Размытые контакты */}
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 mb-6 relative">
                  <div className="filter blur-md select-none pointer-events-none">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-blue-200 mb-1">
                          👤 Контактное лицо
                        </div>
                        <div className="text-xl font-semibold">
                          Иванов Иван Иванович
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-blue-200 mb-1">
                          📱 Телефон
                        </div>
                        <div className="text-xl font-semibold">
                          +7 (900) 000-00-00
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <div className="text-sm text-blue-200 mb-1">
                          ✉️ Email
                        </div>
                        <div className="text-xl font-semibold">
                          info@example.ru
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Иконка замка по центру */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl opacity-30">🔒</div>
                  </div>
                </div>

                {/* Что получит пользователь */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white bg-opacity-10 rounded-lg p-4">
                    <div className="text-3xl mb-2">📊</div>
                    <div className="font-semibold mb-1">1500+ карьеров</div>
                    <div className="text-sm text-blue-100">
                      Полная база данных
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-lg p-4">
                    <div className="text-3xl mb-2">📞</div>
                    <div className="font-semibold mb-1">Все контакты</div>
                    <div className="text-sm text-blue-100">
                      Телефоны и email
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-lg p-4">
                    <div className="text-3xl mb-2">📥</div>
                    <div className="font-semibold mb-1">Скачать Excel</div>
                    <div className="text-sm text-blue-100">Удобный формат</div>
                  </div>
                </div>

                {/* Кнопки действия */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/login"
                    className="flex-1 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg text-center hover:bg-blue-50 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105"
                  >
                    🔓 Получить доступ сейчас
                  </Link>
                  <Link
                    href="/dashboard/tables"
                    className="flex-1 bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg text-center hover:bg-blue-400 transition-all duration-200 border-2 border-white border-opacity-20"
                  >
                    📊 Посмотреть все таблицы
                  </Link>
                </div>

                <p className="text-sm text-blue-100 text-center mt-4">
                  Уже есть аккаунт?{' '}
                  <Link href="/login" className="underline font-semibold">
                    Войти
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

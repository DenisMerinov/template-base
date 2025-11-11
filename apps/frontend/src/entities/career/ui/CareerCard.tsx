import Link from 'next/link';
import { Career, CAREER_STATUS_LABELS, CareerStatus } from '../model/types';

interface CareerCardProps {
  career: Career;
}

export const CareerCard = ({ career }: CareerCardProps) => {
  const statusColors: Record<CareerStatus, string> = {
    active: 'bg-green-100 text-green-800',
    closed: 'bg-red-100 text-red-800',
  };

  return (
    <div className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200">
      <Link href={`/careers/${career.slug || career.id}`}>
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-900 flex-1 hover:text-blue-600 transition-colors">
            {career.name}
          </h3>
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              statusColors[career.status]
            }`}
          >
            {CAREER_STATUS_LABELS[career.status]}
          </span>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-start">
            <span className="text-sm text-gray-500 min-w-[100px]">
              Область:
            </span>
            <span className="text-sm text-gray-900">{career.region}</span>
          </div>
          <div className="flex items-start">
            <span className="text-sm text-gray-500 min-w-[100px]">Район:</span>
            <span className="text-sm text-gray-900">{career.district}</span>
          </div>
          <div className="flex items-start">
            <span className="text-sm text-gray-500 min-w-[100px]">Адрес:</span>
            <span className="text-sm text-gray-900">{career.address}</span>
          </div>
          <div className="flex items-start">
            <span className="text-sm text-gray-500 min-w-[100px]">
              Добывают:
            </span>
            <span className="text-sm text-gray-900">{career.materials}</span>
          </div>
        </div>

        <p className="text-sm text-gray-600 line-clamp-2">
          {career.description}
        </p>
      </Link>

      {/* Блок с контактами - "приманка" */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 relative overflow-hidden">
          {/* Размытые контакты */}
          <div className="filter blur-sm select-none pointer-events-none">
            <div className="text-xs text-gray-600 mb-1">Контактное лицо:</div>
            <div className="text-sm font-medium text-gray-900 mb-2">
              Иванов Иван Иванович
            </div>
            <div className="text-xs text-gray-600 mb-1">Телефон:</div>
            <div className="text-sm font-medium text-gray-900 mb-2">
              +7 (900) 000-00-00'
            </div>
            <div className="text-xs text-gray-600 mb-1">Email:</div>
            <div className="text-sm font-medium text-gray-900">
              info@example.ru
            </div>
          </div>

          {/* Кнопка по центру */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Link
              href="/login"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              🔓 Получить контакты
            </Link>
          </div>
        </div>
        <p className="text-xs text-gray-500 text-center mt-2">
          Войдите или зарегистрируйтесь для доступа к полной базе контактов
        </p>
      </div>
    </div>
  );
};

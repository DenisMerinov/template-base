import Link from 'next/link';
import { CareerStatus, CAREER_STATUS_LABELS } from '@/entities/career';

interface StatusFilterProps {
  currentStatus?: CareerStatus;
  currentParams: URLSearchParams;
}

export const StatusFilter = ({
  currentStatus,
  currentParams,
}: StatusFilterProps) => {
  const createStatusLink = (status?: CareerStatus): string => {
    const params = new URLSearchParams(currentParams);

    if (status) {
      params.set('status', status);
    } else {
      params.delete('status');
    }

    return params.toString();
  };

  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-gray-900 mb-4">Статус</h3>
      <div className="space-y-2">
        {/* Все статусы */}
        <Link
          href={`/careers?${createStatusLink()}`}
          scroll={false}
          className={`block px-3 py-2 rounded-md text-sm transition-colors ${
            !currentStatus
              ? 'bg-blue-50 text-blue-900 font-medium'
              : 'hover:bg-gray-50 text-gray-700'
          }`}
        >
          Все карьеры
        </Link>

        {/* Действующий */}
        <Link
          href={`/careers?${createStatusLink(CareerStatus.ACTIVE)}`}
          scroll={false}
          className={`block px-3 py-2 rounded-md text-sm transition-colors ${
            currentStatus === CareerStatus.ACTIVE
              ? 'bg-green-50 text-green-900 font-medium'
              : 'hover:bg-gray-50 text-gray-700'
          }`}
        >
          {CAREER_STATUS_LABELS[CareerStatus.ACTIVE]}
        </Link>

        {/* Закрыт */}
        <Link
          href={`/careers?${createStatusLink(CareerStatus.CLOSED)}`}
          scroll={false}
          className={`block px-3 py-2 rounded-md text-sm transition-colors ${
            currentStatus === CareerStatus.CLOSED
              ? 'bg-red-50 text-red-900 font-medium'
              : 'hover:bg-gray-50 text-gray-700'
          }`}
        >
          {CAREER_STATUS_LABELS[CareerStatus.CLOSED]}
        </Link>
      </div>
    </div>
  );
};

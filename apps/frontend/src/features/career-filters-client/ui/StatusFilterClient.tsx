'use client';

import { CareerStatus, CAREER_STATUS_LABELS } from '@/entities/career';

interface StatusFilterClientProps {
  currentStatus?: CareerStatus;
  onStatusChange: (status?: CareerStatus) => void;
}

export const StatusFilterClient = ({
  currentStatus,
  onStatusChange,
}: StatusFilterClientProps) => {
  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-gray-900 mb-4">Статус</h3>
      <div className="space-y-2">
        {/* Все статусы */}
        <button
          onClick={() => onStatusChange(undefined)}
          className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
            !currentStatus
              ? 'bg-blue-50 text-blue-900 font-medium'
              : 'hover:bg-gray-50 text-gray-700'
          }`}
        >
          Все статусы
        </button>

        {/* Список статусов */}
        {Object.entries(CAREER_STATUS_LABELS).map(([key, label]) => {
          const status = key as CareerStatus;
          return (
            <button
              key={status}
              onClick={() => onStatusChange(status)}
              className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                currentStatus === status
                  ? 'bg-blue-50 text-blue-900 font-medium'
                  : 'hover:bg-gray-50 text-gray-700'
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
};


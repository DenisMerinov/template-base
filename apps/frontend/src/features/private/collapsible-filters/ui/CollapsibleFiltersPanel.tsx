'use client';

import { useAtom } from 'jotai';
import { sidebarCollapsedAtom } from '@/shared/store';

interface CollapsibleFiltersPanelProps {
  children: React.ReactNode;
}

export function CollapsibleFiltersPanel({
  children,
}: CollapsibleFiltersPanelProps) {
  const [isCollapsed, setIsCollapsed] = useAtom(sidebarCollapsedAtom);

  return (
    <div
      className={`relative transition-all duration-300 ${
        isCollapsed ? 'w-16' : 'w-full'
      }`}
    >
      {/* Кнопка сворачивания */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-4 z-10 bg-white border border-gray-300 rounded-full p-1.5 shadow-md hover:bg-gray-50 transition-colors"
        title={isCollapsed ? 'Развернуть фильтры' : 'Свернуть фильтры'}
      >
        <svg
          className={`w-4 h-4 text-gray-600 transition-transform duration-300 ${
            isCollapsed ? 'rotate-180' : ''
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

      {/* Контент */}
      {isCollapsed ? (
        // Свернутое состояние - только иконки
        <div className="bg-white border border-gray-200 rounded-lg p-3 space-y-4">
          {/* Иконка фильтров */}
          <button
            onClick={() => setIsCollapsed(false)}
            className="w-full flex items-center justify-center p-3 hover:bg-gray-50 rounded-lg transition-colors"
            title="Развернуть фильтры"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
          </button>

          {/* Иконка поиска */}
          <div className="w-full flex items-center justify-center p-3 text-gray-400">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Иконка настроек */}
          <div className="w-full flex items-center justify-center p-3 text-gray-400">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </div>
        </div>
      ) : (
        // Развернутое состояние - полное содержимое
        <div className="overflow-hidden">{children}</div>
      )}
    </div>
  );
}


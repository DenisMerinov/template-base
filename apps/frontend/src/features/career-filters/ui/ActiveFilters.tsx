import Link from 'next/link';
import {
  CareerStatus,
  MaterialType,
  MATERIAL_LABELS,
} from '@/entities/career';

interface ActiveFiltersProps {
  currentStatus?: CareerStatus;
  currentMaterials: MaterialType[];
  currentRegion?: string;
  currentParams: URLSearchParams;
}

export const ActiveFilters = ({
  currentStatus,
  currentMaterials,
  currentRegion,
  currentParams,
}: ActiveFiltersProps) => {
  const hasFilters =
    currentStatus || currentMaterials.length > 0 || currentRegion;

  if (!hasFilters) {
    return null;
  }

  const removeFilter = (
    type: 'status' | 'region' | 'material',
    value?: string
  ): string => {
    const params = new URLSearchParams(currentParams);

    if (type === 'status') {
      params.delete('status');
    } else if (type === 'region') {
      params.delete('region');
    } else if (type === 'material' && value) {
      const materials = params.getAll('materials');
      params.delete('materials');
      materials
        .filter((m) => m !== value)
        .forEach((m) => params.append('materials', m));
    }

    return params.toString();
  };

  return (
    <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-900">
          Активные фильтры:
        </h3>
        <Link
          href="/careers"
          scroll={false}
          className="text-xs text-blue-600 hover:text-blue-800 font-medium"
        >
          Сбросить все
        </Link>
      </div>

      <div className="flex flex-wrap gap-2">
        {/* Статус */}
        {/* {currentStatus && (
          <Link
            href={`/careers?${removeFilter('status')}`}
            scroll={false}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-md text-sm text-gray-700 hover:bg-gray-50 border border-gray-200"
          >
            <span className="font-medium">Статус:</span>
            <span>{CAREER_STATUS_LABELS[currentStatus]}</span>
            <svg
              className="w-4 h-4 text-gray-400 hover:text-gray-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </Link>
        )} */}

        {/* Регион */}
        {currentRegion && (
          <Link
            href={`/careers?${removeFilter('region')}`}
            scroll={false}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-md text-sm text-gray-700 hover:bg-gray-50 border border-gray-200"
          >
            <span className="font-medium">Область:</span>
            <span>{currentRegion}</span>
            <svg
              className="w-4 h-4 text-gray-400 hover:text-gray-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </Link>
        )}

        {/* Материалы */}
        {currentMaterials.map((material) => (
          <Link
            key={material}
            href={`/careers?${removeFilter('material', material)}`}
            scroll={false}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-md text-sm text-gray-700 hover:bg-gray-50 border border-gray-200"
          >
            <span>{MATERIAL_LABELS[material]}</span>
            <svg
              className="w-4 h-4 text-gray-400 hover:text-gray-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </Link>
        ))}
      </div>
    </div>
  );
};

import Link from 'next/link';
import { CareerStatus, MaterialType } from '@/entities/career';
import { MaterialFilter } from './MaterialFilter';
import { RegionFilter } from './RegionFilter';

interface CareersFiltersProps {
  currentStatus?: CareerStatus;
  currentMaterials: MaterialType[];
  currentRegion?: string;
  regions: string[];
  currentParams: URLSearchParams;
  totalResults: number;
}

export const CareersFilters = ({
  currentStatus,
  currentMaterials,
  currentRegion,
  regions,
  currentParams,
  totalResults,
}: CareersFiltersProps) => {
  const hasActiveFilters =
    currentStatus || currentMaterials.length > 0 || currentRegion;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Фильтры</h2>
        {hasActiveFilters && (
          <Link
            href="/careers"
            scroll={false}
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            Сбросить все
          </Link>
        )}
      </div>

      <div className="mb-6 p-3 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">
          Найдено карьеров:{' '}
          <span className="font-semibold text-gray-900">{totalResults}</span>
        </p>
      </div>

      <div className="space-y-6">
        {/* <StatusFilter
          currentStatus={currentStatus}
          currentParams={currentParams}
        /> */}

        <div className="border-t pt-6">
          <RegionFilter
            regions={regions}
            currentRegion={currentRegion}
            currentParams={currentParams}
          />
        </div>

        <div className="border-t pt-6">
          <MaterialFilter
            currentMaterials={currentMaterials}
            currentParams={currentParams}
          />
        </div>
      </div>
    </div>
  );
};

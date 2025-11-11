'use client';

import { CareerStatus, MaterialType } from '@/entities/career';
import { MaterialFilterClient } from './MaterialFilterClient';
import { StatusFilterClient } from './StatusFilterClient';
import { RegionFilterClient } from './RegionFilterClient';

interface CareersFiltersClientProps {
  currentStatus?: CareerStatus;
  currentMaterials: MaterialType[];
  currentRegion?: string;
  regions: string[];
  totalResults: number;
  onStatusChange: (status?: CareerStatus) => void;
  onMaterialToggle: (material: MaterialType) => void;
  onRegionChange: (region?: string) => void;
  onResetFilters: () => void;
}

export const CareersFiltersClient = ({
  currentStatus,
  currentMaterials,
  currentRegion,
  regions,
  totalResults,
  onStatusChange,
  onMaterialToggle,
  onRegionChange,
  onResetFilters,
}: CareersFiltersClientProps) => {
  const hasActiveFilters =
    currentStatus || currentMaterials.length > 0 || currentRegion;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Фильтры</h2>
        {hasActiveFilters && (
          <button
            onClick={onResetFilters}
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            Сбросить все
          </button>
        )}
      </div>

      <div className="mb-6 p-3 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">
          Найдено карьеров:{' '}
          <span className="font-semibold text-gray-900">{totalResults}</span>
        </p>
      </div>

      <div className="space-y-6">
        <StatusFilterClient
          currentStatus={currentStatus}
          onStatusChange={onStatusChange}
        />

        <div className="border-t pt-6">
          <RegionFilterClient
            regions={regions}
            currentRegion={currentRegion}
            onRegionChange={onRegionChange}
          />
        </div>

        <div className="border-t pt-6">
          <MaterialFilterClient
            currentMaterials={currentMaterials}
            onMaterialToggle={onMaterialToggle}
          />
        </div>
      </div>
    </div>
  );
};


'use client';

import { CareerStatus, CAREER_STATUS_LABELS, MaterialType, MATERIAL_LABELS } from '@/entities/career';

interface ActiveFiltersClientProps {
  currentStatus?: CareerStatus;
  currentMaterials: MaterialType[];
  currentRegion?: string;
  onStatusChange: (status?: CareerStatus) => void;
  onMaterialToggle: (material: MaterialType) => void;
  onRegionChange: (region?: string) => void;
}

export const ActiveFiltersClient = ({
  currentStatus,
  currentMaterials,
  currentRegion,
  onStatusChange,
  onMaterialToggle,
  onRegionChange,
}: ActiveFiltersClientProps) => {
  const hasActiveFilters =
    currentStatus || currentMaterials.length > 0 || currentRegion;

  if (!hasActiveFilters) {
    return null;
  }

  return (
    <div className="mb-6 flex flex-wrap gap-2">
      {/* Статус */}
      {currentStatus && (
        <button
          onClick={() => onStatusChange(undefined)}
          className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200 transition-colors"
        >
          <span>Статус: {CAREER_STATUS_LABELS[currentStatus]}</span>
          <svg
            className="w-4 h-4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      )}

      {/* Регион */}
      {currentRegion && (
        <button
          onClick={() => onRegionChange(undefined)}
          className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200 transition-colors"
        >
          <span>Область: {currentRegion}</span>
          <svg
            className="w-4 h-4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      )}

      {/* Материалы */}
      {currentMaterials.map((material) => (
        <button
          key={material}
          onClick={() => onMaterialToggle(material)}
          className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200 transition-colors"
        >
          <span>{MATERIAL_LABELS[material]}</span>
          <svg
            className="w-4 h-4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      ))}
    </div>
  );
};


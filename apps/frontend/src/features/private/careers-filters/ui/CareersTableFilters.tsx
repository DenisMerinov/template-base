'use client';

import { useAtom, useSetAtom } from 'jotai';
import {
  careerStatusFilterAtom,
  careerMaterialsFilterAtom,
  careerRegionFilterAtom,
  careerSearchFilterAtom,
  resetFiltersAtom,
  hasActiveFiltersAtom,
} from '@/shared/store';
import {
  CareerStatus,
  MaterialType,
  CAREER_STATUS_LABELS,
  MATERIAL_LABELS,
} from '@/entities/career';

interface CareersTableFiltersProps {
  availableRegions: string[];
}

export function CareersTableFilters({
  availableRegions,
}: CareersTableFiltersProps) {
  const [status, setStatus] = useAtom(careerStatusFilterAtom);
  const [materials, setMaterials] = useAtom(careerMaterialsFilterAtom);
  const [region, setRegion] = useAtom(careerRegionFilterAtom);
  const [search, setSearch] = useAtom(careerSearchFilterAtom);
  const [hasActiveFilters] = useAtom(hasActiveFiltersAtom);
  const resetFilters = useSetAtom(resetFiltersAtom);

  const handleMaterialToggle = (material: MaterialType) => {
    if (materials.includes(material)) {
      setMaterials(materials.filter((m) => m !== material));
    } else {
      setMaterials([...materials, material]);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Фильтры</h2>
        {hasActiveFilters && (
          <button
            onClick={() => resetFilters()}
            className="text-sm text-blue-600 hover:text-blue-700"
          >
            Сбросить все
          </button>
        )}
      </div>

      {/* Поиск */}
      <div>
        <label className="block text-sm font-medium mb-2">Поиск</label>
        <input
          type="text"
          placeholder="Название карьера..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Статус */}
      <div>
        <label className="block text-sm font-medium mb-2">Статус</label>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              checked={status === undefined}
              onChange={() => setStatus(undefined)}
              className="mr-2"
            />
            <span className="text-sm">Все</span>
          </label>
          {Object.values(CareerStatus).map((s) => (
            <label key={s} className="flex items-center">
              <input
                type="radio"
                checked={status === s}
                onChange={() => setStatus(s)}
                className="mr-2"
              />
              <span className="text-sm">{CAREER_STATUS_LABELS[s]}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Регион */}
      <div>
        <label className="block text-sm font-medium mb-2">Регион</label>
        <select
          value={region || ''}
          onChange={(e) => setRegion(e.target.value || undefined)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Все регионы</option>
          {availableRegions.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      {/* Материалы */}
      <div>
        <label className="block text-sm font-medium mb-2">Материалы</label>
        <div className="space-y-2 max-h-60 overflow-y-auto">
          {Object.values(MaterialType).map((material) => (
            <label key={material} className="flex items-center">
              <input
                type="checkbox"
                checked={materials.includes(material)}
                onChange={() => handleMaterialToggle(material)}
                className="mr-2"
              />
              <span className="text-sm">{MATERIAL_LABELS[material]}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}


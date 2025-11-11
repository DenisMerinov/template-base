'use client';

import { useMemo } from 'react';
import { useAtomValue } from 'jotai';
import { MOCK_CAREERS } from '@/entities/career';
import { CareersDataTable } from '@/widgets/CareersDataTable';
import {
  DatabaseSelector,
  CareersTableFilters,
  CartSummary,
  CollapsibleFiltersPanel,
} from '@/features/private';
import {
  selectedDatabaseAtom,
  careerStatusFilterAtom,
  careerMaterialsFilterAtom,
  careerRegionFilterAtom,
  careerSearchFilterAtom,
  DatabaseType,
} from '@/shared/store';

export function TablesScreen() {
  const selectedDatabase = useAtomValue(selectedDatabaseAtom);
  const statusFilter = useAtomValue(careerStatusFilterAtom);
  const materialsFilter = useAtomValue(careerMaterialsFilterAtom);
  const regionFilter = useAtomValue(careerRegionFilterAtom);
  const searchFilter = useAtomValue(careerSearchFilterAtom);

  // Получаем уникальные регионы
  const availableRegions = useMemo(() => {
    const regions = new Set(MOCK_CAREERS.map((career) => career.region));
    return Array.from(regions).sort();
  }, []);

  // Фильтрация карьеров
  const filteredCareers = useMemo(() => {
    return MOCK_CAREERS.filter((career) => {
      // Поиск
      if (searchFilter) {
        const searchLower = searchFilter.toLowerCase();
        const matchesSearch =
          career.name.toLowerCase().includes(searchLower) ||
          career.description.toLowerCase().includes(searchLower) ||
          career.address.toLowerCase().includes(searchLower);
        if (!matchesSearch) return false;
      }

      // Статус
      if (statusFilter && career.status !== statusFilter) {
        return false;
      }

      // Регион
      if (regionFilter && career.region !== regionFilter) {
        return false;
      }

      // Материалы
      if (materialsFilter.length > 0) {
        const hasMatchingMaterial = materialsFilter.some((material) =>
          career.materialTypes.includes(material)
        );
        if (!hasMatchingMaterial) {
          return false;
        }
      }

      return true;
    });
  }, [statusFilter, materialsFilter, regionFilter, searchFilter]);

  const handleCareerClick = (career: any) => {
    console.log('Выбран карьер:', career);
  };

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Управление базами данных
        </h1>
        <p className="text-gray-600">
          Выберите тип базы данных и используйте фильтры для поиска нужной информации
        </p>
      </div>

      {/* Выбор базы данных */}
      <DatabaseSelector />

      {/* Контент в зависимости от выбранной БД */}
      {selectedDatabase === DatabaseType.CAREERS ? (
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6">
          {/* Фильтры со сворачиванием */}
          <aside>
            <CollapsibleFiltersPanel>
              <CareersTableFilters availableRegions={availableRegions} />
            </CollapsibleFiltersPanel>
          </aside>

          {/* Таблица */}
          <div className="space-y-4 min-w-0">
            {/* Корзина и счетчик */}
            <CartSummary />

            {/* Счетчик найденных записей */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2">
              <p className="text-sm text-gray-600">
                Найдено записей:{' '}
                <span className="font-semibold text-gray-900">
                  {filteredCareers.length}
                </span>{' '}
                из{' '}
                <span className="font-semibold text-gray-900">
                  {MOCK_CAREERS.length}
                </span>
              </p>
            </div>

            <CareersDataTable
              careers={filteredCareers}
              onCareerClick={handleCareerClick}
            />
          </div>
        </div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-lg p-12 text-center">
          <div className="max-w-md mx-auto">
            <div className="text-6xl mb-4">🚧</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Раздел в разработке
            </h3>
            <p className="text-gray-600">
              База данных для этого раздела еще не реализована. Попробуйте выбрать "Карьеры".
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

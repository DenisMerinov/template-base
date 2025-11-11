import { atom } from 'jotai';
import { CareerStatus, MaterialType } from '@/entities/career';

// Атомы для фильтров карьеров
export const careerStatusFilterAtom = atom<CareerStatus | undefined>(undefined);
export const careerMaterialsFilterAtom = atom<MaterialType[]>([]);
export const careerRegionFilterAtom = atom<string | undefined>(undefined);
export const careerSearchFilterAtom = atom<string>('');

// Вычисляемый атом для проверки наличия активных фильтров
export const hasActiveFiltersAtom = atom((get) => {
  const status = get(careerStatusFilterAtom);
  const materials = get(careerMaterialsFilterAtom);
  const region = get(careerRegionFilterAtom);
  const search = get(careerSearchFilterAtom);

  return !!(status || materials.length > 0 || region || search);
});

// Атом для сброса всех фильтров
export const resetFiltersAtom = atom(null, (get, set) => {
  set(careerStatusFilterAtom, undefined);
  set(careerMaterialsFilterAtom, []);
  set(careerRegionFilterAtom, undefined);
  set(careerSearchFilterAtom, '');
});

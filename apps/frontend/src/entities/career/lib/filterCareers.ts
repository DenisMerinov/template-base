import { Career, CareerStatus, MaterialType } from '../model/types';

export interface CareerFilters {
  status?: CareerStatus;
  materials?: MaterialType[];
  region?: string;
}

export function filterCareers(
  careers: Career[],
  filters: CareerFilters
): Career[] {
  console.log('=== ФУНКЦИЯ ФИЛЬТРАЦИИ ===');
  console.log('Фильтры:', filters);
  
  return careers.filter((career) => {
    // Фильтр по статусу
    if (filters.status) {
      console.log(`Проверка ${career.name}: career.status="${career.status}" vs filters.status="${filters.status}" (равны: ${career.status === filters.status})`);
      if (career.status !== filters.status) {
        console.log(`  -> ${career.name} отклонен по статусу`);
        return false;
      }
    }

    // Фильтр по региону
    if (filters.region && career.region !== filters.region) {
      console.log(`  -> ${career.name} отклонен по региону`);
      return false;
    }

    // Фильтр по материалам
    if (filters.materials && filters.materials.length > 0) {
      const hasAllMaterials = filters.materials.every((material) =>
        career.materialTypes.includes(material)
      );
      if (!hasAllMaterials) {
        console.log(`  -> ${career.name} отклонен по материалам`);
        return false;
      }
    }

    console.log(`  -> ${career.name} ПРОШЕЛ фильтры`);
    return true;
  });
}

// Получить уникальные регионы из списка карьеров
export function getUniqueRegions(careers: Career[]): string[] {
  const regions = new Set(careers.map((c) => c.region));
  return Array.from(regions).sort();
}

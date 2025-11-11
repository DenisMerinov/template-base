import { CareersScreen } from '@/screens/careers';
import {
  MOCK_CAREERS,
  CareerStatus,
  MaterialType,
  filterCareers,
  getUniqueRegions,
} from '@/entities/career';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Карьеры | SOLBER',
  description:
    'Список действующих и разрабатываемых карьеров по добыче строительных материалов',
};

interface CareersSearchParams {
  status?: string;
  materials?: string | string[];
  region?: string;
}

export default async function Careers({
  searchParams,
}: {
  searchParams: Promise<CareersSearchParams>;
}) {
  // Await searchParams в Next.js 15+
  const params = await searchParams;
  // Парсим параметры из URL
  // Отладка enum
  console.log('=== ОТЛАДКА СТАТУСА ===');
  console.log('params.status:', params.status);
  console.log('CareerStatus enum values:', Object.values(CareerStatus));
  console.log('CareerStatus.ACTIVE:', CareerStatus.ACTIVE);
  console.log('CareerStatus.CLOSED:', CareerStatus.CLOSED);

  // Валидируем статус - проверяем, что это действительно CareerStatus
  const status =
    params.status &&
    Object.values(CareerStatus).includes(params.status as CareerStatus)
      ? (params.status as CareerStatus)
      : undefined;

  console.log('Валидированный status:', status);

  const materialsParam = params.materials;
  const region = params.region;

  // Обрабатываем материалы (может быть строкой или массивом)
  const materialsArray = materialsParam
    ? Array.isArray(materialsParam)
      ? materialsParam
      : [materialsParam]
    : [];

  // Валидируем материалы - только валидные MaterialType
  const materials: MaterialType[] = materialsArray.filter((m) =>
    Object.values(MaterialType).includes(m as MaterialType)
  ) as MaterialType[];

  // Отладка статусов в моковых данных
  console.log('=== СТАТУСЫ КАРЬЕРОВ ===');
  MOCK_CAREERS.forEach((c) => {
    console.log(`${c.name}: status = "${c.status}" (type: ${typeof c.status})`);
  });

  // Фильтруем карьеры
  const filteredCareers = filterCareers(MOCK_CAREERS, {
    status,
    materials,
    region,
  });

  // Отладка результатов
  console.log('=== РЕЗУЛЬТАТЫ ФИЛЬТРАЦИИ ===');
  console.log('Фильтры:', { status, materials, region });
  console.log('Всего карьеров:', MOCK_CAREERS.length);
  console.log('Отфильтровано:', filteredCareers.length);
  console.log(
    'Отфильтрованные карьеры:',
    filteredCareers.map((c) => c.name)
  );

  // Получаем список доступных регионов
  const availableRegions = getUniqueRegions(MOCK_CAREERS);

  // Создаем URLSearchParams для передачи в компоненты
  const currentParams = new URLSearchParams();
  if (status) currentParams.set('status', status);
  if (region) currentParams.set('region', region);
  materials.forEach((m) => currentParams.append('materials', m));

  return (
    <CareersScreen
      careers={filteredCareers}
      currentStatus={status}
      currentMaterials={materials}
      currentRegion={region}
      availableRegions={availableRegions}
      currentParams={currentParams}
    />
  );
}


import { Career, CareerStatus, MaterialType } from '@/entities/career';
import { Container } from '@/shared/ui';
import { CareersList } from '@/widgets/CareersList';
import { CareersFilters, ActiveFilters } from '@/features/career-filters';

interface CareersScreenProps {
  careers: Career[];
  currentStatus?: CareerStatus;
  currentMaterials: MaterialType[];
  currentRegion?: string;
  availableRegions: string[];
  currentParams: URLSearchParams;
}

export const CareersScreen = ({
  careers,
  currentStatus,
  currentMaterials,
  currentRegion,
  availableRegions,
  currentParams,
}: CareersScreenProps) => {
  return (
    <div className="bg-gray-50 py-12">
      <Container>
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Наши карьеры
          </h1>
          <p className="text-lg text-gray-600">
            Список действующих и разрабатываемых карьеров по добыче строительных
            материалов
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Фильтры */}
          <aside className="lg:col-span-1">
            <CareersFilters
              currentStatus={currentStatus}
              currentMaterials={currentMaterials}
              currentRegion={currentRegion}
              regions={availableRegions}
              currentParams={currentParams}
              totalResults={careers.length}
            />
          </aside>

          {/* Список карьеров */}
          <div className="lg:col-span-3">
            <ActiveFilters
              currentStatus={currentStatus}
              currentMaterials={currentMaterials}
              currentRegion={currentRegion}
              currentParams={currentParams}
            />
            <CareersList careers={careers} />
          </div>
        </div>
      </Container>
    </div>
  );
};

import { Career, CareerCard } from '@/entities/career';

interface CareersListProps {
  careers: Career[];
}

export const CareersList = ({ careers }: CareersListProps) => {
  if (careers.length === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-lg border border-gray-200">
        <svg
          className="mx-auto h-12 w-12 text-gray-400 mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Карьеры не найдены
        </h3>
        <p className="text-gray-500">
          Попробуйте изменить параметры фильтрации
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6">
      {careers.map((career) => (
        <CareerCard key={career.id} career={career} />
      ))}
    </div>
  );
};

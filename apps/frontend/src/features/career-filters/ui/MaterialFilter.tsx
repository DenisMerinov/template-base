import Link from 'next/link';
import { MaterialType, MATERIAL_LABELS } from '@/entities/career';

interface MaterialFilterProps {
  currentMaterials: MaterialType[];
  currentParams: URLSearchParams;
}

export const MaterialFilter = ({
  currentMaterials,
  currentParams,
}: MaterialFilterProps) => {
  const toggleMaterial = (material: MaterialType): string => {
    const params = new URLSearchParams(currentParams);
    const materials = params.getAll('materials');

    if (materials.includes(material)) {
      // Удаляем материал
      params.delete('materials');
      materials
        .filter((m) => m !== material)
        .forEach((m) => params.append('materials', m));
    } else {
      // Добавляем материал
      params.append('materials', material);
    }

    return params.toString();
  };

  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-gray-900 mb-4">Материалы</h3>
      <div className="space-y-2 max-h-96 overflow-y-auto">
        {Object.entries(MATERIAL_LABELS).map(([key, label]) => {
          const materialType = key as MaterialType;
          const isActive = currentMaterials.includes(materialType);
          const href = `/careers?${toggleMaterial(materialType)}`;

          return (
            <Link
              key={materialType}
              href={href}
              scroll={false}
              className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-900'
                  : 'hover:bg-gray-50 text-gray-700'
              }`}
            >
              <div
                className={`w-5 h-5 border-2 rounded flex items-center justify-center shrink-0 ${
                  isActive ? 'bg-blue-600 border-blue-600' : 'border-gray-300'
                }`}
              >
                {isActive && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                )}
              </div>
              <span className="text-sm">{label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

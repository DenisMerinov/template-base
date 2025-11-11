'use client';

interface RegionFilterClientProps {
  regions: string[];
  currentRegion?: string;
  onRegionChange: (region?: string) => void;
}

export const RegionFilterClient = ({
  regions,
  currentRegion,
  onRegionChange,
}: RegionFilterClientProps) => {
  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-gray-900 mb-4">Область</h3>
      <div className="space-y-2">
        {/* Все области */}
        <button
          onClick={() => onRegionChange(undefined)}
          className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
            !currentRegion
              ? 'bg-blue-50 text-blue-900 font-medium'
              : 'hover:bg-gray-50 text-gray-700'
          }`}
        >
          Все области
        </button>

        {/* Список регионов */}
        {regions.map((region) => (
          <button
            key={region}
            onClick={() => onRegionChange(region)}
            className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
              currentRegion === region
                ? 'bg-blue-50 text-blue-900 font-medium'
                : 'hover:bg-gray-50 text-gray-700'
            }`}
          >
            {region}
          </button>
        ))}
      </div>
    </div>
  );
};


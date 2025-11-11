import Link from 'next/link';

interface RegionFilterProps {
  regions: string[];
  currentRegion?: string;
  currentParams: URLSearchParams;
}

export const RegionFilter = ({
  regions,
  currentRegion,
  currentParams,
}: RegionFilterProps) => {
  const createRegionLink = (region?: string): string => {
    const params = new URLSearchParams(currentParams);

    if (region) {
      params.set('region', region);
    } else {
      params.delete('region');
    }

    return params.toString();
  };

  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-gray-900 mb-4">Область</h3>
      <div className="space-y-2">
        {/* Все области */}
        <Link
          href={`/careers?${createRegionLink()}`}
          scroll={false}
          className={`block px-3 py-2 rounded-md text-sm transition-colors ${
            !currentRegion
              ? 'bg-blue-50 text-blue-900 font-medium'
              : 'hover:bg-gray-50 text-gray-700'
          }`}
        >
          Все области
        </Link>

        {/* Список регионов */}
        {regions.map((region) => (
          <Link
            key={region}
            href={`/careers?${createRegionLink(region)}`}
            scroll={false}
            className={`block px-3 py-2 rounded-md text-sm transition-colors ${
              currentRegion === region
                ? 'bg-blue-50 text-blue-900 font-medium'
                : 'hover:bg-gray-50 text-gray-700'
            }`}
          >
            {region}
          </Link>
        ))}
      </div>
    </div>
  );
};

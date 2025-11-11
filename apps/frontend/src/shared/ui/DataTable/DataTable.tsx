import { DataTableProps, Column } from './types';

/**
 * DataTable - Публичный компонент таблицы (без "use client")
 * Используется для статического рендеринга, SEO-оптимизации
 * Не поддерживает интерактивную сортировку
 */
export function DataTable<T>({
  data,
  columns,
  keyExtractor,
  emptyMessage = 'Нет данных для отображения',
  className = '',
  onRowClick,
}: DataTableProps<T>) {
  const getValue = (row: T, key: keyof T | string): any => {
    if (typeof key === 'string' && key.includes('.')) {
      // Поддержка вложенных свойств (например, "user.name")
      return key.split('.').reduce((obj: any, k) => obj?.[k], row);
    }
    return row[key as keyof T];
  };

  const renderCell = (row: T, column: Column<T>) => {
    const value = getValue(row, column.key);
    
    if (column.render) {
      return column.render(value, row);
    }
    
    return value ?? '-';
  };

  if (data.length === 0) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-8">
        <p className="text-center text-gray-500">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className={`bg-white border border-gray-200 rounded-lg overflow-hidden ${className}`}>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className={`px-6 py-3 text-${column.align || 'left'} text-xs font-medium text-gray-500 uppercase tracking-wider`}
                  style={{ width: column.width }}
                >
                  <div className="flex items-center gap-2">
                    <span>{column.label}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((row) => (
              <tr
                key={keyExtractor(row)}
                onClick={() => onRowClick?.(row)}
                className={`hover:bg-gray-50 transition-colors ${
                  onRowClick ? 'cursor-pointer' : ''
                }`}
              >
                {columns.map((column, index) => (
                  <td
                    key={index}
                    className={`px-6 py-4 text-sm text-gray-900 text-${column.align || 'left'}`}
                  >
                    {renderCell(row, column)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


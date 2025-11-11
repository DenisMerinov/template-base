import { Table } from '@/entities/table';
import { TableCard } from '@/widgets/TableCard';

interface TablesGridProps {
  tables: Table[];
  selectedTableIds?: string[];
  onAddToCart?: (tableId: string) => void;
}

/**
 * TablesGrid - Публичный компонент для отображения карточек таблиц
 * Используется для SEO-оптимизированных публичных страниц
 * Рендерится на сервере без "use client"
 */
export function TablesGrid({
  tables,
  selectedTableIds = [],
  onAddToCart,
}: TablesGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tables.map((table) => (
        <TableCard
          key={table.id}
          table={table}
          isSelected={selectedTableIds.includes(table.id)}
          onAddToCart={() => onAddToCart?.(table.id)}
        />
      ))}
    </div>
  );
}


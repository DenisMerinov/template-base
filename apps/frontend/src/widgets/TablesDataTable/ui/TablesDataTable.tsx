'use client';

import { DataTableClient, Column } from '@/shared/ui';
import { Table } from '@/entities/table';

interface TablesDataTableProps {
  tables: Table[];
  onTableClick?: (table: Table) => void;
}

export function TablesDataTable({
  tables,
  onTableClick,
}: TablesDataTableProps) {
  const columns: Column<Table>[] = [
    {
      key: 'name',
      label: 'Название',
      sortable: true,
      width: '25%',
    },
    {
      key: 'category',
      label: 'Категория',
      sortable: true,
      width: '12%',
    },
    {
      key: 'rowsCount',
      label: 'Записей',
      sortable: true,
      width: '10%',
      align: 'right',
      render: (value: number) => value.toLocaleString('ru-RU'),
    },
    {
      key: 'fields',
      label: 'Полей',
      sortable: true,
      width: '8%',
      align: 'center',
      render: (value: string[]) => value.length,
    },
    {
      key: 'price',
      label: 'Цена',
      sortable: true,
      width: '12%',
      align: 'right',
      render: (value: number, row: Table) => (
        <span className="font-semibold text-gray-900">
          {value.toLocaleString('ru-RU')} {row.currency === 'RUB' ? '₽' : row.currency}
        </span>
      ),
    },
    {
      key: 'lastUpdated',
      label: 'Обновлено',
      sortable: true,
      width: '13%',
      render: (value: string) => new Date(value).toLocaleDateString('ru-RU'),
    },
    {
      key: 'tags',
      label: 'Теги',
      sortable: false,
      width: '20%',
      render: (value: string[]) => (
        <div className="flex flex-wrap gap-1">
          {value.slice(0, 2).map((tag, idx) => (
            <span
              key={idx}
              className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
          {value.length > 2 && (
            <span className="text-xs text-gray-500 px-1 py-1">
              +{value.length - 2}
            </span>
          )}
        </div>
      ),
    },
  ];

  return (
    <DataTableClient
      data={tables}
      columns={columns}
      keyExtractor={(table) => table.id}
      onRowClick={onTableClick}
      emptyMessage="Нет доступных таблиц"
      className="shadow-md"
    />
  );
}


import { Table } from '@/entities/table';

interface TableCardProps {
  table: Table;
  isSelected: boolean;
  onAddToCart: () => void;
}

export function TableCard({ table, isSelected, onAddToCart }: TableCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-semibold">{table.name}</h3>
        <span className="text-sm text-gray-500">{table.category}</span>
      </div>

      <p className="text-gray-600 text-sm mb-4">{table.description}</p>

      <div className="space-y-2 mb-4 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">Записей:</span>
          <span className="font-medium">{table.rowsCount.toLocaleString('ru-RU')}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Обновлено:</span>
          <span className="font-medium">
            {new Date(table.lastUpdated).toLocaleDateString('ru-RU')}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Полей:</span>
          <span className="font-medium">{table.fields.length}</span>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-xs text-gray-500 mb-2">Доступные поля:</p>
        <div className="flex flex-wrap gap-1">
          {table.fields.slice(0, 3).map((field, idx) => (
            <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">
              {field}
            </span>
          ))}
          {table.fields.length > 3 && (
            <span className="text-xs text-gray-500 px-2 py-1">
              +{table.fields.length - 3}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-1 mb-4">
        {table.tags.map((tag, idx) => (
          <span key={idx} className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
            #{tag}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center pt-4 border-t">
        <div className="text-2xl font-bold">
          {table.price.toLocaleString('ru-RU')} ₽
        </div>
        <button
          onClick={onAddToCart}
          className={`px-4 py-2 rounded-md transition-colors ${
            isSelected
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {isSelected ? '✓ Выбрано' : 'В корзину'}
        </button>
      </div>
    </div>
  );
}


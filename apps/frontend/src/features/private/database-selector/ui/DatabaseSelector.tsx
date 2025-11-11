'use client';

import { useAtom } from 'jotai';
import {
  selectedDatabaseAtom,
  DatabaseType,
  DATABASE_LABELS,
} from '@/shared/store';

export function DatabaseSelector() {
  const [selectedDatabase, setSelectedDatabase] = useAtom(selectedDatabaseAtom);

  const databases = Object.values(DatabaseType);

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Выбор базы данных</h2>
      <div className="grid grid-cols-2 gap-3">
        {databases.map((db) => (
          <button
            key={db}
            onClick={() => setSelectedDatabase(db)}
            className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
              selectedDatabase === db
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {DATABASE_LABELS[db]}
          </button>
        ))}
      </div>
    </div>
  );
}


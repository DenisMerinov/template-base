import { atom } from 'jotai';

// Типы баз данных
export enum DatabaseType {
  CAREERS = 'careers',
  SUPPLIERS = 'suppliers',
  DEVELOPERS = 'developers',
  CARRIERS = 'carriers',
}

export const DATABASE_LABELS: Record<DatabaseType, string> = {
  [DatabaseType.CAREERS]: 'Карьеры',
  [DatabaseType.SUPPLIERS]: 'Поставщики',
  [DatabaseType.DEVELOPERS]: 'Застройщики',
  [DatabaseType.CARRIERS]: 'Перевозчики',
};

// Атом для выбранного типа базы данных
export const selectedDatabaseAtom = atom<DatabaseType>(DatabaseType.CAREERS);

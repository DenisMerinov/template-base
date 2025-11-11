import { atom } from 'jotai';

// Цена за одну запись
export const PRICE_PER_RECORD = 1000;

// Атом для выбранных ID карьеров в корзине
export const selectedCareerIdsAtom = atom<string[]>([]);

// Вычисляемый атом для общей стоимости
export const totalPriceAtom = atom((get) => {
  const selectedIds = get(selectedCareerIdsAtom);
  return selectedIds.length * PRICE_PER_RECORD;
});

// Вычисляемый атом для количества выбранных записей
export const selectedCountAtom = atom((get) => {
  return get(selectedCareerIdsAtom).length;
});

// Атом для добавления/удаления записи из корзины
export const toggleCareerInCartAtom = atom(
  null,
  (get, set, careerId: string) => {
    const currentIds = get(selectedCareerIdsAtom);
    if (currentIds.includes(careerId)) {
      set(
        selectedCareerIdsAtom,
        currentIds.filter((id) => id !== careerId)
      );
    } else {
      set(selectedCareerIdsAtom, [...currentIds, careerId]);
    }
  }
);

// Атом для очистки корзины
export const clearCartAtom = atom(null, (get, set) => {
  set(selectedCareerIdsAtom, []);
});


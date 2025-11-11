'use client';

import { useAtomValue, useSetAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import {
  selectedCountAtom,
  totalPriceAtom,
  clearCartAtom,
} from '@/shared/store';

export function CartSummary() {
  const router = useRouter();
  const selectedCount = useAtomValue(selectedCountAtom);
  const totalPrice = useAtomValue(totalPriceAtom);
  const clearCart = useSetAtom(clearCartAtom);

  const handleCheckout = () => {
    if (selectedCount > 0) {
      router.push('/dashboard/checkout');
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <div className="flex items-center justify-between gap-4">
        {/* Информация о выборе */}
        <div className="flex items-center gap-4">
          <div>
            <p className="text-sm text-gray-600">
              Выбрано записей:{' '}
              <span className="font-bold text-gray-900">{selectedCount}</span>
            </p>
          </div>

          {selectedCount > 0 && (
            <>
              <div className="h-6 w-px bg-gray-300" />
              <div>
                <p className="text-sm text-gray-600">
                  Общая стоимость:{' '}
                  <span className="font-bold text-blue-600 text-lg">
                    {totalPrice.toLocaleString('ru-RU')} ₽
                  </span>
                </p>
              </div>
            </>
          )}
        </div>

        {/* Действия */}
        <div className="flex items-center gap-3">
          {selectedCount > 0 && (
            <>
              <button
                onClick={() => clearCart()}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Очистить
              </button>
              <button
                onClick={handleCheckout}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm"
              >
                Перейти к оплате ({selectedCount})
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}


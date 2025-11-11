'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function CheckoutScreen() {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);

  // TODO: Получить реальные данные из корзины
  const cartItems = [
    { id: '1', name: 'База карьеров России', price: 50000 },
    { id: '2', name: 'Карьеры Московской области', price: 15000 },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = async () => {
    setIsProcessing(true);
    
    // TODO: Реальная обработка оплаты
    setTimeout(() => {
      alert('Оплата успешно обработана!');
      router.push('/dashboard/orders');
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Оформление заказа</h1>
        <p className="text-gray-600">Проверьте данные перед оплатой</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Товары в корзине</h2>
            <div className="space-y-3">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center pb-3 border-b">
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                  </div>
                  <div className="text-lg font-semibold">
                    {item.price.toLocaleString('ru-RU')} ₽
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Способ оплаты</h2>
            <div className="space-y-2">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="radio" name="payment" defaultChecked className="w-4 h-4" />
                <span>Банковская карта</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="radio" name="payment" className="w-4 h-4" />
                <span>ЮMoney</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="radio" name="payment" className="w-4 h-4" />
                <span>Счет для юридических лиц</span>
              </label>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-4">
            <h2 className="text-xl font-semibold mb-4">Итого</h2>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Товары ({cartItems.length})</span>
                <span>{total.toLocaleString('ru-RU')} ₽</span>
              </div>
              <div className="flex justify-between font-semibold text-lg pt-2 border-t">
                <span>К оплате</span>
                <span>{total.toLocaleString('ru-RU')} ₽</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={isProcessing}
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
            >
              {isProcessing ? 'Обработка...' : 'Оплатить'}
            </button>

            <p className="text-xs text-gray-500 mt-4">
              Нажимая "Оплатить", вы соглашаетесь с условиями использования
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


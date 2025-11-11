'use client';

export function OrdersScreen() {
  // TODO: Получить реальные данные заказов
  const orders = [
    {
      id: '1',
      date: '2024-11-05',
      items: ['База карьеров России'],
      total: 50000,
      status: 'completed',
      downloadUrl: '/downloads/table-1.xlsx',
    },
    {
      id: '2',
      date: '2024-10-28',
      items: ['Карьеры Московской области'],
      total: 15000,
      status: 'completed',
      downloadUrl: '/downloads/table-2.xlsx',
    },
  ];

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Завершен';
      case 'pending':
        return 'В обработке';
      case 'failed':
        return 'Ошибка';
      default:
        return status;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-100';
      case 'pending':
        return 'text-yellow-600 bg-yellow-100';
      case 'failed':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Мои заказы</h1>
        <p className="text-gray-600">История покупок и загрузка файлов</p>
      </div>

      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold mb-1">Заказ #{order.id}</h3>
                <p className="text-sm text-gray-500">
                  {new Date(order.date).toLocaleDateString('ru-RU', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                {getStatusText(order.status)}
              </span>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Товары:</h4>
              <ul className="list-disc list-inside space-y-1">
                {order.items.map((item, idx) => (
                  <li key={idx} className="text-gray-600">{item}</li>
                ))}
              </ul>
            </div>

            <div className="flex justify-between items-center pt-4 border-t">
              <div className="text-lg font-semibold">
                Итого: {order.total.toLocaleString('ru-RU')} ₽
              </div>
              {order.status === 'completed' && (
                <a
                  href={order.downloadUrl}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  download
                >
                  Скачать таблицу
                </a>
              )}
            </div>
          </div>
        ))}

        {orders.length === 0 && (
          <div className="text-center py-12 bg-white border border-gray-200 rounded-lg">
            <p className="text-gray-500 text-lg mb-4">У вас пока нет заказов</p>
            <a
              href="/dashboard/tables"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Перейти в каталог
            </a>
          </div>
        )}
      </div>
    </div>
  );
}


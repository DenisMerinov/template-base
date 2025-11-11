import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                📊 Бесплатный просмотр
              </h3>
              <p className="text-gray-600 mb-4">
                Просматривайте информацию о карьерах бесплатно. Все данные
                открыты для SEO и поисковых систем.
              </p>
              <Link href="/careers" className="text-blue-600 hover:underline">
                Перейти к карьерам →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">💼 Покупка таблиц</h3>
              <p className="text-gray-600 mb-4">
                Зарегистрируйтесь и получите доступ к полным таблицам данных с
                возможностью выгрузки.
              </p>
              <Link href="/login" className="text-blue-600 hover:underline">
                Войти в кабинет →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Как это работает?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">1. Найдите данные</h3>
              <p className="text-gray-600">
                Используйте фильтры для поиска нужных карьеров или таблиц
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🛒</div>
              <h3 className="text-xl font-semibold mb-2">
                2. Добавьте в корзину
              </h3>
              <p className="text-gray-600">
                Выберите необходимые таблицы данных
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📥</div>
              <h3 className="text-xl font-semibold mb-2">3. Скачайте</h3>
              <p className="text-gray-600">
                После оплаты скачайте таблицы в формате Excel
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

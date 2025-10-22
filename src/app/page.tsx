'use client'

import { useEffect, useState } from 'react'
import { apiClient } from '@/lib/api-client'

export default function Home() {
  const [apiStatus, setApiStatus] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkApiConnection = async () => {
      try {
        const response = await apiClient.get('/')
        setApiStatus(response.data)
      } catch (error) {
        console.error('Failed to connect to API:', error)
        setApiStatus({ error: 'Failed to connect to backend API' })
      } finally {
        setLoading(false)
      }
    }

    checkApiConnection()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            🚀 WB A/B Testing Platform
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Платформа для A/B тестирования карточек товаров Wildberries
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-semibold mb-4">Статус подключения к API</h2>
          
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            </div>
          ) : apiStatus?.error ? (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              <p className="font-bold">Ошибка подключения</p>
              <p>{apiStatus.error}</p>
              <p className="text-sm mt-2">
                Убедитесь, что backend запущен на http://localhost:3001
              </p>
            </div>
          ) : (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
              <p className="font-bold">✅ Подключение успешно</p>
              <pre className="mt-4 bg-gray-100 dark:bg-gray-900 p-4 rounded overflow-auto">
                {JSON.stringify(apiStatus, null, 2)}
              </pre>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-2">📊 A/B Тестирование</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Автоматическая смена главного фото и анализ CTR
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-2">🔗 Интеграция WB</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Прямая интеграция с официальным API Wildberries
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-2">💳 Оплата</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Безопасная оплата через ЮKassa
            </p>
          </div>
        </div>

      </div>
    </main>
  )
}

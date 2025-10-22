"# WB A/B Testing - Frontend

Frontend приложение для платформы A/B тестирования карточек Wildberries.

## Технологии

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Zustand (State Management)
- React Hook Form
- Recharts
- Axios

## Установка

```bash
npm install
```

## Конфигурация

Создайте `.env.local` файл на основе `.env.example`:

```bash
copy .env.example .env.local
```

## Запуск

```bash
# Разработка
npm run dev

# Production
npm run build
npm run start
```

Приложение будет доступно на http://localhost:3000

## Структура

```
src/
├── app/             # App Router (страницы)
├── components/      # React компоненты
│   └── ui/         # UI компоненты
└── lib/            # Утилиты и API клиент
```

## Особенности

- Современный UI с Tailwind CSS
- Адаптивный дизайн
- Темная тема
- Интеграция с Backend API
- Защищённые маршруты

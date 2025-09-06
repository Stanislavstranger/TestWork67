# Abelohost Shop 🛒✨

[![Next.js](https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white&style=for-the-badge)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge)](https://www.typescriptlang.org/)
[![SCSS](https://img.shields.io/badge/SCSS-CC6699?logo=sass&logoColor=white&style=for-the-badge)](https://sass-lang.com/)
[![Zustand](https://img.shields.io/badge/Zustand-000000?style=for-the-badge)](https://zustand-demo.pmnd.rs/)
[![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=white&style=for-the-badge)](https://axios-http.com/)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white&style=for-the-badge)](https://eslint.org/)
[![Stylelint](https://img.shields.io/badge/Stylelint-000000?style=for-the-badge&logo=stylelint&logoColor=white)](https://stylelint.io/)
[![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)](https://prettier.io)
[![Husky](https://img.shields.io/badge/Husky-white?style=for-the-badge)](https://typicode.github.io/husky/#/)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/features/actions)

> ⚡ **Проект можно запустить для локальной разработки за 1-2 минуты: инструкция ниже!**

## Описание

Веб-приложение, разработанное в рамках тестового задания. Реализует функционал авторизации пользователей и отображения списка товаров с использованием публичного API [DummyJSON](https://dummyjson.com/).

Стек: **Next.js (App Router), TypeScript, Zustand, Axios, SCSS-модули.**

### Основные возможности

- **Авторизация пользователей:** JWT-аутентификация с валидацией формы.
- **Отображение товаров:** Список из 12 товаров с карточками продуктов.
- **Динамический интерфейс:** Header и Footer меняются в зависимости от статуса авторизации.
- **Условное отображение:** Кнопка "Add to cart" видна только авторизованным пользователям.
- **Индикаторы загрузки:** Скелетоны для карточек товаров для плавной загрузки без смещения верстки.
- **Обработка ошибок:** Понятные сообщения об ошибках при неудачной авторизации или сбоях API.

### Тестовые пользователи

В приложении нет формы регистрации. Для входа вы можете использовать любого пользователя из [этого списка](https://dummyjson.com/users).

Например:

- **Username:** `emilys`
- **Password:** `emilyspass`

---

### Дополнительные улучшения

- **User Experience (UX):**
  - **Скелетоны:** Вместо стандартных спиннеров используются скелетоны, имитирующие реальный контент, что улучшает восприятие скорости загрузки.
  - **Обработка 404:** Реализована кастомная страница для страниц "в разработке", что позволяет гибко управлять маршрутизацией.
- **Архитектура и код:**
  - **Next.js App Router:** Проект построен на современных конвенциях Next.js, включая `loading.tsx` для оптимизации загрузки и обработки ошибок.
  - **Централизованная конфигурация:** Все маршруты и константы вынесены в отдельные файлы конфигурации для удобства поддержки.
  - **Строгая типизация:** Весь код, включая компоненты, хуки и ответы API, строго типизирован с помощью TypeScript.

---

### 🚀 Быстрый старт

#### 1. Клонируйте репозиторий

```bash
git clone https://github.com/Stanislavstranger/TestWork67.git
cd TestWork67
```

#### 2. Установите зависимости

```bash
npm install
```

#### 3. Запустите сервер для разработки

```bash
npm run dev
```

- **Приложение будет доступно по адресу:** [http://localhost:3000](http://localhost:3000)

---

### 🛠️ Технологии

- **Frontend:** Next.js (App Router), TypeScript, Zustand, Axios
- **Стилизация:** SCSS-модули
- **Качество кода:** Prettier, ESLint, Stylelint, Husky

---

### API Endpoints (DummyJSON)

- `POST /auth/login` – авторизация пользователя
- `GET /products` – получение списка товаров

---

### Полезные команды

```bash
npm run dev      # Запустить сервер для разработки
npm run build     # Собрать проект для продакшена
npm run start     # Запустить продакшен-сборку
npm run lint     # Запустить линтер (ESLint)
npm run stylelint # Запустить стаильт (Stylelint)
npm run prettier   # Запустить форматтер (Prettier)
```

---

### CI/CD

В проекте настроен CI/CD пайплайн с использованием GitHub Actions.

- **Проверка Pull Request:** На каждый push и pull request в ветку `main` запускаются линтеры и тесты для проверки качества кода (`check-pr.yml`).
- **Деплой на Staging:** При push в ветку `main` происходит автоматический деплой на staging-окружение (`deploy-staging.yml`).
- **Деплой в Production:** При push в ветку `release` происходит автоматический деплой на продакшен (`deploy-prod.yml`).

## 📬 Контакты

- [Telegram](https://t.me/Stanislav_GV)

> Если у вас возникнут вопросы по архитектуре, принятым решениям или любой другой части проекта — буду рад обсудить их на интервью или в личном общении!

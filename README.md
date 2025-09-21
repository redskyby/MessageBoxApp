# MessageBoxApp

Минималистичное fullstack-приложение на React + Node.js с подключением к реальной MongoDB.

## 🚀 Стек

- **Frontend**: React + Vite + Tailwind CSS + Ant Design + React Hook Form
- **Backend**: Node.js + Express + TypeScript
- **CI/CD tooling**: ESLint Flat Config, Prettier, Husky
- **DevOps**: Docker + docker-compose
- **Database**: MongoDB

## 📦 Установка

```bash
git clone https://github.com/redskyby/MessageBoxApp.git
cd MessageBoxApp
docker-compose up --build

🔧 Особенности

Зафиксированы версии всех зависимостей в package.json, чтобы избежать неожиданных конфликтов и ошибок при сборке.

Docker обеспечивает простое развёртывание и запуск как фронтенда, так и сервера.

ESLint + Prettier + Husky гарантируют единый стиль кода и предотвращают ошибки на этапе коммита.
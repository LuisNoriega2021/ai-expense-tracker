# AI Expense Tracker

A modern web app to track daily expenses, visualize spending with charts, and get AI-generated financial advice. Built with **Next.js 14** (App Router), **TypeScript**, and **Tailwind CSS**.

## Tech stack

- **Next.js 14** – App Router, React Server Components
- **TypeScript** – Strict mode, path alias `@/*`
- **Tailwind CSS** – Utility-first styling, CSS variables for theming
- **ESLint** – `next/core-web-vitals`

## Project structure

```
src/
├── app/                    # App Router: layout, pages, global styles
├── components/             # Shared UI and layout
│   ├── layout/             # Header, footer, etc.
│   └── ui/                 # Reusable UI primitives
├── features/               # Feature-based modules
│   ├── expenses/           # Expense CRUD, list, form
│   ├── charts/             # Expense charts and visualizations
│   └── ai/                 # AI advice and insights
├── hooks/                  # Custom React hooks
├── lib/                    # Utilities, constants, API helpers
└── types/                  # Shared TypeScript types
```

## Getting started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the dev server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

3. **Optional:** Copy `.env.example` to `.env.local` and add any API keys (e.g. for AI features).

## Scripts

| Command   | Description              |
| --------- | ------------------------ |
| `npm run dev`   | Start dev server (port 3000) |
| `npm run build` | Production build          |
| `npm run start` | Start production server   |
| `npm run lint`  | Run ESLint                |

## Roadmap

- [ ] Expense list and add/edit/delete
- [ ] Charts (e.g. by category, over time) – consider Recharts or similar
- [ ] AI-generated financial advice – integrate your preferred LLM API
- [ ] Persistence (e.g. local storage, DB, or API)

## License

MIT

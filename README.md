# Lesson With Sandipan

A minimal, scalable [Next.js](https://nextjs.org) boilerplate using the App Router and JavaScript (JSX).

## Getting started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Edit `src/app/page.js`; the page auto-updates.

## Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the development server         |
| `npm run build` | Create a production build            |
| `npm run start` | Run the production build             |
| `npm run lint`  | Lint the codebase with ESLint        |

## Project structure

```
LessonWithSandipan/
├── public/              # Static assets served from /
├── src/
│   ├── app/             # App Router: routes, layouts, pages
│   │   ├── globals.css
│   │   ├── layout.js    # Root layout (shared shell)
│   │   └── page.js      # Home route (/)
│   ├── components/      # Reusable UI components
│   └── lib/             # Shared helpers & framework-agnostic logic
├── eslint.config.mjs
├── jsconfig.json        # Path alias: @/* -> src/*
└── next.config.mjs
```

## Conventions

- Import from the `@/` alias (e.g. `import Button from "@/components/Button"`).
- Keep reusable UI in `src/components`, pure helpers in `src/lib`.
- Co-locate route-specific files under the matching folder in `src/app`.
- Add new routes by creating folders with a `page.js` inside `src/app`.
- Copy `.env.example` to `.env.local` for local secrets (never commit `.env.local`).

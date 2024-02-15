# Resume Builder

This web application is intended to build minimal Resumes with Markdown.

## Setup

1. Clone this respository.
2. Rename `.example.env` to `.env` and set required variables.
3. Install the dependencies.

```bash
pnpm install
```

4. Run database migration.

```bash
pnpm migrate:sqlite
```

## Development Server

Start the development server on http://localhost:3000

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

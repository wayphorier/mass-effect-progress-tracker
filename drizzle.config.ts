import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'sqlite',
  schema: './shared/db/schema/*',
  out: './drizzle',
  dbCredentials: {
    url: './sqlite.db',
  },
});

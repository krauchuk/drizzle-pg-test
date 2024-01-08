import type { Config } from 'drizzle-kit';

export default {
  schema: './lib/schema.ts',
  out: './migrations',
  breakpoints: false,
  driver: 'pg',
  dbCredentials: {
    connectionString: 'postgres://postgres:postgres@127.0.0.1:5432/test-db',
  },
} satisfies Config;

import { text, serial, json, timestamp, pgSchema } from 'drizzle-orm/pg-core';

export const appSchema = pgSchema('app');

export const threadTable = appSchema.table('thread', {
  id: serial('id'),
  name: text('name'),
  user: text('user'),
  data: json('data'),
  createdAt: timestamp('createdAt'),
  updatedAt: timestamp('updatedAt'),
});

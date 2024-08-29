import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';
import { relations } from 'drizzle-orm';
import { spaceLocations } from './space-locations';

/**
 * Games: Mass Effect, Mass Effect 2 or MassEffect 3
 */
export const games = sqliteTable('games', {
  id: integer('id').primaryKey(),
  title: text('title').notNull().unique(),
});

export const gamesRelations = relations(games, ({ many }) => ({
  spaceLocations: many(spaceLocations),
}));

import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';
import { relations } from 'drizzle-orm';
import { games } from './games';
import { missions } from './missions';

/**
 * Space locations: The planet, the moon, a space station, a ship, etc.
 */
export const spaceLocations = sqliteTable('space_locations', {
  id: integer('id').primaryKey(),
  name: text('name').notNull().unique(),
  description: text('description'),
  gameId: integer('game_id').references(() => games.id),
})

export const spaceLocationsRelations = relations(spaceLocations, ({ one, many }) => ({
  game: one(games, {
    fields: [spaceLocations.gameId],
    references: [games.id],
  }),
  missions: many(missions),
}))

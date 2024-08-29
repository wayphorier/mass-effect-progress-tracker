import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';
import { relations } from 'drizzle-orm';
import { spaceLocations } from './space-locations';

/**
 * Missions: A mission on a space location
 */
export const missions = sqliteTable('missions', {
  id: integer('id').primaryKey(),
  title: text('title').notNull().unique(),
  description: text('description'),
  spaceLocationId: integer('space_location_id').references(() => spaceLocations.id),
});

export const missionsRelations = relations(missions, ({ one }) => ({
  spaceLocation: one(spaceLocations, {
    fields: [missions.spaceLocationId],
    references: [spaceLocations.id],
  })
}))

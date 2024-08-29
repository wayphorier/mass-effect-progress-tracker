import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';
import { relations } from 'drizzle-orm';
import { spaceLocations } from './space-locations';

/**
 * Stores: A shop on a space location
 */
export const stores = sqliteTable('stores', {
  id: integer('id').primaryKey(),
  title: text('title').notNull().unique(),
  description: text('description'),
  spaceLocationId: integer('space_location_id').references(() => spaceLocations.id),
});

export const storesRelations = relations(stores, ({ one }) => ({
  spaceLocation: one(spaceLocations, {
    fields: [stores.spaceLocationId],
    references: [spaceLocations.id],
  })
}))

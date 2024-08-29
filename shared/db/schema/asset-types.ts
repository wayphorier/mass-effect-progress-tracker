import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';
import { relations } from 'drizzle-orm';
import { assets } from './assets';

/**
 * Asset types: research, weapons, armor, etc.
 */
export const assetTypes = sqliteTable('asset_types', {
  id: integer('id').primaryKey(),
  name: text('title').notNull().unique(),
  description: text('description'),
});

export const assetTypesRelations = relations(assetTypes, ({ many }) => ({
  assets: many(assets),
}));

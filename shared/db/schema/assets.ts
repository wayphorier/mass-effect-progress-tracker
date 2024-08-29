import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';
import { relations } from 'drizzle-orm';
import { assetTypes } from './asset-types';

/**
 * Items that can be found or bought
 */
export const assets = sqliteTable('assets', {
  id: integer('id').primaryKey(),
  title: text('title').notNull().unique(),
  description: text('description'),
  type: integer('type_id').references(() => assetTypes.id),
});

export const assetsRelations = relations(assets, ({ one }) => ({
  type: one(assetTypes, {
    fields: [assets.type],
    references: [assetTypes.id],
  }),
}));

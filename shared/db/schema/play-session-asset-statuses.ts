import { sqliteTable, integer } from 'drizzle-orm/sqlite-core';
import { relations } from 'drizzle-orm';
import { playSessions } from './play-sessions';
import { assets } from './assets';

/**
 * Play session asset statuses: whether an asset has been taken in a session
 */
export const playSessionAssetStatuses = sqliteTable('session_asset_statuses', {
  id: integer('id').primaryKey(),
  taken: integer('taken', { mode: 'boolean' }).notNull().default(false),
  sessionId: integer('session_id').references(() => playSessions.id),
  assetId: integer('asset_id').references(() => assets.id),
});

export const playSessionAssetStatusesRelations = relations(playSessionAssetStatuses, ({ one }) => ({
  assetsStatuses: one(playSessions, {
    fields: [playSessionAssetStatuses.sessionId],
    references: [playSessions.id],
  }),
}));

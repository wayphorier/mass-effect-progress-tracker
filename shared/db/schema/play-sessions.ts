import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';
import { relations } from 'drizzle-orm';
import { games } from './games';
import { playSessionAssetStatuses } from './play-session-asset-statuses';

/**
 * Play sessions: A player's progress in the specific save
 */
export const playSessions = sqliteTable('sessions', {
  id: integer('id').primaryKey(),
  saveName: text('save_name').notNull().unique(),
  comment: text('comment'),
  gameId: integer('game_id').references(() => games.id),
  createdAt: text('created_at'),
});

export const sessionsRelations = relations(playSessions, ({ many }) => ({
  assetsStatuses: many(playSessionAssetStatuses),
}));

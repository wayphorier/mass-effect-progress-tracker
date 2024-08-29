import { sqliteTable, integer } from 'drizzle-orm/sqlite-core';
import { assets } from './assets';
import { missions } from './missions';

/**
 * Loot: Assets that can be found on missions
 */
export const loot = sqliteTable('loot', {
  id: integer('id').primaryKey(),
  assetId: integer('asset_id').references(() => assets.id),
  missionId: integer('mission_id').references(() => missions.id),
});

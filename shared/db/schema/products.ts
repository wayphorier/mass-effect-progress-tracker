import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';
import { assets } from './assets';
import { stores } from './stores';
/**
 * Store products: Assets that can be bought in stores
 */
export const products = sqliteTable('products', {
  id: integer('id').primaryKey(),
  assetId: integer('asset_id').references(() => assets.id),
  storeId: integer('store_id').references(() => stores.id),
});

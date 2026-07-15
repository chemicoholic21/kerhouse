// lib/db.ts
import postgres from 'postgres';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set');
}

// `prepare: false` is required for Supabase's transaction pooler (port 6543),
// which runs PgBouncer in transaction mode and cannot use prepared statements.
export const sql = postgres(process.env.DATABASE_URL, { prepare: false });

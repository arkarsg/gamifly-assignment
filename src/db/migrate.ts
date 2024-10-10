import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

const migrationSchema = async (db_url: string) => {
  const migrationConnection = postgres(db_url);
  const db = drizzle(migrationConnection);
  await migrate(db, { migrationsFolder: 'drizzle' });
  await migrationConnection.end();
};

export default migrationSchema;
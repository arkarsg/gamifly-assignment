import { PostgreSqlContainer } from '@testcontainers/postgresql';
import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

export default async function (){
  try {
    const container = await new PostgreSqlContainer('postgres:17-alpine').start();
    console.log("started container")
    process.env.DATABASE_URL = container.getConnectionUri()
    const client = postgres({
        host: container.getHost(),
        port: container.getPort(),
        database: container.getDatabase(),
        user: container.getUsername(),
        password: container.getPassword(),
      })
    
    const drizzleClient = drizzle(client)
    
    await migrate(drizzleClient, {
      migrationsFolder: 'drizzle',
    })
    
    
    global.pgContainer = container;
    global.pgClient = client;
  } catch (error) {
    console.error(
      'Error creating testcontainer: ',
      error
    )  
  }
}
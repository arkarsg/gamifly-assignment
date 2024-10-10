import { sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { exit } from "process";
import config from "~/config/config";

const queryClient = postgres(config().DATABASE_URL)

export const db = drizzle(queryClient);

export const checkDb = async () => {
  try {
    await db.execute(sql`SELECT 1`);
    console.log("Connected to DB!")
  } catch (error) {
    const { message } = error as Error;
    console.log(message);
    console.log("Failed to connect: " + config().DATABASE_URL);
    exit(1);
  }
}
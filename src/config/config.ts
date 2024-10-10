import "dotenv/config";

interface EnvVars {
  GAMIFLY_SERVER_PORT: number;
  DATABASE_URL: string;
}

const config = (): EnvVars => {
  return {
    GAMIFLY_SERVER_PORT: Number(process.env.GAMIFLY_SERVER_PORT || 3000),
    DATABASE_URL: process.env.DATABASE_URL || "no_db_url"
  }
}

export default config;
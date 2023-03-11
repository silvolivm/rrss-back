import path from 'path';
import { fileURLToPath } from 'url';

import dotenv from 'dotenv';
dotenv.config();

export const config = {
  user: process.env.DB_USER,
  passwd: encodeURIComponent(process.env.DB_PASSWORD as string),
  cluster: process.env.DB_CLUSTER,
  dbName: process.env.DB_NAME,
  jwtSecret: process.env.SECRET,
};

export const __dirname = path.dirname(fileURLToPath(import.meta.url));

import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const string = process.env.NODE_ENV === 'test'
  ? 'postgres://czdovici:XcuWDGo0NA_moPDLotKnA6GD3ZkKD_FR@elmer.db.elephantsql.com:5432/czdovici'
  : process.env.DATABASE_URL;

const pool = new Pool({
  connectionString: string,
});

export default (text, params) => pool.query(text, params);

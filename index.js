import { query } from '@el3um4s/node-mdb';
import express from 'express';

const app = express();
const database = './test.mdb';

const sql = `
  SELECT userName, userAge, mail 
  FROM Users 
  WHERE (userName Like '%rossi%');`;
const result = await query.sql({
  database,
  sql,
});

app.listen(3008, ()=> console.log(`Server running on port 3008`, result))
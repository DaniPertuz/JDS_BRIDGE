import { query } from "@el3um4s/node-mdb";

const database = "./test.mdb";

const sql = `
  SELECT userName, userAge, mail 
  FROM Users 
  WHERE (userName Like '%rossi%');`;
const result = await query.sql({
  database,
  sql,
});
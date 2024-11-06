export type Connection = {
  CONNECION_STRING: string;
  DB: string;
  DB_NAME: string;
};
export const connection: Connection = {
  CONNECION_STRING: 'mongodb://localhost:27017',
  DB: 'MYSQL',
  DB_NAME: 'songs',
};

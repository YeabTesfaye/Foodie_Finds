// @ts-ignore
import sql from "better-sqlite3";

const db = sql("meals.db");

export  function getMeals() {
  return db.prepare(`SELECT * FROM meals`).all();
}

export function getMeal(slug: string) {
  const statement = db.prepare(`SELECT * FROM meals WHERE slug = ?`);
  return statement.get(slug);
}

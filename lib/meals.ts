// @ts-ignore
import sql from "better-sqlite3";
import { Meal } from "./action";
import slugify from "slugify";
import xss from "xss";
import { promises as fs } from "node:fs";
import path from "node:path";
import { buffer } from "node:stream/consumers";

const db = sql("meals.db");

export function getMeals() {
  return db.prepare(`SELECT * FROM meals`).all();
}

export function getMeal(slug: string) {
  const statement = db.prepare(`SELECT * FROM meals WHERE slug = ?`);
  return statement.get(slug);
}

export async function saveMeal(meal: Meal) {
  // Slugify the title
  meal.slug = slugify(meal.title, { lower: true });

  // Sanitize the instructions
  meal.instructions = xss(meal.instructions);

  // Check if meal.image is a File before trying to work with it
  if (typeof meal.image === "string") {
    throw new Error("Expected image to be a File, but got a string instead.");
  }

  // Handle file upload and saving the image
  const extension = meal.image.name.split(".").pop(); // Get the file extension (e.g., jpg, png)
  const fileName = `${meal.slug}.${extension}`;

  // Construct the file path
  const filePath = path.join(process.cwd(), "public", "images", fileName);

  // Convert the image to a Buffer and save it to the file system
  const arrayBuffer = await meal.image.arrayBuffer();

  if (!arrayBuffer) {
    throw new Error("ArrayBuffer is null");
  }

  const buffer = Buffer.from(arrayBuffer); // Convert ArrayBuffer to Buffer

  // Use promises API to write the file asynchronously
  await fs.writeFile(filePath, buffer); // Asynchronously write the image to disk

  // Store the relative path of the image in the database
  meal.image = `/images/${fileName}`; // Update type to string, representing the image path

  // Prepare SQLite database connection
  const db = sql("meals.db"); // Assuming meals.db is your SQLite database

  // Insert meal data into the database
  const insertMealQuery = db.prepare(`
    INSERT INTO meals (title, summary, instructions, image, creator, creator_email, slug)
    VALUES (@title, @summary, @instructions, @image, @creator, @creator_email, @slug)
  `);

  insertMealQuery.run(meal);

  console.log(`Meal saved with slug: ${meal.slug}`);
}

"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export type Meal = {
  title: string;
  summary: string;
  instructions: string;
  image: File | string;
  creator: string;
  creator_email: string;
  slug?: string;
};
export async function shareMeal(formData: FormData) {
  const meal: Meal = {
    title: formData.get("title") as string,
    summary: formData.get("summary") as string,
    instructions: formData.get("instructions") as string,
    image: formData.get("image") as File,
    creator: formData.get("name") as string,
    creator_email: formData.get("email") as string,
  };
  await saveMeal(meal);
  redirect("/meals");
}

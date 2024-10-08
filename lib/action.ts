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
interface FormState {
  message: string;
}
function isInvalidText(text: string) {
  return !text || text.trim() == "";
}

export async function shareMeal(prevState: FormState, formData: FormData) {
  const meal: Meal = {
    title: formData.get("title") as string,
    summary: formData.get("summary") as string,
    instructions: formData.get("instructions") as string,
    image: formData.get("image") as File,
    creator: formData.get("name") as string,
    creator_email: formData.get("email") as string,
  };
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(meal.creator_email)) {
    throw new Error("Invalid email address.");
  }
  const { title, summary, instructions, image, creator, creator_email } = meal;
  if (
    isInvalidText(title) ||
    isInvalidText(summary) ||
    isInvalidText(instructions) ||
    isInvalidText(creator) ||
    isInvalidText(creator_email) ||
    !image
  ) {
    return {
      message: "Invalid input",
    };
  }
  await saveMeal(meal);
  redirect("/meals");
}

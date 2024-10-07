import { getMeal } from "@/lib/meals";
import classes from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

interface Props {
  params: { slug: string };
}
const MealDetailsPage = ({params} : Props) => {
  const { slug } = params;
  const meal = getMeal(slug);
  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <header className={classes.header}>
      <div className={classes.image}>
        <Image src={meal.image} alt={meal.title} fill />
      </div>
      <div className={classes.headerText}>
        <h1>{meal.title}</h1>
        <p className={classes.creator}>
          by <Link href={`/meals/${slug}`}>{meal.creator}</Link>
        </p>
        <p className={meal.summary}>{meal.summary}</p>
        <div
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        />
      </div>
    </header>
  );
};

export default MealDetailsPage;

import { getMeal } from "@/lib/meals";
import classes from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Fragment } from "react";

interface Props {
  params: { slug: string };
}
const MealDetailsPage = ({ params }: Props) => {
  const { slug } = params;
  const meal = getMeal(slug);
  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <Link href={`mailto:${meal.creator_email}`}>{meal.creator}</Link>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </Fragment>
  );
};

export default MealDetailsPage;

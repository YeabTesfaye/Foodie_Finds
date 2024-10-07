import Link from "next/link";
import classes from "./meals-header.module.css";

export default function MealsHeader() {
  return (
    <header className={classes.header}>
      <h1>
        Discover delicious meals, crafted{" "}
        <span className={classes.highlight}>by you</span>
      </h1>
      <p>
        Explore a variety of recipes and cook your favorite dishes with ease.
        It's both fun and rewarding!
      </p>
      <p className={classes.cta}>
        <Link href="/meals/share">Share Your Favorite Recipe</Link>
      </p>
    </header>
  );
}

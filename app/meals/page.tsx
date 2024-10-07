import { Fragment } from "react";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import MealsHeader from "@/components/meals/meals-header";
import { getMeals } from "@/lib/meals";

const MealsPage = () => {
  const meals = getMeals();
  return (
    <Fragment>
      <MealsHeader />
      <main className={classes.main}>
        <MealsGrid meals={meals} />
      </main>
    </Fragment>
  );
};

export default MealsPage;

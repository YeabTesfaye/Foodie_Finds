import { Fragment, Suspense } from "react";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import MealsHeader from "@/components/meals/meals-header";
import { getMeals } from "@/lib/meals";

async function Meal() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}
const MealsPage = () => {
  return (
    <Fragment>
      <MealsHeader />
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Feaching meals .... </p>}
        >
          <Meal />
        </Suspense>
      </main>
    </Fragment>
  );
};

export default MealsPage;

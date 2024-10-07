import { Fragment } from "react";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import MealsHeader from "@/components/meals/meals-header";

const MealsPage = () => {
  return (
    <Fragment>
      <MealsHeader />
      <main className={classes.main}>
        <MealsGrid meals={[]} />
      </main>
    </Fragment>
  );
};

export default MealsPage;

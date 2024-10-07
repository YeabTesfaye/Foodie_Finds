import MealItem from "./meals-item";
import classes from "./meals-grid.module.css";
interface Meal {
  id: string;
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
}
interface Props {
  meals: Meal[];
}
export default function MealsGrid({ meals }: Props) {
  return (
    <ul className={classes.meal}>
      {meals.map((meal) => (
        <MealItem {...meal} />
      ))}
    </ul>
  );
}

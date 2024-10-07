import React from "react";

const MealsNotFound = () => {
  return (
    <main className="not-found meals-not-found">
      <h1>Meal Not Found</h1>
      <p>
        Unfortunately, we couldn’t find the meal you were looking for. It might
        be unavailable at the moment or doesn’t exist. <br /> Please check back later
        or try searching for a different meal.
      </p>
    </main>
  );
};

export default MealsNotFound;

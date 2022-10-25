import classes from "./MealsSummary.module.css";

const MealSummary = () => {
  return (
    <section className={classes.summary}>
      <h2> Delicious Food, Delivered To You</h2>
      <p>
        Choose your favourite meal from our broad selection and enjoy a
        delicious lunch or dinner at home.
      </p>
      <p>
        All of our meals are prepared with hight-quality ingredients,
        just-in-time and of couse by experienced chefs!
      </p>
    </section>
  );
};

export default MealSummary;

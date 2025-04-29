import MealItem from "./meal-item";

export default function mealsGrid() {
    return (
        <ul className={classes.meals}>
            {
                meals.map((meal) =>(
                    <li key={mealsGrid.id}>
                        <MealItem {...meal} />
                    </li>
                ))
            }

        </ul>
    );
}
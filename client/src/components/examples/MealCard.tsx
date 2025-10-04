import { MealCard } from "../MealCard";

export default function MealCardExample() {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
      <MealCard
        name="Grilled Chicken & Quinoa Bowl"
        mealType="Lunch"
        calories={450}
        protein={35}
        carbs={42}
        fats={12}
        prepTime={25}
      />
      <MealCard
        name="Overnight Oats with Berries"
        mealType="Breakfast"
        calories={320}
        protein={12}
        carbs={48}
        fats={8}
        prepTime={5}
      />
      <MealCard
        name="Salmon with Roasted Vegetables"
        mealType="Dinner"
        calories={520}
        protein={42}
        carbs={28}
        fats={24}
        prepTime={30}
      />
    </div>
  );
}

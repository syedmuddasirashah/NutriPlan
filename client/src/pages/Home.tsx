import { useState } from "react";
import { CalorieCalculator } from "@/components/CalorieCalculator";
import { MealCard } from "@/components/MealCard";
import { MacroProgress } from "@/components/MacroProgress";
import { ShoppingList } from "@/components/ShoppingList";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Apple } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Apple className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">NutriPlan</span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Meal Planning Tool</h1>
          <p className="text-muted-foreground">
            Create personalized meal plans based on your goals and preferences
          </p>
        </div>

        <Tabs defaultValue="planner" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8" data-testid="tabs-navigation">
            <TabsTrigger value="planner" data-testid="tab-planner">Plan Builder</TabsTrigger>
            <TabsTrigger value="meals" data-testid="tab-meals">My Meals</TabsTrigger>
            <TabsTrigger value="macros" data-testid="tab-macros">Macro Tracking</TabsTrigger>
            <TabsTrigger value="shopping" data-testid="tab-shopping">Shopping List</TabsTrigger>
          </TabsList>

          <TabsContent value="planner" className="space-y-6">
            <CalorieCalculator />
          </TabsContent>

          <TabsContent value="meals" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-6">Today's Meal Plan</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  name="Grilled Chicken & Quinoa Bowl"
                  mealType="Lunch"
                  calories={450}
                  protein={35}
                  carbs={42}
                  fats={12}
                  prepTime={25}
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
                <MealCard
                  name="Greek Yogurt Parfait"
                  mealType="Snack"
                  calories={180}
                  protein={15}
                  carbs={22}
                  fats={4}
                  prepTime={3}
                />
                <MealCard
                  name="Protein Smoothie"
                  mealType="Snack"
                  calories={250}
                  protein={25}
                  carbs={30}
                  fats={5}
                  prepTime={5}
                />
                <MealCard
                  name="Veggie Stir-Fry with Tofu"
                  mealType="Dinner Alternative"
                  calories={380}
                  protein={22}
                  carbs={45}
                  fats={14}
                  prepTime={20}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="macros" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-6">Daily Macro Targets</h2>
              <div className="bg-card rounded-lg border p-8">
                <div className="flex flex-wrap gap-8 justify-center">
                  <MacroProgress
                    label="Protein"
                    current={120}
                    target={150}
                    color="hsl(var(--chart-4))"
                  />
                  <MacroProgress
                    label="Carbs"
                    current={180}
                    target={200}
                    color="hsl(var(--chart-2))"
                  />
                  <MacroProgress
                    label="Fats"
                    current={55}
                    target={65}
                    color="hsl(var(--chart-3))"
                  />
                </div>
                <div className="mt-8 pt-8 border-t">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Total Calories</p>
                      <p className="text-2xl font-bold font-mono">1,720</p>
                      <p className="text-sm text-muted-foreground">of 2,000</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Remaining</p>
                      <p className="text-2xl font-bold font-mono text-primary">280</p>
                      <p className="text-sm text-muted-foreground">calories</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Progress</p>
                      <p className="text-2xl font-bold font-mono">86%</p>
                      <p className="text-sm text-muted-foreground">of daily goal</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="shopping" className="space-y-6">
            <ShoppingList />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

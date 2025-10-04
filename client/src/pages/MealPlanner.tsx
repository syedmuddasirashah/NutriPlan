import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowLeft, RefreshCw } from "lucide-react";

interface Meal {
  name: string;
  calories: number;
}

interface DayPlan {
  breakfast: Meal;
  lunch: Meal;
  dinner: Meal;
}

export default function MealPlanner() {
  const [formData, setFormData] = useState({
    goal: "",
    age: "",
    gender: "",
    dietType: "",
    days: "7",
    calories: "",
  });
  const [mealPlan, setMealPlan] = useState<DayPlan[] | null>(null);

  const generateMealPlan = () => {
    const targetCalories = parseInt(formData.calories) || 2000;
    const numDays = parseInt(formData.days) || 7;
    
    const mealOptions = {
      breakfast: [
        { name: "Overnight Oats with Berries", calories: 350 },
        { name: "Greek Yogurt Parfait", calories: 300 },
        { name: "Avocado Toast with Eggs", calories: 400 },
        { name: "Protein Smoothie Bowl", calories: 380 },
      ],
      lunch: [
        { name: "Grilled Chicken Salad", calories: 450 },
        { name: "Quinoa Buddha Bowl", calories: 480 },
        { name: "Turkey Wrap with Veggies", calories: 420 },
        { name: "Salmon Poke Bowl", calories: 500 },
      ],
      dinner: [
        { name: "Baked Salmon with Broccoli", calories: 550 },
        { name: "Chicken Stir-Fry", calories: 520 },
        { name: "Lean Beef with Sweet Potato", calories: 580 },
        { name: "Tofu Curry with Rice", calories: 500 },
      ],
    };

    const plan: DayPlan[] = [];
    for (let i = 0; i < numDays; i++) {
      plan.push({
        breakfast: mealOptions.breakfast[Math.floor(Math.random() * mealOptions.breakfast.length)],
        lunch: mealOptions.lunch[Math.floor(Math.random() * mealOptions.lunch.length)],
        dinner: mealOptions.dinner[Math.floor(Math.random() * mealOptions.dinner.length)],
      });
    }
    
    setMealPlan(plan);
  };

  const swapMeal = (dayIndex: number, mealType: 'breakfast' | 'lunch' | 'dinner') => {
    if (!mealPlan) return;
    
    const mealOptions = {
      breakfast: [
        { name: "Overnight Oats with Berries", calories: 350 },
        { name: "Greek Yogurt Parfait", calories: 300 },
        { name: "Avocado Toast with Eggs", calories: 400 },
        { name: "Protein Smoothie Bowl", calories: 380 },
      ],
      lunch: [
        { name: "Grilled Chicken Salad", calories: 450 },
        { name: "Quinoa Buddha Bowl", calories: 480 },
        { name: "Turkey Wrap with Veggies", calories: 420 },
        { name: "Salmon Poke Bowl", calories: 500 },
      ],
      dinner: [
        { name: "Baked Salmon with Broccoli", calories: 550 },
        { name: "Chicken Stir-Fry", calories: 520 },
        { name: "Lean Beef with Sweet Potato", calories: 580 },
        { name: "Tofu Curry with Rice", calories: 500 },
      ],
    };

    const newMeal = mealOptions[mealType][Math.floor(Math.random() * mealOptions[mealType].length)];
    const updatedPlan = [...mealPlan];
    updatedPlan[dayIndex] = {
      ...updatedPlan[dayIndex],
      [mealType]: newMeal,
    };
    setMealPlan(updatedPlan);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon" data-testid="button-back">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold">🥗 Meal Planner</h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Plan Your Meals</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="goal">Goal</Label>
                <Select value={formData.goal} onValueChange={(value) => setFormData({ ...formData, goal: value })}>
                  <SelectTrigger id="goal" data-testid="select-goal">
                    <SelectValue placeholder="Select goal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lose-weight">Lose Weight</SelectItem>
                    <SelectItem value="maintain">Maintain Weight</SelectItem>
                    <SelectItem value="gain-muscle">Gain Muscle</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="Your age"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  data-testid="input-age"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Select value={formData.gender} onValueChange={(value) => setFormData({ ...formData, gender: value })}>
                  <SelectTrigger id="gender" data-testid="select-gender">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="diet">Diet Type</Label>
                <Select value={formData.dietType} onValueChange={(value) => setFormData({ ...formData, dietType: value })}>
                  <SelectTrigger id="diet" data-testid="select-diet">
                    <SelectValue placeholder="Select diet type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="balanced">Balanced</SelectItem>
                    <SelectItem value="keto">Keto</SelectItem>
                    <SelectItem value="vegan">Vegan</SelectItem>
                    <SelectItem value="paleo">Paleo</SelectItem>
                    <SelectItem value="mediterranean">Mediterranean</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="days">Number of Days</Label>
                <Input
                  id="days"
                  type="number"
                  placeholder="7"
                  value={formData.days}
                  onChange={(e) => setFormData({ ...formData, days: e.target.value })}
                  data-testid="input-days"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="calories">Daily Calories</Label>
                <Input
                  id="calories"
                  type="number"
                  placeholder="2000"
                  value={formData.calories}
                  onChange={(e) => setFormData({ ...formData, calories: e.target.value })}
                  data-testid="input-calories"
                />
              </div>
            </div>

            <Button className="w-full" onClick={generateMealPlan} data-testid="button-generate">
              Generate Meal Plan
            </Button>
          </CardContent>
        </Card>

        {mealPlan && (
          <div className="space-y-6">
            {mealPlan.map((day, dayIndex) => (
              <Card key={dayIndex}>
                <CardHeader>
                  <CardTitle>Day {dayIndex + 1}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">🍳 Breakfast</h3>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => swapMeal(dayIndex, 'breakfast')}
                          data-testid={`button-swap-breakfast-${dayIndex}`}
                        >
                          <RefreshCw className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-sm" data-testid={`text-breakfast-${dayIndex}`}>{day.breakfast.name}</p>
                      <p className="text-sm text-muted-foreground font-mono">{day.breakfast.calories} cal</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">🥗 Lunch</h3>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => swapMeal(dayIndex, 'lunch')}
                          data-testid={`button-swap-lunch-${dayIndex}`}
                        >
                          <RefreshCw className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-sm" data-testid={`text-lunch-${dayIndex}`}>{day.lunch.name}</p>
                      <p className="text-sm text-muted-foreground font-mono">{day.lunch.calories} cal</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">🍲 Dinner</h3>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => swapMeal(dayIndex, 'dinner')}
                          data-testid={`button-swap-dinner-${dayIndex}`}
                        >
                          <RefreshCw className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-sm" data-testid={`text-dinner-${dayIndex}`}>{day.dinner.name}</p>
                      <p className="text-sm text-muted-foreground font-mono">{day.dinner.calories} cal</p>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t">
                    <p className="text-sm font-medium">
                      Total Daily Intake:{" "}
                      <span className="font-mono text-primary" data-testid={`text-total-${dayIndex}`}>
                        {day.breakfast.calories + day.lunch.calories + day.dinner.calories} cal
                      </span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-primary/10">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">💡 Tips</h3>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Drink plenty of water throughout the day</li>
                  <li>• Prep meals in advance for easier tracking</li>
                  <li>• Adjust portion sizes based on your hunger levels</li>
                  <li>• Include variety to get all essential nutrients</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
}

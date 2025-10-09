import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ToolsNav } from "@/components/ToolsNav";
import { ArrowLeft, RefreshCw } from "lucide-react";
import Footer from "@/components/Footer";

// --- AdBox Component ---
const AdBox = ({ height = "h-24", text = "Ad Placeholder" }) => (
  <div
    className={`w-full ${height} bg-gray-200 dark:bg-gray-700 flex items-center justify-center border border-dashed border-gray-400 text-gray-600 rounded-md my-6`}
  >
    {text}
  </div>
);

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

  const swapMeal = (dayIndex: number, mealType: "breakfast" | "lunch" | "dinner") => {
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
      {/* HEADER */}
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 md:gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon" data-testid="button-back">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-lg md:text-2xl font-bold">🥗 Meal Planner</h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden lg:block">
              <ToolsNav />
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-6">
        {/* Left Sidebar */}
        <div className="hidden lg:block w-64">
          <AdBox text="Sidebar Ad" height="h-80" />
        </div>

        {/* MAIN COLUMN */}
        <div className="flex-1">
          {/* Top Banner Ad */}
          <AdBox text="Top Banner Ad" height="h-20" />

          {/* FORM */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Plan Your Meals</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* FORM INPUTS (goal, age, gender, dietType, days, calories) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Goal */}
                <div className="space-y-2">
                  <Label htmlFor="goal">Goal</Label>
                  <Select
                    value={formData.goal}
                    onValueChange={(value) => setFormData({ ...formData, goal: value })}
                  >
                    <SelectTrigger id="goal">
                      <SelectValue placeholder="Select goal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lose-weight">Lose Weight</SelectItem>
                      <SelectItem value="maintain">Maintain Weight</SelectItem>
                      <SelectItem value="gain-muscle">Gain Muscle</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Age */}
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="Your age"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  />
                </div>

                {/* Gender */}
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select
                    value={formData.gender}
                    onValueChange={(value) => setFormData({ ...formData, gender: value })}
                  >
                    <SelectTrigger id="gender">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Diet Type */}
                <div className="space-y-2">
                  <Label htmlFor="diet">Diet Type</Label>
                  <Select
                    value={formData.dietType}
                    onValueChange={(value) => setFormData({ ...formData, dietType: value })}
                  >
                    <SelectTrigger id="diet">
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

                {/* Days */}
                <div className="space-y-2">
                  <Label htmlFor="days">Number of Days</Label>
                  <Input
                    id="days"
                    type="number"
                    placeholder="7"
                    value={formData.days}
                    onChange={(e) => setFormData({ ...formData, days: e.target.value })}
                  />
                </div>

                {/* Calories */}
                <div className="space-y-2">
                  <Label htmlFor="calories">Daily Calories</Label>
                  <Input
                    id="calories"
                    type="number"
                    placeholder="2000"
                    value={formData.calories}
                    onChange={(e) => setFormData({ ...formData, calories: e.target.value })}
                  />
                </div>
              </div>

              <Button className="w-full" onClick={generateMealPlan}>
                Generate Meal Plan
              </Button>
            </CardContent>
          </Card>

          {/* RESULTS + TIPS */}
          {mealPlan && (
            <div className="space-y-6">
              {mealPlan.map((day, dayIndex) => (
                <Card key={dayIndex}>
                  <CardHeader>
                    <CardTitle>Day {dayIndex + 1}</CardTitle>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {(["breakfast", "lunch", "dinner"] as const).map((mealType) => (
                      <div key={mealType} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">
                            {mealType === "breakfast" ? "🍳 Breakfast" : mealType === "lunch" ? "🥗 Lunch" : "🍲 Dinner"}
                          </h3>
                          <Button variant="ghost" size="sm" onClick={() => swapMeal(dayIndex, mealType)}>
                            <RefreshCw className="h-4 w-4" />
                          </Button>
                        </div>
                        <p className="text-sm">{day[mealType].name}</p>
                        <p className="text-sm text-muted-foreground font-mono">{day[mealType].calories} cal</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}

              {/* Tips Card */}
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

          {/* STATIC SEO CARD */}
          <Card className="p-6 bg-card rounded-lg border mt-6">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold">Meal Planner Guide</h2>
              <p>
                Plan your meals effectively! Use this planner to design a daily meal schedule based on your goals, diet, and preferences.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Balance protein, carbs, and fats</li>
                <li>Include a variety of fruits and vegetables</li>
                <li>Adjust portion sizes based on your activity level</li>
                <li>Stay hydrated</li>
              </ul>
              <p>
                For more meal planning ideas, visit our <Link href="/blog/meal-planning-tips">Meal Planning Tips Blog</Link>.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Right Sidebar */}
        <div className="hidden lg:block w-64">
          <AdBox text="Sidebar Ad" height="h-80" />
        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ToolsNav } from "@/components/ToolsNav";
import { ArrowLeft } from "lucide-react";

export default function CalorieCalculator() {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    weight: "",
    height: "",
    activity: "",
  });
  const [result, setResult] = useState<number | null>(null);

  const calculateCalories = () => {
    const age = parseInt(formData.age);
    const weight = parseFloat(formData.weight);
    const height = parseFloat(formData.height);

    let bmr = 0;
    if (formData.gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const activityMultipliers: Record<string, number> = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      "very-active": 1.9,
    };

    const multiplier = activityMultipliers[formData.activity] || 1.2;
    const totalCalories = Math.round(bmr * multiplier);

    setResult(totalCalories);
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
            <h1 className="text-lg md:text-2xl font-bold">⚡ Calorie Calculator</h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden lg:block">
              <ToolsNav />
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-6">
        {/* LEFT SIDE AD (Visible Placeholder) */}
        <div className="hidden lg:flex flex-col items-center w-1/5">
          <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 border border-dashed border-gray-400 flex items-center justify-center text-gray-600 text-sm">
            Ad Space 1 (Side)
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 space-y-8">
          {/* Top Banner Ad */}
          <div className="w-full h-20 bg-gray-200 dark:bg-gray-700 border border-dashed border-gray-400 flex items-center justify-center text-gray-600 text-sm">
            Ad Space 2 (Top)
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Calculate Your Daily Calories</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="Your age"
                    value={formData.age}
                    onChange={(e) =>
                      setFormData({ ...formData, age: e.target.value })
                    }
                    data-testid="input-age"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select
                    value={formData.gender}
                    onValueChange={(value) =>
                      setFormData({ ...formData, gender: value })
                    }
                  >
                    <SelectTrigger id="gender" data-testid="select-gender">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="weight">Weight (kg)</Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="Your weight"
                    value={formData.weight}
                    onChange={(e) =>
                      setFormData({ ...formData, weight: e.target.value })
                    }
                    data-testid="input-weight"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="height">Height (cm)</Label>
                  <Input
                    id="height"
                    type="number"
                    placeholder="Your height"
                    value={formData.height}
                    onChange={(e) =>
                      setFormData({ ...formData, height: e.target.value })
                    }
                    data-testid="input-height"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="activity">Activity Level</Label>
                  <Select
                    value={formData.activity}
                    onValueChange={(value) =>
                      setFormData({ ...formData, activity: value })
                    }
                  >
                    <SelectTrigger id="activity" data-testid="select-activity">
                      <SelectValue placeholder="Select activity level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sedentary">
                        Sedentary (little or no exercise)
                      </SelectItem>
                      <SelectItem value="light">
                        Light (exercise 1-3 days/week)
                      </SelectItem>
                      <SelectItem value="moderate">
                        Moderate (exercise 3-5 days/week)
                      </SelectItem>
                      <SelectItem value="active">
                        Active (exercise 6-7 days/week)
                      </SelectItem>
                      <SelectItem value="very-active">
                        Very Active (intense exercise daily)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button
                className="w-full"
                onClick={calculateCalories}
                data-testid="button-calculate"
              >
                Calculate
              </Button>
            </CardContent>
          </Card>

          {/* Mid Content Ad */}
          <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 border border-dashed border-gray-400 flex items-center justify-center text-gray-600 text-sm">
            Ad Space 3 (Mid Content)
          </div>

          {/* SEO & Informational Content */}
          <div className="bg-card rounded-lg border p-6 space-y-4">
            <h2 className="text-2xl font-bold">Optimize Your Calorie Intake</h2>
            <p className="text-muted-foreground">
              Understanding your daily calorie needs is the first step toward achieving your health goals.
              Use our <Link href="/meal-planner" className="text-blue-600 underline">Meal Planner</Link> 
              to create personalized meal plans that fit your lifestyle.
            </p>

            <h3 className="text-xl font-semibold">Why Calculate Your Calories?</h3>
            <p className="text-muted-foreground">
              Calculating calories helps you manage weight, improve fitness, and maintain energy throughout the day. 
              Pair this with our <Link href="/workout-generator" className="text-blue-600 underline">Workout Generator</Link> 
              to design a balanced fitness plan.
            </p>

            <h3 className="text-xl font-semibold">Tips for Effective Calorie Management</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Track your meals daily to stay within your target calories.</li>
              <li>Combine calorie tracking with nutrient-rich foods for better results.</li>
              <li>Adjust your intake based on activity level and goals.</li>
              <li>Check out our <Link href="/calorie-calculator" className="text-blue-600 underline">Calorie Calculator</Link> regularly.</li>
            </ul>

            <h3 className="text-xl font-semibold">Learn More</h3>
            <p className="text-muted-foreground">
              Explore other tools on NutriPlan to support your wellness journey, including 
              <Link href="/travel-budget" className="text-blue-600 underline">Travel Budget</Link> and 
              <Link href="/trip-itinerary" className="text-blue-600 underline">Trip Itinerary</Link>.
            </p>
          </div>

          {result !== null && (
            <Card className="bg-primary/10">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-semibold mb-4">
                  Your Daily Calorie Needs
                </h2>
                <div
                  className="text-6xl font-bold font-mono text-primary mb-4"
                  data-testid="text-result"
                >
                  {result}
                </div>
                <p className="text-xl mb-6">calories per day</p>
                <div className="text-left bg-card rounded-lg p-4 space-y-2 text-sm">
                  <p className="font-semibold">
                    Calculation Method: Mifflin-St Jeor Formula
                  </p>
                  <p className="text-muted-foreground">
                    This calculation estimates your Total Daily Energy
                    Expenditure (TDEE) based on your Basal Metabolic Rate (BMR)
                    and activity level.
                  </p>
                  <div className="pt-2 space-y-1">
                    <p>• To lose weight: Eat 500 calories less ({result - 500} cal/day)</p>
                    <p>• To maintain weight: Eat around {result} cal/day</p>
                    <p>• To gain weight: Eat 500 calories more ({result + 500} cal/day)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Footer Ad */}
          <div className="w-full h-20 bg-gray-200 dark:bg-gray-700 border border-dashed border-gray-400 flex items-center justify-center text-gray-600 text-sm">
            Ad Space 4 (Footer)
          </div>
        </div>

        {/* RIGHT SIDE AD */}
        <div className="hidden lg:flex flex-col items-center w-1/5">
          <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 border border-dashed border-gray-400 flex items-center justify-center text-gray-600 text-sm">
            Ad Space 5 (Side)
          </div>
        </div>
      </main>
    </div>
  );
}

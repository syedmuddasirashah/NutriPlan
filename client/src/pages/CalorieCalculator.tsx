import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ToolsNav } from "@/components/ToolsNav";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

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

    // Basic validation
    if (!age || !weight || !height || !formData.gender || !formData.activity) {
      // Optionally add some error handling or return early
      setResult(null);
      return;
    }

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

  // --- AdBox Component (Kept for Top/Side Ads) ---
  const AdBox = ({ height = "h-24", text = "Ad Placeholder" }) => (
    <div
      className={`w-full ${height} bg-gray-200 dark:bg-gray-700 flex items-center justify-center border border-dashed border-gray-400 text-gray-600 rounded-md my-6`}
    >
      {text}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header (No changes) */}
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 md:gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon">
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

      {/* Main layout (No changes to outer structure) */}
      <main className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-6">
        {/* Left Sidebar Ad (No changes) */}
        <div className="hidden lg:block w-64">
          <AdBox text="Sidebar Ad" height="h-80" />
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-8">
          {/* Top Banner Ad (No changes) */}
          <AdBox text="Top Banner Ad" height="h-20" />

          {/* Calculator Form (No changes) */}
          <Card>
            {/* ... Form Content ... */}
            <CardHeader>
              <CardTitle>Calculate Your Daily Calories</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    </SelectContent>
                  </Select>
                </div>

                {/* Weight */}
                <div className="space-y-2">
                  <Label htmlFor="weight">Weight (kg)</Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="Your weight"
                    value={formData.weight}
                    onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                  />
                </div>

                {/* Height */}
                <div className="space-y-2">
                  <Label htmlFor="height">Height (cm)</Label>
                  <Input
                    id="height"
                    type="number"
                    placeholder="Your height"
                    value={formData.height}
                    onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                  />
                </div>

                {/* Activity Level */}
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="activity">Activity Level</Label>
                  <Select
                    value={formData.activity}
                    onValueChange={(value) => setFormData({ ...formData, activity: value })}
                  >
                    <SelectTrigger id="activity">
                      <SelectValue placeholder="Select activity level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sedentary">Sedentary (little or no exercise)</SelectItem>
                      <SelectItem value="light">Light (exercise 1-3 days/week)</SelectItem>
                      <SelectItem value="moderate">Moderate (exercise 3-5 days/week)</SelectItem>
                      <SelectItem value="active">Active (exercise 6-7 days/week)</SelectItem>
                      <SelectItem value="very-active">Very Active (intense exercise daily)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button className="w-full" onClick={calculateCalories}>
                Calculate
              </Button>
            </CardContent>
          </Card>

          {/* REMOVED: Mid-Content Ad was here. */}

          {/* Results + Tips (Conditional) */}
          {result !== null && (
            <div className="space-y-6">
              {/* Result Card (No changes) */}
              <Card className="bg-primary/10">
                {/* ... Result Content ... */}
                <CardContent className="p-6 text-center space-y-4">
                  <h2 className="text-2xl font-semibold">Your Daily Calorie Needs</h2>
                  <div className="text-6xl font-bold font-mono text-primary">{result}</div>
                  <p className="text-muted-foreground">calories per day</p>
                  <div className="text-left bg-card rounded-lg p-4 space-y-2 text-sm">
                    <p className="font-semibold">Calculation Method: Mifflin-St Jeor Formula</p>
                    <p className="text-muted-foreground">
                      This calculation estimates your Total Daily Energy Expenditure (TDEE) based on BMR and activity level.
                    </p>
                    <div className="pt-2 space-y-1">
                      <p>• To lose weight: Eat 500 calories less ({result - 500} cal/day)</p>
                      <p>• To maintain weight: Eat around {result} cal/day</p>
                      <p>• To gain weight: Eat 500 calories more ({result + 500} cal/day)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tips Card (No changes) */}
              <Card className="bg-primary/10">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">💡 Tips</h3>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Track your meals daily to stay within your target calories</li>
                    <li>• Combine calorie tracking with nutrient-rich foods for better results</li>
                    <li>• Adjust your intake based on activity level and goals</li>
                    <li>
                      • Pair your calorie plan with our{" "}
                      <Link href="/meal-planner" className="text-blue-600 underline">
                        Meal Planner
                      </Link>{" "}
                      for personalized meal suggestions
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          )}

          {/* NEW: STATIC SEO CARD (Replaces the Footer Ad) */}
          <Card className="p-6 bg-card rounded-lg border mt-6">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold">Calorie Calculator Guide</h2>
              <p>
                Use this tool to estimate your Total Daily Energy Expenditure (TDEE). This is the number of calories you burn daily, taking into account your Basal Metabolic Rate (BMR) and your activity level.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>BMR is the minimum energy required to sustain life at rest.</li>
                <li>TDEE is the total calories burned from BMR, digestion, and physical activity.</li>
                <li>Adjust your food intake based on your goal: deficit for weight loss, surplus for gain.</li>
              </ul>
              <p>
                For personalized nutrition advice, consult a registered dietitian.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Right Sidebar Ad (No changes) */}
        <div className="hidden lg:block w-64">
          <AdBox text="Sidebar Ad" height="h-80" />
        </div>
      </main>

      {/* Global Footer (No changes) */}
      <Footer />
    </div>
  );
}
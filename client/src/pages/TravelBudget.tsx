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

interface BudgetBreakdown {
  accommodation: number;
  food: number;
  transportation: number;
  activities: number;
  miscellaneous: number;
}

interface BudgetResult {
  daily: BudgetBreakdown;
  total: BudgetBreakdown;
  dailyTotal: number;
  tripTotal: number;
}

export default function TravelBudget() {
  const [formData, setFormData] = useState({
    tripLength: "",
    destinationType: "",
    travelers: "",
  });
  const [budget, setBudget] = useState<BudgetResult | null>(null);

  const calculateBudget = () => {
    const days = parseInt(formData.tripLength) || 7;
    const travelers = parseInt(formData.travelers) || 1;

    const budgetRates: Record<string, BudgetBreakdown> = {
      budget: { accommodation: 30, food: 25, transportation: 15, activities: 20, miscellaneous: 10 },
      standard: { accommodation: 80, food: 50, transportation: 30, activities: 40, miscellaneous: 20 },
      luxury: { accommodation: 200, food: 100, transportation: 80, activities: 100, miscellaneous: 50 },
    };

    const daily = budgetRates[formData.destinationType] || budgetRates["standard"];
    const dailyTotal = Object.values(daily).reduce((sum, val) => sum + val, 0) * travelers;

    const total: BudgetBreakdown = {
      accommodation: daily.accommodation * days * travelers,
      food: daily.food * days * travelers,
      transportation: daily.transportation * days * travelers,
      activities: daily.activities * days * travelers,
      miscellaneous: daily.miscellaneous * days * travelers,
    };

    setBudget({ daily, total, dailyTotal, tripTotal: dailyTotal * days });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 md:gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon" data-testid="button-back">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-lg md:text-2xl font-bold">✈️ Travel Budget</h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden lg:block">
              <ToolsNav />
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex justify-center">
        <main className="max-w-4xl mx-auto px-4 py-8 space-y-8 flex-1">
          {/* Top Banner Ad */}
          <div className="w-full h-20 bg-gray-200 dark:bg-gray-700 flex items-center justify-center border border-dashed border-gray-400 text-gray-600 rounded-lg">
            Top Banner Ad Placeholder
          </div>

          {/* Budget Form */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Estimate Your Travel Budget</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="tripLength">Trip Length (days)</Label>
                  <Input
                    id="tripLength"
                    type="number"
                    placeholder="7"
                    value={formData.tripLength}
                    onChange={(e) => setFormData({ ...formData, tripLength: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="destinationType">Destination Type</Label>
                  <Select
                    value={formData.destinationType}
                    onValueChange={(value) => setFormData({ ...formData, destinationType: value })}
                  >
                    <SelectTrigger id="destinationType">
                      <SelectValue placeholder="Select destination type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="budget">Budget (Hostels, Street Food)</SelectItem>
                      <SelectItem value="standard">Standard (Mid-range Hotels, Restaurants)</SelectItem>
                      <SelectItem value="luxury">Luxury (5-star Hotels, Fine Dining)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="travelers">Number of Travelers</Label>
                  <Input
                    id="travelers"
                    type="number"
                    placeholder="1"
                    value={formData.travelers}
                    onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                  />
                </div>
              </div>

              <Button className="w-full" onClick={calculateBudget}>
                Calculate Budget
              </Button>
            </CardContent>
          </Card>

          {/* Mid-Content Ad */}
          <div className="w-full h-40 bg-gray-200 dark:bg-gray-700 flex items-center justify-center border border-dashed border-gray-400 text-gray-600 rounded-lg">
            Mid-Content Ad Placeholder
          </div>

          {/* Results (only appears after generate) */}
          {budget && (
            <div className="space-y-6">
              <Card className="bg-primary/10">
                <CardContent className="p-8 text-center">
                  <h2 className="text-xl font-semibold mb-2">Estimated Trip Total</h2>
                  <div className="text-5xl font-bold font-mono text-primary">
                    ${budget.tripTotal.toLocaleString()}
                  </div>
                  <p className="text-muted-foreground mt-2">
                    ${budget.dailyTotal.toLocaleString()} per day
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cost Breakdown</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "🏨 Accommodation", key: "accommodation" },
                      { label: "🍽️ Food", key: "food" },
                      { label: "🚗 Transportation", key: "transportation" },
                      { label: "🎭 Activities", key: "activities" },
                      { label: "💰 Miscellaneous", key: "miscellaneous" },
                    ].map((item) => (
                      <div
                        key={item.key}
                        className={`p-4 bg-muted rounded-lg ${item.key === "miscellaneous" ? "md:col-span-2" : ""}`}
                      >
                        <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                        <p className="text-2xl font-bold font-mono">
                          ${budget.total[item.key as keyof BudgetBreakdown].toLocaleString()}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          ${budget.daily[item.key as keyof BudgetBreakdown]}/day
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-accent/10">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">💡 Budget Tips</h3>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Book flights and accommodation early for better deals</li>
                    <li>• Consider travel insurance for unexpected events</li>
                    <li>• Use public transportation instead of taxis</li>
                    <li>• Allocate 10–20% extra for emergencies</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          )}

          {/* SEO / Informational Content (always visible, normal formatting) */}
          <Card className="p-6 bg-card rounded-lg border">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold">Travel Budget Planning Guide</h2>
              <p>
                Planning a trip? Our <Link href="/travel-budget">Travel Budget Calculator</Link> helps you estimate your daily and total expenses so you can travel smart and stay within your budget.
              </p>
              <h3 className="text-xl font-semibold">Tips for Smart Travelers</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Compare prices for flights, hotels, and local activities</li>
                <li>Opt for budget or mid-range accommodations if possible</li>
                <li>Track daily spending to avoid overspending</li>
                <li>Learn about local transportation options and costs</li>
              </ul>
              <p>
                Read more on our <Link href="/blog/travel-tips">travel tips blog</Link> for expert advice on planning trips and maximizing your travel budget.
              </p>
            </CardContent>
          </Card>

          {/* Footer Ad */}
          <div className="w-full h-20 bg-gray-200 dark:bg-gray-700 flex items-center justify-center border border-dashed border-gray-400 text-gray-600 rounded-lg">
            Footer Ad Placeholder
          </div>
        </main>
      </div>
    </div>
  );
}

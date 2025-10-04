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
      budget: {
        accommodation: 30,
        food: 25,
        transportation: 15,
        activities: 20,
        miscellaneous: 10,
      },
      standard: {
        accommodation: 80,
        food: 50,
        transportation: 30,
        activities: 40,
        miscellaneous: 20,
      },
      luxury: {
        accommodation: 200,
        food: 100,
        transportation: 80,
        activities: 100,
        miscellaneous: 50,
      },
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

    setBudget({
      daily,
      total,
      dailyTotal,
      tripTotal: dailyTotal * days,
    });
  };

  return (
    <div className="min-h-screen bg-background">
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

      <main className="max-w-4xl mx-auto px-4 py-8">
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
                  data-testid="input-trip-length"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="destinationType">Destination Type</Label>
                <Select value={formData.destinationType} onValueChange={(value) => setFormData({ ...formData, destinationType: value })}>
                  <SelectTrigger id="destinationType" data-testid="select-destination">
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
                  data-testid="input-travelers"
                />
              </div>
            </div>

            <Button className="w-full" onClick={calculateBudget} data-testid="button-calculate">
              Calculate Budget
            </Button>
          </CardContent>
        </Card>

        {budget && (
          <div className="space-y-6">
            <Card className="bg-primary/10">
              <CardContent className="p-8 text-center">
                <h2 className="text-xl font-semibold mb-2">Estimated Trip Total</h2>
                <div className="text-5xl font-bold font-mono text-primary" data-testid="text-total">
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
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">🏨 Accommodation</p>
                    <p className="text-2xl font-bold font-mono" data-testid="text-accommodation">
                      ${budget.total.accommodation.toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground">${budget.daily.accommodation}/day</p>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">🍽️ Food</p>
                    <p className="text-2xl font-bold font-mono" data-testid="text-food">
                      ${budget.total.food.toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground">${budget.daily.food}/day</p>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">🚗 Transportation</p>
                    <p className="text-2xl font-bold font-mono" data-testid="text-transportation">
                      ${budget.total.transportation.toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground">${budget.daily.transportation}/day</p>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">🎭 Activities</p>
                    <p className="text-2xl font-bold font-mono" data-testid="text-activities">
                      ${budget.total.activities.toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground">${budget.daily.activities}/day</p>
                  </div>

                  <div className="p-4 bg-muted rounded-lg md:col-span-2">
                    <p className="text-sm text-muted-foreground mb-1">💰 Miscellaneous</p>
                    <p className="text-2xl font-bold font-mono" data-testid="text-miscellaneous">
                      ${budget.total.miscellaneous.toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground">${budget.daily.miscellaneous}/day</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-accent/10">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">💡 Budget Tips</h3>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Book flights and accommodation in advance for better deals</li>
                  <li>• Consider travel insurance for peace of mind</li>
                  <li>• Use local transportation instead of taxis when possible</li>
                  <li>• Set aside 10-20% extra for unexpected expenses</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
}

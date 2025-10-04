import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Calculator, ArrowRight, ArrowLeft } from "lucide-react";

export function CalorieCalculator() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    height: "",
    weight: "",
    activityLevel: "",
    goal: "",
    dietType: "",
    mealsPerDay: 3,
    protein: 30,
    carbs: 40,
    fats: 30,
  });

  const totalSteps = 4;

  const calculateCalories = () => {
    console.log("Calculating calories with:", formData);
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-primary" />
            <CardTitle>Create Your Personalized Plan</CardTitle>
          </div>
          <Badge variant="secondary" data-testid="text-step-indicator">
            Step {step} of {totalSteps}
          </Badge>
        </div>
        <div className="mt-4 h-2 bg-secondary rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Tell us about yourself</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="Enter your age"
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
                <Label htmlFor="height">Height (cm)</Label>
                <Input
                  id="height"
                  type="number"
                  placeholder="Enter height"
                  value={formData.height}
                  onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                  data-testid="input-height"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weight">Current Weight (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="Enter weight"
                  value={formData.weight}
                  onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                  data-testid="input-weight"
                />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Your Activity & Goals</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="activity">Activity Level</Label>
                <Select value={formData.activityLevel} onValueChange={(value) => setFormData({ ...formData, activityLevel: value })}>
                  <SelectTrigger id="activity" data-testid="select-activity">
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
              <div className="space-y-2">
                <Label htmlFor="goal">Your Goal</Label>
                <Select value={formData.goal} onValueChange={(value) => setFormData({ ...formData, goal: value })}>
                  <SelectTrigger id="goal" data-testid="select-goal">
                    <SelectValue placeholder="Select your goal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lose">Lose Weight</SelectItem>
                    <SelectItem value="maintain">Maintain Weight</SelectItem>
                    <SelectItem value="gain">Gain Weight</SelectItem>
                    <SelectItem value="muscle">Build Muscle</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Diet Preferences</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="diet">Preferred Diet</Label>
                <Select value={formData.dietType} onValueChange={(value) => setFormData({ ...formData, dietType: value })}>
                  <SelectTrigger id="diet" data-testid="select-diet">
                    <SelectValue placeholder="Select diet type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="anything">Anything</SelectItem>
                    <SelectItem value="keto">Keto</SelectItem>
                    <SelectItem value="paleo">Paleo</SelectItem>
                    <SelectItem value="vegan">Vegan</SelectItem>
                    <SelectItem value="vegetarian">Vegetarian</SelectItem>
                    <SelectItem value="mediterranean">Mediterranean</SelectItem>
                    <SelectItem value="low-carb">Low Carb</SelectItem>
                    <SelectItem value="high-protein">High Protein</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Meals Per Day: {formData.mealsPerDay}</Label>
                <Slider
                  value={[formData.mealsPerDay]}
                  onValueChange={(value) => setFormData({ ...formData, mealsPerDay: value[0] })}
                  min={2}
                  max={6}
                  step={1}
                  data-testid="slider-meals"
                />
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Macro Targets</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Protein</Label>
                  <span className="text-sm font-mono text-muted-foreground">{formData.protein}%</span>
                </div>
                <Slider
                  value={[formData.protein]}
                  onValueChange={(value) => setFormData({ ...formData, protein: value[0] })}
                  min={10}
                  max={50}
                  step={5}
                  data-testid="slider-protein"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Carbs</Label>
                  <span className="text-sm font-mono text-muted-foreground">{formData.carbs}%</span>
                </div>
                <Slider
                  value={[formData.carbs]}
                  onValueChange={(value) => setFormData({ ...formData, carbs: value[0] })}
                  min={10}
                  max={60}
                  step={5}
                  data-testid="slider-carbs"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Fats</Label>
                  <span className="text-sm font-mono text-muted-foreground">{formData.fats}%</span>
                </div>
                <Slider
                  value={[formData.fats]}
                  onValueChange={(value) => setFormData({ ...formData, fats: value[0] })}
                  min={10}
                  max={50}
                  step={5}
                  data-testid="slider-fats"
                />
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Total: <span className="font-mono font-medium text-foreground">{formData.protein + formData.carbs + formData.fats}%</span>
                  {formData.protein + formData.carbs + formData.fats !== 100 && (
                    <span className="ml-2 text-destructive">(Should equal 100%)</span>
                  )}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={() => setStep(Math.max(1, step - 1))}
            disabled={step === 1}
            data-testid="button-previous"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          {step < totalSteps ? (
            <Button
              onClick={() => setStep(Math.min(totalSteps, step + 1))}
              data-testid="button-next"
            >
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={calculateCalories} data-testid="button-generate-plan">
              Generate Plan
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowLeft } from "lucide-react";

interface Exercise {
  name: string;
  sets: string;
  reps: string;
}

interface WorkoutDay {
  day: string;
  focus: string;
  exercises: Exercise[];
}

export default function WorkoutGenerator() {
  const [formData, setFormData] = useState({
    goal: "",
    daysPerWeek: "",
    level: "",
  });
  const [workoutPlan, setWorkoutPlan] = useState<WorkoutDay[] | null>(null);

  const generateWorkout = () => {
    const days = parseInt(formData.daysPerWeek) || 3;
    
    const workouts: Record<string, WorkoutDay[]> = {
      "strength": [
        {
          day: "Monday",
          focus: "Upper Body",
          exercises: [
            { name: "Bench Press", sets: "4", reps: "8-10" },
            { name: "Rows", sets: "4", reps: "10-12" },
            { name: "Shoulder Press", sets: "3", reps: "10-12" },
            { name: "Pull-ups", sets: "3", reps: "8-10" },
          ],
        },
        {
          day: "Wednesday",
          focus: "Lower Body",
          exercises: [
            { name: "Squats", sets: "4", reps: "8-10" },
            { name: "Deadlifts", sets: "3", reps: "6-8" },
            { name: "Lunges", sets: "3", reps: "12 each leg" },
            { name: "Leg Curls", sets: "3", reps: "12-15" },
          ],
        },
        {
          day: "Friday",
          focus: "Full Body",
          exercises: [
            { name: "Clean and Press", sets: "3", reps: "8-10" },
            { name: "Romanian Deadlifts", sets: "3", reps: "10-12" },
            { name: "Dips", sets: "3", reps: "10-12" },
            { name: "Plank", sets: "3", reps: "60 sec" },
          ],
        },
      ],
      "cardio": [
        {
          day: "Monday",
          focus: "HIIT",
          exercises: [
            { name: "Burpees", sets: "5", reps: "30 sec" },
            { name: "Mountain Climbers", sets: "5", reps: "30 sec" },
            { name: "Jump Rope", sets: "5", reps: "60 sec" },
            { name: "Rest", sets: "5", reps: "60 sec" },
          ],
        },
        {
          day: "Wednesday",
          focus: "Endurance",
          exercises: [
            { name: "Running", sets: "1", reps: "30 min" },
            { name: "Cycling", sets: "1", reps: "20 min" },
          ],
        },
        {
          day: "Friday",
          focus: "Interval Training",
          exercises: [
            { name: "Sprints", sets: "8", reps: "30 sec" },
            { name: "Walking", sets: "8", reps: "90 sec" },
            { name: "Cool Down Jog", sets: "1", reps: "10 min" },
          ],
        },
      ],
      "flexibility": [
        {
          day: "Monday",
          focus: "Yoga Flow",
          exercises: [
            { name: "Sun Salutations", sets: "3", reps: "5 rounds" },
            { name: "Warrior Poses", sets: "2", reps: "Hold 30 sec" },
            { name: "Child's Pose", sets: "1", reps: "60 sec" },
          ],
        },
        {
          day: "Wednesday",
          focus: "Stretching",
          exercises: [
            { name: "Hamstring Stretch", sets: "3", reps: "30 sec each" },
            { name: "Quad Stretch", sets: "3", reps: "30 sec each" },
            { name: "Shoulder Stretch", sets: "3", reps: "30 sec each" },
          ],
        },
        {
          day: "Friday",
          focus: "Mobility",
          exercises: [
            { name: "Hip Circles", sets: "3", reps: "10 each way" },
            { name: "Arm Circles", sets: "3", reps: "15 each way" },
            { name: "Cat-Cow Stretch", sets: "3", reps: "10 reps" },
          ],
        },
      ],
    };

    const selectedWorkouts = workouts[formData.goal] || workouts["strength"];
    setWorkoutPlan(selectedWorkouts.slice(0, days));
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
            <h1 className="text-2xl font-bold">🏋️ Workout Generator</h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Generate Your Workout Plan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="goal">Fitness Goal</Label>
                <Select value={formData.goal} onValueChange={(value) => setFormData({ ...formData, goal: value })}>
                  <SelectTrigger id="goal" data-testid="select-goal">
                    <SelectValue placeholder="Select your fitness goal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="strength">Build Strength</SelectItem>
                    <SelectItem value="cardio">Improve Cardio</SelectItem>
                    <SelectItem value="flexibility">Increase Flexibility</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="days">Days Per Week</Label>
                <Select value={formData.daysPerWeek} onValueChange={(value) => setFormData({ ...formData, daysPerWeek: value })}>
                  <SelectTrigger id="days" data-testid="select-days">
                    <SelectValue placeholder="How many days can you workout?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2">2 days</SelectItem>
                    <SelectItem value="3">3 days</SelectItem>
                    <SelectItem value="4">4 days</SelectItem>
                    <SelectItem value="5">5 days</SelectItem>
                    <SelectItem value="6">6 days</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="level">Fitness Level</Label>
                <Select value={formData.level} onValueChange={(value) => setFormData({ ...formData, level: value })}>
                  <SelectTrigger id="level" data-testid="select-level">
                    <SelectValue placeholder="Select your level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button className="w-full" onClick={generateWorkout} data-testid="button-generate">
              Generate Workout Plan
            </Button>
          </CardContent>
        </Card>

        {workoutPlan && (
          <div className="space-y-6">
            {workoutPlan.map((workout, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>
                    {workout.day} - {workout.focus}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {workout.exercises.map((exercise, exIndex) => (
                      <div key={exIndex} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                        <div>
                          <p className="font-semibold" data-testid={`text-exercise-${index}-${exIndex}`}>
                            {exercise.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {exercise.sets} sets × {exercise.reps}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-primary/10">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">💪 Tips</h3>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Always warm up for 5-10 minutes before starting</li>
                  <li>• Focus on proper form over heavy weights</li>
                  <li>• Rest 48 hours between training the same muscle group</li>
                  <li>• Stay hydrated and fuel your body properly</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
}

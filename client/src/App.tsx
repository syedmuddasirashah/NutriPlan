import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import HomePage from "@/pages/HomePage";
import MealPlanner from "@/pages/MealPlanner";
import CalorieCalculator from "@/pages/CalorieCalculator";
import WorkoutGenerator from "@/pages/WorkoutGenerator";
import TravelBudget from "@/pages/TravelBudget";
import TripItinerary from "@/pages/TripItinerary";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/meal-planner" component={MealPlanner} />
      <Route path="/calorie-calculator" component={CalorieCalculator} />
      <Route path="/workout-generator" component={WorkoutGenerator} />
      <Route path="/travel-budget" component={TravelBudget} />
      <Route path="/trip-itinerary" component={TripItinerary} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

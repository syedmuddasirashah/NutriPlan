import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";

// Import all your pages
import HomePage from "@/pages/HomePage";
import About from "@/pages/About";
import Privacy from "@/pages/Privacy";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
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
      <Route path="/about" component={About} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/contact" component={Contact} />
      <Route path="/blog" component={Blog} />
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

import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { UtensilsCrossed, Zap, Dumbbell, Plane, MapPin } from "lucide-react";

const tools = [
  { path: "/meal-planner", icon: UtensilsCrossed, label: "Meal Planner" },
  { path: "/calorie-calculator", icon: Zap, label: "Calories" },
  { path: "/workout-generator", icon: Dumbbell, label: "Workout" },
  { path: "/travel-budget", icon: Plane, label: "Budget" },
  { path: "/trip-itinerary", icon: MapPin, label: "Itinerary" },
];

export function ToolsNav() {
  const [location] = useLocation();

  return (
    <nav className="flex items-center gap-1">
      {tools.map((tool) => {
        const isActive = location === tool.path;
        const Icon = tool.icon;
        
        return (
          <Link key={tool.path} href={tool.path}>
            <Button
              variant={isActive ? "secondary" : "ghost"}
              size="sm"
              className="gap-2"
              data-testid={`nav-${tool.path.replace('/', '')}`}
            >
              <Icon className="h-4 w-4" />
              <span className="hidden md:inline">{tool.label}</span>
            </Button>
          </Link>
        );
      })}
    </nav>
  );
}

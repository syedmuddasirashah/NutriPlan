import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ToolsNav } from "@/components/ToolsNav";
import { UtensilsCrossed, Zap, Dumbbell, Plane, MapPin } from "lucide-react";

const tools = [
  {
    id: "meal-planner",
    name: "Meal Planner",
    icon: UtensilsCrossed,
    emoji: "🥗",
    path: "/meal-planner",
    color: "from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30",
  },
  {
    id: "calorie-calculator",
    name: "Calorie Calculator",
    icon: Zap,
    emoji: "⚡",
    path: "/calorie-calculator",
    color: "from-yellow-100 to-amber-100 dark:from-yellow-900/30 dark:to-amber-900/30",
  },
  {
    id: "workout-generator",
    name: "Workout Generator",
    icon: Dumbbell,
    emoji: "🏋️",
    path: "/workout-generator",
    color: "from-red-100 to-rose-100 dark:from-red-900/30 dark:to-rose-900/30",
  },
  {
    id: "travel-budget",
    name: "Travel Budget",
    icon: Plane,
    emoji: "✈️",
    path: "/travel-budget",
    color: "from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30",
  },
  {
    id: "trip-itinerary",
    name: "Trip Itinerary",
    icon: MapPin,
    emoji: "🗺️",
    path: "/trip-itinerary",
    color: "from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <Link href="/">
            <h1 className="text-xl md:text-2xl font-bold cursor-pointer hover-elevate active-elevate-2 px-2 py-1 rounded-md">My Tools</h1>
          </Link>
          <div className="flex items-center gap-2">
            <ToolsNav />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Choose Your Tool</h2>
          <p className="text-xl text-muted-foreground">
            Select from our collection of helpful tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link key={tool.id} href={tool.path}>
              <Card className="cursor-pointer hover-elevate active-elevate-2 transition-all duration-200 overflow-hidden h-full">
                <CardContent className={`p-8 bg-gradient-to-br ${tool.color}`}>
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="text-6xl" data-testid={`emoji-${tool.id}`}>
                      {tool.emoji}
                    </div>
                    <h3 className="text-2xl font-semibold" data-testid={`text-${tool.id}`}>
                      {tool.name}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ToolsNav } from "@/components/ToolsNav";
import { Instagram, Twitter, Facebook } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Helmet } from "react-helmet";

const tools = [
  {
    id: "meal-planner",
    name: "Meal Planner",
    emoji: "🥗",
    path: "/meal-planner",
    color: "from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30",
  },
  {
    id: "calorie-calculator",
    name: "Calorie Calculator",
    emoji: "⚡",
    path: "/calorie-calculator",
    color: "from-yellow-100 to-amber-100 dark:from-yellow-900/30 dark:to-amber-900/30",
  },
  {
    id: "workout-generator",
    name: "Workout Generator",
    emoji: "🏋️",
    path: "/workout-generator",
    color: "from-red-100 to-rose-100 dark:from-red-900/30 dark:to-rose-900/30",
  },
  {
    id: "travel-budget",
    name: "Travel Budget",
    emoji: "✈️",
    path: "/travel-budget",
    color: "from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30",
  },
  {
    id: "trip-itinerary",
    name: "Trip Itinerary",
    emoji: "🗺️",
    path: "/trip-itinerary",
    color: "from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>LifePlanner.fit - Your Personal Fitness & Travel Tools</title>
        <meta
          name="description"
          content="LifePlanner.fit helps you plan meals, track calories, generate workouts, manage travel budgets, and create trip itineraries easily."
        />
        <meta
          name="keywords"
          content="meal planner, calorie calculator, workout generator, travel budget, trip itinerary, LifePlanner.fit"
        />
      </Helmet>

      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <h1
              className="text-xl md:text-2xl font-bold cursor-pointer px-2 py-1 rounded-md transition-transform duration-200 hover:scale-105"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <span style={{ color: "#27AE60" }}>Life</span>
              <span style={{ color: "#333" }}>Planner.fit</span>
            </h1>
          </Link>

          {/* Right tools */}
          <div className="flex items-center gap-2">
            <ToolsNav />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Top Tabs */}
      <div className="bg-card border-b">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <Tabs defaultValue="home" className="w-full">
            <TabsList className="flex overflow-x-auto gap-2 no-scrollbar justify-center sm:justify-start">
              <TabsTrigger value="home">
                <Link href="/">Home</Link>
              </TabsTrigger>
              <TabsTrigger value="about">
                <Link href="/about">About</Link>
              </TabsTrigger>
              <TabsTrigger value="privacy">
                <Link href="/privacy">Privacy</Link>
              </TabsTrigger>
              <TabsTrigger value="contact">
                <Link href="/contact">Contact</Link>
              </TabsTrigger>
              <TabsTrigger value="blog">
                <Link href="/blog">Blog</Link>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Banner Ad */}
          <div className="w-full mb-8 h-20 bg-gray-200 dark:bg-gray-700 flex items-center justify-center border border-dashed border-gray-400 text-gray-600">
            Banner Ad Placeholder
          </div>

          {/* Tool Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {tools.map((tool) => (
              <Link key={tool.id} href={tool.path}>
                <Card className="cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-200 overflow-hidden h-full">
                  <CardContent className={`p-8 bg-gradient-to-br ${tool.color}`}>
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="text-6xl">{tool.emoji}</div>
                      <h3 className="text-2xl font-semibold">{tool.name}</h3>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Mid-Content Ad */}
          <div className="w-full my-12 h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center border border-dashed border-gray-400 text-gray-600">
            Mid-Content Ad Placeholder
          </div>

          {/* SEO Text Section */}
          <section className="max-w-3xl mx-auto text-center mt-12 px-2 sm:px-0 space-y-6">
            <h2 className="text-3xl font-bold">Welcome to LifePlanner.fit</h2>
            <p>
              LifePlanner.fit is your all-in-one solution for{" "}
              <Link href="/meal-planner" className="text-blue-600 underline">
                meal planning
              </Link>
              ,{" "}
              <Link href="/calorie-calculator" className="text-blue-600 underline">
                calorie tracking
              </Link>
              ,{" "}
              <Link href="/workout-generator" className="text-blue-600 underline">
                custom workouts
              </Link>
              , and travel management.
            </p>
            <h3 className="text-2xl font-semibold">Plan Your Fitness Goals</h3>
            <p>Create personalized meal plans, track your daily calorie intake, and generate workouts suited to your needs.</p>
            <h3 className="text-2xl font-semibold">Organize Your Travel</h3>
            <p>Manage travel budgets and design trip itineraries efficiently to save time and money.</p>
            <p>
              Discover more tools and{" "}
              <Link href="/blog" className="text-blue-600 underline">
                read our blog
              </Link>{" "}
              for tips on nutrition, fitness, and travel.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4 flex-wrap justify-center md:justify-start">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/blog">Blog</Link>
          </div>
          <div className="flex gap-4 text-2xl mt-2 md:mt-0">
            <Instagram />
            <Twitter />
            <Facebook />
          </div>
          <div className="mt-2 md:mt-0 text-sm text-muted-foreground text-center md:text-left">
            © 2025 LifePlanner.fit. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

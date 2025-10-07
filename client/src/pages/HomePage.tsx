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
    color:
      "from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30",
  },
  {
    id: "calorie-calculator",
    name: "Calorie Calculator",
    emoji: "⚡",
    path: "/calorie-calculator",
    color:
      "from-yellow-100 to-amber-100 dark:from-yellow-900/30 dark:to-amber-900/30",
  },
  {
    id: "workout-generator",
    name: "Workout Generator",
    emoji: "🏋️",
    path: "/workout-generator",
    color:
      "from-red-100 to-rose-100 dark:from-red-900/30 dark:to-rose-900/30",
  },
  {
    id: "travel-budget",
    name: "Travel Budget",
    emoji: "✈️",
    path: "/travel-budget",
    color:
      "from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30",
  },
  {
    id: "trip-itinerary",
    name: "Trip Itinerary",
    emoji: "🗺️",
    path: "/trip-itinerary",
    color:
      "from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col overflow-x-hidden">
      <Helmet>
        <title>LifePlanner.fit - Your Personal Fitness & Travel Tools</title>
        <meta
          name="description"
          content="LifePlanner.fit helps you plan meals, track calories, generate workouts, manage travel budgets, and create trip itineraries easily."
        />
      </Helmet>

      {/* HEADER */}
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <h1
              className="text-xl md:text-2xl font-bold cursor-pointer px-2 py-1 rounded-md hover:bg-accent transition-colors duration-200"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <span style={{ color: "#27AE60" }}>Life</span>
              <span style={{ color: "#333" }}>Planner.fit</span>
            </h1>
          </Link>

          {/* Right side - ToolsNav + ThemeToggle */}
          <div className="flex items-center gap-3">
            <ToolsNav />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 py-12 flex-1 w-full">
        {/* Tabs Section */}
        <Tabs defaultValue="home" className="w-full mb-8">
          <TabsList className="flex overflow-x-auto gap-2 no-scrollbar justify-center px-1 sm:px-2">
            <TabsTrigger
              value="home"
              className="flex-shrink-0 hover:bg-accent transition-all duration-150 rounded-lg px-3 py-1"
            >
              Home
            </TabsTrigger>
            <Link href="/about">
              <TabsTrigger
                value="about"
                className="flex-shrink-0 hover:bg-accent transition-all duration-150 rounded-lg px-3 py-1"
              >
                About
              </TabsTrigger>
            </Link>
            <Link href="/privacy">
              <TabsTrigger
                value="privacy"
                className="flex-shrink-0 hover:bg-accent transition-all duration-150 rounded-lg px-3 py-1"
              >
                Privacy
              </TabsTrigger>
            </Link>
            <Link href="/contact">
              <TabsTrigger
                value="contact"
                className="flex-shrink-0 hover:bg-accent transition-all duration-150 rounded-lg px-3 py-1"
              >
                Contact
              </TabsTrigger>
            </Link>
            <Link href="/blog">
              <TabsTrigger
                value="blog"
                className="flex-shrink-0 hover:bg-accent transition-all duration-150 rounded-lg px-3 py-1"
              >
                Blog
              </TabsTrigger>
            </Link>
          </TabsList>
        </Tabs>

        {/* Banner Ad */}
        <div className="w-full mb-8 h-20 bg-gray-200 dark:bg-gray-700 flex items-center justify-center border border-dashed border-gray-400 text-gray-600">
          Banner Ad Placeholder
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tools.map((tool) => (
            <Link key={tool.id} href={tool.path}>
              <Card className="cursor-pointer hover:scale-[1.02] active:scale-95 transition-transform duration-200">
                <CardContent
                  className={`p-8 bg-gradient-to-br ${tool.color} rounded-xl`}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="text-6xl">{tool.emoji}</div>
                    <h3 className="text-2xl font-semibold">{tool.name}</h3>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Mid Ad */}
        <div className="w-full my-12 h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center border border-dashed border-gray-400 text-gray-600">
          Mid-Content Ad Placeholder
        </div>

        {/* SEO Text Section */}
        <section className="max-w-3xl mx-auto text-center mt-12 px-4 space-y-6">
          <h2 className="text-3xl font-bold">Welcome to LifePlanner.fit</h2>
          <p>
            LifePlanner.fit is your all-in-one solution for{" "}
            <Link href="/meal-planner" className="text-blue-600 underline">
              meal planning
            </Link>
            ,{" "}
            <Link
              href="/calorie-calculator"
              className="text-blue-600 underline"
            >
              calorie tracking
            </Link>
            ,{" "}
            <Link
              href="/workout-generator"
              className="text-blue-600 underline"
            >
              custom workouts
            </Link>
            , and travel management.
          </p>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-card border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
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
          <div className="text-sm text-muted-foreground text-center md:text-left">
            © 2025 LifePlanner.fit. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

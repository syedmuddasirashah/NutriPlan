import { HeroSection } from "@/components/HeroSection";
import { FeatureCard } from "@/components/FeatureCard";
import { CalorieCalculator } from "@/components/CalorieCalculator";
import { MealCard } from "@/components/MealCard";
import { ProgressChart } from "@/components/ProgressChart";
import { StatsCard } from "@/components/StatsCard";
import { MacroProgress } from "@/components/MacroProgress";
import { ShoppingList } from "@/components/ShoppingList";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Calendar, 
  TrendingUp, 
  Flame, 
  Target, 
  Clock,
  ChefHat,
  Utensils,
  Apple,
  Users
} from "lucide-react";

export default function Home() {
  const mockWeightData = [
    { date: "Week 1", weight: 82 },
    { date: "Week 2", weight: 81.5 },
    { date: "Week 3", weight: 80.8 },
    { date: "Week 4", weight: 80.2 },
    { date: "Week 5", weight: 79.5 },
    { date: "Week 6", weight: 79 },
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Apple className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">NutriPlan</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium hover-elevate px-3 py-2 rounded-md">Features</a>
            <a href="#calculator" className="text-sm font-medium hover-elevate px-3 py-2 rounded-md">Calculator</a>
            <a href="#dashboard" className="text-sm font-medium hover-elevate px-3 py-2 rounded-md">Dashboard</a>
            <a href="#testimonials" className="text-sm font-medium hover-elevate px-3 py-2 rounded-md">Testimonials</a>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="outline" size="sm" data-testid="button-login">
              Log In
            </Button>
            <Button size="sm" data-testid="button-signup">
              Sign Up
            </Button>
          </div>
        </div>
      </header>

      <HeroSection />

      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Everything You Need to Succeed</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to make healthy eating simple and sustainable
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              icon={Brain}
              title="AI-Powered Plans"
              description="Get personalized meal suggestions powered by advanced AI that learns your preferences and adapts to your goals."
            />
            <FeatureCard
              icon={Calendar}
              title="Weekly Planning"
              description="Plan your entire week in minutes with automated meal scheduling, recipe variations, and smart grocery lists."
            />
            <FeatureCard
              icon={TrendingUp}
              title="Track Progress"
              description="Monitor your weight, macros, and goals with beautiful charts, insights, and milestone celebrations."
            />
            <FeatureCard
              icon={ChefHat}
              title="Recipe Library"
              description="Access thousands of delicious recipes tailored to your diet type, skill level, and time constraints."
            />
            <FeatureCard
              icon={Utensils}
              title="Meal Prep Mode"
              description="Batch cooking suggestions and leftover planning to save time and reduce food waste."
            />
            <FeatureCard
              icon={Users}
              title="Community Support"
              description="Join a community of health-focused individuals sharing tips, recipes, and encouragement."
            />
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Create Your Plan in Minutes</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Answer a few questions and get a personalized meal plan tailored to your goals
            </p>
          </div>
          <CalorieCalculator />
        </div>
      </section>

      <section id="dashboard" className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Your Personalized Dashboard</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Track everything in one beautiful, easy-to-use interface
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatsCard
              title="Calories Today"
              value="1,850"
              icon={Flame}
              trend="-150 from goal"
            />
            <StatsCard
              title="Current Streak"
              value="12 days"
              icon={Clock}
              trend="+3 from last week"
            />
            <StatsCard
              title="Goal Progress"
              value="78%"
              icon={Target}
              trend="On track"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-card rounded-lg border p-8">
              <h3 className="text-xl font-semibold mb-6">Daily Macro Targets</h3>
              <div className="flex flex-wrap gap-8 justify-center">
                <MacroProgress
                  label="Protein"
                  current={120}
                  target={150}
                  color="hsl(var(--chart-4))"
                />
                <MacroProgress
                  label="Carbs"
                  current={180}
                  target={200}
                  color="hsl(var(--chart-2))"
                />
                <MacroProgress
                  label="Fats"
                  current={55}
                  target={65}
                  color="hsl(var(--chart-3))"
                />
              </div>
            </div>
            <ProgressChart data={mockWeightData} />
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6">Today's Meals</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <MealCard
                name="Overnight Oats with Berries"
                mealType="Breakfast"
                calories={320}
                protein={12}
                carbs={48}
                fats={8}
                prepTime={5}
              />
              <MealCard
                name="Grilled Chicken & Quinoa Bowl"
                mealType="Lunch"
                calories={450}
                protein={35}
                carbs={42}
                fats={12}
                prepTime={25}
              />
              <MealCard
                name="Salmon with Roasted Vegetables"
                mealType="Dinner"
                calories={520}
                protein={42}
                carbs={28}
                fats={24}
                prepTime={30}
              />
            </div>
          </div>

          <ShoppingList />
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of people achieving their health goals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card rounded-lg border p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">SK</span>
                </div>
                <div>
                  <p className="font-semibold">Sam Konowich</p>
                  <p className="text-sm text-muted-foreground">Lost 35 lbs</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "NutriPlan not only helps me hit my macros, but also makes sure I'm not eating the same bland thing every day. 
                I've lost 35 lbs over the past year, and I'm eating better than ever."
              </p>
            </div>
            <div className="bg-card rounded-lg border p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">MM</span>
                </div>
                <div>
                  <p className="font-semibold">Meg M.</p>
                  <p className="text-sm text-muted-foreground">Lost 32 lbs in 6 months</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "I found out about NutriPlan and lost 32 lbs in 6 months! Now I'm a fit over 50 female in amazing condition, 
                and this app is what I refer to several times a day."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/90 via-primary/70 to-primary/50 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Transform Your Nutrition?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of users who have already achieved their health goals with NutriPlan
          </p>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90"
            data-testid="button-cta-signup"
          >
            Start Your Free Trial
          </Button>
          <p className="mt-4 text-sm text-white/80">No credit card required • Cancel anytime</p>
        </div>
      </section>

      <footer className="border-t py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Apple className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">NutriPlan</span>
              </div>
              <p className="text-sm text-muted-foreground">
                AI-powered meal planning and nutrition tracking to help you achieve your health goals.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover-elevate px-1 py-0.5 rounded">Features</a></li>
                <li><a href="#" className="hover-elevate px-1 py-0.5 rounded">Pricing</a></li>
                <li><a href="#" className="hover-elevate px-1 py-0.5 rounded">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover-elevate px-1 py-0.5 rounded">About</a></li>
                <li><a href="#" className="hover-elevate px-1 py-0.5 rounded">Blog</a></li>
                <li><a href="#" className="hover-elevate px-1 py-0.5 rounded">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover-elevate px-1 py-0.5 rounded">Privacy</a></li>
                <li><a href="#" className="hover-elevate px-1 py-0.5 rounded">Terms</a></li>
                <li><a href="#" className="hover-elevate px-1 py-0.5 rounded">Disclaimer</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2025 NutriPlan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

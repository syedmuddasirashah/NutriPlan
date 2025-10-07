import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Helmet } from "react-helmet";

export default function Blog() {
  return (
    <Layout>
      <div className="min-h-screen bg-background flex flex-col px-4 py-12 max-w-7xl mx-auto">
        <Helmet>
          <title>NutriPlan Blog - Nutrition, Fitness & Travel Tips</title>
          <meta
            name="description"
            content="Read the latest articles on meal planning, workouts, calorie tracking, travel budgeting, and trip planning on NutriPlan Blog."
          />
          <meta
            name="keywords"
            content="blog, nutrition, fitness, workouts, meal planning, travel, budget, NutriPlan"
          />
        </Helmet>

        <h1 className="text-3xl font-bold mb-6 text-center">NutriPlan Blog</h1>

        <div className="space-y-8">
          {/* Sample Blog Post */}
          <article className="p-6 bg-card rounded-lg border shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">
              How to Create a Perfect Meal Plan
            </h2>
            <p className="text-muted-foreground mb-2">
              Meal planning can save you time, money, and help you reach your nutrition goals.
            </p>
            <Link href="/meal-planner" className="text-blue-600 underline">
              Try our Meal Planner
            </Link>
          </article>

          {/* Another Sample Post */}
          <article className="p-6 bg-card rounded-lg border shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">
              Easy Workouts You Can Do at Home
            </h2>
            <p className="text-muted-foreground mb-2">
              Stay fit without a gym. Check out workouts tailored to your fitness level.
            </p>
            <Link href="/workout-generator" className="text-blue-600 underline">
              Generate a Workout
            </Link>
          </article>
        </div>
      </div>
    </Layout>
  );
}

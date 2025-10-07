import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-muted-foreground">
          Welcome to <strong>NutriPlan</strong>! Your one-stop solution for meal planning, fitness, and travel tools.
        </p>
      </div>
    </Layout>
  );
}

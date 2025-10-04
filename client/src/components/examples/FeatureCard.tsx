import { FeatureCard } from "../FeatureCard";
import { Brain, Calendar, TrendingUp } from "lucide-react";

export default function FeatureCardExample() {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
      <FeatureCard
        icon={Brain}
        title="AI-Powered Plans"
        description="Get personalized meal suggestions powered by advanced AI that learns your preferences."
      />
      <FeatureCard
        icon={Calendar}
        title="Weekly Planning"
        description="Plan your entire week in minutes with automated meal scheduling and grocery lists."
      />
      <FeatureCard
        icon={TrendingUp}
        title="Track Progress"
        description="Monitor your weight, macros, and goals with beautiful charts and insights."
      />
    </div>
  );
}

import { StatsCard } from "../StatsCard";
import { Flame, Target, Calendar } from "lucide-react";

export default function StatsCardExample() {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
      <StatsCard
        title="Calories Today"
        value="1,850"
        icon={Flame}
        trend="-150 from goal"
      />
      <StatsCard
        title="Current Streak"
        value="12 days"
        icon={Calendar}
        trend="+3 from last week"
      />
      <StatsCard
        title="Goal Progress"
        value="78%"
        icon={Target}
        trend="On track"
      />
    </div>
  );
}

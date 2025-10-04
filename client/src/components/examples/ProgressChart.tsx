import { ProgressChart } from "../ProgressChart";

const mockData = [
  { date: "Week 1", weight: 82 },
  { date: "Week 2", weight: 81.5 },
  { date: "Week 3", weight: 80.8 },
  { date: "Week 4", weight: 80.2 },
  { date: "Week 5", weight: 79.5 },
  { date: "Week 6", weight: 79 },
];

export default function ProgressChartExample() {
  return (
    <div className="p-8 max-w-4xl">
      <ProgressChart data={mockData} />
    </div>
  );
}

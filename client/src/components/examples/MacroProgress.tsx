import { MacroProgress } from "../MacroProgress";

export default function MacroProgressExample() {
  return (
    <div className="p-8 flex flex-wrap gap-8 justify-center">
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
  );
}

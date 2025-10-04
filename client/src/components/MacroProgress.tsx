interface MacroProgressProps {
  label: string;
  current: number;
  target: number;
  color: string;
}

export function MacroProgress({ label, current, target, color }: MacroProgressProps) {
  const percentage = Math.min((current / target) * 100, 100);
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32">
        <svg className="w-full h-full -rotate-90">
          <circle
            cx="64"
            cy="64"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-muted"
          />
          <circle
            cx="64"
            cy="64"
            r={radius}
            stroke={color}
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-500"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold font-mono" data-testid={`text-${label.toLowerCase()}-current`}>{current}g</span>
          <span className="text-xs text-muted-foreground">of {target}g</span>
        </div>
      </div>
      <span className="mt-2 font-medium">{label}</span>
    </div>
  );
}

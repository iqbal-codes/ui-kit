import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/primitives/button";
import { Input } from "@/primitives/input";

export interface DurationPickerProps {
  /** Duration value in minutes */
  value?: number;
  /** Change handler */
  onChange?: (minutes: number) => void;
  /** Minimum value in minutes */
  min?: number;
  /** Maximum value in minutes */
  max?: number;
  /** Show presets */
  showPresets?: boolean;
  /** Preset options in minutes */
  presets?: number[];
  className?: string;
}

export function DurationPicker({
  value,
  onChange,
  min = 0,
  max = 1440,
  showPresets = true,
  presets = [15, 30, 60, 120, 240, 480, 720],
  className,
}: DurationPickerProps) {
  const [hours, setHours] = React.useState(() => {
    if (!value) return 0;
    return Math.floor(value / 60);
  });
  const [minutes, setMinutes] = React.useState(() => {
    if (!value) return 0;
    return value % 60;
  });

  React.useEffect(() => {
    if (value !== undefined) {
      setHours(Math.floor(value / 60));
      setMinutes(value % 60);
    }
  }, [value]);

  const handleChange = (newHours: number, newMinutes: number) => {
    const totalMinutes = Math.min(max, Math.max(min, newHours * 60 + newMinutes));
    setHours(Math.floor(totalMinutes / 60));
    setMinutes(totalMinutes % 60);
    onChange?.(totalMinutes);
  };

  const handleHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const h = parseInt(e.target.value, 10) || 0;
    handleChange(h, minutes);
  };

  const handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const m = parseInt(e.target.value, 10) || 0;
    handleChange(hours, m);
  };

  const formatPreset = (mins: number) => {
    if (mins < 60) return `${mins}m`;
    if (mins === 60) return "1h";
    if (mins < 1440) return `${Math.floor(mins / 60)}h`;
    return `${Math.floor(mins / 1440)}d`;
  };

  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex items-center gap-2">
        <div className="flex-1">
          <label className="text-xs text-muted-foreground">Hours</label>
          <Input
            type="number"
            min={0}
            max={Math.floor(max / 60)}
            value={hours}
            onChange={handleHoursChange}
            className="w-full"
          />
        </div>
        <span className="pt-6 text-muted-foreground">:</span>
        <div className="flex-1">
          <label className="text-xs text-muted-foreground">Minutes</label>
          <Input
            type="number"
            min={0}
            max={59}
            value={minutes}
            onChange={handleMinutesChange}
            className="w-full"
          />
        </div>
      </div>
      {showPresets && (
        <div className="flex flex-wrap gap-1">
          {presets.map((preset) => (
            <Button
              key={preset}
              type="button"
              variant={value === preset ? "default" : "outline"}
              size="sm"
              onClick={() => handleChange(Math.floor(preset / 60), preset % 60)}
            >
              {formatPreset(preset)}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}

export default DurationPicker;

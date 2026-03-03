import { Loader2, Wifi, WifiOff } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/primitives/badge";

export type ConnectionState = "connected" | "disconnected" | "connecting";

export interface ConnectionStatusProps {
  /** Current connection state */
  status: ConnectionState;
  /** Show icon */
  showIcon?: boolean;
  /** Custom labels */
  labels?: {
    connected?: string;
    disconnected?: string;
    connecting?: string;
  };
  className?: string;
}

const statusConfig = {
  connected: {
    variant: "default" as const,
    icon: Wifi,
  },
  disconnected: {
    variant: "destructive" as const,
    icon: WifiOff,
  },
  connecting: {
    variant: "secondary" as const,
    icon: Loader2,
  },
};

export function ConnectionStatus({
  status,
  showIcon = true,
  labels = {},
  className,
}: ConnectionStatusProps) {
  const config = statusConfig[status];
  const Icon = config.icon;
  const label = labels[status] || status.charAt(0).toUpperCase() + status.slice(1);

  return (
    <Badge variant={config.variant} className={cn("gap-1", className)}>
      {showIcon && <Icon className={cn("h-3 w-3", status === "connecting" && "animate-spin")} />}
      {label}
    </Badge>
  );
}

export default ConnectionStatus;

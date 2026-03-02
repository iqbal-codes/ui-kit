import * as React from "react";

import { Button } from "@/primitives/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/primitives/card";
import { AlertTriangleIcon, RefreshCwIcon } from "lucide-react";

export interface ErrorFallbackProps {
  /** The error that occurred */
  error?: Error;
  /** Optional error ID for support reference */
  errorId?: string;
  /** Reset error handler */
  resetError?: () => void;
  /** Custom fallback message */
  title?: string;
  /** Custom description */
  description?: string;
  /** Show error details */
  showDetails?: boolean;
  /** Additional CSS classes */
  className?: string;
}

export function ErrorFallback({
  error,
  errorId,
  resetError,
  title = "Something went wrong",
  description = "An unexpected error occurred. Please try again.",
  showDetails = false,
  className,
}: ErrorFallbackProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopyError = () => {
    if (error) {
      navigator.clipboard.writeText(error.message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Card className={cn("border-destructive/50", className)}>
      <CardHeader className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10">
            <AlertTriangleIcon className="h-5 w-5 text-destructive" />
          </div>
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
            {errorId && (
              <CardDescription className="text-xs font-mono">
                Error ID: {errorId}
              </CardDescription>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{description}</p>

        {showDetails && error && (
          <div className="rounded-md bg-muted p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium">Error Details</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopyError}
                className="h-6 text-xs"
              >
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>
            <pre className="text-xs text-destructive overflow-auto max-h-32">
              {error.message}
            </pre>
          </div>
        )}

        {resetError && (
          <div className="flex gap-2">
            <Button onClick={resetError} variant="default">
              <RefreshCwIcon className="mr-2 h-4 w-4" />
              Try Again
            </Button>
            <Button onClick={() => window.location.reload()} variant="outline">
              Reload Page
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export default ErrorFallback;

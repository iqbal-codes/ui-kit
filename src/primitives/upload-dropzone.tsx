"use client";

import { File, UploadCloud, X } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/primitives/button";
import { Progress } from "@/primitives/progress";

export interface UploadDropzoneProps {
  /** Accepted file types */
  accept?: string;
  /** Maximum file size in bytes */
  maxSize?: number;
  /** Maximum number of files */
  maxFiles?: number;
  /** Upload handler */
  onFilesSelected: (files: File[]) => void | Promise<void>;
  /** Optional file upload for single file */
  onFileSelected?: (file: File) => void;
  /** Upload progress (0-100) */
  uploadProgress?: number;
  /** Is uploading */
  isUploading?: boolean;
  /** Remove file handler */
  onFileRemove?: (file: File) => void;
  /** Uploaded files to display */
  uploadedFiles?: Array<{ name: string; size: number; url?: string }>;
  /** Disabled state */
  disabled?: boolean;
  /** Custom label */
  label?: string;
  /** Custom description */
  description?: string;
  className?: string;
}

export function UploadDropzone({
  accept,
  maxSize = 10 * 1024 * 1024, // 10MB default
  maxFiles = 1,
  onFilesSelected,
  onFileSelected,
  uploadProgress,
  isUploading = false,
  onFileRemove,
  uploadedFiles = [],
  disabled = false,
  label = "Upload files",
  description,
  className,
}: UploadDropzoneProps) {
  const [isDragOver, setIsDragOver] = React.useState(false);
  const [files, setFiles] = React.useState<File[]>([]);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleDragOver = React.useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = React.useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const validateFile = (file: File): string | null => {
    if (maxSize && file.size > maxSize) {
      return `File size exceeds ${formatFileSize(maxSize)}`;
    }
    if (accept) {
      const acceptedTypes = accept.split(",").map((t) => t.trim());
      const fileType = file.type;
      const fileName = file.name.toLowerCase();
      const isAccepted = acceptedTypes.some((type) => {
        if (type.startsWith("image/") || type.startsWith("video/") || type.startsWith("audio/")) {
          return fileType === type || fileType.startsWith(`${type.split("/")[0]}/`);
        }
        if (type.startsWith(".")) {
          return fileName.endsWith(type.toLowerCase());
        }
        return fileType === type;
      });
      if (!isAccepted) {
        return `File type not accepted. Accepted: ${accept}`;
      }
    }
    return null;
  };

  const handleFiles = React.useCallback(
    async (newFiles: File[]) => {
      const validFiles: File[] = [];
      const errors: string[] = [];

      for (const file of newFiles) {
        const error = validateFile(file);
        if (error) {
          errors.push(error);
        } else if (validFiles.length < maxFiles) {
          validFiles.push(file);
        }
      }

      if (errors.length > 0) {
        console.error(errors.join("\n"));
      }

      if (validFiles.length > 0) {
        setFiles((prev) => [...prev, ...validFiles].slice(0, maxFiles));
        await onFilesSelected(validFiles);
        if (onFileSelected && validFiles.length === 1) {
          onFileSelected(validFiles[0]);
        }
      }
    },
    [maxFiles, onFilesSelected, onFileSelected, validateFile]
  );

  const handleDrop = React.useCallback(
    async (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);
      if (disabled) return;

      const droppedFiles = Array.from(e.dataTransfer.files);
      await handleFiles(droppedFiles);
    },
    [disabled, handleFiles]
  );

  const handleInputChange = React.useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      const selectedFiles = Array.from(e.target.files || []);
      await handleFiles(selectedFiles);
      // Reset input value to allow selecting the same file again
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    },
    [disabled, handleFiles]
  );

  const handleRemoveFile = React.useCallback(
    (file: File, index: number) => {
      setFiles((prev) => prev.filter((_, i) => i !== index));
      onFileRemove?.(file);
    },
    [onFileRemove]
  );

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${Math.round((bytes / k ** i) * 100) / 100} ${sizes[i]}`;
  };

  return (
    <div className={cn("w-full space-y-3", className)}>
      {/* Dropzone */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => !disabled && inputRef.current?.click()}
        className={cn(
          "flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed p-8 transition-colors",
          "hover:bg-muted/50",
          isDragOver && "border-primary bg-muted",
          disabled && "cursor-not-allowed opacity-50",
          isUploading && "pointer-events-none"
        )}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={maxFiles > 1}
          onChange={handleInputChange}
          className="hidden"
          disabled={disabled}
        />

        <UploadCloud
          className={cn("mb-4 h-10 w-10", isDragOver ? "text-primary" : "text-muted-foreground")}
        />

        <p className="mb-1 text-sm font-medium">{label}</p>
        {description && <p className="text-center text-sm text-muted-foreground">{description}</p>}

        <div className="mt-2 flex flex-wrap justify-center gap-2 text-xs text-muted-foreground">
          {accept && (
            <span>
              Accepted:{" "}
              {accept
                .split(",")
                .map((t) => t.trim().toUpperCase())
                .join(", ")}
            </span>
          )}
          {maxSize && <span>Max size: {formatFileSize(maxSize)}</span>}
          {maxFiles > 1 && <span>Max files: {maxFiles}</span>}
        </div>
      </div>

      {/* Upload Progress */}
      {isUploading && uploadProgress !== undefined && (
        <div className="space-y-1">
          <Progress value={uploadProgress} className="h-2" />
          <p className="text-right text-xs text-muted-foreground">{uploadProgress}%</p>
        </div>
      )}

      {/* Uploaded Files List */}
      {(files.length > 0 || uploadedFiles.length > 0) && (
        <div className="space-y-2">
          {/* Pending uploads */}
          {files.map((file, index) => (
            <div
              key={`${file.name}-${index}`}
              className="flex items-center justify-between rounded-md border bg-muted/50 p-3"
            >
              <div className="flex items-center gap-3">
                <File className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">{file.name}</p>
                  <p className="text-xs text-muted-foreground">{formatFileSize(file.size)}</p>
                </div>
              </div>
              {!isUploading && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveFile(file, index)}
                  className="h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}

          {/* Already uploaded files */}
          {uploadedFiles.map((file, index) => (
            <div
              key={`${file.name}-${index}`}
              className="flex items-center justify-between rounded-md border bg-muted/50 p-3"
            >
              <div className="flex items-center gap-3">
                <File className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">{file.name}</p>
                  <p className="text-xs text-muted-foreground">{formatFileSize(file.size)}</p>
                </div>
              </div>
              {onFileRemove && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => onFileRemove(file as any)}
                  className="h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UploadDropzone;

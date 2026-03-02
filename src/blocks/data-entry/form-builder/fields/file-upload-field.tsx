"use client";

import * as React from "react";
import { useFormContext, Controller, type FieldPath, type FieldValues } from "react-hook-form";
import { cn } from "@/lib/utils";
import { UploadDropzone } from "@/primitives/upload-dropzone";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/primitives/form";

export interface UploadedFile {
  name: string;
  size: number;
  url?: string;
}

export interface FileUploadFieldProps<T extends FieldValues = FieldValues> {
  name: FieldPath<T>;
  label?: string;
  description?: string;
  accept?: string;
  maxSize?: number;
  maxFiles?: number;
  disabled?: boolean;
  required?: boolean;
  onUpload?: (files: File[]) => void | Promise<void>;
  className?: string;
}

export function FileUploadField<T extends FieldValues>({
  name,
  label,
  description,
  accept,
  maxSize,
  maxFiles = 1,
  disabled = false,
  required = false,
  onUpload,
  className,
}: FileUploadFieldProps<T>) {
  const { control } = useFormContext<T>();
  const [isUploading, setIsUploading] = React.useState(false);
  const [uploadProgress, setUploadProgress] = React.useState<number>();
  const [uploadedFiles, setUploadedFiles] = React.useState<UploadedFile[]>([]);

  const handleFilesSelected = React.useCallback(
    async (files: File[]) => {
      if (!onUpload) return;

      setIsUploading(true);
      setUploadProgress(0);

      try {
        const interval = setInterval(() => {
          setUploadProgress((prev) => {
            if (prev === undefined) return 0;
            if (prev >= 100) {
              clearInterval(interval);
              return 100;
            }
            return prev + 10;
          });
        }, 200);

        await onUpload(files);

        setUploadProgress(100);
        clearInterval(interval);

        setUploadedFiles((prev) => [
          ...prev,
          ...files.map((file) => ({
            name: file.name,
            size: file.size,
          })),
        ]);
      } finally {
        setIsUploading(false);
        setUploadProgress(undefined);
      }
    },
    [onUpload]
  );

  const handleFileRemove = React.useCallback((file: UploadedFile) => {
    setUploadedFiles((prev) => prev.filter((f) => f.name !== file.name));
  }, []);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormItem className={cn(className)}>
          {label && (
            <FormLabel>
              {label}
              {required && <span className="text-destructive ml-1">*</span>}
            </FormLabel>
          )}
          <FormControl>
            <UploadDropzone
              accept={accept}
              maxSize={maxSize}
              maxFiles={maxFiles}
              onFilesSelected={(files) => {
                handleFilesSelected(files);
                field.onChange(files);
              }}
              isUploading={isUploading}
              uploadProgress={uploadProgress}
              uploadedFiles={uploadedFiles}
              onFileRemove={handleFileRemove}
              disabled={disabled}
              label={field.value?.length ? "Add more files" : "Upload files"}
              description={description}
            />
          </FormControl>
          {error && <FormMessage>{error.message}</FormMessage>}
        </FormItem>
      )}
    />
  );
}

export default FileUploadField;

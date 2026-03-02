"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { FilterBar } from "./filter-bar";
import { FilterChips } from "./filter-chips";
import { FilterDialog } from "./filter-dialog";
import { DataGrid } from "@/blocks/data-display/data-grid";
import { Pagination } from "@/blocks/navigation/pagination";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/primitives/select";
import type { SmartDataTableProps, FilterState, ActiveFilter, FilterField } from "./types";

/**
 * SmartDataTable - Full-featured data table with search and filters
 * 
 * Features:
 * - Inline search with debounce
 * - Filter dialog/sheet (responsive)
 * - Filter chips display
 * - Optional URL state persistence
 * - Sorting, pagination, row selection (coming soon)
 * 
 * @example
 * ```tsx
 * <SmartDataTable
 *   data={workOrders}
 *   columns={columns}
 *   filterFields={[
 *     { name: 'status', label: 'Status', type: 'select', options: [...] },
 *     { name: 'priority', label: 'Priority', type: 'combobox', options: [...] },
 *     { name: 'dueDate', label: 'Due Date', type: 'date' },
 *   ]}
 *   onFiltersChange={(filters) => api.getData(filters)}
 *   onSearchChange={(query) => api.search(query)}
 * />
 * ```
 */
export function SmartDataTable<TData extends Record<string, any>>({
  data,
  columns,
  searchQuery,
  onSearchChange,
  filters,
  onFiltersChange,
  filterFields = [],
  searchPlaceholder = "Search...",
  enableSearchDebounce = true,
  searchDebounceDelay = 300,
  useUrlState = false,
  urlStateId,
  isLoading = false,
  emptyMessage = "No data available",
  emptyState,
  enableRowSelection = false,
  onRowSelectionChange,
  enableColumnVisibility = false,
  enableSorting = false,
  enablePagination = false,
  currentPage = 1,
  onPageChange,
  pageSize = 10,
  onPageSizeChange,
  pageSizeOptions = [10, 20, 50],
  totalItems,
  showFirstLast = false,
  compactPagination = false,
  className,
}: SmartDataTableProps<TData>) {
  const [isFilterDialogOpen, setIsFilterDialogOpen] = React.useState(false);
  const [localFilters, setLocalFilters] = React.useState<FilterState>(filters || {});
  const [internalPage, setInternalPage] = React.useState(1);
  const [internalPageSize, setInternalPageSize] = React.useState(pageSize);
  const [isMobile, setIsMobile] = React.useState(false);

  // Detect mobile viewport
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Sync with parent filters
  React.useEffect(() => {
    if (filters) {
      setLocalFilters(filters);
    }
  }, [filters]);

  // Sync with parent pagination
  React.useEffect(() => {
    if (currentPage) {
      setInternalPage(currentPage);
    }
  }, [currentPage]);

  React.useEffect(() => {
    setInternalPageSize(pageSize);
  }, [pageSize]);

  // Calculate total pages and paginated data
  const actualTotalItems = totalItems ?? data.length;
  const totalPages = Math.ceil(actualTotalItems / internalPageSize);

  // Get current page data (client-side pagination)
  const paginatedData = React.useMemo(() => {
    if (!enablePagination || totalItems !== undefined) {
      // Server-side pagination or disabled
      return data;
    }
    // Client-side pagination
    const start = (internalPage - 1) * internalPageSize;
    const end = start + internalPageSize;
    return data.slice(start, end);
  }, [data, enablePagination, totalItems, internalPage, internalPageSize]);

  // Convert filters to ActiveFilter array for chips
  const activeFilters: ActiveFilter[] = React.useMemo(() => {
    if (!localFilters) return [];
    
    return Object.entries(localFilters)
      .filter(([_, value]) => value !== "" && value !== null && value !== undefined)
      .map(([field, value]) => {
        const fieldConfig = filterFields.find((f) => f.name === field);
        return {
          field,
          label: fieldConfig?.label || field,
          value,
          displayValue: formatFilterValue(value, fieldConfig?.type),
        };
      });
  }, [localFilters, filterFields]);

  const handleAddFilter = () => {
    setIsFilterDialogOpen(true);
  };

  const handleClearAll = () => {
    setLocalFilters({});
    onFiltersChange?.({});
  };

  const handleRemoveFilter = (field: string) => {
    const newFilters = { ...localFilters };
    delete newFilters[field];
    setLocalFilters(newFilters);
    onFiltersChange?.(newFilters);
  };

  const handleFilterChange = (newFilters: FilterState) => {
    setLocalFilters(newFilters);
  };

  const handleFilterApply = () => {
    onFiltersChange?.(localFilters);
  };

  const handlePageChange = (newPage: number) => {
    setInternalPage(newPage);
    onPageChange?.(newPage);
  };

  const handlePageSizeChange = (newSize: number) => {
    setInternalPageSize(newSize);
    setInternalPage(1); // Reset to first page when changing page size
    onPageSizeChange?.(newSize);
  };

  return (
    <div className={cn("space-y-3", className)}>
      {/* Top Wrapper: Search + Filter Button + Clear Button */}
      <FilterBar
        searchValue={searchQuery}
        onSearchChange={onSearchChange}
        onAddFilter={handleAddFilter}
        onClearAll={handleClearAll}
        searchPlaceholder={searchPlaceholder}
        hasFilters={activeFilters.length > 0}
        isLoading={isLoading}
      />

      {/* Bottom Wrapper: Filter Chips */}
      {activeFilters.length > 0 && (
        <FilterChips
          filters={activeFilters}
          onRemoveFilter={handleRemoveFilter}
          onClearAll={handleClearAll}
        />
      )}

      {/* Data Table */}
      {paginatedData.length === 0 ? (
        emptyState || (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">{emptyMessage}</p>
          </div>
        )
      ) : (
        <DataGrid
          columns={columns.map((col) => ({
            id: col.id,
            label: col.header,
            width: col.width,
            align: col.align,
          }))}
          rows={paginatedData.map((item, index) => ({
            id: (item as any).id || `row-${index}`,
            cells: columns.reduce((acc, col) => ({
              ...acc,
              [col.id]: col.cell ? col.cell(item) : item[col.accessorKey as keyof TData],
            }), {}),
          }))}
          showHeader
          striped
          hoverable
          onRowClick={(row) => {
            if (enableRowSelection && onRowSelectionChange) {
              const dataIndex = paginatedData.findIndex((item, i) => 
                (item as any).id === row.id || `row-${i}` === row.id
              );
              if (dataIndex >= 0) {
                onRowSelectionChange([paginatedData[dataIndex]]);
              }
            }
          }}
        />
      )}

      {/* Pagination */}
      {enablePagination && (
        <div className="flex items-center justify-between gap-4 pt-4 border-t">
          {/* Page Size Selector */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Show</span>
            <Select
              value={internalPageSize.toString()}
              onValueChange={(value) => handlePageSizeChange(Number(value))}
            >
              <SelectTrigger className="w-[70px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {pageSizeOptions.map((size) => (
                  <SelectItem key={size} value={size.toString()}>
                    {size} / page
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <span>
              {actualTotalItems} {actualTotalItems === 1 ? "item" : "items"}
            </span>
          </div>

          {/* Pagination Controls */}
          <Pagination
            page={internalPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            showFirstLast={showFirstLast}
            compact={compactPagination || isMobile}
            siblingCount={1}
          />
        </div>
      )}

      {/* Filter Dialog/Sheet */}
      {filterFields.length > 0 && (
        <FilterDialog
          open={isFilterDialogOpen}
          onOpenChange={setIsFilterDialogOpen}
          fields={filterFields}
          values={localFilters}
          onChange={handleFilterChange}
          onApply={handleFilterApply}
          onClearAll={handleClearAll}
          isMobile={isMobile}
        />
      )}
    </div>
  );
}

/**
 * Format filter value for display in chip
 */
function formatFilterValue(value: any, type?: string): string {
  if (value === null || value === undefined || value === "") {
    return "";
  }

  // Handle date objects
  if (value instanceof Date) {
    return value.toLocaleDateString();
  }

  // Handle ISO date strings
  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}/.test(value)) {
    try {
      return new Date(value).toLocaleDateString();
    } catch {
      return value;
    }
  }

  // Handle arrays (for range filters)
  if (Array.isArray(value)) {
    return value.map((v) => formatFilterValue(v, type)).join(" - ");
  }

  // Handle booleans
  if (typeof value === "boolean") {
    return value ? "Yes" : "No";
  }

  // Default: convert to string
  return String(value);
}

export default SmartDataTable;

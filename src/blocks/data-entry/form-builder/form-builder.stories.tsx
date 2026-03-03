import type { Meta, StoryObj } from "@storybook/react";
import { FormBuilder } from "./form-builder";

const meta = {
  title: "Blocks/Data Entry/FormBuilder",
  component: FormBuilder,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A comprehensive, declarative form builder Smart Block that integrates react-hook-form with shadcn/ui primitives.

**Features:**
- Declarative field configuration via sections/fields arrays
- All shadcn/ui primitives: Input, Textarea, Select, Combobox, Checkbox, Switch, RadioGroup, Calendar
- Auto-save support with dirty state tracking
- Conditional field/section rendering with \`when\` prop
- Built-in validation display per field and section
- Sticky action footer with unsaved changes warning
- File upload with dropzone

**Field Types:** text, email, password, number, textarea, select, combobox, multi-select, checkbox, switch, radio, date, datetime, file

**Dependencies:**
- react-hook-form
- @/blocks/data-entry/form-section
- @/blocks/data-entry/sticky-actions
- @/primitives/* (all form primitives)
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    onSubmit: { action: "submitted" },
    onAutoSave: { action: "auto-saved" },
    onCancel: { action: "cancelled" },
  },
} satisfies Meta<typeof FormBuilder>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================================================
// Basic Form Example
// ============================================================================

export const Basic: Story = {
  args: {
    id: "basic-form",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      role: "user",
    },
    sections: [
      {
        id: "personal-info",
        title: "Personal Information",
        description: "Enter your basic details",
        fields: [
          {
            name: "firstName",
            type: "text",
            label: "First Name",
            placeholder: "John",
            rules: { required: "First name is required" },
          },
          {
            name: "lastName",
            type: "text",
            label: "Last Name",
            placeholder: "Doe",
            rules: { required: "Last name is required" },
          },
          {
            name: "email",
            type: "email",
            label: "Email Address",
            placeholder: "john@example.com",
            rules: {
              required: "Email is required",
            },
          },
        ],
      },
      {
        id: "account-info",
        title: "Account Settings",
        fields: [
          {
            name: "role",
            type: "select",
            label: "Role",
            options: [
              { value: "user", label: "User" },
              { value: "manager", label: "Manager" },
              { value: "admin", label: "Administrator" },
            ],
            rules: { required: "Role is required" },
          },
        ],
      },
    ],
    onSubmit: (data) => console.log("Submitted:", data),
    submitLabel: "Save Changes",
    showCancel: true,
    showDirtyWarning: true,
  },
};

// ============================================================================
// Multi-Section Form with Collapsible Panels
// ============================================================================

export const CollapsibleSections: Story = {
  args: {
    ...Basic.args,
    sections: [
      {
        id: "contact",
        title: "Contact Information",
        description: "How can we reach you?",
        collapsible: true,
        defaultOpen: true,
        fields: [
          {
            name: "email",
            type: "email",
            label: "Email",
            rules: { required: "Required" },
          },
          {
            name: "phone",
            type: "text",
            label: "Phone Number",
            placeholder: "+1 (555) 000-0000",
          },
        ],
      },
      {
        id: "address",
        title: "Address",
        description: "Your mailing address",
        collapsible: true,
        defaultOpen: false,
        fields: [
          { name: "street", type: "text", label: "Street Address" },
          { name: "city", type: "text", label: "City" },
          { name: "state", type: "text", label: "State/Province" },
          { name: "zipCode", type: "text", label: "ZIP/Postal Code" },
        ],
      },
      {
        id: "preferences",
        title: "Preferences",
        collapsible: true,
        defaultOpen: false,
        fields: [
          {
            name: "newsletter",
            type: "switch",
            label: "Subscribe to newsletter",
          },
          {
            name: "notifications",
            type: "checkbox",
            label: "Enable email notifications",
          },
        ],
      },
    ],
  },
};

// ============================================================================
// Form with Conditional Fields
// ============================================================================

export const ConditionalFields: Story = {
  args: {
    defaultValues: {
      employmentType: "full-time",
      hasBenefits: false,
      department: "",
      managerName: "",
    },
    sections: [
      {
        id: "employment",
        title: "Employment Details",
        fields: [
          {
            name: "employmentType",
            type: "radio",
            label: "Employment Type",
            options: [
              { value: "full-time", label: "Full-time" },
              { value: "part-time", label: "Part-time" },
              { value: "contract", label: "Contract" },
            ],
          },
          {
            name: "department",
            type: "select",
            label: "Department",
            placeholder: "Select department",
            options: [
              { value: "engineering", label: "Engineering" },
              { value: "sales", label: "Sales" },
              { value: "marketing", label: "Marketing" },
              { value: "hr", label: "Human Resources" },
            ],
          },
          {
            name: "hasBenefits",
            type: "checkbox",
            label: "Enroll in benefits program",
            description: "Check to enroll in health, dental, and vision insurance",
          },
          {
            name: "managerName",
            type: "text",
            label: "Manager Name",
            description: "Your direct reporting manager",
            when: (values) => values.employmentType === "full-time",
          },
          {
            name: "contractEndDate",
            type: "date",
            label: "Contract End Date",
            when: (values) => values.employmentType === "contract",
          },
        ],
      },
    ],
    onSubmit: (data) => console.log("Submitted:", data),
    submitLabel: "Submit Employment Info",
  },
};

// ============================================================================
// Auto-Save Form
// ============================================================================

export const AutoSave: Story = {
  args: {
    defaultValues: {
      title: "",
      description: "",
      priority: "medium",
      assignee: "",
    },
    sections: [
      {
        id: "work-order",
        title: "Work Order Details",
        fields: [
          {
            name: "title",
            type: "text",
            label: "Title",
            rules: { required: "Title is required" },
          },
          {
            name: "description",
            type: "textarea",
            label: "Description",
            placeholder: "Describe the work to be done...",
            rows: 4,
          },
          {
            name: "priority",
            type: "select",
            label: "Priority",
            options: [
              { value: "low", label: "Low" },
              { value: "medium", label: "Medium" },
              { value: "high", label: "High" },
              { value: "urgent", label: "Urgent" },
            ],
          },
          {
            name: "assignee",
            type: "text",
            label: "Assignee",
          },
        ],
      },
    ],
    onAutoSave: (data) => {
      console.log("Auto-saved:", data);
    },
    autoSaveDelay: 1500,
    showDirtyWarning: true,
    submitLabel: "Finalize",
    showCancel: true,
    onSubmit: (data) => console.log("Final submit:", data),
  },
};

// ============================================================================
// File Upload Form
// ============================================================================

export const FileUpload: Story = {
  args: {
    defaultValues: {},
    sections: [
      {
        id: "documents",
        title: "Upload Documents",
        description: "Upload required documents for your application",
        fields: [
          {
            name: "resume",
            type: "file",
            label: "Resume/CV",
            description: "Upload your resume in PDF or DOCX format",
            accept: ".pdf,.doc,.docx",
            maxSize: 5 * 1024 * 1024, // 5MB
            onUpload: async (files) => {
              console.log("Uploading files:", files);
              // Simulate upload
              await new Promise((resolve) => setTimeout(resolve, 1000));
            },
          },
          {
            name: "coverLetter",
            type: "file",
            label: "Cover Letter",
            description: "Optional cover letter",
            accept: ".pdf,.doc,.docx",
            maxSize: 5 * 1024 * 1024,
          },
        ],
      },
    ],
    onSubmit: (data) => console.log("Submitted:", data),
    submitLabel: "Submit Application",
  },
};

// ============================================================================
// Loading State
// ============================================================================

export const Loading: Story = {
  args: {
    ...Basic.args,
    isLoading: true,
    sections: Basic.args?.sections,
    defaultValues: Basic.args?.defaultValues,
    onSubmit: () => new Promise((resolve) => setTimeout(resolve, 2000)),
  },
};

// ============================================================================
// With Custom Header and Footer
// ============================================================================

export const WithCustomLayout: Story = {
  args: {
    ...Basic.args,
    header: (
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Create Account</h2>
        <p className="text-muted-foreground">Fill in the form below to create your account</p>
      </div>
    ),
    footer: (
      <div className="rounded-lg border bg-muted/50 p-4">
        <h4 className="font-medium mb-2">Need Help?</h4>
        <p className="text-sm text-muted-foreground">
          Contact support at{" "}
          <a href="mailto:support@example.com" className="text-primary underline">
            support@example.com
          </a>
        </p>
      </div>
    ),
    sections: Basic.args?.sections,
    defaultValues: Basic.args?.defaultValues,
    onSubmit: Basic.args?.onSubmit,
  },
};

// ============================================================================
// Combobox Example
// ============================================================================

export const WithCombobox: Story = {
  args: {
    defaultValues: {
      country: "",
      tags: [],
    },
    sections: [
      {
        id: "selection",
        title: "Selection Fields",
        fields: [
          {
            name: "country",
            type: "combobox",
            label: "Country",
            placeholder: "Select a country",
            options: [
              { value: "us", label: "United States" },
              { value: "ca", label: "Canada" },
              { value: "uk", label: "United Kingdom" },
              { value: "au", label: "Australia" },
              { value: "de", label: "Germany" },
              { value: "fr", label: "France" },
              { value: "jp", label: "Japan" },
              { value: "cn", label: "China" },
              { value: "in", label: "India" },
              { value: "br", label: "Brazil" },
            ],
            rules: { required: "Country is required" },
          },
          {
            name: "tags",
            type: "multi-select",
            label: "Tags",
            placeholder: "Select tags",
            options: [
              { value: "react", label: "React" },
              { value: "vue", label: "Vue" },
              { value: "angular", label: "Angular" },
              { value: "svelte", label: "Svelte" },
              { value: "nextjs", label: "Next.js" },
              { value: "nuxt", label: "Nuxt" },
            ],
            multiple: true,
          },
        ],
      },
    ],
    onSubmit: (data) => console.log("Submitted:", data),
    submitLabel: "Submit",
  },
};

// ============================================================================
// Array Field - Basic Repeatable Fields
// ============================================================================

export const ArrayFieldBasic: Story = {
  args: {
    defaultValues: {
      previousJobs: [
        { company: "Tech Corp", position: "Developer" },
        { company: "StartUp Inc", position: "Senior Developer" },
      ],
    },
    sections: [
      {
        id: "employment-history",
        title: "Employment History",
        description: "Add your previous work experience",
        fields: [
          {
            name: "previousJobs",
            type: "array",
            label: "Previous Jobs",
            description: "List your previous employers",
            addItemLabel: "Add Job",
            minItems: 1,
            maxItems: 10,
            showReorder: true,
            itemTitleTemplate: "{company} - {position}",
            fields: [
              {
                name: "company",
                type: "text",
                label: "Company Name",
                placeholder: "Enter company name",
                rules: { required: "Company name is required" },
              },
              {
                name: "position",
                type: "text",
                label: "Position",
                placeholder: "Enter your position",
                rules: { required: "Position is required" },
              },
            ],
          },
        ],
      },
    ],
    onSubmit: (data) => console.log("Submitted:", data),
    submitLabel: "Submit",
  },
};

// ============================================================================
// Array Field - Education with Multiple Fields per Item
// ============================================================================

export const ArrayFieldEducation: Story = {
  args: {
    defaultValues: {
      education: [
        {
          institution: "University of Technology",
          degree: "Bachelor of Science",
          field: "Computer Science",
          graduationYear: "2020",
        },
      ],
    },
    sections: [
      {
        id: "education-section",
        title: "Education",
        description: "Add your educational background",
        fields: [
          {
            name: "education",
            type: "array",
            label: "Education History",
            addItemLabel: "Add Education",
            showReorder: true,
            collapsibleItems: true,
            defaultCollapsed: false,
            itemTitleTemplate: "{degree} in {field}",
            fields: [
              {
                name: "institution",
                type: "text",
                label: "Institution",
                placeholder: "University/College name",
                rules: { required: "Institution is required" },
              },
              {
                name: "degree",
                type: "select",
                label: "Degree",
                placeholder: "Select degree",
                options: [
                  { value: "high-school", label: "High School" },
                  { value: "associate", label: "Associate Degree" },
                  { value: "bachelor", label: "Bachelor's Degree" },
                  { value: "master", label: "Master's Degree" },
                  { value: "phd", label: "Doctorate (PhD)" },
                ],
                rules: { required: "Degree is required" },
              },
              {
                name: "field",
                type: "text",
                label: "Field of Study",
                placeholder: "e.g., Computer Science",
              },
              {
                name: "graduationYear",
                type: "text",
                label: "Graduation Year",
                placeholder: "YYYY",
              },
            ],
          },
        ],
      },
    ],
    onSubmit: (data) => console.log("Submitted:", data),
    submitLabel: "Submit",
  },
};

// ============================================================================
// Array Field - Skills with Constraints
// ============================================================================

export const ArrayFieldWithConstraints: Story = {
  args: {
    defaultValues: {
      skills: [{ name: "React", level: "expert" }],
    },
    sections: [
      {
        id: "skills-section",
        title: "Technical Skills",
        description: "Add your technical skills (minimum 1, maximum 5)",
        fields: [
          {
            name: "skills",
            type: "array",
            label: "Skills",
            addItemLabel: "Add Skill",
            minItems: 1,
            maxItems: 5,
            itemTitleField: "name" as any,
            fields: [
              {
                name: "name",
                type: "text",
                label: "Skill Name",
                placeholder: "e.g., JavaScript, Python",
                rules: { required: "Skill name is required" },
              },
              {
                name: "level",
                type: "select",
                label: "Proficiency Level",
                placeholder: "Select level",
                options: [
                  { value: "beginner", label: "Beginner" },
                  { value: "intermediate", label: "Intermediate" },
                  { value: "advanced", label: "Advanced" },
                  { value: "expert", label: "Expert" },
                ],
                rules: { required: "Level is required" },
              },
              {
                name: "yearsOfExperience",
                type: "number",
                label: "Years of Experience",
                placeholder: "0",
              },
            ],
          },
        ],
      },
    ],
    onSubmit: (data) => console.log("Submitted:", data),
    submitLabel: "Submit",
  },
};

// ============================================================================
// Array Field - References with Collapsed Items
// ============================================================================

export const ArrayFieldCollapsed: Story = {
  args: {
    defaultValues: {
      references: [],
    },
    sections: [
      {
        id: "references-section",
        title: "Professional References",
        description: "Add 2-3 professional references",
        fields: [
          {
            name: "references",
            type: "array",
            label: "References",
            addItemLabel: "Add Reference",
            minItems: 2,
            maxItems: 3,
            showReorder: true,
            collapsibleItems: true,
            defaultCollapsed: true,
            itemTitleTemplate: "{name} - {relationship}",
            fields: [
              {
                name: "name",
                type: "text",
                label: "Full Name",
                placeholder: "Reference's full name",
                rules: { required: "Name is required" },
              },
              {
                name: "relationship",
                type: "text",
                label: "Relationship",
                placeholder: "e.g., Former Manager, Colleague",
                rules: { required: "Relationship is required" },
              },
              {
                name: "email",
                type: "email",
                label: "Email Address",
                placeholder: "reference@example.com",
                rules: {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                },
              },
              {
                name: "phone",
                type: "tel",
                label: "Phone Number",
                placeholder: "+1 (555) 000-0000",
              },
            ],
          },
        ],
      },
    ],
    onSubmit: (data) => console.log("Submitted:", data),
    submitLabel: "Submit",
  },
};

// ============================================================================
// Dynamic Fields - watchFields, isDisabled, isHidden, onChangeCallback
// ============================================================================

export const DynamicFields: Story = {
  args: {
    defaultValues: {
      enableCustomDelivery: false,
      customDeliveryAddress: "",
      customDeliveryCity: "",
      customDeliveryZip: "",
      enableNotifications: true,
      notificationEmail: "",
      notificationFrequency: "daily",
      orderType: "standard",
      specialInstructions: "",
      priorityLevel: 1,
    },
    sections: [
      {
        id: "delivery-section",
        title: "Delivery Options",
        description: "Configure delivery settings with dynamic fields",
        fields: [
          {
            name: "orderType",
            type: "select",
            label: "Order Type",
            placeholder: "Select order type",
            options: [
              { value: "standard", label: "Standard" },
              { value: "express", label: "Express" },
              { value: "overnight", label: "Overnight" },
            ],
            rules: { required: "Order type is required" },
          },
          {
            name: "enableCustomDelivery",
            type: "switch",
            label: "Enable Custom Delivery Address",
            description: "Toggle to enter a custom delivery address",
          },
          // Conditionally hidden fields based on switch
          {
            name: "customDeliveryAddress",
            type: "text",
            label: "Custom Delivery Address",
            placeholder: "Enter delivery address",
            // Only show when custom delivery is enabled
            isHidden: (values) => !values.enableCustomDelivery,
            rules: {
              required: values => values.enableCustomDelivery ? "Address is required" : false,
            },
          },
          {
            name: "customDeliveryCity",
            type: "text",
            label: "City",
            placeholder: "Enter city",
            isHidden: (values) => !values.enableCustomDelivery,
          },
          {
            name: "customDeliveryZip",
            type: "text",
            label: "ZIP Code",
            placeholder: "Enter ZIP code",
            isHidden: (values) => !values.enableCustomDelivery,
          },
        ],
      },
      {
        id: "notifications-section",
        title: "Notification Settings",
        description: "Configure notifications with dynamic behavior",
        fields: [
          {
            name: "enableNotifications",
            type: "checkbox",
            label: "Enable Notifications",
            description: "Receive notifications about your order",
          },
          {
            name: "notificationEmail",
            type: "email",
            label: "Notification Email",
            placeholder: "notifications@example.com",
            // Disabled when notifications are disabled
            isDisabled: (values) => !values.enableNotifications,
            // Only visible when notifications are enabled
            isHidden: (values) => !values.enableNotifications,
            rules: {
              required: values => values.enableNotifications ? "Email is required" : false,
            },
          },
          {
            name: "notificationFrequency",
            type: "radio",
            label: "Notification Frequency",
            isDisabled: (values) => !values.enableNotifications,
            isHidden: (values) => !values.enableNotifications,
            options: [
              { value: "immediate", label: "Immediate" },
              { value: "daily", label: "Daily Digest" },
              { value: "weekly", label: "Weekly Summary" },
            ],
          },
        ],
      },
      {
        id: "priority-section",
        title: "Priority Settings",
        description: "Dynamic fields with onChangeCallback",
        fields: [
          {
            name: "priorityLevel",
            type: "slider",
            label: "Priority Level",
            description: "Adjust priority (triggers dynamic updates)",
            min: 1,
            max: 10,
            step: 1,
            showValue: true,
            // Watch specific fields for performance
            watchFields: ["orderType" as any, "specialInstructions" as any],
            // Callback when value changes
            onChangeCallback: (value, watchedValues, form) => {
              console.log("Priority changed to:", value);
              console.log("Watched values:", watchedValues);
              // Auto-update special instructions based on priority
              if (value >= 8) {
                form.setValue("specialInstructions" as any, "URGENT: Handle with highest priority");
              } else if (value >= 5) {
                form.setValue("specialInstructions" as any, "Standard priority handling");
              } else {
                form.setValue("specialInstructions" as any, "");
              }
            },
          },
          {
            name: "specialInstructions",
            type: "textarea",
            label: "Special Instructions",
            placeholder: "Any special handling instructions...",
            rows: 3,
            // Dynamically disabled based on priority
            isDisabled: (values) => {
              const priority = values.priorityLevel || 0;
              return priority >= 9; // Lock instructions at max priority
            },
            description: "Auto-filled based on priority level (locked at priority 9+)",
          },
        ],
      },
    ],
    onSubmit: (data) => {
      console.log("Submitted with dynamic fields:", data);
      alert("Check console for logged values!");
    },
    submitLabel: "Submit Order",
  },
};

// ============================================================================
// Performance Optimized - Using watchFields for targeted re-renders
// ============================================================================

export const PerformanceOptimized: Story = {
  args: {
    defaultValues: {
      searchTerm: "",
      category: "",
      priceRange: [0, 1000],
      inStock: false,
      sortBy: "relevance",
    },
    sections: [
      {
        id: "filters",
        title: "Product Filters",
        description: "Each field only watches what it needs",
        fields: [
          {
            name: "searchTerm",
            type: "text",
            label: "Search Products",
            placeholder: "Search...",
            // This field doesn't watch anything - minimal re-renders
          },
          {
            name: "category",
            type: "select",
            label: "Category",
            placeholder: "Select category",
            options: [
              { value: "electronics", label: "Electronics" },
              { value: "clothing", label: "Clothing" },
              { value: "books", label: "Books" },
              { value: "home", label: "Home & Garden" },
            ],
            // Only watches searchTerm for filtering
            watchFields: ["searchTerm" as any],
            isDisabled: (values) => !values.searchTerm,
            description: "Only enabled after searching",
          },
          {
            name: "priceRange",
            type: "slider",
            label: "Price Range",
            min: 0,
            max: 1000,
            step: 10,
            showValue: true,
            // Only watches category
            watchFields: ["category" as any],
            isDisabled: (values) => !values.category,
            description: "Only enabled after selecting category",
          },
          {
            name: "inStock",
            type: "switch",
            label: "In Stock Only",
            // Independent field - no watches
          },
          {
            name: "sortBy",
            type: "select",
            label: "Sort By",
            placeholder: "Select sorting",
            options: [
              { value: "relevance", label: "Relevance" },
              { value: "price-low", label: "Price: Low to High" },
              { value: "price-high", label: "Price: High to Low" },
              { value: "rating", label: "Customer Rating" },
            ],
            // Watches multiple fields
            watchFields: ["category" as any, "priceRange" as any, "inStock" as any],
            isDisabled: (values) => !values.category || !values.inStock,
            description: "Enabled when category and in-stock filter are set",
          },
        ],
      },
    ],
    onSubmit: (data) => {
      console.log("Filter submission:", data);
    },
    submitLabel: "Apply Filters",
  },
};

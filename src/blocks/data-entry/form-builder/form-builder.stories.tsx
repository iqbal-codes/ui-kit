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

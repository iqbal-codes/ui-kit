import type { Meta, StoryObj } from "@storybook/react";
import { FormWizard } from "./form-wizard";
import type { WizardStepConfig } from "./types";

/**
 * FormWizard is a multi-step form component that guides users through
 * a series of steps with validation, progress tracking, and navigation.
 *
 * Features:
 * - Step-by-step navigation with optional validation
 * - Progress stepper (horizontal)
 * - Free or sequential navigation modes
 * - Auto-save support
 * - Single submit at the end
 * - Conditional step rendering
 */
const meta = {
  title: "Blocks/Data Entry/FormWizard",
  component: FormWizard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    navigationMode: {
      control: "radio",
      options: ["sequential", "free"],
    },
  },
} satisfies Meta<typeof FormWizard>;

export default meta;
type Story = StoryObj<typeof meta>;

// Example: Employee Onboarding Form
const employeeOnboardingSteps: WizardStepConfig<any>[] = [
  {
    id: "personal-info",
    title: "Personal Information",
    // description: "Tell us about yourself",
    enableValidation: true,
    sections: [
      {
        id: "personal-details",
        title: "Personal Details",
        description: "Enter your personal information",
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
            placeholder: "john.doe@example.com",
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
            placeholder: "+1 (555) 123-4567",
          },
        ],
      },
      {
        id: "address",
        title: "Address",
        description: "Where do you live?",
        fields: [
          {
            name: "street",
            type: "text",
            label: "Street Address",
            placeholder: "123 Main St",
          },
          {
            name: "city",
            type: "text",
            label: "City",
            placeholder: "New York",
          },
          {
            name: "state",
            type: "text",
            label: "State/Province",
            placeholder: "NY",
          },
          {
            name: "zipCode",
            type: "text",
            label: "ZIP/Postal Code",
            placeholder: "10001",
          },
        ],
      },
    ],
  },
  {
    id: "employment",
    title: "Employment",
    // description: "Your work details",
    enableValidation: true,
    sections: [
      {
        id: "job-info",
        title: "Job Information",
        description: "Tell us about your position",
        fields: [
          {
            name: "jobTitle",
            type: "text",
            label: "Job Title",
            placeholder: "Software Engineer",
            rules: { required: "Job title is required" },
          },
          {
            name: "department",
            type: "select",
            label: "Department",
            placeholder: "Select department",
            options: [
              { value: "engineering", label: "Engineering" },
              { value: "design", label: "Design" },
              { value: "marketing", label: "Marketing" },
              { value: "sales", label: "Sales" },
              { value: "hr", label: "Human Resources" },
            ],
            rules: { required: "Department is required" },
          },
          {
            name: "startDate",
            type: "date",
            label: "Start Date",
            rules: { required: "Start date is required" },
          },
          {
            name: "employmentType",
            type: "radio",
            label: "Employment Type",
            options: [
              { value: "full-time", label: "Full-time" },
              { value: "part-time", label: "Part-time" },
              { value: "contract", label: "Contract" },
              { value: "internship", label: "Internship" },
            ],
            rules: { required: "Employment type is required" },
          },
        ],
      },
      {
        id: "compensation",
        title: "Compensation",
        fields: [
          {
            name: "salary",
            type: "currency",
            label: "Annual Salary",
            placeholder: "0.00",
            currencySymbol: "$",
          },
          {
            name: "bonus",
            type: "checkbox",
            label: "Eligible for bonus",
          },
        ],
      },
    ],
  },
  {
    id: "emergency",
    title: "Emergency Contact",
    // description: "Who should we contact in case of emergency?",
    enableValidation: true,
    sections: [
      {
        id: "emergency-contact",
        title: "Emergency Contact Information",
        fields: [
          {
            name: "emergencyName",
            type: "text",
            label: "Full Name",
            placeholder: "Jane Doe",
            rules: { required: "Name is required" },
          },
          {
            name: "emergencyRelationship",
            type: "select",
            label: "Relationship",
            placeholder: "Select relationship",
            options: [
              { value: "spouse", label: "Spouse" },
              { value: "parent", label: "Parent" },
              { value: "child", label: "Child" },
              { value: "sibling", label: "Sibling" },
              { value: "friend", label: "Friend" },
              { value: "other", label: "Other" },
            ],
            rules: { required: "Relationship is required" },
          },
          {
            name: "emergencyPhone",
            type: "tel",
            label: "Phone Number",
            placeholder: "+1 (555) 123-4567",
            rules: { required: "Phone number is required" },
          },
          {
            name: "emergencyEmail",
            type: "email",
            label: "Email Address",
            placeholder: "jane.doe@example.com",
          },
        ],
      },
    ],
  },
  {
    id: "review",
    title: "Review & Submit",
    // description: "Review your information before submitting",
    enableValidation: false,
    sections: [
      {
        id: "review-section",
        title: "Review Your Information",
        description: "Please review all the information you've entered",
        fields: [
          {
            name: "agreeToTerms",
            type: "checkbox",
            label: "I confirm that all the information provided is accurate and complete",
            rules: {
              required: "You must agree to the terms",
              validate: (value) => value === true || "You must check this box",
            },
          },
          {
            name: "subscribeNewsletter",
            type: "switch",
            label: "Subscribe to company newsletter",
          },
        ],
      },
    ],
  },
];

/**
 * Default story with horizontal stepper and free navigation
 */
export const Default: Story = {
  args: {
    id: "employee-onboarding",
    steps: employeeOnboardingSteps,
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      jobTitle: "",
      department: "",
      startDate: "",
      employmentType: "",
      salary: "",
      bonus: false,
      emergencyName: "",
      emergencyRelationship: "",
      emergencyPhone: "",
      emergencyEmail: "",
      agreeToTerms: false,
      subscribeNewsletter: false,
    },
    onSubmit: (data) => {
      console.log("Form submitted:", data);
      alert("Form submitted successfully! Check console for data.");
    },
    onAutoSave: (data) => {
      console.log("Auto-saved:", data);
    },
    submitLabel: "Complete Onboarding",
    cancelLabel: "Reset",
    showCancel: true,
    showDirtyWarning: true,
    stickyFooter: true,
    stepperOrientation: "horizontal",
    navigationMode: "free",
    showStepDescriptions: true,
    showStepIcons: true,
  },
};

/**
 * Vertical stepper variant (uses horizontal internally)
 */
export const VerticalStepper: Story = {
  args: {
    ...Default.args,
    showStepDescriptions: false,
  },
};

/**
 * Sequential navigation only (no jumping to completed steps)
 */
export const SequentialNavigation: Story = {
  args: {
    ...Default.args,
    navigationMode: "sequential",
  },
};

/**
 * Simple 2-step wizard
 */
const simpleSteps: WizardStepConfig<any>[] = [
  {
    id: "account",
    title: "Account",
    enableValidation: true,
    sections: [
      {
        id: "account-info",
        title: "Account Information",
        fields: [
          {
            name: "username",
            type: "text",
            label: "Username",
            placeholder: "johndoe",
            rules: { required: "Username is required" },
          },
          {
            name: "password",
            type: "password",
            label: "Password",
            placeholder: "••••••••",
            rules: {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            },
          },
          {
            name: "confirmPassword",
            type: "password",
            label: "Confirm Password",
            placeholder: "••••••••",
            rules: {
              required: "Please confirm your password",
              validate: (value: any) => (value ? true : "Passwords do not match"),
            },
          },
        ],
      },
    ],
  },
  {
    id: "preferences",
    title: "Preferences",
    enableValidation: false,
    sections: [
      {
        id: "prefs",
        title: "User Preferences",
        fields: [
          {
            name: "theme",
            type: "select",
            label: "Theme",
            options: [
              { value: "system", label: "System" },
              { value: "light", label: "Light" },
              { value: "dark", label: "Dark" },
            ],
          },
          {
            name: "notifications",
            type: "switch",
            label: "Enable notifications",
          },
          {
            name: "newsletter",
            type: "checkbox",
            label: "Subscribe to newsletter",
          },
        ],
      },
    ],
  },
];

export const SimpleWizard: Story = {
  args: {
    id: "simple-signup",
    steps: simpleSteps,
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
      theme: "system",
      notifications: false,
      newsletter: false,
    },
    onSubmit: (data) => {
      console.log("Simple wizard submitted:", data);
      alert("Account created! Check console for data.");
    },
    submitLabel: "Create Account",
    stepperOrientation: "horizontal",
    navigationMode: "free",
    showStepDescriptions: false,
  },
};

/**
 * Wizard with conditional step rendering
 */
const conditionalSteps: WizardStepConfig<any>[] = [
  {
    id: "basic",
    title: "Basic Info",
    enableValidation: true,
    sections: [
      {
        id: "basic-info",
        title: "Basic Information",
        fields: [
          {
            name: "name",
            type: "text",
            label: "Full Name",
            rules: { required: "Name is required" },
          },
          {
            name: "hasCompany",
            type: "switch",
            label: "I'm registering a company",
            defaultValue: false,
          },
        ],
      },
    ],
  },
  {
    id: "company",
    title: "Company Details",
    description: "Optional step shown when hasCompany is true",
    enableValidation: true,
    when: (values) => values.hasCompany === true,
    sections: [
      {
        id: "company-info",
        title: "Company Information",
        fields: [
          {
            name: "companyName",
            type: "text",
            label: "Company Name",
            rules: { required: "Company name is required" },
          },
          {
            name: "companySize",
            type: "select",
            label: "Company Size",
            options: [
              { value: "1-10", label: "1-10 employees" },
              { value: "11-50", label: "11-50 employees" },
              { value: "51-200", label: "51-200 employees" },
              { value: "201+", label: "201+ employees" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "confirm",
    title: "Confirm",
    enableValidation: false,
    sections: [
      {
        id: "confirm-info",
        title: "Confirmation",
        fields: [
          {
            name: "agree",
            type: "checkbox",
            label: "I agree to the terms and conditions",
            rules: { required: "You must agree" },
          },
        ],
      },
    ],
  },
];

export const ConditionalSteps: Story = {
  args: {
    id: "conditional-wizard",
    steps: conditionalSteps,
    defaultValues: {
      name: "",
      hasCompany: false,
      companyName: "",
      companySize: "",
      agree: false,
    },
    onSubmit: (data) => {
      console.log("Conditional wizard submitted:", data);
      alert("Submitted! Check console for data.");
    },
    submitLabel: "Complete Registration",
    showStepDescriptions: true,
  },
};

/**
 * Wizard with custom render step (for review page)
 * Shows how to use the render prop to display read-only form data
 */
const customRenderSteps: WizardStepConfig<any>[] = [
  {
    id: "personal",
    title: "Personal Info",
    enableValidation: true,
    sections: [
      {
        id: "personal-info",
        title: "Personal Information",
        fields: [
          {
            name: "firstName",
            type: "text",
            label: "First Name",
            rules: { required: "First name is required" },
          },
          {
            name: "lastName",
            type: "text",
            label: "Last Name",
            rules: { required: "Last name is required" },
          },
          {
            name: "email",
            type: "email",
            label: "Email",
            rules: { required: "Email is required" },
          },
        ],
      },
    ],
  },
  {
    id: "contact",
    title: "Contact",
    enableValidation: true,
    sections: [
      {
        id: "contact-info",
        title: "Contact Details",
        fields: [
          {
            name: "phone",
            type: "tel",
            label: "Phone Number",
          },
          {
            name: "address",
            type: "textarea",
            label: "Address",
          },
        ],
      },
    ],
  },
  {
    id: "review",
    title: "Review",
    // This step uses custom render to show read-only data
    stepType: "custom",
    render: ({ values, navigation }) => (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold">Review Your Information</h3>
          <p className="text-sm text-muted-foreground">
            Please review your information before submitting
          </p>
        </div>

        <div className="rounded-lg border">
          <div className="border-b px-4 py-3">
            <h4 className="font-medium">Personal Information</h4>
          </div>
          <dl className="divide-y">
            <div className="grid grid-cols-3 gap-4 px-4 py-3">
              <dt className="text-sm font-medium text-muted-foreground">First Name</dt>
              <dd className="col-span-2 text-sm">{values.firstName || "-"}</dd>
            </div>
            <div className="grid grid-cols-3 gap-4 px-4 py-3">
              <dt className="text-sm font-medium text-muted-foreground">Last Name</dt>
              <dd className="col-span-2 text-sm">{values.lastName || "-"}</dd>
            </div>
            <div className="grid grid-cols-3 gap-4 px-4 py-3">
              <dt className="text-sm font-medium text-muted-foreground">Email</dt>
              <dd className="col-span-2 text-sm">{values.email || "-"}</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-lg border">
          <div className="border-b px-4 py-3">
            <h4 className="font-medium">Contact Details</h4>
          </div>
          <dl className="divide-y">
            <div className="grid grid-cols-3 gap-4 px-4 py-3">
              <dt className="text-sm font-medium text-muted-foreground">Phone</dt>
              <dd className="col-span-2 text-sm">{values.phone || "-"}</dd>
            </div>
            <div className="grid grid-cols-3 gap-4 px-4 py-3">
              <dt className="text-sm font-medium text-muted-foreground">Address</dt>
              <dd className="col-span-2 text-sm">{values.address || "-"}</dd>
            </div>
          </dl>
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" id="confirmReview" className="h-4 w-4 rounded border-gray-300" />
          <label htmlFor="confirmReview" className="text-sm">
            I confirm that all the information provided is accurate
          </label>
        </div>
      </div>
    ),
  },
];

export const WithCustomRender: Story = {
  args: {
    id: "custom-render-wizard",
    steps: customRenderSteps,
    defaultValues: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
      address: "123 Main Street, New York, NY 10001",
    },
    onSubmit: (data) => {
      console.log("Custom render wizard submitted:", data);
      alert("Submitted! Check console for data.");
    },
    submitLabel: "Confirm & Submit",
    showStepDescriptions: true,
    navigationMode: "free",
  },
};

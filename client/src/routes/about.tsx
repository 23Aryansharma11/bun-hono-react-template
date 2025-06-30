import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "@tanstack/react-form";
import { z } from "zod";
import { zValidator } from '@hono/zod-validator';

export const Route = createFileRoute("/about")({
  component: About,
});

// Define schema using Zod
const FormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
});

function About() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
    },
    onSubmit: async ({ value }) => {
      console.log("Submitted:", value);
      alert("Form submitted successfully!");
    },

  });

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Contact Form</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
        className="space-y-4"
      >
        <form.Field name="name">
          {(field) => (
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                className="border border-gray-300 p-2 rounded w-full"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {field.state.meta.errors && (
                <p className="text-red-500 text-sm">
                  {field.state.meta.errors[0]}
                </p>
              )}
            </div>
          )}
        </form.Field>

        <form.Field name="email">
          {(field) => (
            <div>
              <label className="block mb-1 font-medium">{field.name}</label>
              <input
                className="border border-gray-300 p-2 rounded w-full"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {field.state.meta.errors && (
                <p className="text-red-500 text-sm">
                  {field.state.meta.errors[0]}
                </p>
              )}
            </div>
          )}
        </form.Field>

        <form.Subscribe>
          {(formState) => (
            <button
              type="submit"
              disabled={formState.isSubmitting}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              {formState.isSubmitting ? "Submitting..." : "Submit"}
            </button>
          )}
        </form.Subscribe>
      </form>
    </div>
  );
}

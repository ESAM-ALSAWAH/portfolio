"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "./ui/error-message";
import { Textarea } from "./ui/textarea";
import { cn } from "@/lib/utils";

const FormSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  subject: z.string().min(3, {
    message: "Subject must be at least 3 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export function ContactUsForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const errors = {
    name: form.formState.errors.name?.message?.toString() ?? "",
    email: form.formState.errors.email?.message?.toString() ?? "",
    subject: form.formState.errors.subject?.message?.toString() ?? "",
    message: form.formState.errors.message?.message?.toString() ?? "",
  };
  const inputClassName = (error: string) =>
    cn(
      "border-1 border-transparent focus-visible:border-transparent focus-visible:ring-transparent",
      error ?
        "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500 focus-visible:ring-1"
      : ""
    );

  return (
    <form
      onSubmit={form.handleSubmit(async (data) => {
        await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }).then((res) => {
          if (!res.ok) {
            throw new Error("Failed to send email");
          }
          alert("Email sent successfully");
          form.reset();
        });
      })}
      className="mt-5 flex flex-col gap-5"
    >
      <div>
        <Input
          placeholder="Name *"
          className={inputClassName(errors.name)}
          inputMode="text"
          {...form.register("name")}
        />
        <ErrorMessage message={errors.name} />
      </div>
      <div>
        <Input
          placeholder="Email *"
          className={inputClassName(errors.email)}
          inputMode="email"
          {...form.register("email")}
        />
        <ErrorMessage message={errors.email} />
      </div>
      <div>
        <Input
          placeholder="Subject *"
          className={inputClassName(errors.subject)}
          inputMode="text"
          {...form.register("subject")}
        />
        <ErrorMessage message={errors.subject} />
      </div>
      <div>
        <Textarea
          placeholder="Message *"
          inputMode="text"
          className={inputClassName(errors.message)}
          {...form.register("message")}
        />
        <ErrorMessage message={errors.message} />
      </div>
      <Button
        type="submit"
        variant="secondary"
        className="cursor-pointer h-12"
        disabled={form.formState.isSubmitting}
      >
        Send Message
      </Button>
    </form>
  );
}

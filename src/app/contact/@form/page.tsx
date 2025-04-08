"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

export default function ContactForm() {
  const FormSchema = z.object({
    name: z.string().min(1, { message: "Name is required." }),
    subject: z.string().min(5, {
      message: "Subject must be at least 5 characters.",
    }),
    message: z.string().min(20, {
      message: "Message must be at least 20 characters.",
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const { name, subject, message } = data;

    // Construct the mailto link
    const newSubject = `${subject} - ${name}`;
    const body = encodeURIComponent(`${message}`);
    const mailtoLink = `mailto:your-email@example.com?subject=${newSubject}&body=${body}`;

    // Open the user's email client
    window.location.href = mailtoLink;
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-4 w-xl"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="bg-[var(--white)] text-[var(--black)] md:text-lg py-6 px-3"
                  placeholder="Name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="bg-[var(--white)] text-[var(--black)] md:text-lg py-6 px-3"
                  placeholder="Subject"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormControl>
                <Textarea
                  className="bg-[var(--white)] text-[var(--black)] py-3 px-3 md:text-lg min-h-48"
                  placeholder="Message"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          variant={"outline"}
          className="col-span-2 bg-transparent hover:bg-[var(--black-accent)] hover:border-[var(--black-accent)] hover:text-[var(--white)] py-6 text-lg"
        >
          Send
        </Button>
      </form>
    </Form>
  );
}

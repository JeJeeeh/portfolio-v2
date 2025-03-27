"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, subject, message } = formData;

    // Construct the mailto link
    const newSubject = `${subject} - ${name}`;
    const body = encodeURIComponent(`${message}`);
    const mailtoLink = `mailto:your-email@example.com?subject=${newSubject}&body=${body}`;

    // Open the user's email client
    window.location.href = mailtoLink;
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 w-xl">
      <Input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="bg-[var(--white)] text-[var(--black)] md:text-lg py-6 px-3"
      />
      <Input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        className="bg-[var(--white)] text-[var(--black)] md:text-lg py-6 px-3"
      />
      <Textarea
        placeholder="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="col-span-2 bg-[var(--white)] text-[var(--black)] py-3 px-3 md:text-lg min-h-48"
      />
      <Button
        type="submit"
        variant={"outline"}
        className="col-span-2 bg-transparent hover:bg-[var(--black-accent)] hover:border-[var(--black-accent)] hover:text-[var(--white)] py-6 text-lg"
      >
        Send
      </Button>
    </form>
  );
}

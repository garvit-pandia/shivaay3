import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div class="bg-green-50 border border-green-200 rounded-sm p-6 text-center">
        <p class="text-green-700 font-medium">Message sent! We'll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} class="space-y-4">
      <div>
        <label for="contact-name" class="block text-sm font-medium text-coal mb-1">Name *</label>
        <input
          id="contact-name"
          type="text"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          class="w-full border border-linen rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-iron transition-colors"
          placeholder="Your name"
          required
        />
      </div>
      <div>
        <label for="contact-email" class="block text-sm font-medium text-coal mb-1">Email *</label>
        <input
          id="contact-email"
          type="email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          class="w-full border border-linen rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-iron transition-colors"
          placeholder="your@email.com"
          required
        />
      </div>
      <div>
        <label for="contact-phone" class="block text-sm font-medium text-coal mb-1">Phone</label>
        <input
          id="contact-phone"
          type="tel"
          value={form.phone}
          onChange={e => setForm({ ...form, phone: e.target.value })}
          class="w-full border border-linen rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-iron transition-colors"
          placeholder="+91 ..."
        />
      </div>
      <div>
        <label for="contact-message" class="block text-sm font-medium text-coal mb-1">Message *</label>
        <textarea
          id="contact-message"
          rows={4}
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
          class="w-full border border-linen rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-iron transition-colors"
          placeholder="How can we help?"
          required
        ></textarea>
      </div>
      <button type="submit" class="bg-iron text-white px-6 py-2.5 rounded-sm text-sm font-medium hover:bg-iron-dark transition-colors">
        Send Message
      </button>
    </form>
  );
}

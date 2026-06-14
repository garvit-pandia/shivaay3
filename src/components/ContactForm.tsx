import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }
    setErrorMessage("");
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      console.log("Contact form submitted:", form);
      setSubmitted(true);
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div aria-live="polite" className="bg-green-50 border border-green-200 rounded-sm p-6 text-center">
        <p className="text-green-700 font-medium">Message sent! We'll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {errorMessage && (
        <div className="bg-red-50 border border-red-200 rounded-sm p-3 text-sm text-red-700">
          {errorMessage}
        </div>
      )}
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-coal mb-1">Name *</label>
        <input
          id="contact-name"
          type="text"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          className="w-full border border-linen rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-iron transition-colors"
          placeholder="Your name"
          required
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-coal mb-1">Email *</label>
        <input
          id="contact-email"
          type="email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          className="w-full border border-linen rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-iron transition-colors"
          placeholder="your@email.com"
          required
        />
      </div>
      <div>
        <label htmlFor="contact-phone" className="block text-sm font-medium text-coal mb-1">Phone</label>
        <input
          id="contact-phone"
          type="tel"
          value={form.phone}
          onChange={e => setForm({ ...form, phone: e.target.value })}
          className="w-full border border-linen rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-iron transition-colors"
          placeholder="+91 ..."
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-coal mb-1">Message *</label>
        <textarea
          id="contact-message"
          rows={4}
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
          className="w-full border border-linen rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-iron transition-colors"
          placeholder="How can we help?"
          required
        ></textarea>
      </div>
      <button type="submit" disabled={isSubmitting} className={`bg-iron text-white px-6 py-2.5 rounded-sm text-sm font-medium hover:bg-iron-dark transition-colors ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

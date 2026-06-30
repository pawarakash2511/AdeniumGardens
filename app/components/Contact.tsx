"use client";

import { useState } from "react";
import { Phone, Mail, CheckCircle2 } from "lucide-react";
import { CONTACT } from "@/lib/content";

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function Contact({ id }: { id?: string }) {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // TODO: wire up form submission (e.g. Formspree / EmailJS / API route)
    setSubmitted(true);
  };

  const field =
    "w-full px-4 py-3 rounded-xl border border-garden-green/20 bg-white text-garden-dark text-sm font-body focus:outline-none focus:ring-2 focus:ring-garden-gold transition-shadow";
  const errClass = "text-red-500 text-xs mt-1 font-body";

  return (
    <section id={id ?? "contact"} className="bg-garden-green py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-garden-gold text-xs uppercase tracking-[0.25em] mb-3 font-body">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white font-light">
            {CONTACT.heading}
          </h2>
          <p className="text-white/60 mt-4 font-body">{CONTACT.subtext}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="flex flex-col gap-8 text-white">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-garden-gold/20 flex items-center justify-center flex-shrink-0">
                <Phone size={18} className="text-garden-gold" />
              </div>
              <div>
                <p className="text-white/50 text-xs uppercase tracking-widest mb-1 font-body">Call Us</p>
                <a
                  href={`tel:${CONTACT.phone.replace(/-/g, "")}`}
                  className="text-xl font-display hover:text-garden-gold transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-garden-gold/20 flex items-center justify-center flex-shrink-0">
                <Mail size={18} className="text-garden-gold" />
              </div>
              <div>
                <p className="text-white/50 text-xs uppercase tracking-widest mb-1 font-body">Email Us</p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-base font-body hover:text-garden-gold transition-colors"
                >
                  {CONTACT.email}
                </a>
              </div>
            </div>

            <div className="mt-4 p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-white/70 text-sm leading-relaxed font-body">
                Serving Mumbai, Bangalore, Kolkata, Ahmedabad, Gurgaon, Pune and surrounding areas.
                Reach out for a free consultation on your landscaping project.
              </p>
            </div>
          </div>

          {/* Form */}
          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-4 text-center py-12">
              <CheckCircle2 size={56} className="text-garden-gold" />
              <h3 className="font-display text-2xl text-white">{CONTACT.successMessage}</h3>
              <p className="text-white/60 text-sm font-body">
                We look forward to discussing your project.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
              <div>
                <input
                  type="text"
                  placeholder="Your Name *"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={field}
                />
                {errors.name && <p className={errClass}>{errors.name}</p>}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email Address *"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={field}
                />
                {errors.email && <p className={errClass}>{errors.email}</p>}
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={field}
                />
                {errors.phone && <p className={errClass}>{errors.phone}</p>}
              </div>

              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className={`${field} text-garden-dark/70`}
              >
                <option value="">Service Interested In</option>
                {CONTACT.serviceOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>

              <div>
                <textarea
                  placeholder="Your Message *"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${field} resize-none`}
                />
                {errors.message && <p className={errClass}>{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-garden-gold text-garden-dark font-semibold rounded-xl hover:bg-amber-400 transition-colors duration-200 text-sm tracking-wide"
              >
                {CONTACT.submitLabel}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

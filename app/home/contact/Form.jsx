"use client";

import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "", // honeypot field
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `Subject: ${formData.subject}\n\n${formData.message}`,
          website: formData.website, // honeypot
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        if (response.status === 429) {
          throw new Error(data.error || "Too many attempts. Please wait a moment.");
        }
        throw new Error("Failed to send message. Please try again.");
      }

      setStatus("success");
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        website: "",
      });
    } catch (error) {
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again.");
      console.error("Error sending message:", error);
    }
  };

  // Show success message after form submission
  if (status === "success") {
    return (
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-4xl animate-fadeIn">
            <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-2xl border-2 border-green-200 dark:border-green-800 animate-slideUp">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900/40 animate-scaleIn">
              <svg
                className="w-6 h-6 text-green-800 dark:text-green-400 animate-checkmark"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="flex-1 animate-fadeInDelayed">
              <h3 className="text-lg font-semibold text-green-900 dark:text-white mb-2">
                Message Sent Successfully!
              </h3>
              <p className="text-green-800 dark:text-green-300 mb-4">
                Thank you for reaching out. I've received your message and will
                get back to you soon.
              </p>
              <button
                onClick={() => {
                  setStatus("idle");
                  setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                    website: "",
                  });
                }}
                className="text-sm font-medium text-green-800 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 underline underline-offset-2 transition-colors duration-150"
              >
                Send another message
              </button>
            </div>
          </div>
        </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pb-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Resume button - moved above header */}
        <div className="mb-6 flex gap-4">
          <a
            href="/resume"
            className="px-6 py-2.5 font-semibold text-center text-white bg-blue-800 dark:bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 dark:hover:bg-blue-500 hover:shadow-lg hover:-translate-y-1 active:bg-blue-900 dark:active:bg-blue-700 active:shadow-sm active:translate-y-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 inline-block"
          >
            Resume + Highlights
          </a>
          <a
            href="#top"
            className="px-6 py-2.5 font-semibold text-center text-gray-800 dark:text-gray-100 bg-white dark:bg-neutral-900 border-2 border-gray-400 dark:border-gray-500 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-800 dark:hover:text-blue-400 hover:shadow-md hover:-translate-y-0.5 active:bg-gray-100 dark:active:bg-gray-950 active:shadow-none active:translate-y-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 inline-flex items-center gap-2"
          >
            <span>↑</span> Back to Top
          </a>
        </div>
        
        {/* Subsection header */}
        <div className="border-b border-gray-200 dark:border-neutral-700 pb-2 mb-6">
          <h2 className="text-sm uppercase tracking-wider font-semibold text-gray-600 dark:text-neutral-400">
            Send a Message
          </h2>
        </div>

        {/* Form container with frosted glass effect */}
        <div className="max-w-4xl p-8 md:p-10 rounded-2xl border-2 border-gray-300 dark:border-neutral-700 bg-linear-to-br from-white/80 to-white/60 dark:from-neutral-800/50 dark:to-neutral-800/30 backdrop-blur-md shadow-xl dark:shadow-2xl dark:shadow-black/40">

          {/* Form title inside the card */}
          <div className="mb-8 pb-6 border-b-2 border-gray-900 dark:border-white">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Get in Touch
            </h3>
            <p className="text-sm text-gray-600 dark:text-neutral-300">
              Let's discuss your project or how we can work together
            </p>
          </div>

          <form
            id="contact-form"
            onSubmit={handleSubmit}
            className="space-y-8"
          >
      {/* Honeypot field - hidden from real users, visible to bots */}
      <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
        <label htmlFor="website">
          Website
        </label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website}
          onChange={handleChange}
          className="w-full px-5 py-4"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-sm uppercase tracking-wider font-bold text-gray-900 dark:text-white"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-5 py-4 rounded-xl border-2 border-gray-300 dark:border-neutral-600 bg-white dark:bg-neutral-900/80 backdrop-blur-sm text-gray-900 dark:text-neutral-100 text-base placeholder:text-gray-400 placeholder:dark:text-neutral-500 focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 focus:bg-white dark:focus:bg-neutral-900 shadow-md hover:shadow-lg transition-all duration-200"
            placeholder="John Smith"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm uppercase tracking-wider font-bold text-gray-900 dark:text-white"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-5 py-4 rounded-xl border-2 border-gray-300 dark:border-neutral-600 bg-white dark:bg-neutral-900/80 backdrop-blur-sm text-gray-900 dark:text-neutral-100 text-base placeholder:text-gray-400 placeholder:dark:text-neutral-500 focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 focus:bg-white dark:focus:bg-neutral-900 shadow-md hover:shadow-lg transition-all duration-200"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="subject"
          className="block text-sm uppercase tracking-wider font-bold text-gray-900 dark:text-white"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-5 py-4 rounded-xl border-2 border-gray-300 dark:border-white/30 bg-white dark:bg-neutral-900/50 backdrop-blur-sm text-gray-900 dark:text-neutral-100 text-base placeholder:text-gray-400 placeholder:dark:text-slate-500 focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 focus:bg-white dark:focus:bg-gray-900/70 shadow-md hover:shadow-lg transition-all duration-200"
          placeholder="Project collaboration, freelance inquiry, etc."
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block text-sm uppercase tracking-wider font-bold text-gray-900 dark:text-white"
        >
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={7}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-5 py-4 rounded-xl border-2 border-gray-300 dark:border-neutral-600 bg-white dark:bg-neutral-900/80 backdrop-blur-sm text-gray-900 dark:text-neutral-100 text-base leading-relaxed placeholder:text-gray-400 placeholder:dark:text-neutral-500 focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 focus:bg-white dark:focus:bg-neutral-900 shadow-md hover:shadow-lg transition-all duration-200 resize-none"
          placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
        />
      </div>

      {/* Error Messages */}
      {status === "error" && (
        <div role="alert" className="text-sm text-red-700 dark:text-red-300 bg-red-50 dark:bg-red-900/20 p-4 rounded-xl border border-red-200 dark:border-red-800">
          <p>{errorMessage}</p>
        </div>
      )}

      <div className="pt-4 flex gap-4 flex-wrap items-center">
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-8 py-4 text-base font-bold uppercase tracking-wider text-white bg-blue-800 dark:bg-blue-600 rounded-xl shadow-lg hover:bg-blue-700 dark:hover:bg-blue-500 hover:shadow-xl hover:-translate-y-1 active:bg-blue-900 dark:active:bg-blue-700 active:shadow-md active:translate-y-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await response.json();
      console.log(data); // log the response
      setFormSubmitted(true);
    } catch (error) {
      console.error(error);
      setStatusMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <section id="contact" className="flex items-center justify-center">
      {!formSubmitted ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start flex-1 w-full gap-6 p-6 text-sm font-bold bg-white border-2 border-blue-800 rounded-lg"
        >
          <h1 className="self-center text-2xl font-semibold text-center text-blue-900">
            Let's Get in Contact Today!
          </h1>

          <label className="font-bold text-blue-800">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 text-blue-800 transition-all duration-200 ease-in-out border-2 border-blue-800 rounded-lg bg-blue-50 focus:outline-none focus:border-blue-400"
            placeholder="John Doe"
          />

          <label className="text-blue-800">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 transition-all duration-200 ease-in-out border-2 border-blue-800 rounded-lg bg-blue-50 focus:outline-none focus:border-blue-400"
            placeholder="example@gmail.com"
          />

          <label className="text-blue-800">Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full h-32 p-2 transition-all duration-200 ease-in-out border-2 border-blue-800 rounded-lg bg-blue-50 focus:outline-none focus:border-blue-400"
            placeholder="Let me know what you think!"
          ></textarea>

          <button className="flex flex-col items-center justify-center p-2 px-4 text-xl font-bold text-white bg-blue-800 rounded-2xl sm:px-8 dark:text-blue-950 dark:bg-blue-50 hover:bg-blue-600 active:bg-blue-950 focus:bg-blue-500 dark:hover:bg-blue-200 focus:outline-none focus:ring focus:ring-blue-400">
            <AiOutlineMail className="w-icon-sm h-icon-sm" />
            <p className="text-sm font-semibold text-center">Send Message</p>
          </button>
        </form>
      ) : (
        <>
          <p className="p-8 text-2xl font-semibold">
            Thank you for your message! I'll be sure to get back to you very
            soon!
          </p>
        </>
      )}
    </section>
  );
}

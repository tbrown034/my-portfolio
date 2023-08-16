import { AiOutlineMail } from "react-icons/ai";

export default function Contact() {
  return (
    <section id="contact" className="flex items-center justify-center ">
      <form className="flex flex-col items-start flex-1 w-full gap-6 p-6 text-sm font-bold bg-white border-2 border-blue-800 rounded-lg">
        <h1 className="self-center text-2xl font-semibold text-center text-blue-900">
          Let's Get in Contact Today!
        </h1>

        <label className="font-bold text-blue-800">Name:</label>
        <input
          className="w-full p-2 text-blue-800 transition-all duration-200 ease-in-out border-2 border-blue-800 rounded-lg bg-blue-50 focus:outline-none focus:border-blue-400"
          placeholder="John Doe"
        ></input>

        <label className="text-blue-800">Email:</label>
        <input
          className="w-full p-2 transition-all duration-200 ease-in-out border-2 border-blue-800 rounded-lg bg-blue-50 focus:outline-none focus:border-blue-400"
          placeholder="example@gmail.com"
        ></input>

        <label className="text-blue-800">Message:</label>
        <textarea
          className="w-full h-32 p-2 transition-all duration-200 ease-in-out border-2 border-blue-800 rounded-lg bg-blue-50 focus:outline-none focus:border-blue-400"
          placeholder="Let me know what you think!"
        ></textarea>

        <div className="mt-4">
          <a
            className="flex flex-col items-center justify-center p-2 px-4 text-xl font-bold text-white bg-blue-800 rounded-2xl sm:px-8 dark:text-blue-950 dark:bg-blue-50 hover:bg-blue-600 active:bg-blue-950 focus:bg-blue-500 dark:hover:bg-blue-200 focus:outline-none focus:ring focus:ring-blue-400"
            href="/trevorBrownResume.pdf"
            download="trevorResume"
          >
            {" "}
            <AiOutlineMail className="w-icon-sm h-icon-sm" />
            <p className="text-sm font-semibold text-center">Send Message</p>
          </a>
        </div>
      </form>
    </section>
  );
}

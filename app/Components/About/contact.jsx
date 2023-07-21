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

        <div className="flex justify-center mt-4">
          <button className="flex items-center gap-2 p-2 font-bold text-white transition-colors duration-200 bg-blue-800 border-2 border-blue-800 rounded-lg hover:bg-blue-400 active:bg-blue-500">
            <AiOutlineMail className="w-icon-sm h-icon-sm" />
            Send
          </button>
        </div>
      </form>
    </section>
  );
}

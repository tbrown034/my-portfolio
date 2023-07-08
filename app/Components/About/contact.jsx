export default function contact() {
  return (
    <section id="contact">
      <form className="flex flex-col gap-4 p-4 border-4 border-blue-800 rounded-lg ">
        <h1 className="text-xl font-semibold">Get in Contact Today</h1>

        <label>Name:</label>
        <input className="w-1/2 p-2 rounded-lg" placeholder="John Doe"></input>
        <label>Email:</label>
        <input
          className="w-1/2 p-2 rounded-lg"
          placeholder="example@gmail.com"
        ></input>

        <label>Message:</label>
        <textarea
          className="p-2 rounded-lg "
          placeholder="Let me know what you think!"
        ></textarea>
        <div className="flex justify-center">
          <button className="px-8 py-2 border-4 border-blue-800 rounded-lg">
            Send
          </button>
        </div>
      </form>
    </section>
  );
}

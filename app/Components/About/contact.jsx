export default function contact() {
  return (
    <section>
      <form className="flex flex-col gap-4 p-4 bg-blue-800 rounded-lg text-blue-50">
        <h1>Get in Contact Today</h1>

        <label>Name</label>
        <input className="w-1/2 p-2 rounded-lg" placeholder="John Doe"></input>
        <label>Email</label>
        <input
          className="w-1/2 p-2 rounded-lg"
          placeholder="example@gmail.com"
        ></input>

        <label>Message</label>
        <textarea
          className="p-2 rounded-lg "
          placeholder="Let me know what you think!"
        ></textarea>
        <button>Send</button>
      </form>
    </section>
  );
}

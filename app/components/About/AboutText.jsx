export default function AboutText() {
  return (
    <section>
      <div className="flex flex-col gap-4 ">
        <h2 className="text-3xl font-bold lg:text-center font-montserrat sm:text-4xl ">
          About Me
        </h2>
        <div className="flex flex-col gap-4 ">
          <p className="text-xl leading-normal font-robotoSlab">
            I grew up in the suburbs of Chicago before going to college at
            Indiana University and then working as a journalist in Indiana,
            Virginia, Wyoming and Oklahoma. I most recently was an investigative
            reporter for Oklahoma Watch, a non-profit news group based out of
            Oklahoma City.
          </p>
          <p className="text-xl leading-normal font-robotoSlab">
            I'm currently living in Bloomington, Indiana, with my best friend,
            Indy. We love spending time at dog parks, hiking and exploring new
            breweries and restaurants.
          </p>
        </div>
      </div>
    </section>
  );
}

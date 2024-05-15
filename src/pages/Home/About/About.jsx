const About = () => {
  return (
    <div className="max-w-7xl mx-auto mt-12">
      <div className="md:flex mt-4 items-center">
        <div className="lg:w-1/2">
          <h1 className="text-center text-4xl font-medium text-emerald-300 font-Poppins mb-4">
            About Us
          </h1>
          <h2 className="text-4xl font-Poppins font-bold">
            Discover the Story Behind <br /> Shelf Master: Crafting Quality,
            Convenience, and Creativity
          </h2>
          <p className="mt-8 text-[#737373] text-base">
            At Shelf Master, our story is one of passion, innovation, and
            dedication to delivering exceptional products that enhance your home
            organization experience. With a commitment to quality craftsmanship,
            convenience, and creativity, we strive to bring practical solutions
            to every shelf in your home. From sleek storage solutions to
            customizable shelving units, our products are designed to streamline
            your space while adding a touch of style. Explore our About page to
            learn more about our journey and the values that drive us forward.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img
            src="https://i.ibb.co/JsGRYWx/hand-drawn-flat-design-stack-books-illustration-23-2149341898.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;

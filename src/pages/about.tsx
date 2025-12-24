import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function About() {
  return (
    <>
      <Navbar />

      {/* Hero About */}
      <section
        id="about-hero"
        className="flex flex-col items-center justify-center gap-4 h-[70vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img/about/bg.webp')" }}
      >
        <div className="text-2xl md:text-5xl text-center text-white">
          Your Neighbourhood Coffee Haven
        </div>

        <div className="px-3 py-2 text-xs md:text-3xl lg:text-4xl xl:text-2xl text-center text-white max-w-2xl">
          Crafted with passion, served with a smile. Discover the story behind
          every cup
        </div>
      </section>

      {/* Our Story */}
      <section
        id="about-story"
        className="flex flex-col justify-center items-center m-16 gap-16 md:gap-8 xl:gap-16"
      >
        <div className="flex flex-col justify-center text-center gap-4 xl:text-center">
          <h4 className="font-bold">Our Story</h4>
          <p className="text-justify xl:w-96">
            Founded in 2018, The Coffee Bean was born from a simple idea: to
            create a welcoming space where the community could gather over an
            exceptional cup of coffee. It all started with two friends, a
            passion for ethically sourced beans, and a dream to bring a piece
            of that warmth to our neighbourhood.
          </p>
        </div>

        <div className="flex flex-col justify-center text-center gap-4">
          <h4 className="font-bold">Our Commitment to Quality</h4>
          <p className="text-justify xl:w-96">
            We believe a great cup of coffee starts with great beans. That's
            why we partner with sustainable farms from around the world to
            source the finest single-origin beans. Our expert baristas are
            dedicated to their craft, ensuring that every pour is a testament
            to our passion for perfection.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

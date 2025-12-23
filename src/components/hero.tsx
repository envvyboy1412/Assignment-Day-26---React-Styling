export default function Hero() {
  return (
    <section>
      <div
        className="flex justify-end text-center bg-cover bg-center h-20 shadow-2xl border-b border-gray-200 md:justify-center xl:h-80"
        style={{ backgroundImage: "url('/img/banner.jpg')" }}
      >
        <div className="cutive text-red-700 animate-color-cycle text-shadow-lg items-end h-20 w-40 mr-10 md:w-fit md:content-center md:text-2xl md:pl-92 xl:text-3xl xl:ml-40 xl:my-32 2xl:text-6xl 2xl:ml-76">
          Let's espresso our feelings at the cafe
        </div>
      </div>
    </section>
  );
}

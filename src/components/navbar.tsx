export default function Navbar() {
  return (
    <header
      id="main-header"
      className="flex flex-col gap-4 p-8 justify-center items-center shadow-2xl bg-linear-to-b from-[#322626] to-[#F5F5DC] md:gap-16 xl:gap-24 xl:flex-row xl:justify-between xl:pr-36 2xl:pr-52 2xl:gap-60"
    >
      <div className="flex flex-row gap-8 text-white group 2xl:gap-16">
        <span className="transition-opacity duration-300 group-hover:opacity-40 hover:opacity-100 cursor-pointer">
          HOME
        </span>
        <span className="transition-opacity duration-300 group-hover:opacity-40 hover:opacity-100 cursor-pointer">
          ABOUT
        </span>
        <span className="transition-opacity duration-300 group-hover:opacity-40 hover:opacity-100 cursor-pointer">
          GALLERY
        </span>
      </div>

      <div className="imperial-script text-3xl md:text-4xl text-white font-bold text-center">
        Dawn Winery Cafe
      </div>

      <button className="bg-yellow-600 hover:bg-yellow-700 animate-bounce text-white hover:text-emerald-500 font-bold py-2 px-4 rounded-xl cursor-pointer">
        Checkout
      </button>
    </header>
  );
}

export default function MenuNav() {
  return (
    <nav
      id="menu-nav"
      className="flex flex-row p-4 gap-8 group md:gap-60 xl:pl-60 xl:gap-32 sticky top-0 z-50 bg-linear-to-b from-[#f7f3e8]/90 to-[#f1e9d2]/90 backdrop-blur border-b border-[#dbcbb0]"
    >
      <a
        href="#most-popular"
        className="text-black font-semibold text-xl transition-opacity duration-300 group-hover:opacity-40 hover:opacity-100 2xl:text-3xl"
      >
        Most Popular
      </a>
      <a
        href="#drinks"
        className="text-black font-semibold text-xl transition-opacity duration-300 group-hover:opacity-40 hover:opacity-100 2xl:text-3xl"
      >
        Drinks
      </a>
      <a
        href="#food"
        className="text-black font-semibold text-xl transition-opacity duration-300 group-hover:opacity-40 hover:opacity-100 2xl:text-3xl"
      >
        Food
      </a>
    </nav>
  );
}

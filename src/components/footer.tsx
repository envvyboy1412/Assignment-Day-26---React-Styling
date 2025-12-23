export default function Footer() {
  return (
    <footer className="mt-16">
      <div className="bg-amber-50 text-stone-800 py-10 px-6 grid grid-cols-1 md:grid-cols-3 gap-10 lg:px-32 2xl:px-80">
        <div className="space-y-2 leading-relaxed">
          <p className="font-semibold">CONTACT US</p>
          <p>123 Dawn Winery Cafe, Brewtown, CA 90210</p>
          <p>(555) 123-4567</p>
          <p>hello@dawnwinerycafe.com</p>
        </div>

        <div className="space-y-2 leading-relaxed">
          <p className="font-semibold">HOURS</p>
          <p>Monday - Friday: 10:00 AM - 22:00 PM</p>
          <p>Saturday - Sunday: 09:00 AM - 21:00 PM</p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <p className="font-semibold">FOLLOW US</p>
          <div className="flex gap-4 text-2xl">
            <span className="hover:opacity-70 text-blue-600">FB</span>
            <span className="hover:opacity-70 text-pink-600">IG</span>
            <span className="hover:opacity-70 text-sky-500">TW</span>
            <span className="hover:opacity-70 text-red-600">YT</span>
          </div>
        </div>
      </div>

      <div className="bg-amber-300 text-amber-900 text-center py-6 text-2xl imperial-script">
        © 2025 Dawn Winery Cafe
      </div>
    </footer>
  );
}

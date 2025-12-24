import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import MenuNav from "@/components/menunav";

import Card from "@/components/card";
import Footer from "@/components/footer";

export default function Home() {
  const mostPopular = [
    {
      nama: "Latte",
      deskripsi:
        "A single shot of house-blend espresso with whole steamed milk, 10/14 oz.",
      harga: "Rp. 25.000",
      gambar: "/img/latte.jpg",
    },
    {
      nama: "Iced Matcha Latte",
      deskripsi:
        "Sweetened premium Japanese matcha powder whisked with cold milk, 16/20 oz.",
      harga: "Rp. 35.000",
      gambar: "/img/matcha.jpg",
    },
    {
      nama: "Cappuccino",
      deskripsi:
        "A double shot of espresso evenly balanced with steamed milk and foam, 8/12 oz.",
      harga: "Rp. 20.000",
      gambar: "/img/capu.jpg",
    },
    {
      nama: "Matcha Latte",
      deskripsi:
        "High-quality Japanese matcha powder whisked into steamed milk, 12/16 oz.",
      harga: "Rp. 25.000",
      gambar: "/img/macca.webp",
    },
  ];

  const drinks = [
  {
    nama: "Flash Brew",
    deskripsi:
      "Japanese-style iced coffee brewed hot and immediately flash-chilled over ice, 16 oz.",
    harga: "Rp. 15.000",
    gambar: "/img/flash brew.webp",
  },
  {
    nama: "Nitro Brew",
    deskripsi:
      "Sweetened premium drink served cold with smooth texture, 16/20 oz.",
    harga: "Rp. 65.000",
    gambar: "/img/nitro brew.webp",
  },
  {
    nama: "Hot Drip Coffee",
    deskripsi:
      "Freshly brewed single-origin coffee, perfect for a comforting cup, 12/16 oz.",
    harga: "Rp. 20.000",
    gambar: "/img/hot drip coffee.webp",
  },
  {
    nama: "Ice Tea Lemon",
    deskripsi:
      "Freshly brewed black tea served chilled with lemon and simple syrup, 16 oz.",
    harga: "Rp. 25.000",
    gambar: "/img/ice tea lemon.jpg",
  },
];

const food = [
  {
    nama: "Cream Cheese Funfetti Cookie",
    deskripsi:
      "Soft and thick sugar cookie with vibrant funfetti sprinkles and cream cheese.",
    harga: "Rp. 30.000",
    gambar: "/img/cream cheese funfetti cookie.jpg",
  },
  {
    nama: "Blueberry Maple Muffin",
    deskripsi:
      "Moist muffin with juicy blueberries and a drizzle of pure maple syrup.",
    harga: "Rp. 50.000",
    gambar: "/img/blueberry maple muffin.jpg",
  },
  {
    nama: "Honey Butter Scone",
    deskripsi:
      "Flaky scone brushed with warm honey glaze and melted butter.",
    harga: "Rp. 70.000",
    gambar: "/img/honey butter scone.webp",
  },
  {
    nama: "Cinnamon Sugar Morning Bun",
    deskripsi:
      "Flaky croissant dough rolled with cinnamon sugar and brown butter.",
    harga: "Rp. 40.000",
    gambar: "/img/cinnamon sugar morning bun.jpeg",
  },
];



  return (
    <>
      <Navbar />
      <Hero />
      <MenuNav />

      <h3
        id="most-popular"
        className="text-2xl font-bold m-8 lg:w-fit lg:h-fit lg:ml xl:ml-60 2xl:ml-130 gradient-text"
      >
        Most Popular
      </h3>

      <section className="grid grid-cols-1 m-8 gap-8 md:grid-cols-2 lg:w-fit lg:h-fit lg:ml xl:ml-60 2xl:ml-130">
        {mostPopular.map((item) => (
          <Card
            key={item.nama}
            nama={item.nama}
            deskripsi={item.deskripsi}
            harga={item.harga}
            gambar={item.gambar}
          />
        ))}
      </section>

      <h3
  id="drinks"
  className="text-2xl font-bold m-8 lg:w-fit lg:h-fit lg:ml xl:ml-60 2xl:ml-130 gradient-text"
>
  Drinks
</h3>

<section className="grid grid-cols-1 m-8 gap-8 md:grid-cols-2 lg:w-fit lg:h-fit lg:ml xl:ml-60 2xl:ml-130">
  {drinks.map((item) => (
    <Card
      key={item.nama}
      nama={item.nama}
      deskripsi={item.deskripsi}
      harga={item.harga}
      gambar={item.gambar}
    />
  ))}
</section>

<h3
  id="food"
  className="text-2xl font-bold m-8 lg:w-fit lg:h-fit lg:ml xl:ml-60 2xl:ml-130 gradient-text"
>
  Food
</h3>

<section className="grid grid-cols-1 m-8 gap-8 md:grid-cols-2 lg:w-fit lg:h-fit lg:ml xl:ml-60 2xl:ml-130">
  {food.map((item) => (
    <Card
      key={item.nama}
      nama={item.nama}
      deskripsi={item.deskripsi}
      harga={item.harga}
      gambar={item.gambar}
    />
  ))}
</section>



      <Footer />
    </>
  );
}

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import GalleryItem from "@/components/galleryitem";

export default function Gallery() {
  const galleryItems = [
    {
      image: "/img/about/bs1.webp",
      title: "Owner",
    },
    {
      image: "/img/capu.jpg",
      title: "Cappuccino",
    },
    {
      image: "/img/macca.webp",
      title: "Macca Latte",
      className: "xl:col-span-2 2xl:col-span-1",
    },
    {
      image: "/img/Blueberry Maple Muffin.jpg",
      title: "Blueberry Maple Muffin",
    },
    {
      image: "/img/Cinnamon Sugar Morning Bun.jpeg",
      title: "Cinnamon Sugar Morning Bun",
      className: "xl:col-span-2 2xl:col-span-1",
    },
    {
      image: "/img/about/bs2.png",
      title: "Making Cake",
    },
    {
      image: "/img/about/out.jpg",
      title: "Outdoor Corner",
    },
    {
      image: "/img/about/aout2_2.webp",
      title: "Hangout with Your Friends",
    },
    {
      image: "/img/about/out3.jpg",
      title: "Hangout with Your Pet",
      className: "xl:col-span-2 2xl:col-span-1",
    },
    {
      image: "/img/about/out4.webp",
      title: "Chilling when Raining with some Coffee",
      className: "xl:col-span-2 2xl:col-span-1",
    },
    {
      image: "/img/Hot Drip Coffee.webp",
      title: "Hot Drip Coffee",
    },
    {
      image: "/img/Nitro Brew.webp",
      title: "Nitro Cold Brew",
    },
  ];

  return (
    <>
      <Navbar />
      <section
        id="gallery-grid"
        className="max-w-7xl mx-auto grid grid-cols-3 gap-4 px-4 mb-8 w-full xl:grid-cols-4"
      >
        {galleryItems.map((item, index) => (
          <GalleryItem
            key={index}
            image={item.image}
            title={item.title}
            className={item.className}
          />
        ))}
      </section>

      <Footer />
    </>
  );
}

type GalleryItemProps = {
  image: string;
  title: string;
  className?: string;
};

export default function GalleryItem({
  image,
  title,
  className = "",
}: GalleryItemProps) {
  return (
    <div
      className={`relative bg-cover bg-center group w-full h-50 md:h-125 2xl:h-75 rounded-2xl ${className}`}
      style={{ backgroundImage: `url('${image}')` }}
    >
      <p className="absolute bottom-0 left-0 p-2 bg-black/60 text-white text-sm md:text-2xl font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tr-lg">
        {title}
      </p>
    </div>
  );
}

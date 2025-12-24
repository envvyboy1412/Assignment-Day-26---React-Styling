type HeroSectionProps = {
  backgroundImage: string;
  title: string;
  subtitle?: string;
};

export default function HeroSection({
  backgroundImage,
  title,
  subtitle,
}: HeroSectionProps) {
  return (
    <section
      className="flex flex-col items-center justify-center gap-4 h-[70vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div
        className="text-2xl md:text-5xl text-center text-white"
        style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.9)" }}
      >
        {title}
      </div>

      {subtitle && (
        <div
          className="px-3 py-2 text-xs md:text-3xl lg:text-4xl xl:text-2xl text-center text-white max-w-2xl"
          style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.9)" }}
        >
          {subtitle}
        </div>
      )}
    </section>
  );
}

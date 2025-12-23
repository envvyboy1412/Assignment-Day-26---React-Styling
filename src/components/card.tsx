type CardProps = {
  nama: string;
  deskripsi: string;
  harga: string;
  gambar: string;
};

export default function Card({ nama, deskripsi, harga, gambar }: CardProps) {
  return (
    <div className="flex flex-row h-fit text-start gap-4 pb-4 border-b border-gray-200 lg:w-96 lg:h-fit">
      <div className="h-60 md:h-40">
        <h6 className="font-semibold text-xl font-serif">{nama}</h6>
        <p className="transition-opacity duration-300 hover:opacity-60 text-justify cutive">
          {deskripsi}
        </p>
        <p>{harga}</p>
      </div>
      <img
        src={gambar}
        alt={nama}
        className="h-40 w-30 rounded-2xl mx-auto"
      />
    </div>
  );
}

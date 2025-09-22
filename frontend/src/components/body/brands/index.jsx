const brands = [
  {
    id: "brand-1",
    name: "ELEIKO",
    url: "img/gym-brands/ELEIKO.png",
    alt: "ELEIKO",
  },
  {
    id: "brand-2",
    name: "gym80",
    url: "img/gym-brands/gym80.png",
    alt: "gym80",
  },
  {
    id: "brand-3",
    name: "HAMMER",
    url: "img/gym-brands/HAMMER.png",
    alt: "HAMMER",
  },
  {
    id: "brand-4",
    name: "Technogym",
    url: "img/gym-brands/Technogym.png",
    alt: "Technogym",
  },
];

export default function Brands() {
  return (
    <div className="flex flex-row gap-4 justify-center bg-primary w-full p-8">
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-5 justify-center">
        {brands.map((brand) => (
          <li className="flex justify-center" key={brand.id}>
            <img
              src={brand.url}
              alt={brand.alt}
              className="w-auto h-[16px] md:w-auto md:h-[25px]"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

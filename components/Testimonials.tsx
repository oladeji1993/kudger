import Image from "next/image";

const testimonials = [
  {
    name: "Amina Bello",
    role: "Farmer, Kaduna State",
    roleUrl: "#",
    img: "/howitworks-icon.png",
    quote: "Now I can sell my tomatoes and get paid instantly. No more waiting for cash or bank transfers."
  },
  {
    name: "Chidi Okafor",
    role: "Shop Owner, Enugu",
    roleUrl: "#",
    img: "/howitworks-icon.png",
    quote: "My customers love how easy it is. Just tap and pay. My business has grown 40% since using Kudger."
  },
  {
    name: "Fatima Ibrahim",
    role: "Artisan, Kano",
    roleUrl: "#",
    img: "/howitworks-icon.png",
    quote: "I make beautiful crafts and now I can accept digital payments from anyone, anywhere in Nigeria."
  }
];

export default function Testimonials() {
  return (
    <section className="w-full bg-gradient-to-b from-[#f3fdf5] to-[#fafaf6] py-16 px-2 md:px-0 flex justify-center items-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">What Our Users Say</h2>
        <p className="text-gray-600 text-base md:text-lg mb-12 text-center max-w-2xl">
          Real stories from rural Nigerian communities
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md px-7 py-6 flex flex-col min-h-[210px] transition hover:shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-11 h-11 rounded-full overflow-hidden">
                  <Image src={t.img} alt={t.name} width={44} height={44} className="object-cover w-full h-full" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-gray-900 leading-tight">{t.name}</div>
                  <a href={t.roleUrl} className="text-green-600 text-xs underline leading-tight hover:text-green-700">{t.role}</a>
                </div>
              </div>
              <p className="italic text-gray-700 text-base mt-2">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

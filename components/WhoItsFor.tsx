import Image from "next/image";

const groups = [
  {
    title: "Farmers",
    desc: "Sell crops and buy supplies without cash worries",
    img: "/whoitsfor-img.png",
  },
  {
    title: "Small Shop Owners",
    desc: "Accept payments easily without expensive equipment",
    img: "/whoitsfor-img.png",
  },
  {
    title: "Artisans",
    desc: "Get paid for crafts and services instantly",
    img: "/whoitsfor-img.png",
  },
  {
    title: "NGO/Agents",
    desc: "Help communities access digital payments",
    img: "/whoitsfor-img.png",
  },
];

export default function WhoItsFor() {
  return (
    <section className="w-full bg-gradient-to-b from-[#fafaf6] to-[#e6f6f1] py-16 px-2 md:px-0 flex justify-center items-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Who It's For</h2>
        <p className="text-gray-600 text-base md:text-lg mb-12 text-center max-w-2xl">
          Kudger serves everyone in Nigeria's rural communities
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full">
          {groups.map((group, idx) => (
            <div
              key={idx}
              className="bg-[#FCFCF7] rounded-3xl shadow-xl flex flex-col items-center px-8 pt-8 pb-7 min-w-[300px] min-h-[380px] mx-auto transition hover:shadow-2xl"
              style={{ boxShadow: "0 6px 32px 0 rgba(0,0,0,0.07)" }}
            >
              <div className="w-full flex justify-center mb-7">
                <div className="w-full aspect-square rounded-2xl overflow-hidden bg-gray-200 flex items-center justify-center">
                  <Image src={group.img} alt={group.title} width={320} height={320} className="object-cover w-full h-full" />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-3 w-full text-left text-gray-900">{group.title}</h3>
              <p className="text-gray-500 text-base w-full text-left leading-snug">{group.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

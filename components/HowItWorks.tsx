import Image from "next/image";

const steps = [
  {
    title: "Set up eNaira Wallet",
    desc: "Visit any Kudger agent to create your digital wallet",
    img: "/howitworks-icon.png",
  },
  {
    title: "Get your NFC device",
    desc: "Receive your NFC wristband or card from the agent",
    img: "/howitworks-icon.png",
  },
  {
    title: "Load tokens",
    desc: "Add money to your NFC device through any agent",
    img: "/howitworks-icon.png",
  },
  {
    title: "Tap to pay",
    desc: "Simply tap your device on any compatible terminal",
    img: "/howitworks-icon.png",
  },
  {
    title: "Sync later when online",
    desc: "All transactions sync automatically when connection is available",
    img: "/howitworks-icon.png",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full bg-white py-16 px-2 md:px-0 flex justify-center items-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">How Kudger Works</h2>
        <p className="text-gray-600 text-base md:text-lg mb-12 text-center max-w-2xl">
          Simple steps to start using eNaira without smartphone or internet connection
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 w-full">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center relative">
              {/* Number badge */}
              <span className="absolute -top-2 -left-2 bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-base shadow-md border-2 border-white">
                {idx + 1}
              </span>
              {/* Icon */}
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-md mb-4 flex items-center justify-center bg-gray-100">
                <Image src={step.img} alt={step.title} width={100} height={100} />
              </div>
              {/* Step title */}
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              {/* Step desc */}
              <p className="text-gray-500 text-sm md:text-base leading-snug max-w-[180px] mx-auto">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

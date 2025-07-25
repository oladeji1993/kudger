export default function ContactUs() {
  return (
    <section id="contact" className="w-full bg-gradient-to-r from-green-700 to-green-800 py-16 px-2 md:px-0 flex justify-center items-center">
      <div className="max-w-3xl mx-auto w-full flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center text-white">Ready to Start Using Kudger?</h2>
        <p className="text-white text-base md:text-lg mb-8 text-center max-w-2xl">
          Join thousands of Nigerians already using Kudger for simple, secure digital payments
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button id="find-agent" className="bg-white text-green-700 font-semibold rounded-full px-7 py-3 text-base shadow-md transition hover:bg-green-50">
            Locate a Kudger Agent
          </button>
          <button className="border border-white text-white font-semibold rounded-full px-7 py-3 text-base bg-transparent hover:bg-white hover:text-green-700 transition">
            Join as a Merchant
          </button>
        </div>
      </div>
    </section>
  );
}

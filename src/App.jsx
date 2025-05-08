
import React from "react";

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0c1f3f] to-[#111827] text-white font-sans">
      <header className="px-6 py-4 flex justify-between items-center border-b border-white/10">
        <h1 className="text-2xl font-bold text-[#f4b400]">EJJC Group</h1>
        <nav className="flex gap-6 text-sm font-medium">
          <a href="#about" className="hover:text-[#f4b400]">About</a>
          <a href="#services" className="hover:text-[#f4b400]">Services</a>
          <a href="#process" className="hover:text-[#f4b400]">Process</a>
          <a href="#blog" className="hover:text-[#f4b400]">Blog</a>
          <a href="#contact" className="hover:text-[#f4b400]">Contact</a>
        </nav>
      </header>

      <section className="relative h-[80vh] flex flex-col justify-center items-center text-center px-6">
        <div className="absolute inset-0 bg-[url('/luxury-house.jpg')] bg-cover bg-center opacity-40"></div>
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-4">Helping Homeowners Reclaim Control</h2>
          <p className="text-lg text-white/90 mb-6">
            Foreclosure Solutions • Short Sales • Trusted Negotiators
          </p>
          <a href="#contact" className="inline-block bg-[#f4b400] text-[#0c1f3f] font-bold py-3 px-6 rounded-full shadow-md hover:bg-[#e0a800] transition">
            Get a Free Consultation
          </a>
        </div>
      </section>

      <section id="about" className="py-16 px-6 max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-6">Why Choose EJJC Group?</h3>
        <p className="text-center text-white/80 max-w-3xl mx-auto">
          With years of experience in real estate negotiations, we help Florida homeowners avoid foreclosure, restore peace of mind, and achieve a dignified financial resolution. Our personalized approach, lender relationships, and fast results set us apart.
        </p>
      </section>

      <section id="services" className="py-16 bg-white text-[#0c1f3f]">
        <div className="px-6 max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Short Sale Negotiation",
              "Foreclosure Defense",
              "Loan Modification Help",
              "Legal Referrals",
              "Credit Strategy Coaching",
              "Lien Settlement"
            ].map((service) => (
              <div key={service} className="p-6 bg-[#f9f9f9] text-[#0c1f3f] rounded-xl shadow-lg">
                <h4 className="text-lg font-semibold mb-2">{service}</h4>
                <p className="text-sm text-[#374151]">Tailored to your financial goals and legal needs.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-6 max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-10">Latest Blog Posts</h3>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="p-6 bg-white text-[#0c1f3f] rounded-xl shadow-md">
            <h4 className="text-xl font-bold mb-2">Short Sale vs Foreclosure in Florida</h4>
            <p className="text-sm text-[#374151] mb-4">
              Understand the key differences and which route protects your credit best in 2025.
            </p>
            <a href="#" className="text-[#f4b400] font-semibold">Read More →</a>
          </div>
          <div className="p-6 bg-white text-[#0c1f3f] rounded-xl shadow-md">
            <h4 className="text-xl font-bold mb-2">Top 5 Mistakes Homeowners Make Facing Foreclosure</h4>
            <p className="text-sm text-[#374151] mb-4">
              Avoid these common pitfalls and learn how to take control before it's too late.
            </p>
            <a href="#" className="text-[#f4b400] font-semibold">Read More →</a>
          </div>
        </div>
      </section>

      <footer className="bg-[#0c1f3f] text-white text-center py-8">
        <p>&copy; 2025 EJJC Group. All rights reserved.</p>
      </footer>
    </main>
  );
}

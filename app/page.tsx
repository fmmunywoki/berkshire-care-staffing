export default function BerkshireCareStaffingWebsite() {
  const services = [
    {
      title: "Healthcare Assistants",
      description:
        "Reliable HCAs and carers available for day, night, weekend and emergency cover.",
    },
    {
      title: "Support Workers",
      description:
        "Professional support workers for supported living and community care settings.",
    },
    {
      title: "Cleaners & Domestic Staff",
      description:
        "Experienced domestic and cleaning staff for healthcare and care environments.",
    },
    {
      title: "Drivers",
      description:
        "Dependable drivers supporting healthcare transport and operational needs.",
    },
    {
      title: "Kitchen Staff",
      description:
        "Kitchen assistants and catering support staff for care homes and facilities.",
    },
    {
      title: "Emergency Staffing",
      description:
        "Rapid-response staffing solutions for urgent and last-minute cover requests.",
    },
  ];

  const jobs = [
    "Healthcare Assistants",
    "Support Workers",
    "Night Carers",
    "Drivers",
    "Kitchen Assistants",
    "Cleaners",
  ];

  return (
    <div className="font-sans text-slate-700 bg-white">
      {/* Header */}
      <header className="bg-[#123C73] text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">
              Berkshire Care Staffing
            </h1>
            <p className="text-sm text-slate-200">
              A trading name of Intraworld Limited
            </p>
          </div>

          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#home" className="hover:text-teal-300">
              Home
            </a>
            <a href="#about" className="hover:text-teal-300">
              About
            </a>
            <a href="#services" className="hover:text-teal-300">
              Services
            </a>
            <a href="#careers" className="hover:text-teal-300">
              Careers
            </a>
            <a href="#clients" className="hover:text-teal-300">
              For Clients
            </a>
            <a href="#contact" className="hover:text-teal-300">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="bg-gradient-to-r from-[#123C73] to-[#1CA6A6] text-white"
      >
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold leading-tight mb-6">
              Reliable Care & Support Staffing Across Berkshire
            </h2>

            <p className="text-lg text-slate-100 mb-8 leading-relaxed">
              Supplying dependable carers, support workers, cleaners,
              drivers and domestic staff to care homes, supported living
              providers and healthcare organisations across Berkshire.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#careers"
                className="bg-white text-[#123C73] px-6 py-4 rounded-2xl font-semibold shadow hover:scale-105 transition"
              >
                Apply for Work
              </a>

              <a
                href="#clients"
                className="bg-[#0f2f59] text-white px-6 py-4 rounded-2xl font-semibold shadow hover:scale-105 transition"
              >
                Request Staff
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-3xl p-8 shadow-2xl border border-white/20">
            <h3 className="text-2xl font-bold mb-4">
              Why Choose Us?
            </h3>

            <ul className="space-y-4 text-lg">
              <li>✔ Fast-response staffing support</li>
              <li>✔ Reliable and compassionate workers</li>
              <li>✔ Flexible temporary and emergency cover</li>
              <li>✔ Fully compliant recruitment processes</li>
              <li>✔ Local Berkshire-focused support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#123C73] mb-6">
              About Berkshire Care Staffing
            </h2>

            <p className="mb-6 text-lg leading-relaxed">
              Berkshire Care Staffing provides reliable staffing solutions
              to care homes, supported living providers and healthcare
              organisations throughout Berkshire.
            </p>

            <p className="mb-6 text-lg leading-relaxed">
              We focus on delivering dependable staff quickly while
              maintaining high standards of professionalism,
              communication and compliance.
            </p>

            <p className="text-lg leading-relaxed">
              Our mission is to support care providers with flexible,
              compassionate and responsive staffing services that help
              maintain quality care for vulnerable individuals.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-4xl font-bold text-[#1CA6A6] mb-3">
                24/7
              </h3>
              <p>Emergency staffing support</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-4xl font-bold text-[#1CA6A6] mb-3">
                Fast
              </h3>
              <p>Rapid-response recruitment</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-4xl font-bold text-[#1CA6A6] mb-3">
                Local
              </h3>
              <p>Berkshire-focused staffing solutions</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-4xl font-bold text-[#1CA6A6] mb-3">
                Trusted
              </h3>
              <p>Professional and dependable service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#123C73] mb-4">
              Our Services
            </h2>

            <p className="max-w-3xl mx-auto text-lg text-slate-600">
              We provide flexible staffing support for healthcare,
              supported living and care organisations across Berkshire.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-50 p-8 rounded-3xl shadow hover:shadow-2xl transition"
              >
                <h3 className="text-2xl font-bold text-[#123C73] mb-4">
                  {service.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section
        id="careers"
        className="py-24 bg-gradient-to-r from-[#123C73] to-[#1CA6A6] text-white"
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Join Our Team
            </h2>

            <p className="text-lg leading-relaxed mb-8 text-slate-100">
              We are recruiting compassionate and reliable staff across
              Berkshire for flexible day, night and weekend shifts.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {jobs.map((job, index) => (
                <div
                  key={index}
                  className="bg-white/10 border border-white/20 rounded-2xl p-4"
                >
                  {job}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 text-slate-700 shadow-2xl">
            <h3 className="text-2xl font-bold text-[#123C73] mb-6">
              Apply Online
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 rounded-xl border"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 rounded-xl border"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-4 rounded-xl border"
              />

              <select className="w-full p-4 rounded-xl border">
                <option>Select Position</option>
                <option>Healthcare Assistant</option>
                <option>Support Worker</option>
                <option>Cleaner</option>
                <option>Driver</option>
                <option>Kitchen Staff</option>
              </select>

              <textarea
                rows="4"
                placeholder="Tell us about your experience"
                className="w-full p-4 rounded-xl border"
              ></textarea>

              <button className="w-full bg-[#123C73] text-white py-4 rounded-2xl font-semibold hover:opacity-90 transition">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section id="clients" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-bold text-[#123C73] mb-6">
              Staffing Support For Care Providers
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              We support care homes, supported living providers,
              healthcare organisations and community services across
              Berkshire with dependable staffing solutions.
            </p>

            <ul className="space-y-4 text-lg">
              <li>✔ Temporary staffing cover</li>
              <li>✔ Emergency and last-minute cover</li>
              <li>✔ Day and night shift support</li>
              <li>✔ Flexible staffing solutions</li>
              <li>✔ Ongoing staffing partnerships</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-[#123C73] mb-6">
              Request Staff
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Organisation Name"
                className="w-full p-4 rounded-xl border"
              />

              <input
                type="text"
                placeholder="Contact Person"
                className="w-full p-4 rounded-xl border"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 rounded-xl border"
              />

              <textarea
                rows="5"
                placeholder="Tell us about your staffing requirements"
                className="w-full p-4 rounded-xl border"
              ></textarea>

              <button className="w-full bg-[#1CA6A6] text-white py-4 rounded-2xl font-semibold hover:opacity-90 transition">
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#123C73] mb-6">
            Contact Us
          </h2>

          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Get in touch with Berkshire Care Staffing to discuss staffing
            support or career opportunities.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-8 rounded-3xl shadow">
              <h3 className="text-xl font-bold text-[#123C73] mb-3">
                Email
              </h3>
              <p>fmmunywoki@gmail.com</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl shadow">
              <h3 className="text-xl font-bold text-[#123C73] mb-3">
                Coverage Area
              </h3>
              <p>Berkshire & Surrounding Areas</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl shadow">
              <h3 className="text-xl font-bold text-[#123C73] mb-3">
                Availability
              </h3>
              <p>24/7 Staffing Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#123C73] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Reliable Staffing When You Need It Most
          </h2>

          <p className="text-lg text-slate-200 mb-8">
            Berkshire Care Staffing is committed to supporting care
            providers with dependable and compassionate staffing
            solutions.
          </p>

          <a
            href="#contact"
            className="inline-block bg-white text-[#123C73] px-8 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
          >
            Contact Us Today
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Berkshire Care Staffing
            </h3>
            <p>A trading name of Intraworld Limited</p>
          </div>

          <div className="md:text-right">
            <p>Email: fmmunywoki@gmail.com</p>
            <p>Berkshire, United Kingdom</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/447000000000"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-4 rounded-full shadow-2xl font-semibold hover:scale-105 transition"
      >
        WhatsApp Us
      </a>
    </div>
  );
}

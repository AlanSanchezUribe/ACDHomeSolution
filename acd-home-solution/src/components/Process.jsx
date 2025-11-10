import { ClipboardList, Search, Wrench, CheckCircle } from "lucide-react";

export default function Process() {
  const steps = [
    {
      icon: <ClipboardList className="w-8 h-8 text-primary" />,
      title: "1. Schedule an Inspection",
      desc: "Book a visit at your convenience. We respond quickly to all service requests.",
    },
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: "2. On-Site Diagnosis",
      desc: "Our technician evaluates the issue or installation and provides a clear plan.",
    },
    {
      icon: <Wrench className="w-8 h-8 text-primary" />,
      title: "3. Transparent Estimate",
      desc: "You receive a detailed quote before any work begins — no hidden fees.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "4. Installation & Warranty",
      desc: "We complete the job efficiently and back our work with a 90-day guarantee.",
    },
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-primary mb-8">Our Process</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-12">
          We make it simple to keep your home or business in perfect condition.
          From the first call to the final inspection, we ensure quality and
          reliability.
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-light rounded-2xl p-8 shadow hover:shadow-md transition"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                {step.title}
              </h3>
              <p className="text-gray-700">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

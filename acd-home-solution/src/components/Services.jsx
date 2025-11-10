import { DoorOpen, Wrench, Hammer } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <DoorOpen className="w-10 h-10 text-primary" />,
      title: "Door Installation & Repair",
      desc: "We handle installation, alignment, hinge replacement, and weather sealing for residential and commercial doors.",
    },
    {
      icon: <Wrench className="w-10 h-10 text-primary" />,
      title: "Window Services",
      desc: "Expert maintenance and replacement for sliding, casement, and double-hung windows. Smooth operation guaranteed.",
    },
    {
      icon: <Hammer className="w-10 h-10 text-primary" />,
      title: "Hardware Installation",
      desc: "From locks, handles, and closers to panic bars, we ensure every hardware piece is properly fitted and durable.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-graysoft">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-primary mb-8">Our Services</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-12">
          We offer complete installation and maintenance services for doors,
          windows, and all related hardware systems. Every job is performed with
          care and precision.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((srv, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow hover:shadow-md transition"
            >
              <div className="flex justify-center mb-5">{srv.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {srv.title}
              </h3>
              <p className="text-gray-700">{srv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

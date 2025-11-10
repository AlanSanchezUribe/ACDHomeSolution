import { Wrench, Clock, ShieldCheck } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Fast Turnaround",
      desc: "We respond quickly and complete installations on time, every time.",
    },
    {
      icon: <Wrench className="w-8 h-8 text-primary" />,
      title: "Certified Technicians",
      desc: "Experienced professionals specialized in door, window, and hardware systems.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: "90-Day Guarantee",
      desc: "All our work is backed by a 90-day service warranty for your peace of mind.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-primary mb-8">Why Choose Us</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-12">
          ACD Home Solution provides expert installation and maintenance of
          doors, windows, and hardware across Northern Virginia and the DC Metro
          Area. We focus on precision, reliability, and customer satisfaction.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-light rounded-2xl p-8 shadow hover:shadow-md transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

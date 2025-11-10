import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "J. Miller",
      location: "Arlington, VA",
      comment:
        "They fixed my front door alignment perfectly. Fast service and very professional technicians!",
    },
    {
      name: "Laura G.",
      location: "Alexandria, VA",
      comment:
        "Excellent work replacing our window locks. The team was on time and left everything spotless.",
    },
    {
      name: "Carlos R.",
      location: "Washington, DC",
      comment:
        "I really appreciated how transparent they were with pricing and the warranty. Highly recommended!",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-graysoft">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-primary mb-8">
          What Our Clients Say
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-12">
          Trusted by homeowners and property managers across Northern Virginia
          and the DC Metro area.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow hover:shadow-md transition relative"
            >
              <Quote className="absolute top-6 left-6 text-secondary w-6 h-6 opacity-30" />
              <p className="text-gray-700 mb-6 mt-6">{t.comment}</p>
              <div className="text-sm font-semibold text-primary">{t.name}</div>
              <div className="text-sm text-gray-500">{t.location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

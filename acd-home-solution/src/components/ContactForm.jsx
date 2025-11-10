import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send(
        "YOUR_SERVICE_ID", // ← reemplaza con tu ID EmailJS
        "YOUR_TEMPLATE_ID", // ← reemplaza con tu template ID
        data,
        "YOUR_PUBLIC_KEY" // ← reemplaza con tu clave pública
      )
      .then(
        () => {
          alert("Message sent successfully!");
          reset();
        },
        (error) => {
          alert("Error sending message: " + error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl font-bold text-primary mb-6">Get in Touch</h2>
          <p className="text-gray-700 mb-8">
            Need a quote or have a question? Contact us today — we’ll get back
            to you as soon as possible.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <Phone className="text-primary w-5 h-5" />
              <span>+1 (703) 563-6760</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-primary w-5 h-5" />
              <span>acdhomesol@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="text-primary w-5 h-5" />
              <span>Serving Northern Virginia & DC Metro Area</span>
            </li>
          </ul>
        </div>

        {/* Right Side Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-light rounded-2xl p-8 shadow hover:shadow-md transition"
        >
          <div className="grid gap-4">
            <input
              {...register("name", { required: true })}
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary outline-none"
            />
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary outline-none"
            />
            <input
              {...register("subject")}
              placeholder="Subject (optional)"
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary outline-none"
            />
            <textarea
              {...register("message", { required: true })}
              placeholder="Your Message"
              rows="5"
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary outline-none resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-primary text-white py-3 rounded-lg font-semibold hover:bg-secondary transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

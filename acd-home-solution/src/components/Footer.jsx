import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-20 bg-[#143C56] text-white">
      {/* fondo sólido + leve gradiente para profundidad */}
      <div className="absolute inset-0 bg-[#143C56]" aria-hidden />
      <div
        className="absolute inset-0 bg-linear-to-b from-[#143C56] to-[#0E2A3B]/90"
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-6 py-12 text-center">
        <h3 className="text-2xl font-semibold tracking-wide">
          ACD HOME SOLUTION
        </h3>
        <p className="mt-2 text-white/90">
          Door, Window &amp; Hardware Installation — Northern Virginia &amp; DC
          Metro Area
        </p>

        {/* Acciones rápidas */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href="https://wa.me/17035636760"
            className="inline-flex items-center gap-2 rounded-lg bg-white text-[#143C56] px-4 py-2 font-semibold hover:bg-gray-100 transition"
          >
            <MessageCircle className="w-5 h-5" /> WhatsApp
          </a>
          <a
            href="mailto:acdhomesol@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg border border-white/70 px-4 py-2 font-semibold hover:bg-white/10 transition"
          >
            <Mail className="w-5 h-5" /> Email
          </a>
          <a
            href="https://www.google.com/maps?q=Alexandria+VA"
            className="inline-flex items-center gap-2 rounded-lg border border-white/70 px-4 py-2 font-semibold hover:bg-white/10 transition"
          >
            <MapPin className="w-5 h-5" /> Location
          </a>
        </div>

        {/* Datos de contacto (opcional, alta legibilidad) */}
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-white/90">
          <span className="inline-flex items-center gap-2">
            <Phone className="w-4 h-4" /> +1 (703) 563-6760
          </span>
          <span className="inline-flex items-center gap-2">
            <Mail className="w-4 h-4" /> info@acdhome.com
          </span>
        </div>

        <hr className="mt-8 border-white/20" />

        <div className="mt-6 text-white/80 text-sm">
          © {new Date().getFullYear()} ACD Home Solution. All rights reserved.
        </div>

        {/* Back to top (opcional) */}
        <a
          href="#home"
          className="mt-4 inline-block text-white/80 hover:text-white text-sm underline underline-offset-4"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}

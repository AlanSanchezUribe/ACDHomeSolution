import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const slides = [
  { src: "/src/assets/hero/door-installation.jpg", alt: "Door installation" },
  { src: "/src/assets/hero/window-repair.jpg", alt: "Window repair" },
  {
    src: "/src/assets/hero/hardware-install.jpg",
    alt: "Hardware installation",
  },
];

export default function HeroSlider() {
  return (
    <section id="home" className="relative w-full h-[85vh] overflow-hidden">
      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000, // tiempo entre imágenes (ms)
          disableOnInteraction: false,
        }}
        speed={900} // velocidad de transición
        navigation={true}
        pagination={{ clickable: true }}
        className="h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            {/* Imagen */}
            <motion.img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover brightness-75"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            />

            {/* Overlay de texto (centrado y superpuesto) */}
            <div className="absolute inset-0 flex items-center justify-center bg-primary/40">
              <div className="text-center px-6 z-20">
                <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md">
                  Professional Door, Window & Hardware Installation
                </h1>
                <p className="text-gray-100 mt-4 text-lg">
                  Serving Northern Virginia and the DC Metro Area. Reliable,
                  fast, and guaranteed service.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mt-8">
                  <a
                    href="#contact"
                    className="bg-white text-primary px-6 py-3 rounded-lg font-semibold shadow hover:bg-graysoft transition"
                  >
                    Get a Quote
                  </a>
                  <a
                    href="https://wa.me/17035636760"
                    className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
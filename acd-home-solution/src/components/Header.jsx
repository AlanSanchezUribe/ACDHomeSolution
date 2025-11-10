import { Link } from "react-scroll";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white text-[#143C56] shadow-sm border-b border-black/5">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-wide">ACD HOME SOLUTION</h1>

        <nav className="hidden md:flex items-center gap-6 font-medium">
          <Link
            to="about"
            smooth
            duration={600}
            className="cursor-pointer hover:text-[#2E5C78]"
          >
            About
          </Link>
          <Link
            to="services"
            smooth
            duration={600}
            className="cursor-pointer hover:text-[#2E5C78]"
          >
            Services
          </Link>
          <Link
            to="process"
            smooth
            duration={600}
            className="cursor-pointer hover:text-[#2E5C78]"
          >
            Process
          </Link>
          <Link
            to="testimonials"
            smooth
            duration={600}
            className="cursor-pointer hover:text-[#2E5C78]"
          >
            Testimonials
          </Link>
          <Link
            to="contact"
            smooth
            duration={600}
            className="cursor-pointer hover:text-[#2E5C78]"
          >
            Contact
          </Link>
        </nav>

        <a
          href="https://wa.me/17035636760"
          className="hidden md:inline-block bg-[#143C56] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#2E5C78] transition"
        >
          Chat on WhatsApp
        </a>
      </div>
    </header>
  );
}

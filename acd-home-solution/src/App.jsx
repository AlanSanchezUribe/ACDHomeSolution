import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <About />
        <Services />
        <Process />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default App;

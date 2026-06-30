import Header from "@/app/components/Header";
import CinematicHero from "@/app/components/CinematicHero";
import Services from "@/app/components/Services";
import Portfolio from "@/app/components/Portfolio";
import VideoShowreel from "@/app/components/VideoShowreel";
import OurClients from "@/app/components/OurClients";
import Testimonials from "@/app/components/Testimonials";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <CinematicHero />
        <Services />
        <Portfolio />
        <VideoShowreel />
        <OurClients />
        <Testimonials />
        <Contact id="contact" />
      </main>
      <Footer />
    </>
  );
}

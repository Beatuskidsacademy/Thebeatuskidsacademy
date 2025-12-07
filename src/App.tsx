import { HelmetProvider } from "react-helmet-async";
import { SEO } from "./components/SEO";
import { SkipLink } from "./components/SkipLink";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Programs } from "./components/Programs";
import { Curriculum } from "./components/Curriculum";
import { Daycare } from "./components/Daycare";
import { Tuitions } from "./components/Tutions";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { MapLocation } from "./components/MapLocation";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { PreschoolPopup } from "./components/PreschoolPopup";
import { DaycarePromo } from "./components/DaycarePromo";
import{JoinUs} from "./components/JoinUs";
import { useState, useEffect } from "react";

export default function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [showDaycarePromo, setShowDaycarePromo] = useState(false);

  useEffect(() => {
    // Show preschool popup 5 seconds after page load
    const preschoolTimer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    // Show daycare promo 15 seconds after page load (after preschool popup is likely closed)
    const daycareTimer = setTimeout(() => {
      setShowDaycarePromo(true);
    }, 15000);

    return () => {
      clearTimeout(preschoolTimer);
      clearTimeout(daycareTimer);
    };
  }, []);

  return (
    <HelmetProvider>
      <SEO />
      <SkipLink />
      <div className="min-h-screen">
        <Navigation />
        <main id="main-content">
          <Hero />
          <About />
          <Programs />
          <Curriculum />
          <Daycare />
          <Tuitions />
          <Gallery />
          <Testimonials />
          <Contact />
          <MapLocation />
          <JoinUs/>
        </main>
        <Footer />
        <WhatsAppButton />
        <PreschoolPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
        <DaycarePromo isOpen={showDaycarePromo} onClose={() => setShowDaycarePromo(false)} />
      </div>
    </HelmetProvider>
  );
}
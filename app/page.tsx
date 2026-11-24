import AboutCoffee from "@/components/AboutCoffee";
import Coffees from "@/components/Coffees";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Reveal>
        <Hero />
      </Reveal>
      <div className="mx-auto max-w-[1080px] px-6">
        <Reveal>
          <Coffees />
        </Reveal>
        <Reveal>
          <AboutCoffee />
        </Reveal>
        <Reveal>
          <Faq />
        </Reveal>
      </div>
      <Reveal>
        <Cta />
      </Reveal>
      <Footer />
    </>
  );
}

import CoffeeBean from "./CoffeeBean";
import HeroButtons from "./HeroButtons";
import Nav from "./Nav";

export default function Hero() {
  return (
    <section className="grid grid-cols-[minmax(0,1fr)] overflow-hidden lg:min-h-[680px] lg:grid-cols-2">
      <div className="flex flex-col px-6 lg:pr-16 lg:pl-[max(24px,calc((100vw-1080px)/2))]">
        <Nav />
        <header className="section-y flex flex-1 flex-col justify-center">
          <h1 className="font-serif text-[clamp(3.4rem,8.5vw,7rem)] leading-[.92] font-normal tracking-[-.045em]">
            Know the farm behind every cup
          </h1>
          <p className="mt-6 max-w-[38ch] text-[1.1rem] text-muted">
            Single-origin beans, roasted in Bengaluru and shipped across India
            within days.
          </p>
          <HeroButtons />
        </header>
      </div>
      <div className="relative h-[380px] bg-text lg:h-auto">
        <CoffeeBean className="absolute inset-0" />
      </div>
    </section>
  );
}

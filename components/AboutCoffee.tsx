const steps = [
  {
    title: "Sourced by name",
    text: "Every bean is single-origin, bought from growers we know personally, so we can tell you exactly where your coffee was grown.",
  },
  {
    title: "Roasted in small batches",
    text: "We roast in Bengaluru, a little at a time, and adjust each roast to the bean so its natural flavour comes through.",
  },
  {
    title: "Shipped within days",
    text: "Your order is roasted, packed and sent across India within days, so it reaches you fresh and ready to brew.",
  },
];

export default function AboutCoffee() {
  return (
    <section id="story" className="section-y">
      <div className="text-[.85rem] font-semibold uppercase tracking-[.14em] text-primary">
        About our coffee
      </div>
      <h2 className="mt-3 max-w-[20ch] font-serif text-[clamp(2.2rem,5vw,3.2rem)] leading-[1.05] font-normal tracking-[-.02em]">
        Good coffee starts at the farm
      </h2>
      <p className="mt-4 max-w-[60ch] text-[1.05rem] text-muted">
        We are a small roastery in Bengaluru. We work with a handful of growers,
        roast only what we can ship quickly, and send it to home brewers who
        want to know where their beans come from.
      </p>
      <ul className="mt-10 grid grid-cols-[minmax(0,1fr)] gap-8 md:grid-cols-3">
        {steps.map((step) => (
          <li key={step.title} className="border-t border-text pt-5">
            <h3 className="font-serif text-[1.6rem] leading-tight font-normal">
              {step.title}
            </h3>
            <p className="mt-2 text-[.95rem] text-muted">{step.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

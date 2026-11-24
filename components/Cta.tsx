export default function Cta() {
  return (
    <section className="section-y bg-text px-6 text-center text-bg">
      <h2 className="font-serif text-[clamp(2.2rem,5vw,3.2rem)] leading-[1.05] font-normal tracking-[-.02em]">
        Let&apos;s talk coffee.
      </h2>
      <p className="mx-auto mt-3 mb-7 max-w-[44ch] text-bg/70">
        Wholesale, subscriptions or just a question, we&apos;d love to hear from
        you.
      </p>
      <a
        href="mailto:hello@embercoffee.example"
        className="inline-block rounded-ui bg-primary px-8 py-[15px] font-semibold text-bg transition-colors duration-200 hover:bg-accent motion-reduce:transition-none"
      >
        Contact us
      </a>
    </section>
  );
}

export default function HeroButtons() {
  return (
    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
      <a
        href="#coffees"
        className="rounded-ui bg-primary px-8 py-[15px] text-center font-semibold text-bg transition-colors duration-200 hover:bg-accent motion-reduce:transition-none"
      >
        Shop coffee
      </a>
      <a
        href="#story"
        className="rounded-ui border border-text px-8 py-[15px] text-center font-semibold text-text transition-colors duration-200 hover:bg-text hover:text-bg motion-reduce:transition-none"
      >
        Our story
      </a>
    </div>
  );
}

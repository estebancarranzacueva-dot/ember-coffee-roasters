export type Coffee = {
  name: string;
  region: string;
  note: string;
  price: string;
  image: string;
};

type Props = {
  coffee: Coffee;
  index: number;
  active: boolean;
  onSelect: () => void;
};

export default function CoffeeRow({ coffee, index, active, onSelect }: Props) {
  return (
    <li>
      <button
        type="button"
        aria-pressed={active}
        onClick={onSelect}
        onMouseEnter={onSelect}
        onFocus={onSelect}
        className={`flex w-full items-baseline gap-4 border-b py-5 text-left transition-[color,border-color,transform] duration-200 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
          active ? "border-text text-text" : "border-muted/30 text-text/40"
        }`}
      >
        <span className="w-6 shrink-0 text-[.8rem] tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex-1">
          <span className="block font-serif text-[1.9rem] leading-tight font-normal sm:text-[2.2rem]">
            {coffee.name}
          </span>
          <span className="mt-1 block text-[.9rem] text-muted">
            {coffee.note}
          </span>
        </span>
        <span className="shrink-0 text-[1.05rem] font-bold">{coffee.price}</span>
      </button>
    </li>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";
import CoffeeRow, { type Coffee } from "./CoffeeRow";

const coffees: Coffee[] = [
  {
    name: "Monsoon Malabar",
    region: "Malabar coast · India",
    note: "Dark chocolate, cedar, warm spice",
    price: "₹650",
    image: "/coffees/monsoon-malabar.svg",
  },
  {
    name: "Chikmagalur Estate",
    region: "Karnataka · India",
    note: "Brown sugar, orange peel, hazelnut",
    price: "₹720",
    image: "/coffees/chikmagalur-estate.svg",
  },
  {
    name: "Araku Valley",
    region: "Andhra Pradesh · India",
    note: "Red apple, honey, light florals",
    price: "₹780",
    image: "/coffees/araku-valley.svg",
  },
];

export default function Coffees() {
  const [active, setActive] = useState(0);
  const current = coffees[active];

  return (
    <section
      id="coffees"
      aria-label="Our coffees"
      className="grid grid-cols-[minmax(0,1fr)] items-center section-y gap-16 lg:grid-cols-[1.15fr_1fr] lg:gap-20"
    >
      <div className="relative mb-10 lg:mb-0">
        <div className="relative aspect-[4/5] overflow-hidden rounded-ui bg-text lg:aspect-[5/6]">
          {coffees.map((coffee, i) => (
            <Image
              key={coffee.name}
              src={coffee.image}
              alt={`A bag of ${coffee.name} coffee`}
              fill
              unoptimized
              className={`object-cover transition-opacity duration-300 motion-reduce:transition-none ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
        <div className="absolute -bottom-8 left-6 w-[170px] rounded-ui border border-muted/40 bg-bg p-5 text-text lg:-left-8">
          <div className="text-[.7rem] uppercase tracking-[.12em] text-muted">
            Grown in
          </div>
          <div className="mt-1 font-serif text-[1.1rem] leading-snug">
            {current.region}
          </div>
        </div>
      </div>

      <div>
        <h2 className="max-w-[12ch] font-serif text-[clamp(2.4rem,6vw,4rem)] leading-[.98] font-normal tracking-[-.04em]">
          Three coffees. Grown in India.
        </h2>
        <ul className="mt-12">
          {coffees.map((coffee, i) => (
            <CoffeeRow
              key={coffee.name}
              coffee={coffee}
              index={i}
              active={i === active}
              onSelect={() => setActive(i)}
            />
          ))}
        </ul>
        <p className="mt-4 text-[.8rem] text-muted">All prices per 250g bag.</p>
      </div>
    </section>
  );
}

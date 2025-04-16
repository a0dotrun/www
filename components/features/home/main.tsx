"use client";

import { Hero } from "@/components/features/home/hero";
import { About } from "../../about";
import { Portfolio } from "../../portfolio";
import { Quotes } from "../../quotes";
import CTA from "../../cta";
import { WaitlistForm } from "@/components/features/home/waitlist";

export default function HomePage() {
  return (
    <div className="mx-auto">
      <Hero />
      <WaitlistForm />
      <About />
      <Portfolio />
      <Quotes />
      <CTA />
    </div>
  );
}

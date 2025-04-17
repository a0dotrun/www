import { Hero } from "@/components/features/home/hero";
import { XMessageDM } from "@/components/features/home/x-dm-link";
import { WaitlistForm } from "@/components/features/home/waitlist";

// import { Portfolio } from "../../portfolio";
// import { Quotes } from "../../quotes";

export default function HomePage() {
  return (
    <div className="mx-auto">
      <Hero />
      <WaitlistForm />
      <XMessageDM />
    </div>
  );
}

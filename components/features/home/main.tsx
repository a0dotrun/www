import { Hero } from "@/components/features/home/hero";
import { XMessageDM } from "@/components/features/home/x-dm-link";
import { SignOutButton, SignedIn, SignedOut } from "@niledatabase/react";
import { GitHub } from "@niledatabase/react";

// import { Portfolio } from "../../portfolio";
// import { Quotes } from "../../quotes";

export default function HomePage() {
  return (
    <div className="mx-auto">
      <Hero />
      <div className="h-8">
        <SignedIn>
          <SignOutButton />
        </SignedIn>
        <SignedOut>
          <GitHub className="bg-black dark:bg-muted" />
        </SignedOut>
      </div>
      <XMessageDM />
    </div>
  );
}

"use client";

import { useScramble } from "use-scramble";

export const Hero = () => {
  return (
    <div className="max-w-xl py-5">
      <h1 className="text-5xl font-bold mb-4 cursor-default">
        <span className="inline-block">
          <ScrambleText
            text="make mcp ship."
            className="whitespace-pre-wrap md:whitespace-nowrap"
          />
        </span>
      </h1>
      <p className="text-lg">
        a0 is model context protocol registry, build and deployment platform.
      </p>
    </div>
  );
};

export const ScrambleText = ({ text, className = "" }: { text: string; className?: string }) => {
  const { ref } = useScramble({
    text,
    speed: 0.8,
    tick: 1,
    step: 1,
    scramble: 3,
    seed: 3,
  });

  return <span ref={ref} className={className} />;
};

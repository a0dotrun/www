"use client";

import { useScramble } from "use-scramble";

export const ScrambleText = ({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) => {
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

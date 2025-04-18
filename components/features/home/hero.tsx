import { ScrambleText } from "@/components/features/commons/scramble-text";

export const Hero = () => {
  return (
    <div className="max-w-xl py-5">
      <h1 className="text-4xl font-bold mb-4 cursor-default">
        <span className="inline-block">
          <ScrambleText
            text="build internal AI agents, fast."
            className="whitespace-pre-wrap md:whitespace-nowrap"
          />
        </span>
      </h1>
      <p className="text-lg">
        a0 is the platform for developers to build durable, agentic workflows
        that support human-in-the-loop and resume where they left off.
      </p>
    </div>
  );
};

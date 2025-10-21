import { Radio } from "lucide-react";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { Ripple } from "@/components/ui/ripple";
import { StyledMorphingText } from "@/components/ui/styled-morphing-text";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20">
        {/* Ripple Background */}
        <Ripple />

        <div className="z-10 flex max-w-5xl flex-col items-center gap-8 text-center">
          {/* Badge */}
          <AnimatedGradientText>
            <span className="inline-flex items-center gap-1 text-neutral-800 dark:text-neutral-200">
              <Radio className="h-4 w-4" />
              <span>Tech Podcast by OSSPH</span>
            </span>
          </AnimatedGradientText>

          {/* Heading with Morphing Text */}
          <div className="flex flex-col items-center gap-4">
            <StyledMorphingText />
          </div>

          {/* Subheading */}
          <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Looks Good To Me! Join us as we explore the latest in software development,
            open source, and technology through engaging conversations with developers
            and innovators in the Philippines and beyond.
          </p>
        </div>
      </section>
    </main>
  );
}

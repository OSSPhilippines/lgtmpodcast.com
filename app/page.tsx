import { Radio } from "lucide-react";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { LightRays } from "@/components/ui/light-rays";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20">
        {/* Light Rays Background */}
        <LightRays
          count={12}
          color="rgba(255, 255, 255, 0.4)"
          blur={30}
          speed={10}
          length="100vh"
        />

        <div className="z-10 flex max-w-5xl flex-col items-center gap-8 text-center">
          {/* Badge */}
          <AnimatedGradientText>
            <span className="inline-flex items-center gap-1 text-neutral-800 dark:text-neutral-200">
              <Radio className="h-4 w-4" />
              <span>Tech Podcast by <a href="https://ossph.org" target="_blank" rel="noopener noreferrer">OSSPH</a></span>
            </span>
          </AnimatedGradientText>

          {/* Main Heading */}
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white">
              LGTM Podcast
            </h1>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Coming Soon
            </h2>
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

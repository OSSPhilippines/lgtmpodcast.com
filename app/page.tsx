import { Mic2, Users, Code, Radio } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const features = [
  {
    Icon: Mic2,
    name: "Tech Discussions",
    description: "Deep dive into the latest trends in software development and technology.",
    className: "col-span-1 lg:col-span-2",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
    ),
  },
  {
    Icon: Users,
    name: "Community Driven",
    description: "Built by the Philippine open source community, for developers everywhere.",
    className: "col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-teal-500/20" />
    ),
  },
  {
    Icon: Code,
    name: "Open Source Focus",
    description: "Exploring the world of open source software and its impact on technology.",
    className: "col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20" />
    ),
  },
  {
    Icon: Radio,
    name: "Regular Episodes",
    description: "Fresh content and engaging conversations with industry experts.",
    className: "col-span-1 lg:col-span-2",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20" />
    ),
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
        </div>

        <div className="z-10 flex max-w-5xl flex-col items-center gap-8 text-center">
          {/* Badge */}
          <AnimatedGradientText>
            <span className="inline-flex items-center gap-1">
              <Radio className="h-4 w-4" />
              <span>Tech Podcast by OSSPH</span>
            </span>
          </AnimatedGradientText>

          {/* Heading */}
          <h1 className="bg-gradient-to-br from-black to-black/40 bg-clip-text text-5xl font-bold tracking-tight text-transparent dark:from-white dark:to-white/40 sm:text-6xl md:text-7xl lg:text-8xl">
            LGTM Podcast
          </h1>

          {/* Subheading */}
          <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Looks Good To Me! Join us as we explore the latest in software development,
            open source, and technology through engaging conversations with developers
            and innovators in the Philippines and beyond.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <ShimmerButton
              className="shadow-2xl"
              background="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
            >
              <span className="text-center text-sm font-medium leading-none tracking-tight text-white lg:text-base">
                Listen Now
              </span>
            </ShimmerButton>
            <ShimmerButton
              className="shadow-2xl"
              background="rgba(255, 255, 255, 0.1)"
              shimmerColor="rgba(0, 0, 0, 0.1)"
            >
              <span className="text-center text-sm font-medium leading-none tracking-tight text-black dark:text-white lg:text-base">
                About OSSPH
              </span>
            </ShimmerButton>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              What is LGTM?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              LGTM stands for &quot;Looks Good To Me&quot; - a phrase developers use when
              reviewing code. Our podcast brings that same spirit of collaboration and
              knowledge sharing to tech discussions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border bg-card p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-semibold">Our Mission</h3>
              <p className="text-muted-foreground">
                We aim to foster a vibrant tech community in the Philippines by sharing
                knowledge, experiences, and insights from developers, entrepreneurs, and
                tech enthusiasts. Through engaging conversations, we explore the latest
                trends, best practices, and real-world experiences in software
                development and open source.
              </p>
            </div>

            <div className="rounded-2xl border bg-card p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-semibold">About OSSPH</h3>
              <p className="text-muted-foreground">
                Open Source Software Philippines (OSSPH) is a community of developers,
                designers, and tech enthusiasts who believe in the power of open source
                software. We organize events, workshops, and initiatives to promote open
                source culture and collaboration in the Philippine tech ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              What We Cover
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              From cutting-edge technology to open source culture, we dive deep into
              topics that matter to developers.
            </p>
          </div>

          <BentoGrid>
            {features.map((feature, idx) => (
              <BentoCard key={idx} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Topics Section */}
      <section className="relative px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Episode Topics
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We explore a wide range of topics relevant to modern software development
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Web Development",
              "Cloud Computing",
              "DevOps & CI/CD",
              "Mobile Development",
              "Open Source Contributions",
              "Software Architecture",
              "Developer Tools",
              "Career Development",
              "Community Building",
            ].map((topic, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
                <h3 className="relative text-lg font-semibold">{topic}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Join the Conversation
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Subscribe to LGTM Podcast and stay updated with the latest episodes,
            discussions, and tech insights from the Philippine developer community.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ShimmerButton
              className="shadow-2xl"
              background="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
            >
              <span className="text-center text-sm font-medium leading-none tracking-tight text-white lg:text-base">
                Subscribe
              </span>
            </ShimmerButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-semibold">LGTM Podcast</h3>
              <p className="text-sm text-muted-foreground">
                A tech podcast by Open Source Software Philippines (OSSPH)
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Listen</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Spotify
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Apple Podcasts
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Community</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="https://ossph.org" className="hover:text-foreground">
                    OSSPH Website
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Connect</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} LGTM Podcast by OSSPH. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

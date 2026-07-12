import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Projects } from "@/components/site/Projects";
import { Industries } from "@/components/site/Industries";
import { Process } from "@/components/site/Process";
import { WhyMe } from "@/components/site/WhyMe";
import { Pricing } from "@/components/site/Pricing";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "zeroframe — Freelance Web Designer & Developer";
const description =
  "I design and build premium, high-converting websites for small businesses — clinics, restaurants, salons, law firms and local brands.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Industries />
        <Process />
        <WhyMe />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

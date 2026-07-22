import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Page() {
  return (
    <main className="relative z-10">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

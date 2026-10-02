import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { AIProjects } from "@/components/AIProjects";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { BlueprintBackground } from "@/components/BlueprintBackground";

export default function Home() {
  return (
    <LanguageProvider>
      <BlueprintBackground />
      <main>
        <Navbar />
        <Hero />
        <Timeline />
        <AIProjects />
        <ContactForm />
        <Footer />
      </main>
    </LanguageProvider>
  );
}

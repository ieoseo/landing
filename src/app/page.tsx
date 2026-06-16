import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { RevealController } from "@/components/RevealController";
import { Hero } from "@/components/landing/Hero";
import { Trust } from "@/components/landing/Trust";
import { Showcase } from "@/components/landing/Showcase";
import { Features } from "@/components/landing/Features";
import { TimeDebt } from "@/components/landing/TimeDebt";
import { Steps } from "@/components/landing/Steps";
import { CtaBand } from "@/components/landing/CtaBand";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Trust />
        <Showcase />
        <TimeDebt />
        <Features />
        <Steps />
        <CtaBand />
      </main>
      <SiteFooter />
      <RevealController />
    </>
  );
}

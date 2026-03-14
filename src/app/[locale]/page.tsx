import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ServicesOverview from "@/components/sections/ServicesOverview";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyUs from "@/components/sections/WhyUs";
import CtaBanner from "@/components/sections/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <HowItWorks />
      <WhyUs />
      <CtaBanner />
    </>
  );
}

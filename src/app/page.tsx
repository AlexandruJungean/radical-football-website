import HeroSection from "@/components/HeroSection";
import SponsorsSection from "@/components/SponsorsSection";
import AboutSection from "@/components/AboutSection";
import FounderSection from "@/components/FounderSection";
import ValuesSection from "@/components/ValuesSection";
import ConferencePreview from "@/components/ConferencePreview";
import CommunityHighlights from "@/components/CommunityHighlights";
import ResourcesSpotlight from "@/components/ResourcesSpotlight";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <AboutSection />
      <FounderSection />
      <ValuesSection />
      <ConferencePreview />
      <CommunityHighlights />
      <ResourcesSpotlight />
    </>
  );
}

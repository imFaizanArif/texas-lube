import Navbar from "@/components/header";
import HeroSlider from "@/components/carousel";
import { Certificates } from "@/components/certificates";
import Map from "@/components/map";
import { Boxes, BoxesCore } from "@/components/ui/background-boxes";
import { WhoWeAre } from "@/components/subHero";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <WhoWeAre />
      <Map />
      <Certificates />
    </>
  );
}

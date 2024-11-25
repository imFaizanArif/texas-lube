import dynamic from "next/dynamic";
import Map from "./map";

// const Map = dynamic(() => import("./map.tsx"), { ssr: false });

export default function Home() {
  return (
    <main className="w-full h-screen">
      <h1 className="text-center text-2xl font-bold mt-8">World Map with Leaflet</h1>
      <Map />
    </main>
  );
}

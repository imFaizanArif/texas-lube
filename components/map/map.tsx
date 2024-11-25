"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import { createMarkerIcon } from "./leafletUtils";
import "leaflet/dist/leaflet.css";
import { LatLngBoundsExpression } from "leaflet";

const Map = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // Ensures this runs only in the browser
    }, []);

    if (!isClient) return null;

    const markerIcon = createMarkerIcon();

    const positions = [
        { name: "Pakistan", position: [30.3753, 69.3451] },
        { name: "USA", position: [37.0902, -95.7129] },
        { name: "Italy", position: [41.8719, 12.5674] },
        { name: "France", position: [46.6034, 1.8883] },
        { name: "Germany", position: [51.1657, 10.4515] },
        { name: "India", position: [20.5937, 78.9629] },
        { name: "China", position: [35.8617, 104.1954] },
        { name: "Russia", position: [55.7558, 37.6173] },
    ];

    const initialPosition = [51.505, -0.09];
    const bounds: LatLngBoundsExpression = positions.map((loc) => loc.position);
    return (
        <div className="w-full h-[500px] rounded-lg shadow-lg mt-8">
            <MapContainer
                bounds={bounds}
                className="h-full w-full border-black border-2 bg-orange-600"
            >
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />
                {positions.map((loc, index) => (
                    <Marker key={index} position={loc.position}>
                        <Popup>
                            {loc.name} <br /> Coordinates: {loc.position[0]}, {loc.position[1]}
                        </Popup>
                        <Tooltip>
                            {loc.name}
                        </Tooltip>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default Map;

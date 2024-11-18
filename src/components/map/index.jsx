"use client";
import L from 'leaflet';
// Dynamically import MapContainer and related components from react-leaflet with no SSR
import dynamic from "next/dynamic";

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer).catch(err => console.log('MapContainer import error:', err)), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker).catch(err => console.log('Marker import error:', err)), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup).catch(err => console.log('Popup import error:', err)), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer).catch(err => console.log('TileLayer import error:', err)), { ssr: false });
const Tooltip = dynamic(() => import('react-leaflet').then(mod => mod.Tooltip).catch(err => console.log('Tooltip import error:', err)), { ssr: false });

const Map = () => {
    const positions = [
        { name: 'Pakistan', position: [30.3753, 69.3451] },
        { name: 'USA', position: [37.0902, -95.7129] },
        { name: 'Italy', position: [41.8719, 12.5674] },
        { name: 'France', position: [46.6034, 1.8883] },
        { name: 'Germany', position: [51.1657, 10.4515] },
        { name: 'India', position: [20.5937, 78.9629] },
        { name: 'Gulf Countries', position: [24.7136, 46.6753] }, // General location for the Gulf region
        { name: 'China', position: [35.8617, 104.1954] },
        { name: 'Russia', position: [55.7558, 37.6173] },
        { name: 'Brazil', position: [-14.2350, -51.9253] },
        { name: 'Canada', position: [56.1304, -106.3468] },
        { name: 'Australia', position: [-25.2744, 133.7751] },
        { name: 'South Africa', position: [-30.5595, 22.9375] },
        { name: 'Nigeria', position: [9.0820, 8.6753] },
        { name: 'Egypt', position: [26.8206, 30.8025] },
        { name: 'Kenya', position: [-1.2921, 36.8219] },
        { name: 'Japan', position: [36.2048, 138.2529] },
        { name: 'United Kingdom', position: [55.3781, -3.4360] },
        { name: 'Italy', position: [41.8719, 12.5674] }
    ];
    const position = [51.505, -0.09];

    const markerIcon = new L.Icon({
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        shadowSize: [41, 41],
    });
    // Calculate bounds based on the positions
    const bounds = positions.map(position => position.position);
    return (
        <div className="w-full h-[500px] rounded-lg shadow-lg mt-24">
            <MapContainer center={position} zoom={2.5} className="map-container" scrollWheelZoom={false} bounds={bounds}>
                <TileLayer
                    // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?lang=en"
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />
                {positions.map((loc, index) => (
                    <Marker key={index} position={loc.position} icon={markerIcon}>
                        <Popup>
                            {loc.name} <br /> Coordinates: {loc.position[0]}, {loc.position[1]}
                        </Popup>
                        {/* Tooltip on hover */}
                        <Tooltip direction="top" offset={[0, -20]} opacity={1}>
                            {loc.name}
                        </Tooltip>
                    </Marker>
                ))}
            </MapContainer>
        </div>

    );
}

export default Map
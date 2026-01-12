import { Map, MapMarker, MapTileLayer } from "@/components/ui/map"
import type { LatLngExpression } from "leaflet"

export function MapWithMarkers() {
    const CITIES = [
        {
            name: "CDO",
            coordinates: [8.470378, 124.705139] satisfies LatLngExpression,
        },
    ]

    return (
        <Map center={CITIES[0].coordinates} zoom={100}>
            <MapTileLayer />
            {CITIES.map((city) => (
                <MapMarker key={city.name} position={city.coordinates} />
            ))}
        </Map>
    )
}

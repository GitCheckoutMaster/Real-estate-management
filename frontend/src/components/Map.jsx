import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const Map = () => {
    return (
        <MapContainer center={[52.4797, -1.90]} zoom={14} className='h-full w-full rounded-xl'>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[52.4797, -1.90]}>
                <Popup>
                    This is popup
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map;
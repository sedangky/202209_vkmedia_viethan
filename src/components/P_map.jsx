import { Map, Marker, ZoomControl } from "pigeon-maps"

export default function MyMap() {
  return (
    <>
        <Map
            defaultCenter={[20.90979432685363, 105.5450182540113]} 
            defaultZoom={12} 
            // mouseEvents={false}
        >
            <ZoomControl />
            <Marker width={50} color='#0032DD' anchor={[20.90979432685363, 105.5450182540113]} />
        </Map>
    </>
  )
}
import { useEffect } from 'react';
import { useMap } from '../hooks/useMap';
import MapMaker from './MapMaker';
import { PlaceType } from './mapTypes';

interface MapMArkerControllerProps {
  places: PlaceType[];
}

const MapMArkerController = (props: MapMArkerControllerProps) => {
  const map = useMap();

  useEffect(() => {
    if (props.places.length < 1) {
      return;
    }
    const bounds = new kakao.maps.LatLngBounds();
    props.places.forEach((place) => {
      bounds.extend(place.position);
    });

    map.setBounds(bounds);
  }, [props.places]);

  return (
    <>
      {props.places.map((place, index) => {
        return <MapMaker key={place.id} place={place} />;
      })}
    </>
  );
};

export default MapMArkerController;

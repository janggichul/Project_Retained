import { useState } from 'react';
import DynamicMap from './Map/DynamicMap';
import KakaoMapScriptLoader from './Map/KakaoMapScriptLoader';
import MapMArkerController from './Map/MapMArkerController';
import { PlaceType } from './Map/mapTypes';
import SearchLocation from './Map/SearchLocation';

function App() {
  const [places, setPlaces] = useState<PlaceType[]>([]);
  const [selectedPlaceId, setSelectedPlaceId] = useState('');

  return (
    <>
      <KakaoMapScriptLoader>
        <DynamicMap>
          <MapMArkerController
            places={places}
            seletedPlaceID={selectedPlaceId}
          />
          <SearchLocation
            onUpdatePlaces={(places) => {
              setPlaces(places);
            }}
            onSelect={(placeId) => {
              setSelectedPlaceId(placeId);
            }}
          />
        </DynamicMap>
      </KakaoMapScriptLoader>
    </>
  );
}

export default App;

import { useState } from 'react';
import DynamicMap from './Map/DynamicMap';
import KakaoMapScriptLoader from './Map/KakaoMapScriptLoader';
import MapMArkerController from './Map/MapMArkerController';
import { PlaceType } from './Map/mapTypes';
import SearchLocation from './Map/SearchLocation';

function App() {
  const [places, setPlaces] = useState<PlaceType[]>([]);

  return (
    <>
      <KakaoMapScriptLoader>
        <DynamicMap>
          <MapMArkerController places={places} />
          <SearchLocation
            onUpdatePlaces={(places) => {
              setPlaces(places);
            }}
          />
        </DynamicMap>
      </KakaoMapScriptLoader>
    </>
  );
}

export default App;

import styled from '@emotion/styled';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { useMap } from '../hooks/useMap';
import { PlaceType } from './mapTypes';

interface SearchLocationProps {
  onUpdatePlaces: (places: PlaceType[]) => void;
  onSelect: (placeid: string) => void;
}

const SearchLocation = (props: SearchLocationProps) => {
  const map = useMap();
  const [keyWord, setKeyWord] = useState('');
  const [places, setPlaces] = useState<PlaceType[]>([]);

  const placeSurvice = useRef<kakao.maps.services.Places | null>(null);

  useEffect(() => {
    if (placeSurvice.current) {
      return;
    }

    placeSurvice.current = new kakao.maps.services.Places();
  }, []);

  const searchPlaces = (keyword: string) => {
    if (!keyword.replace(/^\s+|\s+$/g, '')) {
      alert('키워드를 입력해주세요!');
      return;
    }

    if (!placeSurvice.current) {
      alert('placeService 에러');
      return;
    }

    placeSurvice.current.keywordSearch(keyWord, (data, status) => {
      if (status === kakao.maps.services.Status.OK) {
        console.log(data);

        const placeInfos = data.map((placeSearchResultItem) => {
          return {
            id: placeSearchResultItem.id,
            position: new kakao.maps.LatLng(
              Number(placeSearchResultItem.y),
              Number(placeSearchResultItem.x),
            ),
            title: placeSearchResultItem.place_name,
            address: placeSearchResultItem.address_name,
          };
        });

        props.onUpdatePlaces(placeInfos);
        setPlaces(placeInfos);
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        alert('검색 결과가 존재하지 않습니다.');
        return;
      } else if (status === kakao.maps.services.Status.ERROR) {
        alert('검색 결과 중 오류가 발생했습니다.');
        return;
      }
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchPlaces(keyWord);
  };

  const handleItemClick = (place: PlaceType) => {
    map.setCenter(place.position);
    map.setLevel(4);
    props.onSelect(place.id);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          value={keyWord}
          onChange={(e) => {
            setKeyWord(e.target.value);
          }}
        />
      </Form>
      <List>
        {places.map((item, index) => {
          return (
            <Item key={item.id} onClick={() => handleItemClick(item)}>
              <label>
                {index + 1}.{item.title}
              </label>
              <span>{item.address}</span>
            </Item>
          );
        })}
      </List>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  z-index: 1;
  height: 100%;
  background-color: white;
  opacity: 0.8;
  overflow-y: auto;
`;

const Form = styled.form`
  display: flex;
  position: sticky;
  top: 0;
`;

const Input = styled.input`
  width: 100%;
  min-width: 200px;
  padding: 8px;
  border: 1px solid #c0c0c0;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  display: flex;
  /* flex-direction: column; */
  flex-flow: column;
  padding: 8px;
  border-bottom: 1px dashed #d2d2d2;
  cursor: pointer;

  &:hover {
    background-color: #d2d2d2;
    opacity: 1;
    transition: background-color;
  }
`;

export default SearchLocation;

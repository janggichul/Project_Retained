import styled from '@emotion/styled';
import { PokeImageSkeleton } from 'Common/PokeImageSkeleton';
import PokeMarkChip from 'Common/PokeMarkChip';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchpokemonDetail, PokemonDetailType } from 'Service/pokemonService';

const PokemonDetail = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState<PokemonDetailType | null>(null);

  useEffect(() => {
    if (!name) {
      return;
    }

    (async () => {
      const detail = await fetchpokemonDetail(name);
      setPokemon(detail);
    })();
  }, [name]);

  if (!name || !pokemon) {
    return (
      <Container>
        <ImgContainer>
          <PokeImageSkeleton />
        </ImgContainer>
        <Divider />
        <Footer>
          <PokeMarkChip />
        </Footer>
      </Container>
    );
  }

  return (
    <>
      <Container>
        <ImgContainer>
          <Image src={pokemon.images.dreamworldFront} alt="포켓몬 이미지" />
        </ImgContainer>
        <Divider />
        <Body>
          <h2>기본 정보</h2>
          <Table>
            <tbody>
              <TableRow>
                <TableHeader>번호</TableHeader>
                <td>{pokemon.id}</td>
              </TableRow>
              <TableRow>
                <TableHeader>이름</TableHeader>
                <td>{`${pokemon.koreanName} (${pokemon.name})`}</td>
              </TableRow>
              <TableRow>
                <TableHeader>타입</TableHeader>
                <td>{pokemon.types.toString()}</td>
              </TableRow>
              <TableRow>
                <TableHeader>크기</TableHeader>
                <td>{pokemon.height}m</td>
              </TableRow>
              <TableRow>
                <TableHeader>무게</TableHeader>
                <td>{pokemon.weight}kg</td>
              </TableRow>
            </tbody>
          </Table>
          <h2>능력치</h2>
          <Table>
            <tbody>
              {pokemon.baseStats.map((stat) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <TableRow key={stat.name}>
                    <TableHeader>{stat.name}</TableHeader>
                    <td>{stat.value}</td>
                  </TableRow>
                );
              })}
            </tbody>
          </Table>
        </Body>
        <Footer>
          <PokeMarkChip />
        </Footer>
      </Container>
    </>
  );
};

const Container = styled.section`
  border: 1px solid #c0c0c0;
  margin: 16px 32px;
  border-radius: 16px;
  box-shadow: 1px 1px 3px 1px #c0c0c0;
`;

const ImgContainer = styled.section`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
  min-height: 350px;
`;

const Image = styled.img`
  width: 350px;
  height: 350px;
`;

const Divider = styled.hr`
  margin: 32px;
  border-style: none;
  border-bottom: 1px dashed #d3d3d3;
`;

const Body = styled.section`
  margin: 0px 32px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  margin: 0 auto 16px;

  th,
  td {
    padding: 6px 12px;
  }
`;

const TableRow = styled.tr`
  border-width: 1px 0;
  border-style: solid;

  border-color: #f0f0f0;
`;

const TableHeader = styled.th`
  width: 1px;
  white-space: nowrap;
  text-align: left;
  font-weight: normal;
  font-size: 14px;
  color: #a0a0a0;
`;

const Footer = styled.section`
  display: flex;
  flex-direction: row;
  margin: 32px 16px;
`;
export default PokemonDetail;

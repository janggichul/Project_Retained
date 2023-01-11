import { Image } from 'react-bootstrap';
import { ResultData } from 'store/Result/ResultData';
import styled from 'styled-components';
import Header from '../components/Hader';
import April from '../assets/사월.jpeg';
import { useSearchParams } from 'react-router-dom';

function ResultPage(): React.ReactElement {
  const [serchParams] = useSearchParams();

  const mbti = serchParams.get('mbti');

  return (
    <>
      <Wrapper>
        <Header type="title" qustionNo={0} />
        <ContentsWrapper>
          <Title>결과보기</Title>
          <ResultImage>
            <Image
              src={April}
              width={350}
              height={350}
              className="rounded-circle"
            />
          </ResultImage>
          <Desc>
            나와 예비집사님과 찰떡궁합인 강아지는 {mbti}형 강아지입니다.
          </Desc>
        </ContentsWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: #fffacd;
  font-family: 'Jalnan';
`;

const ContentsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
  padding: 20px 20px 20px 20px;
`;
const Title = styled.div`
  margin-top: 20px;
  font-size: 35px;
`;

const ResultImage = styled.div`
  width: 200;
  height: 200;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 30px;
`;

export default ResultPage;

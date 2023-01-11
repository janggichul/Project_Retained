import { Image } from 'react-bootstrap';
import { ResultData } from 'store/Result/ResultData';
import styled from 'styled-components';
import Header from '../components/Hader';
import April from '../assets/사월.jpeg';
import { useSearchParams } from 'react-router-dom';
import { IResult } from 'store/Result/types';

function ResultPage(): React.ReactElement {
  const [serchParams] = useSearchParams();

  const mbti = serchParams.get('mbti');
  const TestResult = ResultData.find((dog: IResult) => dog.best === mbti);
  const FreeResult = ResultData.find(
    (dog: IResult) => dog.best === TestResult?.mbti,
  );
  return (
    <>
      <Wrapper>
        <Header type="title" qustionNo={0} />
        <ContentsWrapper>
          <Title>결과보기</Title>
          <ResultImage>
            <Image
              src={TestResult?.image}
              width={350}
              height={350}
              className="rounded-circle"
            />
          </ResultImage>
          <Desc>
            {TestResult?.best}형 예비집사님과 찰떡궁합인 강아지는{' '}
            {TestResult?.mbti}형 강아지 {TestResult?.name}입니다.
          </Desc>
          <Desc>
            {TestResult?.name} 강아지는 {TestResult?.desc}
          </Desc>
          <BestDsce>
            나의 강아지와 잘맞는 형제 강아지로는 {FreeResult?.name}형 강아지를
            추천드립니다
          </BestDsce>
        </ContentsWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #fffacd;
  font-family: 'Jalnan';
`;

const ContentsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
  padding: 20px 60px 20px 60px;
`;
const Title = styled.div`
  margin-top: 20px;
  font-size: 35px;
`;

const ResultImage = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 20px;
  text-align: center;
`;

const BestDsce = styled.div`
  font-size: 18px;
  margin-top: 20px;
`;
export default ResultPage;

import { QustionData } from '../store/Qustion/QustionData';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import Header from '../components/Hader';
import { useEffect, useState } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';

function QustionPage(): React.ReactElement {
  const [qustionNo, setQustionNo] = useState(0);
  const [totalScore, setTotalScore] = useState([
    {
      id: 'EI',
      score: 0,
    },
    {
      id: 'SN',
      score: 0,
    },
    {
      id: 'IF',
      score: 0,
    },
    {
      id: 'JP',
      score: 0,
    },
  ]);

  const navigate = useNavigate();

  const handleClickAnswer = (ans: number, type: string) => {
    const newScore = totalScore.map((s) =>
      s.id === type ? { id: s.id, score: s.score + ans } : s,
    );

    setTotalScore(newScore);

    if (QustionData.length !== qustionNo + 1) {
      setQustionNo(qustionNo + 1);
    } else {
      const mbti = newScore.reduce(
        (acc, cur) =>
          acc +
          (cur.score <= 2 ? cur.id.substring(0, 1) : cur.id.substring(1.2)),
        '',
      );

      navigate({
        pathname: '/result',
        search: `?${createSearchParams({
          mbti: mbti,
        })}`,
      });
    }

    // if (type === 'EI') {
    //   // 기존 스코어에 더한 새로운 스코어 값
    //   const addScore = totalScore[0].score + ans;
    //   // 새로운 스코어를 반영한 새로운 객체
    //   const object = { id: 'EI', score: addScore };
    //   // 새로운 객체를 기존에 토탈 스코어 반영
    //   totalScore.splice(0, 1, object);
    // } else if (type === 'SN') {
    //   const addScore = totalScore[0].score + ans;
    //   const object = { id: 'SN', score: addScore };
    //   totalScore.splice(0, 1, object);
    // } else if (type === 'IF') {
    //   const addScore = totalScore[0].score + ans;
    //   const object = { id: 'IF', score: addScore };
    //   totalScore.splice(0, 1, object);
    // } else {
    //   const addScore = totalScore[0].score + ans;
    //   const object = { id: 'JP', score: addScore };
    //   totalScore.splice(0, 1, object);
    // }
  };

  return (
    <>
      <Wrapper>
        <Header type="progress" qustionNo={qustionNo} />
        <ContentsWrapper>
          <Title>{QustionData[qustionNo].title}</Title>
          <ButtonGroup>
            <Button
              className="btn-warning"
              style={{
                marginRight: '20px',
                width: '45%',
                minHeight: '200px',
                fontSize: '15pt',
              }}
              onClick={() => handleClickAnswer(1, QustionData[qustionNo].type)}
            >
              {QustionData[qustionNo].answera}
            </Button>
            <Button
              className="btn-warning"
              onClick={() => handleClickAnswer(2, QustionData[qustionNo].type)}
              style={{
                width: '45%',
                minHeight: '200px',
                fontSize: '15pt',
              }}
            >
              {QustionData[qustionNo].answerb}
            </Button>
          </ButtonGroup>
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

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
  button {
    font-size: 25px;
  }
`;
export default QustionPage;

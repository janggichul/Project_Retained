import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { QustionData } from 'store/Qustion/QustionData';
import styled from 'styled-components';

interface Props {
  type: string;
  qustionNo: number;
}

export default function Hader(props: Props) {
  return (
    <>
      {props.type === 'progress' ? (
        <ProgressWrapper>
          <ProgressBar
            now={Math.round((props.qustionNo / QustionData.length) * 100)}
            label={`${Math.round(
              (props.qustionNo / QustionData.length) * 100,
            )}%`}
            style={{ width: '100%', height: '30px' }}
          />
        </ProgressWrapper>
      ) : (
        <TitleWrapper style={{ backgroundColor: '#ffa07a' }}>
          헤더부분
        </TitleWrapper>
      )}
    </>
  );
}

const ProgressWrapper = styled.div`
  font-size: 50px;
  align-items: center;
  display: flex;
  justify-content: center;
  font-family: 'Jalnan';
  padding: 20px 20px 20px 20px;
`;

const TitleWrapper = styled.div`
  font-size: 50px;
  align-items: center;
  display: flex;
  justify-content: center;
  font-family: 'Jalnan';
`;

import React from 'react';
import styled from 'styled-components';

import MemoImage from '../MemoImage';

const StyledWrapper = styled.div``;
export default function Xinjiang({ step }) {
  return (
    <StyledWrapper
      id="xinjiang"
      className="step"
      data-x="7000"
      data-y="5000"
      data-scale="3"
      data-autoplay="45"
    >
      {step == 'xinjiang' && (
        <MemoImage title={'新疆之行'} img={['nanjing.3.jpeg', 'nanjing.1.jpeg', 'nanjing.2.jpeg', 'nanjing.4.jpeg', 'nanjing.5.jpeg', 'nanjing.6.jpeg', 'nanjing.7.jpeg', 'nanjing.8.jpeg']} />
      )}
    </StyledWrapper>
  );
}

import React from 'react';
import Song from '../assets/bgm.mp3';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
`;
export default function Bgm({ loadOver }) {
  return (
    <StyledWrapper>
      <audio id="BGM" loop onCanPlay={loadOver} src={Song} autoPlay controls={false} />
    </StyledWrapper>
  );
}

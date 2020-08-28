import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .start {
    cursor: pointer;
    border: none;
    width: 100px;
    height: 100px;
    font-size: 25px;
    padding: 20px;
    border-radius: 50%;
    background: pink;
    color: #555;
    font-weight: 800;
  }
`;
export default function StartMask({ startPlay }) {
  const handlePlay = () => {
    document.querySelector('#BGM').play();
    startPlay();
  };
  return (
    <StyledWrapper>
      <button className="start" onClick={handlePlay}>
        开始
      </button>
    </StyledWrapper>
  );
}

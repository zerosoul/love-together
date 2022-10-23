import React from 'react';
import styled from 'styled-components';
import ArrowLeft from '../assets/img/arrow.left.svg';
import ArrowRight from '../assets/img/arrow.right.svg';

const StyledWrapper = styled.div`
  position: fixed;
  z-index: 996;
  width: 100vw;
  height: 100vh;
  .nav {
    position: absolute;
    cursor: pointer;
    bottom: 20px;
    width: 60px;
    height: 60px;
    border: 2px solid #555;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-size: 40%;
    background-origin: content-box;
    background-position: center;
    opacity: 0.5;
    &.n {
      background-image: url(${ArrowRight});
      right: 20px;
    }
    &.p {
      background-image: url(${ArrowLeft});
      left: 20px;
    }
  }
`;

export default function Navs({ goPrev, goNext }) {
  return (
    <StyledWrapper>
      {goPrev && <div onClick={goPrev} className="nav p"></div>}
      <div onClick={goNext} className="nav n"></div>
    </StyledWrapper>
  );
}

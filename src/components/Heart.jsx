import React from 'react';
import styled, { keyframes } from 'styled-components';
const Beat = keyframes`
    0% {
      transform: scale(1) rotate(-45deg);
    }
    50% {
      transform: scale(0.8) rotate(-45deg);
    }
`;
const Wrapper = styled.div`
  margin: 30px 0 20px 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${({ color }) => color};
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  transform: rotate(-45deg);
  animation-name: ${({ animated }) => (animated ? Beat : null)};
  animation-duration: 1.8s;
  animation-iteration-count: infinite;
  &:after {
    background-color: ${({ color }) => color};
    content: '';
    border-radius: 50%;
    position: absolute;
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    top: 0px;
    left: 50%;
  }
  &:before {
    background-color: ${({ color }) => color};
    content: '';
    border-radius: 50%;
    position: absolute;
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    top: -50%;
    left: 0px;
  }
`;

export default function Heart({ animated = false, color = '#dc3023', size = '100px', ...rest }) {
  return (
    <Wrapper className="heart" animated={animated} color={color} size={size} {...rest}></Wrapper>
  );
}

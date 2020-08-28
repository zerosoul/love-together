import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import PlayImage from '../assets/img/play.svg';
import Notepaper from './Notepaper';
import Heart from './Heart';

const StyledWrapper = styled.div`
  z-index: 999;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin: 0 auto;
  background-color: #fff;
  .title {
    position: absolute;
    background: rgb(242, 246, 193);
    border: 1px solid rgba(170, 157, 134, 0.5);
    font-size:26px;
    font-weight: 800;
    color: #333;
    top: 0;
    left: 0px;

    padding: 10px 30px;
    z-index: 1;
    transform: translateX(-50%) translateY(-50%) rotate(-30deg);
    &:before,
    &:after {
      content: '';
      width: 100px;
      height: 20px;
      background: rgba(222, 222, 222, 0.4);
      display: block;
      position: absolute;
    }
    &:before {
      left: -35px;
      top: -3px;
      transform: rotate(-34deg);
    }
    &:after {
      right: -35px;
      bottom: -3px;
      transform: rotate(-44deg);
      width: 80px;
    }
  }
  .desc {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: rotate(-5deg);
  }
  video {
    box-shadow: 0 0 8px 2px #a98175;
    border: 4px solid #fff;
    width: 100%;
  }
  .heart {
    position: absolute;
    top: 40%;
    opacity: 0.5;
    transform: rotate(-3deg);
  }
  .play {
    background: rgba(255, 255, 255, 0.6);
    cursor: pointer;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export default function MemoVideo({ paused = false, video, title = '', desc = '' }) {
  const videoEle = useRef(null);
  const [play, setPlay] = useState(false);
  const handleClick = () => {
    setPlay(true);
    videoEle.current.play();
  };
  useEffect(() => {
    if (paused) {
      videoEle.current.pause();
    } else {
      videoEle.current.play();
      setPlay(true);
    }
  }, [paused]);
  return (
    <StyledWrapper className="video">
      {title && <div className="title">{title}</div>}
      {desc && <Notepaper content={desc} className="desc"></Notepaper>}
      <video preload={`true`} ref={videoEle} loop src={video} controls={false} />
      {!play && (
        <div onClick={handleClick} className="play">
          <img src={PlayImage} />
        </div>
      )}
      <Heart
        style={{ opacity: '.4', left: 'auto', transform: 'rotate(-70deg)', right: 0 }}
        size="40px"
      />
      <Heart
        style={{
          opacity: '.3',
          top: '88%',
          left: '-10px',
          transform: 'rotate(-100deg)',
          right: 'auto'
        }}
        size="30px"
      />
    </StyledWrapper>
  );
}

import React, { useEffect, useState } from 'react';
import MemoVideo from '../MemoVideo';
import VideoSrc from '../../assets/memo/jump.mp4';

const currId = 'video-jump';
export default function VideoJump({ currStep }) {
  const [isCurr, setIsCurr] = useState(false);
  useEffect(() => {
    if (currStep == currId) {
      setIsCurr(true);
    } else {
      setIsCurr(false);
    }
  }, [currStep]);
  return (
    <div
      id={currId}
      className="step"
      data-x="10000"
      data-y="6000"
      data-scale="4"
      data-autoplay="30"
    >
      {currStep == currId && (
        <MemoVideo paused={!isCurr} title="🐰蹦蹦跳跳真可爱~" video={VideoSrc} />
      )}
    </div>
  );
}

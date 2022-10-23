import React, { useEffect, useState } from 'react';
import MemoVideo from '../MemoVideo';
import VideoSrc from '../../assets/memo/ygc.mp4';

const currId = 'video-yang';
export default function VideoYang({ currStep }) {
  const [isCurr, setIsCurr] = useState(false);
  useEffect(() => {
    if (currStep == currId) {
      setIsCurr(true);
    } else {
      setIsCurr(false);
    }
  }, [currStep]);
  return (
    <div id={currId} className="step" data-x="6000" data-y="4000" data-scale="2" data-autoplay="10">
      {currStep == currId && <MemoVideo paused={!isCurr} title="羊！国！春！" video={VideoSrc} />}
    </div>
  );
}

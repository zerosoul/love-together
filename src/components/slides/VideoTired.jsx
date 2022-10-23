import React, { useEffect, useState } from 'react';
import MemoVideo from '../MemoVideo';
import VideoSrc from '../../assets/memo/leihuaile.mp4';

const currId = 'video-tired';
export default function VideoTired({ currStep }) {
  const [isCurr, setIsCurr] = useState(false);
  useEffect(() => {
    if (currStep == currId) {
      setIsCurr(true);
    } else {
      setIsCurr(false);
    }
  }, [currStep]);
  return (
    <div id={currId} className="step" data-x="9000" data-y="5000" data-scale="3" data-autoplay="15">
      {currStep == currId && <MemoVideo paused={!isCurr} title="可把我累坏了~" video={VideoSrc} />}
    </div>
  );
}

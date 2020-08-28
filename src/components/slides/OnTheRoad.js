import React from 'react';
import MemoImage from '../MemoImage';

export default function OnTheRoad({ step }) {
  return (
    <div
      id="ontheroad"
      className="step"
      data-x="7000"
      data-y="5000"
      data-scale="1"
      data-autoplay="70"
    >
      {step == 'ontheroad' && (
        <MemoImage
          title={'我们的在路上...'}
          img={['ontheroad.1.png', 'ontheroad.2.png', 'ontheroad.4.png', 'ontheroad.5.png', 'ontheroad.6.png', 'ontheroad.7.png', 'ontheroad.8.png', 'ontheroad.9.png', 'ontheroad.10.png', 'ontheroad.11.png', 'ontheroad.12.png', 'ontheroad.13.png', 'ontheroad.14.png']}
        />
      )}
    </div>
  );
}

import React from 'react';
import MemoImage from '../MemoImage';

export default function Huanlegu({ step }) {
  return (
    <div
      id="huanlegu"
      className="step"
      data-x="6700"
      data-y="-300"
      data-scale="6"
      data-autoplay="20"
    >
      {step == 'huanlegu' && (
        <MemoImage
          img={[
            'youlechang.6.jpeg',
            'youlechang.0.png',
            'youlechang.1.png',
            'youlechang.2.png',
            'youlechang.3.png',
            'youlechang.4.jpeg',
            'youlechang.5.jpeg'
          ]}
          title="欢乐谷"
          date="2016.10.21"
          desc="在你的威逼利诱下，恐高的我成功挑战了跳楼机~~~"
        />
      )}
    </div>
  );
}

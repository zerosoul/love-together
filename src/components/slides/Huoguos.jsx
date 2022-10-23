import React from 'react';
import MemoImage from '../MemoImage';

export default function Huoguos({ step }) {
  return (
    <div
      id="huoguos"
      className="step"
      data-x="850"
      data-y="3000"
      data-rotate="90"
      data-scale="5"
      data-autoplay="80"
    >
      {step == 'huoguos' && (
        <MemoImage
          desc="第一次，第二次，第三次...第N次"
          title={'那些年，一起吃的火锅🍲'}
          img={[
            'huoguo.9.png',
            'huoguo.2.png',
            'huoguo.3.png',
            'huoguo.4.png',
            'huoguo.4.1.png',
            'huoguo.5.png',
            'huoguo.6.png',
            'huoguo.7.png',
            'huoguo.8.png',
            'huoguo.1.png',
            'huoguo.10.jpeg',
            'huoguo.11.jpeg',
            'huoguo.12.jpeg',
            'huoguo.13.jpeg',
            'huoguo.14.jpeg',
            'huoguo.15.jpeg'
          ]}
        />
      )}
    </div>
  );
}

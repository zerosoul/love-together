import React from 'react';
import MemoImage from '../MemoImage';
export default function Huas({ step }) {
  return (
    <div id="huas" className="step" data-x="7000" data-y="4000" data-scale="2" data-autoplay="40">
      {step == 'huas' && (
        <MemoImage
          title={'🌺花一样的你，猪一样的我🐷'}
          img={[
            'hua.3.png',
            'hua.1.png',
            'hua.2.png',
            'hua.4.png',
            'hua.5.png',
            'hua.6.png',
            'hua.7.png',
            'hua.8.png'
          ]}
        />
      )}
    </div>
  );
}

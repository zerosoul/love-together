import React from 'react';
import MemoImage from '../MemoImage';
export default function Cloth({ step }) {
  return (
    <div
      id="cloth"
      className="step"
      data-x="3500"
      data-y="-850"
      data-z="0"
      data-rotate="100"
      data-scale="4"
      data-autoplay="10"
    >
      {step == 'cloth' && (
        <MemoImage
          img={'cloth.png'}
          title="亲子装"
          desc="那天我们一起逛动物园，碰到一个和你穿一样衣服的小朋友~<br/>超可爱~"
        />
      )}
    </div>
  );
}

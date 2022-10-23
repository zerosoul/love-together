import React from 'react';
import MemoImage from '../MemoImage';
export default function Zuimei({ step }) {
  return (
    <div
      id="zuimei"
      className="step"
      data-x="3000"
      data-y="1500"
      data-z="0"
      data-scale="20"
      data-autoplay="70"
    >
      {step == 'zuimei' && (
        <MemoImage
          img={[
            'zuimei.png',
            'zuimei.1.jpeg',
            'zuimei.2.png',
            'zuimei.3.png',
            'zuimei.14.png',
            'zuimei.15.jpeg',
            'zuimei.4.png',
            'zuimei.5.png',
            'zuimei.6.png',
            'zuimei.7.png',
            'zuimei.8.png',
            'zuimei.9.png',
            'zuimei.10.png',
            'zuimei.11.jpeg',
            'zuimei.12.png',
            'zuimei.13.jpeg'
          ]}
          title="献给最美的你"
          desc="曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。<br/>相遇相伴，相知相爱，感谢陪伴。<br/>愿余生有一个人，继续守护你..."
        />
      )}
    </div>
  );
}

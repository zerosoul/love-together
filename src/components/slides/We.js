import React from 'react';
import MemoImage from '../MemoImage';

export default function We({ step }) {
  return (
    <div
      id="we"
      className="step"
      data-x="3000"
      data-y="1500"
      data-z="0"
      data-scale="10"
      data-autoplay="98"
    >
      {step == 'we' && (
        <MemoImage
          title={'我们'}
          img={[
            'we.0.png',
            'we.20.jpeg',
            'we.19.png',
            'we.1.png',
            'we.2.png',
            'we.21.jpeg',
            'we.3.png',
            'we.4.png',
            'we.5.png',
            'we.6.png',
            'we.7.png',
            'we.8.png',
            'we.9.png',
            'we.10.png',
            'we.11.png',
            'we.12.png',
            'we.13.png',
            'we.14.png',
            'we.15.png',
            'we.16.png',
            'we.17.png',
            'we.18.png'
          ]}
        />
      )}
    </div>
  );
}

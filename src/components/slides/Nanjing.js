import React from 'react';
import MemoImage from '../MemoImage';

export default function Nanjing({ step }) {
  return (
    <div
      id="nanjing"
      className="step"
      data-x="7000"
      data-y="5000"
      data-scale="3"
      data-autoplay="45"
    >
      {step == 'nanjing' && (
        <MemoImage title={'在南京'} img={['nanjing.3.jpeg', 'nanjing.1.jpeg', 'nanjing.2.jpeg', 'nanjing.4.jpeg', 'nanjing.5.jpeg', 'nanjing.6.jpeg', 'nanjing.7.jpeg', 'nanjing.8.jpeg']} />
      )}
    </div>
  );
}

import React from 'react';
import MemoImage from '../MemoImage';

export default function Wuyuan({ step }) {
  return (
    <div
      id="wuyuan"
      className="step"
      data-x="7000"
      data-y="5000"
      data-scale="2"
      data-autoplay="140"
    >
      {step == 'wuyuan' && (
        <MemoImage
          title={'在婺源'}
          img={[
            'wuyuan.3.jpeg',
            'wuyuan.2.jpeg',
            'wuyuan.4.jpeg',
            'wuyuan.5.jpeg',
            'wuyuan.6.jpeg',
            'wuyuan.7.jpeg',
            'wuyuan.8.jpeg',
            'wuyuan.9.jpeg',
            'wuyuan.10.jpeg',
            'wuyuan.11.jpeg',
            'wuyuan.12.jpeg',
            'wuyuan.13.jpeg',
            'wuyuan.14.jpeg',
            'wuyuan.15.jpeg',
            'wuyuan.16.jpeg',
            'wuyuan.17.jpeg',
            'wuyuan.18.jpeg',
            'wuyuan.19.jpeg',
            'wuyuan.20.jpeg',
            'wuyuan.21.jpeg',
            'wuyuan.22.jpeg',
            'wuyuan.23.jpeg',
            'wuyuan.24.jpeg',
            'wuyuan.25.jpeg',
            'wuyuan.26.jpeg',
            'wuyuan.27.jpeg',
            'wuyuan.28.jpeg',
            'wuyuan.29.jpeg'
          ]}
        />
      )}
    </div>
  );
}

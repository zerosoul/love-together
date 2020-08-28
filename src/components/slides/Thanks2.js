import React from 'react';

import MemoImage from '../MemoImage';
const imgs = ['bf.1.png', 'bf.4.jpg', 'bf.2.jpg', 'bf.3.jpg'];
export default function Thanks2({ step }) {
  return (
    <div
      id="thanks2"
      className="step"
      data-x="10000"
      data-y="8000"
      data-scale="3"
      data-autoplay="20"
    >
      {step == 'thanks2' && (
        <MemoImage
          img={imgs}
          title="感谢"
          desc="每一次精心准备的早餐，颜值和你一样高，好吃又有营养。"
        />
      )}
    </div>
  );
}

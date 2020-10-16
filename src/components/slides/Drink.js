import React from 'react';
import MemoImage from '../MemoImage';
export default function Drink({ step }) {
  return (
    <div id="drink" className="step" data-x="0" data-y="0" data-scale="4" data-autoplay="10">
      {step == 'drink' && (
        <MemoImage img={['rio.png', 'ganbei_rio.png']} title="小酌微醺" desc="一起喝最爱的RIO" />
      )}
    </div>
  );
}

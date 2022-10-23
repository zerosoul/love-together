import React from 'react';

import MemoImage from '../MemoImage';
export default function FirstMet({ step }) {
  return (
    <div id="first-met" className="step slide" data-x="1000" data-y="-1500" data-autoplay="9">
      {step == 'first-met' && (
        <MemoImage
          img={['first_met.png', 'shadows.png', 'at_garden.png']}
          title="初识"
          date="2020.05.06"
          desc="第一次逛街、第一次合影、第一次逛公园"
        />
      )}
    </div>
  );
}

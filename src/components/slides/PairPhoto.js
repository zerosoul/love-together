import React from 'react';
import MemoImage from '../MemoImage';
export default function PairPhoto({ step }) {
  return (
    <div id="pair" className="step" data-x="0" data-y="0" data-scale="4" data-autoplay="10">
      {step == 'pair' && (
        <MemoImage
          img={'pair.toy.jpg'}
          date="2016.11.01"
          title="一对儿👫"
          desc="你说粉色的猪是你，我说小熊猫才是你，因为熊猫太少啦，于千千万人中，我才遇到你。"
        />
      )}
    </div>
  );
}

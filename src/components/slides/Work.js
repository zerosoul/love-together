import React from 'react';
import MemoImage from '../MemoImage';
export default function Work({ step }) {
  return (
    <div id="work" className="step slide" data-x="2000" data-y="-1500" data-autoplay="12">
      {step == 'work' && (
        <MemoImage
          img={['work.jpg', 'work.1.png']}
          title="摩天轮&金玫瑰"
          desc='摩天轮没坐成，赶紧做个手工安慰下<br/>(ﾉ"◑ ◑)ﾉ"(｡•́︿•̀｡)'
        />
      )}
    </div>
  );
}

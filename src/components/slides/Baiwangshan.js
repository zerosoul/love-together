import React from 'react';
import MemoImage from '../MemoImage';
export default function Baiwangshan({ step }) {
  return (
    <div id="baiwangshan" className="step slide" data-x="2000" data-y="-1500" data-autoplay="21">
      {step == 'baiwangshan' && (
        <MemoImage
          img={[
            'xinyun.png',
            'guashu.png',
            'yingzi_qianshou.png',
            'yingzi.png',
            'xiyang.png',
            'beiying.png',
            'xinshou.png',
          ]}
          title="百望山"
          desc="找到了一个可以一起看日落的人"
        />
      )}
    </div>
  );
}

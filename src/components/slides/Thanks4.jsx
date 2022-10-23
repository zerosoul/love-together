import React from 'react';
import MemoImage from '../MemoImage';
export default function Thanks4({ step }) {
  return (
    <div
      id="thanks4"
      className="step"
      data-x="10000"
      data-y="10000"
      data-scale="2"
      data-autoplay="15"
    >
      {step == 'thanks4' && (
        <MemoImage
          date="2017.06.29"
          img={['thanks.gp.png', 'thanks.gp.2.png', 'thanks.gp.3.png']}
          title="感谢与奶奶的陪伴"
          desc="每次带你回家你都会陪奶奶包饺子，还给奶奶买新衣服，奶奶非常喜欢你，说与你在一起的时光总是很开心，很短暂，一直在夸你"
        />
      )}
    </div>
  );
}

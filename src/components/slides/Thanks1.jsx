import React from 'react';
import MemoImage from '../MemoImage';
export default function Thanks1({ step }) {
  return (
    <div
      id="thanks1"
      className="step"
      data-x="10000"
      data-y="7000"
      data-scale="4"
      data-autoplay="45"
    >
      {step == 'thanks1' && (
        <MemoImage
          width="40%"
          img={['eat.9.png', 'eat.1.png', 'eat.2.png', 'eat.3.png', 'eat.4.jpeg', 'eat.5.png', 'eat.6.jpeg', 'eat.7.jpeg', 'eat.10.jpeg', 'eat.8.jpeg']}
          title="感谢🍚"
          desc="每一次用心准备的饭菜，你做饭，我刷碗，最佳组合。但还是你最辛苦！"
        />
      )}
    </div>
  );
}

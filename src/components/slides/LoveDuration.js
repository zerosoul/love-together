import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Heart from '../Heart';
import TogetherImage from '../../assets/memo/together.png';
const StyledWrapper = styled.div`
  /* background-color: #a98175; */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 900px;
  /* border: 1px solid #b36d61; */
  border-radius: 10px;
  /* box-shadow: 0 2px 6px #b36d61; */
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  padding: 60px;
  .cp {
    width: 350px;
    height: 350px;
    border: 5px solid #fff;
    border-radius: 50%;
    overflow: hidden;
    margin: 20px 0 0 0;
    box-shadow: 0 2px 6px #b36d00;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .title {
    font-size: 40px;
    margin-bottom: 30px;
  }
  .dur {
    letter-spacing: 1px;
    font-weight: 800;
    font-size: 50px;
    .time {
      background-color: rgba(0, 0, 0, 0.3);
      padding: 8px;
    }
    em {
      font-size: 30px;
      font-weight: 400;
      letter-spacing: 0;
      margin: 0 4px;
    }
  }
`;
let interInt = null;
const firstTime = new Date('2020/05/06 19:10:00');
export default function LoveDuration() {
  const [duration, setDuration] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    interInt = setInterval(() => {
      let milliseconds = new Date().getTime() - firstTime.getTime();
      const roundTowardsZero = milliseconds > 0 ? Math.floor : Math.ceil;
      let d = roundTowardsZero(milliseconds / 86400000);
      let h = roundTowardsZero(milliseconds / 3600000) % 24;
      let m = roundTowardsZero(milliseconds / 60000) % 60;
      let s = String(roundTowardsZero(milliseconds / 1000) % 60).padStart(2, '0');
      setDuration({
        d,
        h,
        m,
        s,
      });
    }, 1000);
    return () => {
      clearInterval(interInt);
    };
  }, []);
  const { d, h, m, s } = duration;
  return (
    <StyledWrapper id="love-dur" className="step slide" data-x="-1000" data-y="-1500">
      <Heart animated={true} />
      <div className="cp">
        <img src={TogetherImage} alt="一起爬香山" />
      </div>
      <h2 className="title">相遇相伴 相知相爱</h2>
      <div className="dur">
        <span className="time">{d}</span>
        <em>天</em>
        <span className="time">{h}</span>
        <em>小时</em>
        <span className="time">{m}</span>
        <em>分</em>
        <span className="time">{s}</span>
        <em>秒</em>
      </div>
    </StyledWrapper>
  );
}

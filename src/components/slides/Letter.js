import React from 'react';
import styled, { keyframes } from 'styled-components';
import NotePaper from '../Notepaper';
import Heart from '../Heart';
const WeImage='https://gitee.com/zyanggc/oss/raw/master/memo/letter.jpg';
const We1Image='https://gitee.com/zyanggc/oss/raw/master/memo/letter.we.1.png';
const We2Image='https://gitee.com/zyanggc/oss/raw/master/memo/letter.we.2.png';
const We3Image='https://gitee.com/zyanggc/oss/raw/master/memo/letter.we.3.png';
const We4Image='https://gitee.com/zyanggc/oss/raw/master/memo/letter.we.4.png';
const We5Image='https://gitee.com/zyanggc/oss/raw/master/memo/letter.we.5.png';
const FadeIn = keyframes`
 from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;
const StyledImage = styled.img`
  z-index: 999;
  position: absolute;
  opacity: 0;
  border: 3px solid #fff;
  border-radius: 10px;
  transform: rotate(-10deg);
  box-shadow: 0 0 10px black;
  transition: all 1s;
  animation: ${FadeIn} 1s;
  animation-fill-mode: both;
`;
export default function Letter({ step }) {
  return (
    <div
      id="letter"
      className="step"
      data-x="6200"
      data-y="4300"
      data-z="-100"
      data-rotate-x="-40"
      data-rotate-y="10"
      data-scale="2"
      style={{ position: 'relative' }}
    >
      <NotePaper
        style={{ width: '520px', margintLeft: '40px', boxShadow: '0 0 14px 0px black' }}
        content="你总埋怨我陪你时间太少，不像以前对你好，缺少浪漫和仪式感。<br/>的确，爱情这个东西，它的亲密关系、它的新鲜感，是需要做出一些努力来保持的。人难免被生活改变，可惜我懂的这个道理太晚了，付出了沉痛的代价。<br/><br/>2019即将过去，原本我们计划的是2020结婚，结果由于我一时愚蠢犯错，长时间冷战，导致关系破裂。<br/><br/>对不起，缺席了那些你需要我的陪伴时刻。<br/>对不起，忽视了你很多次的感受。<br/>对不起，没能遵守曾经的承诺：不再让你受委屈。<br/><br/>破镜难圆，只愿以后的日子里，你能过得更加幸福。<br/><br/>最后，祝新年快乐，要一直快乐下去。"
        date="❤️爱你的杨二❤️"
      />
      <Heart
        style={{
          position: 'absolute',
          opacity: '.4',
          top: '88%',
          left: '0',
          transform: 'rotate(-100deg)',
          right: 'auto'
        }}
        size="30px"
      />
      <Heart
        style={{
          position: 'absolute',
          opacity: '.6',
          top: 0,
          right: '-10px',
          transform: 'rotate(-10deg)',
          left: 'auto'
        }}
        size="40px"
      />
      {step == 'letter' && (
        <>
          <StyledImage
            style={{
              top: '20px',
              left: 0,
              width: '220px',
              transform: 'rotate(10deg)',
              animationDelay: '1s'
            }}
            src={We4Image}
            alt="生日合影"
          />
          <StyledImage
            style={{
              top: '320px',
              left: '10px',
              width: '180px',
              transform: 'rotate(-20deg)',
              animationDelay: '2s'
            }}
            src={We1Image}
            alt="与丹璐妈妈合影"
          />
          <StyledImage
            style={{
              bottom: '50px',
              left: '50px',
              width: '150px',
              transform: 'rotate(10deg)',
              animationDelay: '3s'
            }}
            src={We3Image}
            alt="美颜合影"
          />
          <StyledImage
            style={{
              bottom: '420px',
              right: '-20px',
              width: '210px',
              transform: 'rotate(-10deg)',
              animationDelay: '4s'
            }}
            src={We5Image}
            alt="最美合影"
          />
          <StyledImage
            style={{
              bottom: '210px',
              right: '-20px',
              width: '210px',
              transform: 'rotate(10deg)',
              animationDelay: '5s'
            }}
            src={We2Image}
            alt="看电影"
          />

          <StyledImage
            style={{
              bottom: '20px',
              right: '-50px',
              width: '270px',
              transform: 'rotate(-10deg)',
              animationDelay: '6s'
            }}
            src={WeImage}
            alt="最后的合影"
          />
        </>
      )}
    </div>
  );
}

import React from 'react';
import styled from 'styled-components';

const StyledNote = styled.div`
  position: relative;
  margin: 30px auto;
  padding: 29px 20px 20px 45px;
  width: 280px;
  line-height: 30px;
  color: #6a5f49;
  text-shadow: 0 1px 1px white;
  background-color: #f2f6c1;

  border: 1px solid #c3baaa;
  border-color: rgba(195, 186, 170, 0.9);
  box-sizing: border-box;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
  }

  &::before {
    left: 28px;
    width: 2px;
    border: solid #efcfad;
    border-color: rgba(239, 207, 173, 0.9);
    border-width: 0 1px;
  }

  &::after {
    z-index: -1;
    left: 0;
    right: 0;
    background: rgba(242, 246, 193, 0.9);
    border: 1px solid rgba(170, 157, 134, 0.7);
    transform: rotate(2deg);
  }

  .quote {
    font-size: 20px;
    font-weight: bold;
    .content {
      color: black;
    }
    .content::before,
    .content::after {
      display: inline-block;
      vertical-align: top;
      height: 30px;
      line-height: 48px;
      font-size: 50px;
      opacity: 0.2;
    }

    .quote-by {
      display: block;
      padding-right: 10px;
      text-align: right;
      font-size: 16px;
      font-style: italic;
      color: #84775c;
    }
  }
`;

export default function Notepaper({ date, content, ...rest }) {
  return (
    <StyledNote {...rest}>
      <figure className="quote">
        <blockquote
          dangerouslySetInnerHTML={{ __html: content }}
          className="content"
          cite="https://works.yangerxiao.com/love-memory/"
        ></blockquote>
        {date && <figcaption className="quote-by">— {date}</figcaption>}
      </figure>
    </StyledNote>
  );
}

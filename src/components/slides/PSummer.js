import React from 'react';
import Poetry from '../Poetry';
const ID = 'p-summer';
const content = `<p>你问我夏天有哪般好：</p>
<p>我说阳光照沙滩，海浪多美妙。</p>
<p>你默默点头。</p>
<p>其实你不知道...</p>
<p>是因为阳光暖暖，洒满了你的发梢。</p>`;
export default function PSummer({ currStep }) {
  return (
    <Poetry
      currStep={currStep}
      id={ID}
      content={content}
      data-x="3500"
      data-y="2100"
      data-rotate="180"
      data-scale="6"
      data-autoplay="14"
    />
  );
}

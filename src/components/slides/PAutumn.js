import React from 'react';
import Poetry from '../Poetry';
const ID = 'p-autumn';
const content = `<p>你问我秋天有哪般好：</p>
<p>我说枫叶红似火，流水绕石桥。</p>
<p>你默默点头。</p>
<p>其实你不知道...</p>
<p>是因为你走过的落叶铺满的街道。</p>`;
export default function PAutumn({ currStep }) {
  return (
    <Poetry
      currStep={currStep}
      id={ID}
      content={content}
      data-x="6300"
      data-y="2000"
      data-rotate="20"
      data-scale="4"
      data-autoplay="14"
    />
  );
}

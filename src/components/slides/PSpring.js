import React from 'react';
import Poetry from '../Poetry';
const ID = 'p-spring';
const content = `<p>你问我春天有哪般好：</p>
<p>我说绿柳抽新芽，花枝春意闹。</p>
<p>你默默点头。</p>
<p>其实你不知道...</p>
<p>是因为春风轻轻撩动的，你的衣角。</p>`;
export default function PSpring({ currStep }) {
  return (
    <Poetry
      currStep={currStep}
      id={ID}
      content={content}
      data-x="0"
      data-y="-1500"
      data-autoplay="14"
    />
  );
}

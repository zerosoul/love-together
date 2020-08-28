import React from 'react';
import Poetry from '../Poetry';
const ID = 'p-winter';
const content = `<p>你问我冬天有哪般好：</p>
<p>我说大地归寂，万物静悄悄。</p>
<p>你默默点头。</p>
<p>其实你不知道...</p>
<p>是因为雪花飘落时的，你的微笑。</p>`;
export default function PWinter({ currStep }) {
  return (
    <Poetry
      currStep={currStep}
      id={ID}
      content={content}
      data-x="8000"
      data-y="4000"
      data-scale="2"
      data-autoplay="14"
    />
  );
}

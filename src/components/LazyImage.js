import React, { useEffect } from 'react';
import LazyLoad from 'vanilla-lazyload';
import HeartSvg from '../assets/img/heart.svg';

// Only initialize it one time for the entire application
if (!document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad({
    elements_selector: '.lazy'
  });
}

export default function LazyImage({ alt = 'lazy image', src, width, height }) {
  useEffect(() => {
    document.lazyLoadInstance.update();
  }, [src]);
  return (
    <img src={HeartSvg} alt={alt} className="lazy" data-src={src} width={width} height={height} />
  );
}

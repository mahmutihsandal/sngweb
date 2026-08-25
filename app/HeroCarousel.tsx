'use client';

import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';

const slides = [
  {
    artist: 'Poizi',
    image: 'assets/poizi-yatay.jpg',
    mobileImage: 'assets/poizi-dikey.jpg',
  },
  {
    artist: 'PAU',
    image: 'assets/pau-yatay.jpg',
    mobileImage: 'assets/pau-dikey.jpg',
  },
] as const;

export default function HeroCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ pointerId: -1, startX: 0, startScrollLeft: 0 });
  const [activeSlide, setActiveSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (isDragging || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const timer = window.setTimeout(() => {
      const track = trackRef.current;
      if (!track) return;

      const nextIndex = (activeSlide + 1) % slides.length;
      track.scrollTo({ left: track.clientWidth * nextIndex, behavior: 'smooth' });
      setActiveSlide(nextIndex);
    }, 3000);

    return () => window.clearTimeout(timer);
  }, [activeSlide, isDragging]);

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track || !track.clientWidth) return;
    const nextIndex = Math.round(track.scrollLeft / track.clientWidth);
    if (nextIndex !== activeSlide) setActiveSlide(nextIndex);
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;

    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startScrollLeft: track.scrollLeft,
    };
    track.setPointerCapture(event.pointerId);
    setIsDragging(true);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || dragRef.current.pointerId !== event.pointerId) return;

    track.scrollLeft = dragRef.current.startScrollLeft - (event.clientX - dragRef.current.startX);
  };

  const finishDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || dragRef.current.pointerId !== event.pointerId) return;

    if (track.hasPointerCapture(event.pointerId)) track.releasePointerCapture(event.pointerId);
    dragRef.current.pointerId = -1;
    setIsDragging(false);

    const nextIndex = Math.round(track.scrollLeft / track.clientWidth);
    track.scrollTo({ left: track.clientWidth * nextIndex, behavior: 'smooth' });
    setActiveSlide(nextIndex);
  };

  return (
    <div
      className={`hero-carousel ${activeSlide === 1 ? 'is-pau-active' : ''}`}
      role="region"
      aria-label="Konser afişleri"
    >
      <div
        className={`hero-carousel-track ${isDragging ? 'is-dragging' : ''}`}
        ref={trackRef}
        onScroll={handleScroll}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishDrag}
        onPointerCancel={finishDrag}
      >
        {slides.map((slide, index) => (
          <div
            className={`hero-slide hero-slide-${slide.artist.toLowerCase()}`}
            role="group"
            aria-roledescription="slayt"
            aria-label={`${index + 1} / ${slides.length}: ${slide.artist} konser afişi`}
            key={slide.artist}
          >
            {slide.artist === 'PAU' && (
              <picture className="hero-slide-backdrop" aria-hidden="true">
                <source media="(max-width: 760px)" srcSet={slide.mobileImage} />
                <img src={slide.image} alt="" draggable={false} />
              </picture>
            )}
            <picture className="hero-slide-poster">
              <source media="(max-width: 760px)" srcSet={slide.mobileImage} />
              <img
                src={slide.image}
                alt={`${slide.artist} konser afişi`}
                loading={index === 0 ? 'eager' : 'lazy'}
                draggable={false}
              />
            </picture>
          </div>
        ))}
      </div>

      <div className="hero-headline" aria-hidden={activeSlide !== 0}>
        <span>DENİZİN KIYISINDA</span>
        <strong>İKİ BÜYÜK GECE.</strong>
      </div>

    </div>
  );
}

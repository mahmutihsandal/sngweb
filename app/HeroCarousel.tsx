'use client';

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from 'react';

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

const AUTO_ADVANCE_DELAY_MS = 5000;
const SWIPE_THRESHOLD_PX = 20;
const DRAG_SENSITIVITY = 1.35;

export default function HeroCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const autoAdvanceTimerRef = useRef<number | null>(null);
  const dragRef = useRef({ pointerId: -1, startX: 0, startScrollLeft: 0, startIndex: 0 });
  const [activeSlide, setActiveSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const clearAutoAdvanceTimer = useCallback(() => {
    if (autoAdvanceTimerRef.current === null) return;

    window.clearTimeout(autoAdvanceTimerRef.current);
    autoAdvanceTimerRef.current = null;
  }, []);

  useEffect(() => {
    clearAutoAdvanceTimer();
    if (isDragging || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    autoAdvanceTimerRef.current = window.setTimeout(() => {
      autoAdvanceTimerRef.current = null;
      const track = trackRef.current;
      if (!track || dragRef.current.pointerId !== -1) return;

      const nextIndex = (activeSlide + 1) % slides.length;
      track.scrollTo({ left: track.clientWidth * nextIndex, behavior: 'smooth' });
      setActiveSlide(nextIndex);
    }, AUTO_ADVANCE_DELAY_MS);

    return clearAutoAdvanceTimer;
  }, [activeSlide, clearAutoAdvanceTimer, isDragging]);

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track || !track.clientWidth) return;
    const nextIndex = Math.round(track.scrollLeft / track.clientWidth);
    if (nextIndex !== activeSlide) setActiveSlide(nextIndex);
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;

    clearAutoAdvanceTimer();
    const currentScrollLeft = track.scrollLeft;
    track.scrollTo({ left: currentScrollLeft, behavior: 'auto' });
    track.style.scrollSnapType = 'none';

    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startScrollLeft: currentScrollLeft,
      startIndex: Math.round(currentScrollLeft / track.clientWidth),
    };
    track.setPointerCapture(event.pointerId);
    setIsDragging(true);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || dragRef.current.pointerId !== event.pointerId) return;

    const dragDistance = event.clientX - dragRef.current.startX;
    track.scrollLeft = dragRef.current.startScrollLeft - dragDistance * DRAG_SENSITIVITY;
  };

  const completeDrag = (event: ReactPointerEvent<HTMLDivElement>, allowSlideChange: boolean) => {
    const track = trackRef.current;
    if (!track || dragRef.current.pointerId !== event.pointerId) return;

    const swipeDistance = event.clientX - dragRef.current.startX;
    const direction = swipeDistance < 0 ? 1 : -1;
    const nextIndex = allowSlideChange && Math.abs(swipeDistance) >= SWIPE_THRESHOLD_PX
      ? Math.max(0, Math.min(slides.length - 1, dragRef.current.startIndex + direction))
      : dragRef.current.startIndex;

    dragRef.current.pointerId = -1;
    if (track.hasPointerCapture(event.pointerId)) track.releasePointerCapture(event.pointerId);
    track.style.scrollSnapType = '';
    setIsDragging(false);

    track.scrollTo({ left: track.clientWidth * nextIndex, behavior: 'smooth' });
    setActiveSlide(nextIndex);
  };

  const finishDrag = (event: ReactPointerEvent<HTMLDivElement>) => completeDrag(event, true);
  const cancelDrag = (event: ReactPointerEvent<HTMLDivElement>) => completeDrag(event, false);

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
        onPointerCancel={cancelDrag}
        onLostPointerCapture={cancelDrag}
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

'use client';

import { useEffect, useRef, useState } from 'react';

const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=K%C3%BC%C3%A7%C3%BCk+Samanl%C4%B1+Beach+Club+Fethiye';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNightMenuOpen, setIsNightMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const modalCloseButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen && !isNightMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setIsOpen(false);
      setIsNightMenuOpen(false);
    };
    const desktopMedia = window.matchMedia('(min-width: 761px)');
    const closeOnDesktop = () => {
      if (!desktopMedia.matches) return;
      setIsOpen(false);
      setIsNightMenuOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    desktopMedia.addEventListener('change', closeOnDesktop);

    return () => {
      window.removeEventListener('keydown', closeOnEscape);
      desktopMedia.removeEventListener('change', closeOnDesktop);
    };
  }, [isNightMenuOpen, isOpen]);

  useEffect(() => {
    if (!isNightMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    modalCloseButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isNightMenuOpen]);

  const closeNightMenu = () => {
    setIsNightMenuOpen(false);
    window.requestAnimationFrame(() => menuButtonRef.current?.focus());
  };

  return (
    <div className={`mobile-menu ${isOpen ? 'is-open' : ''}`}>
      <button
        className="mobile-menu-button"
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        ref={menuButtonRef}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span>MENÜ</span>
        <i aria-hidden="true"><b /><b /><b /></i>
      </button>

      {isOpen && (
        <>
          <button
            className="mobile-menu-backdrop"
            type="button"
            aria-label="Menüyü kapat"
            onClick={() => setIsOpen(false)}
          />
          <nav className="mobile-menu-panel" id="mobile-navigation" aria-label="Mobil menü">
            <p>HIZLI ERİŞİM</p>

            <a href="#hakkimizda" className="mobile-menu-link" onClick={() => setIsOpen(false)}>
              <span><small>01</small> Hakkımızda</span>
              <b aria-hidden="true">↓</b>
            </a>

            <button
              className="mobile-menu-link"
              type="button"
              onClick={() => {
                setIsOpen(false);
                setIsNightMenuOpen(true);
              }}
            >
              <span><small>02</small> Gece Menüsü</span>
              <b aria-hidden="true">↗</b>
            </button>

            <a href="#adres" className="mobile-menu-link" onClick={() => setIsOpen(false)}>
              <span><small>03</small> Adres</span>
              <b aria-hidden="true">↓</b>
            </a>

            <a
              href={mapsUrl}
              className="mobile-menu-link"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
            >
              <span><small>04</small> Nasıl Gidilir?</span>
              <b aria-hidden="true">↗</b>
            </a>
          </nav>
        </>
      )}

      {isNightMenuOpen && (
        <div className="night-menu-modal">
          <button
            className="night-menu-modal-backdrop"
            type="button"
            aria-label="Gece menüsünü kapat"
            onClick={closeNightMenu}
          />
          <section
            className="night-menu-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="night-menu-title"
          >
            <header className="night-menu-dialog-header">
              <div>
                <small>FOOD &amp; DRINKS</small>
                <h2 id="night-menu-title">GECE MENÜSÜ</h2>
              </div>
              <button
                type="button"
                ref={modalCloseButtonRef}
                aria-label="Gece menüsünü kapat"
                onClick={closeNightMenu}
              >
                ×
              </button>
            </header>
            <p className="night-menu-hint">Yakınlaştırarak veya kaydırarak inceleyebilirsiniz.</p>
            <div className="night-menu-image-scroll">
              <img
                src="assets/gece-menusu.png"
                alt="Gece menüsü yiyecek ve içecek fiyat listesi"
                decoding="async"
              />
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

'use client';

import { useEffect, useRef, useState } from 'react';

const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=K%C3%BC%C3%A7%C3%BCk+Samanl%C4%B1+Beach+Club+Fethiye';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNightMenuOpen, setIsNightMenuOpen] = useState(false);
  const [isDirectionsOpen, setIsDirectionsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const modalCloseButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen && !isNightMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setIsOpen(false);
      setIsNightMenuOpen(false);
      setIsDirectionsOpen(false);
    };
    const desktopMedia = window.matchMedia('(min-width: 761px)');
    const closeOnDesktop = () => {
      if (!desktopMedia.matches) return;
      setIsOpen(false);
      setIsNightMenuOpen(false);
      setIsDirectionsOpen(false);
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
        onClick={() => {
          if (isOpen) setIsDirectionsOpen(false);
          setIsOpen((current) => !current);
        }}
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
            onClick={() => {
              setIsOpen(false);
              setIsDirectionsOpen(false);
            }}
          />
          <nav className="mobile-menu-panel" id="mobile-navigation" aria-label="Mobil menü">
            <p>HIZLI ERİŞİM</p>

            <button
              className="mobile-menu-link"
              type="button"
              onClick={() => {
                setIsOpen(false);
                setIsDirectionsOpen(false);
                setIsNightMenuOpen(true);
              }}
            >
              <span><small>01</small> Gece Menüsü</span>
              <b aria-hidden="true">↗</b>
            </button>

            <button
              className="mobile-menu-link"
              type="button"
              aria-expanded={isDirectionsOpen}
              aria-controls="mobile-directions"
              onClick={() => setIsDirectionsOpen((current) => !current)}
            >
              <span><small>02</small> Nasıl Gidilir?</span>
              <b aria-hidden="true">{isDirectionsOpen ? '−' : '+'}</b>
            </button>

            {isDirectionsOpen && (
              <div className="mobile-directions" id="mobile-directions">
                <address>
                  <small>ADRES</small>
                  <strong>Küçük Samanlı Beach Club</strong>
                  <span>Fethiye / Muğla</span>
                </address>

                <div className="mobile-directions-copy">
                  <p>
                    <strong>Özel Araç:</strong> Fethiye merkezden yarımada yolunu takip ederek
                    yaklaşık 10-15 dakikada ulaşabilirsiniz.
                  </p>
                  <p>
                    <strong>Toplu Taşıma:</strong> Merkezden kalkan plaj dolmuşlarını
                    kullanabilirsiniz.
                  </p>
                </div>

                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => {
                    setIsOpen(false);
                    setIsDirectionsOpen(false);
                  }}
                >
                  MAPS’TE AÇ <span aria-hidden="true">↗</span>
                </a>
              </div>
            )}
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

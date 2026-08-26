'use client';

import { useEffect, useRef, useState } from 'react';

const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=K%C3%BC%C3%A7%C3%BCk+Samanl%C4%B1+Beach+Club+Fethiye';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNightMenuOpen, setIsNightMenuOpen] = useState(false);
  const [isDirectionsOpen, setIsDirectionsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const modalCloseButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen && !isNightMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setIsOpen(false);
      setIsNightMenuOpen(false);
      setIsDirectionsOpen(false);
      setIsAboutOpen(false);
    };
    const desktopMedia = window.matchMedia('(min-width: 761px)');
    const closeOnDesktop = () => {
      if (!desktopMedia.matches) return;
      setIsOpen(false);
      setIsNightMenuOpen(false);
      setIsDirectionsOpen(false);
      setIsAboutOpen(false);
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
          if (isOpen) {
            setIsDirectionsOpen(false);
            setIsAboutOpen(false);
          }
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
              setIsAboutOpen(false);
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
                setIsAboutOpen(false);
                setIsNightMenuOpen(true);
              }}
            >
              <span>Gece Menüsü</span>
              <b aria-hidden="true">↗</b>
            </button>

            <button
              className="mobile-menu-link"
              type="button"
              aria-expanded={isDirectionsOpen}
              aria-controls="mobile-directions"
              onClick={() => {
                setIsAboutOpen(false);
                setIsDirectionsOpen((current) => !current);
              }}
            >
              <span>Nasıl Gidilir?</span>
              <b aria-hidden="true">{isDirectionsOpen ? '−' : '+'}</b>
            </button>

            {isDirectionsOpen && (
              <div className="mobile-directions" id="mobile-directions">
                <address>
                  <small>ADRES</small>
                  <strong>Küçük Samanlı Beach Club</strong>
                  <span>Fethiye / Muğla</span>
                </address>

                <aside className="mobile-transport-notice" aria-label="Ek otobüs seferleri duyurusu">
                  <span className="mobile-transport-notice-label">
                    <b aria-hidden="true">🚌</b> ULAŞIM DUYURUSU
                  </span>
                  <strong>EK OTOBÜS SEFERLERİ</strong>
                  <p>
                    Konser yoğunluğu nedeniyle ulaşımda kolaylık sağlamak amacıyla ek
                    otobüs seferleri düzenlenecektir.
                  </p>
                  <dl>
                    <div>
                      <dt>GÜZERGÂH</dt>
                      <dd>Merkez Cami Durağı <span aria-hidden="true">→</span> K. Samanlı Beach</dd>
                    </div>
                    <div>
                      <dt>SEFER SAATLERİ</dt>
                      <dd>18.00 – 23.30</dd>
                    </div>
                  </dl>
                </aside>

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
                    setIsAboutOpen(false);
                  }}
                >
                  MAPS’TE AÇ <span aria-hidden="true">↗</span>
                </a>
              </div>
            )}

            <button
              className="mobile-menu-link"
              type="button"
              aria-expanded={isAboutOpen}
              aria-controls="mobile-about"
              onClick={() => {
                setIsDirectionsOpen(false);
                setIsAboutOpen((current) => !current);
              }}
            >
              <span>Hakkımızda</span>
              <b aria-hidden="true">{isAboutOpen ? '−' : '+'}</b>
            </button>

            {isAboutOpen && (
              <div className="mobile-about" id="mobile-about">
                <small>BİZ KİMİZ?</small>
                <strong>SNG Ajans</strong>

                <div className="mobile-about-copy">
                  <p>
                    SNG Ajans, etkinlik, organizasyon, sanatçı yönetimi, konser, festival,
                    marka iletişimi ve yaratıcı prodüksiyon alanlarında hizmet veren
                    profesyonel bir organizasyon ajansıdır.
                  </p>
                  <p>
                    Hayata geçirdiğimiz her projede; yaratıcılığı, güçlü organizasyon
                    yeteneğini ve profesyonel operasyonu bir araya getirerek markalar ve
                    sanatçılar için unutulmaz deneyimler oluşturmayı hedefliyoruz.
                  </p>
                  <p>
                    Konserlerden festivallere, özel etkinliklerden kurumsal organizasyonlara
                    kadar her projeyi kendi dinamikleri içerisinde değerlendiriyor; planlama,
                    prodüksiyon, sanatçı koordinasyonu, sahne ve teknik operasyon, güvenlik,
                    ulaşım ve etkinlik yönetimi süreçlerini bütüncül bir anlayışla yönetiyoruz.
                  </p>
                  <p>
                    SNG Ajans olarak yalnızca bir etkinlik düzenlemiyor; fikrin oluşmasından
                    etkinliğin son anına kadar tüm süreci yönetiyor, markaların ve misafirlerin
                    beklentilerinin üzerinde deneyimler yaratıyoruz.
                  </p>
                </div>

                <div className="mobile-about-signature">
                  <span>Eşsiz bir akşam, sınırsız eğlence.</span>
                  <strong>SNG Ajans</strong>
                  <em>Hayal et. Planla. Gerçekleştir.</em>
                </div>
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

'use client';

import { useEffect, useState } from 'react';

const navigationItems = [
  { label: 'Adres', href: '#adres' },
  { label: 'Program Akışı', href: '#program' },
  { label: 'Kroki', href: '#kroki' },
] as const;

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    const desktopMedia = window.matchMedia('(min-width: 761px)');
    const closeOnDesktop = () => {
      if (desktopMedia.matches) setIsOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    desktopMedia.addEventListener('change', closeOnDesktop);

    return () => {
      window.removeEventListener('keydown', closeOnEscape);
      desktopMedia.removeEventListener('change', closeOnDesktop);
    };
  }, [isOpen]);

  return (
    <div className={`mobile-menu ${isOpen ? 'is-open' : ''}`}>
      <button
        className="mobile-menu-button"
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
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

            <span className="mobile-menu-link is-disabled" aria-disabled="true">
              <span><small>01</small> Yiyecek Menüsü</span>
              <em>Görsel yakında</em>
            </span>

            {navigationItems.map((item, index) => (
              <a href={item.href} className="mobile-menu-link" onClick={() => setIsOpen(false)} key={item.href}>
                <span><small>0{index + 2}</small> {item.label}</span>
                <b aria-hidden="true">↓</b>
              </a>
            ))}
          </nav>
        </>
      )}
    </div>
  );
}

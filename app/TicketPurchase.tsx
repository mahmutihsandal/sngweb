'use client';

import { useState } from 'react';

type ArtistOption = {
  artist: string;
  date: string;
  tone: 'gold' | 'red';
};

type TicketPurchaseProps = {
  artistOptions: readonly ArtistOption[];
  maxPeople: number;
  priceMode: 'package' | 'per-person';
  ticketName: string;
  ticketPrice: string;
  unitPrice: number;
};

const whatsappNumber = '905301802390';

const formatPrice = (price: number) =>
  `${new Intl.NumberFormat('tr-TR').format(price)} TL`;

export default function TicketPurchase({
  artistOptions,
  maxPeople,
  priceMode,
  ticketName,
  ticketPrice,
  unitPrice,
}: TicketPurchaseProps) {
  const [people, setPeople] = useState(1);
  const totalPrice = priceMode === 'per-person' ? unitPrice * people : unitPrice;

  const whatsappLink = (artist: ArtistOption) => {
    const priceDetail =
      priceMode === 'package'
        ? `Paket fiyatı: ${ticketPrice}.`
        : `Birim fiyat: ${ticketPrice}. Toplam: ${formatPrice(totalPrice)}.`;
    const message = `Merhaba, ${artist.date} ${artist.artist} konseri için ${ticketName} rezervasyonu yapmak istiyorum. Kişi sayısı: ${people}. ${priceDetail}`;

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="ticket-purchase">
      <div className="ticket-person-selector">
        <div className="ticket-person-copy">
          <span>KİŞİ SAYISI</span>
          <small>
            {priceMode === 'package'
              ? `En fazla ${maxPeople} kişi · Paket ${formatPrice(totalPrice)}`
              : `Toplam ${formatPrice(totalPrice)}`}
          </small>
        </div>
        <div className="ticket-stepper" role="group" aria-label={`${ticketName} kişi sayısı`}>
          <button
            type="button"
            onClick={() => setPeople((current) => Math.max(1, current - 1))}
            disabled={people === 1}
            aria-label="Kişi sayısını azalt"
          >
            −
          </button>
          <output aria-live="polite">
            <strong>{people}</strong>
            <small>KİŞİ</small>
          </output>
          <button
            type="button"
            onClick={() => setPeople((current) => Math.min(maxPeople, current + 1))}
            disabled={people === maxPeople}
            aria-label="Kişi sayısını artır"
          >
            +
          </button>
        </div>
      </div>

      <p className="ticket-purchase-label">BİLETİNİ AL · SANATÇINI SEÇ</p>
      <div className="ticket-artist-options">
        {artistOptions.map((artist) => (
          <a
            className={`ticket-artist-option ticket-artist-${artist.tone}`}
            href={whatsappLink(artist)}
            target="_blank"
            rel="noreferrer"
            aria-label={`${artist.date} ${artist.artist} konseri, ${ticketName}, ${people} kişi: WhatsApp'tan rezervasyon yap`}
            key={artist.artist}
          >
            <span>
              <strong>{artist.artist}</strong>
              <small>{artist.date}</small>
            </span>
            <b aria-hidden="true">→</b>
          </a>
        ))}
      </div>
    </div>
  );
}

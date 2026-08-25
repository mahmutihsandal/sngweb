const posters = [
  {
    artist: 'POIZI',
    date: '01 EYLÜL',
    image: 'assets/poizi-dikey.jpg',
    className: 'hero-poster-poizi',
  },
  {
    artist: 'PAU',
    date: '02 EYLÜL',
    image: 'assets/pau-dikey.jpg',
    className: 'hero-poster-pau',
  },
] as const;

export default function HeroShowcase() {
  return (
    <div className="hero-showcase">
      <div className="hero-copy">
        <p className="hero-eyebrow">KÜÇÜK SAMANLI · FETHİYE</p>
        <h1>
          <span className="hero-heading-line">DENİZİN</span>
          <span className="hero-heading-line">KIYISINDA</span>
          <span className="hero-heading-accent">İKİ BÜYÜK GECE.</span>
        </h1>
        <p className="hero-description">
          Gün batımı, sahne ışıkları ve iki ayrı canlı performans. Poizi ve PAU
          için yerini WhatsApp üzerinden ayır.
        </p>

        <div className="hero-actions">
          <a className="hero-primary-action" href="#biletler">
            Bilet seçenekleri <span aria-hidden="true">↓</span>
          </a>
          <a className="hero-secondary-action" href="#etkinlikler">
            Geceleri keşfet <span aria-hidden="true">↘</span>
          </a>
        </div>

        <div className="hero-details" aria-label="Etkinlik özeti">
          <p>
            <strong>01—02</strong>
            <span>EYLÜL 2026</span>
          </p>
          <p>
            <span>KAPI AÇILIŞI</span>
            <strong>19:00</strong>
          </p>
        </div>
      </div>

      <div className="hero-art" aria-label="Poizi ve PAU konser afişleri">
        <span className="hero-art-orbit" aria-hidden="true" />
        <span className="hero-art-note" aria-hidden="true">
          SNG BİLETİM · LIVE MUSIC · FETHİYE
        </span>
        {posters.map((poster, index) => (
          <figure className={`hero-poster-card ${poster.className}`} key={poster.artist}>
            <div className="hero-poster-image">
              <img
                src={poster.image}
                alt={`${poster.artist} konser afişi`}
                loading="eager"
                fetchPriority={index === 0 ? 'high' : 'auto'}
              />
            </div>
            <figcaption>
              <span>{poster.date}</span>
              <strong>{poster.artist}</strong>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

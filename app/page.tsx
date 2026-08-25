import HeroShowcase from './HeroShowcase';
import MobileMenu from './MobileMenu';

const whatsappNumber = '905465845615';

const whatsappLink = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const generalWhatsappUrl = whatsappLink(
  'Merhaba, SNG etkinlikleri hakkında bilet almak istiyorum.',
);

const events = [
  {
    artist: 'POIZI',
    date: '01 EYLÜL',
    day: 'SALI',
    image: 'assets/poizi-yatay.jpg',
    mobileImage: 'assets/poizi-dikey.jpg',
    tone: 'gold',
  },
  {
    artist: 'PAU',
    date: '02 EYLÜL',
    day: 'ÇARŞAMBA',
    image: 'assets/pau-yatay.jpg',
    mobileImage: 'assets/pau-dikey.jpg',
    tone: 'red',
  },
] as const;

const tickets = [
  {
    group: 'LOCA · 6 KİŞİ',
    name: 'VIP LOCA',
    detail: 'L7 / L14',
    price: '70.000 TL',
    perks: '2 adet 70’lik içki · Meze tabağı · Meyve tabağı',
    accent: 'vip',
  },
  {
    group: 'LOCA · 6 KİŞİ',
    name: 'LOCA',
    detail: 'L1 / L6',
    price: '50.000 TL',
    perks: '2 adet 70’lik içki · Meze tabağı · Meyve tabağı',
    accent: 'loca',
  },
  {
    group: 'BİSTRO · 3 KİŞİ',
    name: 'BISTRO GOLD',
    detail: 'Sahne önü',
    price: '25.000 TL',
    perks: '1 adet 70 cl içki · Çerez tabağı',
    accent: 'bistro-gold',
  },
  {
    group: 'BİSTRO · 3 KİŞİ',
    name: 'BISTRO SILVER',
    detail: 'Bistro alanı',
    price: '15.000 TL',
    perks: '1 adet 70 cl içki · Çerez tabağı',
    accent: 'bistro-silver',
  },
  {
    group: 'TEK KİŞİLİK',
    name: 'ORTA AYAKTA',
    detail: 'Orta bölüm',
    price: '1.350 TL',
    perks: 'Sahneye yakın ayakta izleme alanı',
    accent: 'middle',
  },
  {
    group: 'TEK KİŞİLİK',
    name: 'AYAKTA ARKA',
    detail: 'Genel alan',
    price: '1.125 TL',
    perks: 'Ayakta arka genel izleme alanı',
    accent: 'rear',
  },
] as const;

const program = [
  { time: '19:00', title: 'Kapı Açılışı', note: 'Küçük Samanlı Beach Club' },
  { time: '20:00—21:30', title: 'Ön Sahne DJ Performansı', note: 'DJ Alperen' },
  { time: '21:30—23:00', title: 'Ana Sahne', note: '01 Eylül Poizi · 02 Eylül PAU' },
  { time: '23:00—', title: 'İnteraktif Sahne Etkinlikleri', note: 'Gece devam ediyor' },
] as const;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand header-brand" href="#top" aria-label="SNG Biletim ve SNG Ajans ana sayfa">
          <span className="header-brand-wordmark">
            <span className="brand-mark">SNG</span>
            <span className="brand-copy">BİLETİM</span>
          </span>
          <span className="header-brand-separator" aria-hidden="true" />
          <span className="header-brand-agency" aria-hidden="true">
            <img src="assets/sng-ajans-logo.jpg" alt="" />
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Ana menü">
          <a href="#etkinlikler">Etkinlikler</a>
          <a href="#program">Program</a>
          <a href="#biletler">Biletler</a>
          <a href="#kroki">Kroki</a>
        </nav>
        <a className="header-cta" href={generalWhatsappUrl} target="_blank" rel="noreferrer">
          WhatsApp’tan Al
        </a>
        <MobileMenu />
      </header>

      <section className="hero" id="top" aria-label="Poizi ve PAU konserleri, 1 ve 2 Eylül 2026">
        <HeroShowcase />
      </section>

      <section className="event-section" id="etkinlikler" aria-labelledby="events-title">
        <div className="section-heading dark-heading">
          <p>01 / ETKİNLİKLER</p>
          <h2 id="events-title">SAHNENİ SEÇ.</h2>
        </div>
        <div className="event-grid">
          {events.map((event) => (
            <article className={`event-card event-${event.tone}`} key={event.artist}>
              <picture className="event-poster">
                <source media="(max-width: 760px)" srcSet={event.mobileImage} />
                <img src={event.image} alt={`${event.artist} konser afişi`} />
              </picture>
              <div className="event-content">
                <div>
                  <p className="event-date">{event.date} · {event.day}</p>
                  <h3>{event.artist}</h3>
                </div>
                <a
                  href="#biletler"
                  aria-label={`${event.artist} konseri için bilet seçeneklerine git`}
                >
                  BİLET BİLGİSİ <span aria-hidden="true">↓</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="program-section" id="program" aria-labelledby="program-title">
        <div className="section-heading dark-heading">
          <p>02 / PROGRAM</p>
          <h2 id="program-title">GECE AKIŞI.</h2>
        </div>
        <div className="program-layout">
          <div className="program-intro">
            <p className="eyebrow">01—02 EYLÜL</p>
            <h3>GÜN BATIMINDAN<br />SON ŞARKIYA.</h3>
            <p>
              Her iki gece de aynı program akışıyla başlar. Ana sahnede ilk gece
              Poizi, ikinci gece PAU yer alır.
            </p>
          </div>
          <ol className="timeline">
            {program.map((item, index) => (
              <li key={item.time}>
                <span className="timeline-index">0{index + 1}</span>
                <time>{item.time}</time>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="tickets-section" id="biletler" aria-labelledby="tickets-title">
        <div className="section-heading light-heading">
          <div>
            <p>03 / BİLET SEÇENEKLERİ</p>
            <span className="availability"><i /> ERKEN FIRSAT FİYATLARI</span>
          </div>
          <h2 id="tickets-title">YERİNİ AYIR.</h2>
        </div>
        <div className="ticket-grid">
          {tickets.map((ticket) => (
            <a
              className={`ticket-card ticket-${ticket.accent}`}
              href={whatsappLink(
                `Merhaba, ${ticket.name} (${ticket.price}) için rezervasyon yapmak istiyorum.`,
              )}
              target="_blank"
              rel="noreferrer"
              aria-label={`${ticket.name}, ${ticket.price}: WhatsApp'tan rezervasyon yap`}
              key={ticket.name}
            >
              <div className="ticket-topline">
                <span>{ticket.group}</span>
                <span>{ticket.detail}</span>
              </div>
              <h3>{ticket.name}</h3>
              <p className="ticket-price">{ticket.price}</p>
              <p className="ticket-perks">{ticket.perks}</p>
              <span className="ticket-card-cta">
                WhatsApp’tan ayır <span aria-hidden="true">↗</span>
              </span>
            </a>
          ))}
        </div>
        <p className="price-note">
          Loca ve bistro fiyatları belirtilen kişi sayısının toplam grup fiyatıdır.
          Güncel müsaitlik WhatsApp üzerinden teyit edilir.
        </p>
      </section>

      <section className="plan-section" id="kroki" aria-labelledby="plan-title">
        <div className="plan-copy">
          <p className="section-number">04 / ALAN KROKİSİ</p>
          <h2 id="plan-title">SAHNEYE<br />NE KADAR YAKIN?</h2>
          <p>
            Loca, Gold ve Silver Bistro, orta ayakta ve arka genel alanları
            krokiden inceleyebilirsiniz. Kırmızı işaretli alanlar kaynak krokide
            dolu veya satılmış olarak gösterilmektedir.
          </p>
          <a href="assets/yerlesim-krokisi.pdf" target="_blank" rel="noreferrer">
            Tam boy krokiyi aç <span aria-hidden="true">↗</span>
          </a>
        </div>
        <a
          className="plan-image"
          href="assets/yerlesim-krokisi.pdf"
          target="_blank"
          rel="noreferrer"
          aria-label="Etkinlik alanı krokisini tam boy aç"
        >
          <img src="assets/yerlesim-krokisi.png" alt="Etkinlik alanı yerleşim ve satış krokisi" />
          <span>GÖRSELİ BÜYÜT ↗</span>
        </a>
      </section>

      <section className="reservation-section" id="rezervasyon" aria-labelledby="reservation-title">
        <div className="reservation-main">
          <div className="reservation-brand">
            <img src="assets/sng-ajans-logo.jpg" alt="SNG Ajans logosu" />
            <div>
              <strong>SNG AJANS</strong>
              <span>RESMİ REZERVASYON KANALI</span>
            </div>
          </div>
          <p className="section-number">05 / REZERVASYON</p>
          <h2 id="reservation-title">BİLETİNİ<br />WHATSAPP’TAN AL.</h2>
          <p className="reservation-lead">
            Etkinliği ve bilet kategorisini yazın. Müsaitlik teyidi ve ödeme
            kontrolü sonrasında rezervasyonunuz onaylansın.
          </p>
          <a className="whatsapp-large" href={generalWhatsappUrl} target="_blank" rel="noreferrer">
            <span>
              <small>DESTEK &amp; REZERVASYON HATTI</small>
              0546 584 56 15
            </span>
            <b aria-hidden="true">↗</b>
          </a>
        </div>

        <details className="payment-card">
          <summary className="payment-card-toggle">
            <span>ÖDEME BİLGİLERİ</span>
            <span className="payment-card-toggle-side">
              HALKBANK <b aria-hidden="true">⌄</b>
            </span>
          </summary>
          <div className="payment-card-content">
            <div className="payment-card-head">
              <span>ÖDEME BİLGİLERİ</span>
              <span>HALKBANK</span>
            </div>
            <dl>
              <div>
                <dt>Alıcı</dt>
                <dd>Sami Özdemir</dd>
              </div>
              <div>
                <dt>IBAN</dt>
                <dd>TR13 0001 2001 6730 0009 1028 07</dd>
              </div>
            </dl>
            <p>
              Ödeme sonrasında dekontunuzu WhatsApp üzerinden iletin. Kontrolün
              ardından biletiniz onaylanarak rezervasyonunuz tamamlanır.
            </p>
          </div>
        </details>
      </section>

      <section className="info-strip" aria-label="Önemli bilgiler">
        <p><span>18+</span> 18 yaş altı misafirler yalnızca ebeveyn veya vasi refakatiyle giriş yapabilir.</p>
        <p><span>19:00</span> Kapı açılışı</p>
        <p><span>FETHİYE</span> Küçük Samanlı Beach Club</p>
      </section>

      <footer>
        <div className="footer-main">
          <div className="footer-intro">
            <a className="brand footer-brand" href="#top" aria-label="SNG Biletim">
              <span className="brand-mark">SNG</span>
              <span className="brand-copy">BİLETİM</span>
            </a>
            <p>Fethiye’de müzik, deniz ve unutulmaz geceler.</p>
          </div>

          <div className="footer-block footer-about" id="hakkimizda">
            <span className="footer-label">HAKKIMIZDA</span>
            <p>
              SNG Biletim, Fethiye’nin özel konser ve eğlence etkinliklerini
              hızlı, kolay ve doğrudan rezervasyon deneyimiyle buluşturur.
            </p>
          </div>

          <address className="footer-block" id="adres">
            <span className="footer-label">LOKASYON &amp; ADRES</span>
            <strong>Küçük Samanlı Beach Club</strong>
            <p>Fethiye / Muğla</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=K%C3%BC%C3%A7%C3%BCk+Samanl%C4%B1+Beach+Club+Fethiye"
              target="_blank"
              rel="noreferrer"
            >
              Haritada aç <span aria-hidden="true">↗</span>
            </a>
          </address>

          <div className="footer-block footer-support">
            <span className="footer-label">WHATSAPP DESTEK</span>
            <p>Bilet, müsaitlik ve rezervasyon sorularınız için bize yazın.</p>
            <a href={generalWhatsappUrl} target="_blank" rel="noreferrer">
              <strong>0546 584 56 15</strong>
              <span>Hemen destek al ↗</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 SNG Biletim</span>
        </div>
      </footer>

    </main>
  );
}

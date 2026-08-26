import HeroShowcase from './HeroShowcase';
import MobileMenu from './MobileMenu';
import TicketPurchase from './TicketPurchase';
import TransportAnnouncement from './TransportAnnouncement';

const whatsappNumber = '905301802390';

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
    image: 'assets/poizi-portre.jpg',
    mobileImage: 'assets/poizi-portre.jpg',
    tone: 'gold',
  },
  {
    artist: 'PAU',
    date: '02 EYLÜL',
    day: 'ÇARŞAMBA',
    image: 'assets/pau-portre.png',
    mobileImage: 'assets/pau-portre.png',
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
    capacity: 6,
    priceMode: 'package',
    unitPrice: 70000,
  },
  {
    group: 'LOCA · 6 KİŞİ',
    name: 'LOCA',
    detail: 'L1 / L6',
    price: '50.000 TL',
    perks: '2 adet 70’lik içki · Meze tabağı · Meyve tabağı',
    accent: 'loca',
    capacity: 6,
    priceMode: 'package',
    unitPrice: 50000,
  },
  {
    group: 'BİSTRO · 3 KİŞİ',
    name: 'BISTRO GOLD',
    detail: 'Sahne önü',
    price: '25.000 TL',
    perks: '1 adet 70 cl içki · Çerez tabağı',
    accent: 'bistro-gold',
    capacity: 3,
    priceMode: 'package',
    unitPrice: 25000,
  },
  {
    group: 'BİSTRO · 3 KİŞİ',
    name: 'BISTRO SILVER',
    detail: 'Bistro alanı',
    price: '15.000 TL',
    perks: '1 adet 70 cl içki · Çerez tabağı',
    accent: 'bistro-silver',
    capacity: 3,
    priceMode: 'package',
    unitPrice: 15000,
  },
  {
    group: 'TEK KİŞİLİK',
    name: 'ORTA AYAKTA',
    detail: 'Orta bölüm',
    price: '1.350 TL',
    perks: 'Sahneye yakın ayakta izleme alanı',
    accent: 'middle',
    capacity: 10,
    priceMode: 'per-person',
    unitPrice: 1350,
  },
  {
    group: 'TEK KİŞİLİK',
    name: 'AYAKTA ARKA',
    detail: 'Genel alan',
    price: '1.125 TL',
    perks: 'Ayakta arka genel izleme alanı',
    accent: 'rear',
    capacity: 10,
    priceMode: 'per-person',
    unitPrice: 1125,
  },
] as const;

const program = [
  { time: '19:00', title: 'Kapı Açılışı', note: 'Küçük Samanlı Beach Club' },
  { time: '20:00—21:30', title: 'Ön Sahne DJ Performansı', note: 'DJ Alperen' },
  { time: '21:30—23:00', title: 'Ana Sahne', note: '01 Eylül Poizi · 02 Eylül PAU' },
  { time: '23:00—', title: 'İnteraktif Sahne Etkinlikleri', note: 'Gece devam ediyor' },
] as const;

const generalWarnings = [
  {
    icon: '🔞',
    text: '18 yaş altı misafirler ebeveynleriyle birlikte konsere katılabilir.',
  },
  {
    icon: '🔄',
    text: 'Satın alınan biletlerde iade ve değişiklik yapılamaz.',
  },
  {
    icon: '🕐',
    text: 'Konser alanına giriş ve etkinlik saatlerinde oluşabilecek yoğunluklara karşı erken gelmeniz tavsiye edilir.',
  },
  {
    icon: '🧒',
    text: 'Çocukların ve gençlerin etkinlik süresince ebeveynlerinin sorumluluğunda olduğunu hatırlatırız.',
  },
  {
    icon: '📸',
    text: 'Etkinlik alanında fotoğraf ve video çekimi yapılabilir. Etkinliğe katılan misafirler bu çekimlerde yer alabileceklerini kabul etmiş sayılır.',
  },
  {
    icon: '⚠️',
    text: 'Organizasyon güvenliği ve etkinlik düzeni gereği, kurallara uymayan kişiler alandan çıkarılabilir.',
  },
  {
    icon: '🎤',
    text: 'Organizasyon programında teknik veya operasyonel nedenlerle değişiklik yapılabilir.',
  },
  {
    icon: '📍',
    text: 'Konser alanında görevli personelin yönlendirmelerine uyulması zorunludur.',
  },
] as const;

export default function Home() {
  return (
    <main>
      <TransportAnnouncement />

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
          <p>ETKİNLİKLER</p>
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
          <p>PROGRAM</p>
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
            <p>BİLET SEÇENEKLERİ</p>
            <span className="availability"><i /> ERKEN FIRSAT FİYATLARI</span>
          </div>
          <h2 id="tickets-title">YERİNİ AYIR.</h2>
        </div>
        <div className="ticket-grid">
          {tickets.map((ticket) => (
            <article
              className={`ticket-card ticket-${ticket.accent}`}
              key={ticket.name}
            >
              <div className="ticket-topline">
                <span>{ticket.group}</span>
                <span>{ticket.detail}</span>
              </div>
              <h3>{ticket.name}</h3>
              <p className="ticket-price">{ticket.price}</p>
              <p className="ticket-perks">{ticket.perks}</p>
              <TicketPurchase
                artistOptions={events}
                enableQuantity={ticket.priceMode === 'per-person'}
                maxPeople={ticket.capacity}
                priceMode={ticket.priceMode}
                ticketName={ticket.name}
                ticketPrice={ticket.price}
                unitPrice={ticket.unitPrice}
              />
            </article>
          ))}
        </div>
        <p className="price-note">
          Loca ve bistro fiyatları belirtilen kişi sayısının toplam grup fiyatıdır.
          Güncel müsaitlik WhatsApp üzerinden teyit edilir.{' '}
          <a href="#genel-uyarilar">Bilet almadan önce genel uyarıları inceleyiniz.</a>
        </p>
      </section>

      <section className="plan-section" id="kroki" aria-labelledby="plan-title">
        <div className="plan-copy">
          <p className="section-number">ALAN KROKİSİ</p>
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
          <h2 className="reservation-heading" id="reservation-title">REZERVASYON</h2>
          <h3 className="reservation-action-title">BİLETİNİ<br />WHATSAPP’TAN AL.</h3>
          <p className="reservation-lead">
            Etkinliği ve bilet kategorisini yazın. Müsaitlik teyidi ve ödeme
            kontrolü sonrasında rezervasyonunuz onaylansın.
          </p>
          <a className="whatsapp-large" href={generalWhatsappUrl} target="_blank" rel="noreferrer">
            <span>
              <small>DESTEK &amp; REZERVASYON HATTI</small>
              0530 180 23 90
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

      <section
        className="general-warnings-section"
        id="genel-uyarilar"
        aria-labelledby="general-warnings-title"
      >
        <div className="general-warnings-heading">
          <p className="section-number">ETKİNLİK BİLGİLERİ</p>
          <h2 id="general-warnings-title">GENEL<br />UYARILAR.</h2>
          <p>
            Güvenli ve keyifli bir etkinlik deneyimi için lütfen konser alanı
            kurallarını dikkate alınız.
          </p>
        </div>

        <details className="general-warnings-details">
          <summary className="general-warnings-toggle">
            <span>GENEL UYARILARI GÖR</span>
            <span className="general-warnings-toggle-side">
              AÇ / KAPAT <b aria-hidden="true">⌄</b>
            </span>
          </summary>

          <div className="general-warnings-content">
            <ul className="general-warnings-list">
              <li className="general-warnings-safety">
                <span aria-hidden="true">⚠️</span>
                <div>
                  <h3>GÜVENLİK UYARISI</h3>
                  <p>Etkinlik girişinde güvenlik araması yapılacaktır.</p>
                  <p>
                    Kesici, delici ve etkinlik alanına alınması yasak olan hiçbir
                    malzeme alana sokulmayacaktır.
                  </p>
                  <p>
                    Lütfen girişte güvenlik kontrollerine yardımcı olmanızı ve
                    yasaklı malzemelerle gelmemenizi rica ederiz.
                  </p>
                  <strong>🎫 Güvenli ve keyifli bir etkinlik için kurallara uyalım.</strong>
                </div>
              </li>
              {generalWarnings.map((warning) => (
                <li key={warning.text}>
                  <span aria-hidden="true">{warning.icon}</span>
                  <p>{warning.text}</p>
                </li>
              ))}
            </ul>
            <p className="general-warnings-closing">
              <span aria-hidden="true">❤️</span>
              Eğlencenin, müziğin ve güvenliğin ön planda olduğu keyifli bir gece
              geçirmenizi dileriz.
            </p>
          </div>
        </details>
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
              <strong>0530 180 23 90</strong>
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

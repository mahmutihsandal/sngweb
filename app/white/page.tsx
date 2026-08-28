import type { Metadata } from 'next';
import Link from 'next/link';
import PlanCompass from '../PlanCompass';
import styles from './white.module.css';

const whatsappNumber = '905301802390';
const whatsappLink = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const generalWhatsapp = whatsappLink(
  'Merhaba, SNG etkinlikleri için rezervasyon yapmak istiyorum.',
);

export const metadata: Metadata = {
  title: 'Beyaz Tema | SNG Biletim',
  description: 'SNG Biletim için beyaz temalı tasarım alternatifi.',
};

const events = [
  {
    artist: 'POIZI',
    date: '1 Eylül 2026, Salı',
    day: '1 EYLÜL',
    image: '/assets/poizi-yatay.jpg',
  },
  {
    artist: 'PAU',
    date: '2 Eylül 2026, Çarşamba',
    day: '2 EYLÜL',
    image: '/assets/pau-yatay.jpg',
  },
] as const;

const tickets = [
  { name: 'VIP Loca', detail: '6 kişi · L7/L14', price: '70.000 TL' },
  { name: 'Loca', detail: '6 kişi · L1/L6', price: '50.000 TL' },
  { name: 'Bistro Gold', detail: '3 kişi · Sahne önü', price: '25.000 TL' },
  { name: 'Bistro Silver', detail: '3 kişi · Bistro alanı', price: '15.000 TL' },
  { name: 'Orta Ayakta', detail: 'Tek kişi · Orta bölüm', price: '1.350 TL' },
  { name: 'Ayakta Arka', detail: 'Tek kişi · Genel alan', price: '1.125 TL' },
] as const;

const program = [
  ['19:00', 'Kapı Açılışı'],
  ['20:00—21:30', 'DJ Alperen'],
  ['21:30—23:00', 'Poizi / PAU Ana Sahne'],
  ['23:00—', 'İnteraktif Sahne Etkinlikleri'],
] as const;

export default function WhiteTheme() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href="/white" aria-label="SNG Biletim beyaz tema">
          <strong>SNG</strong>
          <span>BİLETİM</span>
        </a>
        <nav aria-label="Beyaz tema menüsü">
          <a href="#etkinlikler">Etkinlikler</a>
          <a href="#biletler">Biletler</a>
          <a href="#kroki">Masa Planı</a>
          <a href="#iletisim">İletişim</a>
        </nav>
        <div className={styles.headerActions}>
          <Link className={styles.designLink} href="/">Tasarım A</Link>
          <Link className={styles.designLink} href="/modern">Tasarım B</Link>
          <a className={styles.whatsappTop} href={generalWhatsapp} target="_blank" rel="noreferrer">
            <span>◉</span> Rezervasyon & İletişim
          </a>
        </div>
      </header>

      <div className={styles.content}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>EŞSİZ BİR DENEYİM</p>
            <h1>Küçük Samanlı<br /><span>Beach Club</span></h1>
            <p className={styles.heroText}>
              Denizin, müziğin ve eğlencenin buluştuğu benzersiz bir atmosfer
              sizi bekliyor.
            </p>
            <div className={styles.trustRow}>
              <div><b>✓</b><p><strong>Güvenli</strong><span>Rezervasyon</span></p></div>
              <div><b>⚡</b><p><strong>Anında</strong><span>Onay</span></p></div>
              <div><b>◉</b><p><strong>WhatsApp</strong><span>Destek</span></p></div>
            </div>
            <a className={styles.heroCta} href="#etkinlikler">
              Etkinlikleri Keşfet <span>→</span>
            </a>
          </div>
          <div className={styles.heroDots} aria-hidden="true">
            <i /><i /><i /><i />
          </div>
        </section>

        <section className={styles.events} id="etkinlikler" aria-labelledby="white-events-title">
          <div className={styles.sectionTitle}>
            <h2 id="white-events-title">Yaklaşan Etkinlikler</h2>
            <a href="#biletler">Tüm biletleri gör <span>›</span></a>
          </div>
          <div className={styles.eventGrid}>
            {events.map((event) => (
              <article className={styles.eventCard} key={event.artist}>
                <img src={event.image} alt={`${event.artist} konser afişi`} />
                <div className={styles.eventShade} />
                <span className={styles.datePill}>{event.day}</span>
                <div className={styles.eventInfo}>
                  <p>{event.date}</p>
                  <h3>{event.artist}</h3>
                  <span className={styles.time}>◷ 19:00</span>
                  <a
                    href={whatsappLink(
                      `Merhaba, ${event.artist} konseri için bilet almak istiyorum.`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Bilet Seç <span>→</span>
                  </a>
                </div>
              </article>
            ))}
            <aside className={styles.serviceCard} aria-label="Rezervasyon avantajları">
              <div><b>✓</b><p><strong>Güvenli Rezervasyon</strong><span>Bilgileriniz özenle korunur.</span></p></div>
              <div><b>⚡</b><p><strong>Hızlı Onay</strong><span>Müsaitlik anında teyit edilir.</span></p></div>
              <div><b>◉</b><p><strong>WhatsApp Destek</strong><span>Tüm sorularınız için bize yazın.</span></p></div>
            </aside>
          </div>
        </section>

        <section className={styles.perks} aria-label="Etkinlik özellikleri">
          <div><b>♫</b><p><strong>Canlı Müzik</strong><span>İki özel performans</span></p></div>
          <div><b>♢</b><p><strong>Loca & Bistro</strong><span>Grubuna özel alan</span></p></div>
          <div><b>☀</b><p><strong>Deniz & Plaj</strong><span>Eşsiz Fethiye manzarası</span></p></div>
          <div><b>✓</b><p><strong>Hızlı Onay</strong><span>WhatsApp rezervasyonu</span></p></div>
        </section>

        <section className={styles.ticketSection} id="biletler" aria-labelledby="white-tickets-title">
          <div className={styles.sectionTitle}>
            <div>
              <span className={styles.miniLabel}>BİLET SEÇENEKLERİ</span>
              <h2 id="white-tickets-title">Geceni nasıl yaşamak istersin?</h2>
            </div>
            <p>Erken fırsat fiyatları · Güncel müsaitlik WhatsApp üzerinden teyit edilir.</p>
          </div>
          <div className={styles.ticketGrid}>
            {tickets.map((ticket) => (
              <article key={ticket.name}>
                <div><span>{ticket.detail}</span><b>↗</b></div>
                <h3>{ticket.name}</h3>
                <strong>{ticket.price}</strong>
                <a
                  href={whatsappLink(
                    `Merhaba, ${ticket.name} (${ticket.price}) için rezervasyon yapmak istiyorum.`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp’tan ayır <span>→</span>
                </a>
              </article>
            ))}
          </div>
          <p className={styles.included}>
            Loca fiyatlarına 2 adet 70’lik içki, meze ve meyve tabağı; bistro
            fiyatlarına 1 adet 70 cl içki ve çerez tabağı dahildir.
          </p>
        </section>

        <section className={styles.planProgram} id="kroki" aria-labelledby="white-plan-title">
          <div className={styles.planCard}>
            <div className={styles.cardHead}>
              <div><span className={styles.miniLabel}>MASA PLANI</span><h2 id="white-plan-title">Yerini önceden gör.</h2></div>
              <a href="/assets/yerlesim-krokisi.pdf" target="_blank" rel="noreferrer">Tam boy aç ↗</a>
            </div>
            <a className={styles.planImage} href="/assets/yerlesim-krokisi.pdf" target="_blank" rel="noreferrer">
              <img src="/assets/yerlesim-krokisi.png" alt="Etkinlik alanı yerleşim krokisi" />
              <PlanCompass />
            </a>
          </div>
          <div className={styles.programCard}>
            <span className={styles.miniLabel}>GECE AKIŞI</span>
            <h2>Program</h2>
            <ol>
              {program.map(([time, name], index) => (
                <li key={time}>
                  <span>0{index + 1}</span>
                  <time>{time}</time>
                  <strong>{name}</strong>
                </li>
              ))}
            </ol>
            <p>01 Eylül ana sahne Poizi · 02 Eylül ana sahne PAU</p>
          </div>
        </section>

        <section className={styles.booking} id="iletisim" aria-labelledby="white-booking-title">
          <div className={styles.bookingCopy}>
            <span className={styles.miniLabel}>REZERVASYON & İLETİŞİM</span>
            <h2 id="white-booking-title">Biletin bir<br />mesaj uzağında.</h2>
            <p>
              Etkinliği ve bilet kategorisini yazın. Müsaitlik ve ödeme kontrolü
              sonrasında rezervasyonunuz onaylansın.
            </p>
            <a href={generalWhatsapp} target="_blank" rel="noreferrer">
              <small>DESTEK &amp; REZERVASYON HATTI</small>
              <strong>0530 180 23 90</strong>
              <span>↗</span>
            </a>
          </div>
          <div className={styles.bankCard}>
            <div><span>ÖDEME BİLGİLERİ</span><span>HALKBANK</span></div>
            <dl>
              <div><dt>Alıcı</dt><dd>Sami Özdemir</dd></div>
              <div><dt>IBAN</dt><dd>TR13 0001 2001 6730 0009 1028 07</dd></div>
            </dl>
            <p>Ödeme sonrasında dekontunuzu WhatsApp üzerinden iletin.</p>
          </div>
        </section>

        <div className={styles.warning}>
          <strong>18+</strong>
          <p>18 yaş altı misafirler yalnızca ebeveyn veya vasi refakatiyle giriş yapabilir.</p>
          <span>Küçük Samanlı Beach Club · Fethiye</span>
        </div>

        <footer className={styles.footer} id="hakkimizda">
          <div className={styles.footerMain}>
            <div className={styles.footerIntro}>
              <a className={styles.brand} href="/white"><strong>SNG</strong><span>BİLETİM</span></a>
              <p>Fethiye’de müzik, deniz ve unutulmaz geceler.</p>
            </div>
            <div className={styles.footerBlock}>
              <span className={styles.footerLabel}>HAKKIMIZDA</span>
              <p>
                SNG Biletim, Fethiye’nin özel konser ve eğlence etkinliklerini
                hızlı, kolay ve doğrudan rezervasyon deneyimiyle buluşturur.
              </p>
            </div>
            <address className={styles.footerBlock}>
              <span className={styles.footerLabel}>LOKASYON &amp; ADRES</span>
              <strong>Küçük Samanlı Beach Club</strong>
              <p>Fethiye / Muğla</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=K%C3%BC%C3%A7%C3%BCk+Samanl%C4%B1+Beach+Club+Fethiye"
                target="_blank"
                rel="noreferrer"
              >Haritada aç ↗</a>
            </address>
            <div className={`${styles.footerBlock} ${styles.footerSupport}`}>
              <span className={styles.footerLabel}>WHATSAPP DESTEK</span>
              <p>Bilet, müsaitlik ve rezervasyon sorularınız için bize yazın.</p>
              <a href={generalWhatsapp} target="_blank" rel="noreferrer">
                <strong>0530 180 23 90</strong>
                <span>Hemen destek al ↗</span>
              </a>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <span>© 2026 SNG Biletim</span>
            <div><Link href="/">Tasarım A</Link><Link href="/modern">Tasarım B</Link></div>
          </div>
        </footer>
      </div>

    </main>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './modern.module.css';

const whatsappNumber = '905465845615';
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  'Merhaba, SNG etkinlikleri için bilet almak istiyorum.',
)}`;

const ticketOptions = [
  { name: 'VIP Loca', detail: '6 kişilik · L7/L14', price: '70.000 TL' },
  { name: 'Loca', detail: '6 kişilik · L1/L6', price: '50.000 TL' },
  { name: 'Bistro Gold', detail: '3 kişilik · Sahne önü', price: '25.000 TL' },
  { name: 'Bistro Silver', detail: '3 kişilik · Bistro alanı', price: '15.000 TL' },
  { name: 'Orta Ayakta', detail: 'Tek kişilik · Orta bölüm', price: '1.350 TL' },
  { name: 'Ayakta Arka', detail: 'Tek kişilik · Genel alan', price: '1.125 TL' },
] as const;

const program = [
  ['19:00', 'Kapı Açılışı', 'Küçük Samanlı Beach Club'],
  ['20:00—21:30', 'DJ Performansı', 'DJ Alperen'],
  ['21:30—23:00', 'Ana Sahne', '01 Eylül Poizi · 02 Eylül PAU'],
  ['23:00—', 'İnteraktif Sahne', 'Gece devam ediyor'],
] as const;

export const metadata: Metadata = {
  title: 'Modern Beach Club | SNG Biletim',
  description:
    'SNG Biletim için modern beach club tasarım alternatifi.',
};

export default function ModernBeachClub() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href="/modern" aria-label="SNG Biletim modern tasarım">
          <strong>SNG</strong>
          <span>Biletim</span>
        </a>
        <nav aria-label="Modern tasarım menüsü">
          <a href="#geceler">Geceler</a>
          <a href="#biletler">Biletler</a>
          <a href="#kroki">Kroki</a>
        </nav>
        <div className={styles.headerActions}>
          <Link className={styles.compareLink} href="/">Tasarım A</Link>
          <Link className={styles.compareLink} href="/white">Tasarım C</Link>
          <a className={styles.headerCta} href={whatsappUrl} target="_blank" rel="noreferrer">
            Bilet Al
          </a>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>KÜÇÜK SAMANLI · FETHİYE</p>
          <h1>
            GÜN BATIMI.
            <span>SAHNE IŞIKLARI.</span>
          </h1>
          <p className={styles.lead}>
            Denizin kıyısında, iki sanatçıyla iki ayrı gece. Müziğe yaklaş,
            yerini WhatsApp’tan ayır.
          </p>
          <div className={styles.heroActions}>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              WhatsApp’tan bilet al <span>↗</span>
            </a>
            <a href="#geceler">Geceleri keşfet <span>↓</span></a>
          </div>
          <div className={styles.dateLine}>
            <span>01—02</span>
            <p>EYLÜL 2026<br />KAPI · 19:00</p>
          </div>
        </div>

        <div className={styles.posterStage} aria-label="Poizi ve PAU konserleri">
          <div className={styles.sun} aria-hidden="true" />
          <article className={styles.posterOne}>
            <img src="/assets/poizi-dikey.jpg" alt="Poizi konser afişi" />
            <p><span>01 EYLÜL</span> POIZI</p>
          </article>
          <article className={styles.posterTwo}>
            <img src="/assets/pau-dikey.jpg" alt="PAU konser afişi" />
            <p><span>02 EYLÜL</span> PAU</p>
          </article>
          <p className={styles.venueTag}>BEACH CLUB · LIVE MUSIC · FETHİYE</p>
        </div>
      </section>

      <section className={styles.nights} id="geceler" aria-labelledby="modern-nights-title">
        <div className={styles.sectionIntro}>
          <p>01 · İKİ GECE</p>
          <h2 id="modern-nights-title">AYNI KIYI.<br /><em>İKİ AYRI RİTİM.</em></h2>
          <p>
            Geceni seç, bilet kategorini belirle ve rezervasyonunu WhatsApp
            üzerinden tamamla.
          </p>
        </div>
        <div className={styles.nightList}>
          <article>
            <div className={styles.nightImage}>
              <img src="/assets/poizi-yatay.jpg" alt="Poizi konseri" />
              <span>01</span>
            </div>
            <div className={styles.nightInfo}>
              <p>01 EYLÜL · SALI</p>
              <h3>POIZI</h3>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  'Merhaba, Poizi konseri için bilet almak istiyorum.',
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                Bu geceye bilet al <span>↗</span>
              </a>
            </div>
          </article>
          <article>
            <div className={styles.nightImage}>
              <img src="/assets/pau-yatay.jpg" alt="PAU konseri" />
              <span>02</span>
            </div>
            <div className={styles.nightInfo}>
              <p>02 EYLÜL · ÇARŞAMBA</p>
              <h3>PAU</h3>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  'Merhaba, PAU konseri için bilet almak istiyorum.',
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                Bu geceye bilet al <span>↗</span>
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className={styles.tickets} id="biletler" aria-labelledby="modern-tickets-title">
        <div className={styles.ticketsHeading}>
          <div>
            <p>02 · BİLET SEÇENEKLERİ</p>
            <h2 id="modern-tickets-title">GECENİ<br /><em>NASIL YAŞAMAK İSTERSİN?</em></h2>
          </div>
          <p>
            Loca ve bistro fiyatları grup fiyatıdır. Güncel müsaitlik rezervasyon
            hattından teyit edilir.
          </p>
        </div>
        <div className={styles.ticketList}>
          {ticketOptions.map((ticket, index) => (
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                `Merhaba, ${ticket.name} (${ticket.price}) için rezervasyon yapmak istiyorum.`,
              )}`}
              target="_blank"
              rel="noreferrer"
              key={ticket.name}
            >
              <span className={styles.ticketIndex}>0{index + 1}</span>
              <div>
                <h3>{ticket.name}</h3>
                <p>{ticket.detail}</p>
              </div>
              <strong>{ticket.price}</strong>
              <span className={styles.ticketArrow}>↗</span>
            </a>
          ))}
        </div>
        <p className={styles.includedNote}>
          Localar: 2 adet 70’lik içki, meze ve meyve tabağı · Bistrolar: 1 adet
          70 cl içki ve çerez tabağı dahildir.
        </p>
      </section>

      <section className={styles.plan} id="kroki" aria-labelledby="modern-plan-title">
        <div className={styles.planFrame}>
          <a href="/assets/yerlesim-krokisi.pdf" target="_blank" rel="noreferrer">
            <img src="/assets/yerlesim-krokisi.png" alt="Etkinlik alanı yerleşim krokisi" />
            <span>TAM BOY AÇ ↗</span>
          </a>
        </div>
        <div className={styles.planCopy}>
          <p>03 · ALAN KROKİSİ</p>
          <h2 id="modern-plan-title">YERİNİ<br /><em>ÖNCEDEN GÖR.</em></h2>
          <p>
            Loca, Gold ve Silver Bistro, orta ayakta ve arka genel alanların
            sahneye konumunu inceleyin. Kırmızı işaretli bölümler kaynak krokide
            dolu veya satılmış alanları gösterir.
          </p>
          <a href="/assets/yerlesim-krokisi.pdf" target="_blank" rel="noreferrer">
            Yerleşim krokisini incele <span>↗</span>
          </a>
        </div>
      </section>

      <section className={styles.schedule} aria-labelledby="modern-program-title">
        <div className={styles.scheduleHead}>
          <p>04 · PROGRAM</p>
          <h2 id="modern-program-title">GÜN BATIMINDAN<br /><em>SON ŞARKIYA.</em></h2>
        </div>
        <ol>
          {program.map(([time, title, note], index) => (
            <li key={time}>
              <span>0{index + 1}</span>
              <time>{time}</time>
              <div><h3>{title}</h3><p>{note}</p></div>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.booking} aria-labelledby="modern-booking-title">
        <div className={styles.bookingCopy}>
          <p>05 · REZERVASYON</p>
          <h2 id="modern-booking-title">BİR MESAJ.<br /><em>YERİN HAZIR.</em></h2>
          <p>
            Etkinliği ve bilet kategorisini yazın. Ödeme dekontunun kontrolünden
            sonra rezervasyonunuz onaylansın.
          </p>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            <small>TEST REZERVASYON HATTI</small>
            <span>0546 584 56 15</span>
            <b>↗</b>
          </a>
        </div>
        <div className={styles.bankCard}>
          <div><span>ÖDEME BİLGİLERİ</span><span>HALKBANK</span></div>
          <dl>
            <div><dt>Alıcı</dt><dd>Sami Özdemir</dd></div>
            <div><dt>IBAN</dt><dd>TR13 0001 2001 6730 0009 1028 07</dd></div>
          </dl>
          <p>Ödeme sonrası dekontunuzu WhatsApp üzerinden iletmeniz yeterlidir.</p>
        </div>
      </section>

      <div className={styles.ageNote}>
        <span>18+</span>
        <p>18 yaş altı misafirler yalnızca ebeveyn veya vasi refakatiyle giriş yapabilir.</p>
        <p>Küçük Samanlı Beach Club · Fethiye</p>
      </div>

      <footer className={styles.footer} id="hakkimizda">
        <div className={styles.footerMain}>
          <div className={styles.footerIntro}>
            <a className={styles.brand} href="/modern"><strong>SNG</strong><span>Biletim</span></a>
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
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              <strong>0546 584 56 15</strong>
              <span>Hemen destek al ↗</span>
            </a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <span>© 2026 SNG Biletim</span>
          <div><Link href="/">Tasarım A</Link><Link href="/white">Tasarım C</Link></div>
        </div>
      </footer>

      <a className={styles.mobileBooking} href={whatsappUrl} target="_blank" rel="noreferrer">
        <span>WhatsApp’tan bilet al</span><span>↗</span>
      </a>
    </main>
  );
}

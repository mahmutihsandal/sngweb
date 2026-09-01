'use client';

import { useEffect, useRef } from 'react';

export default function TransportAnnouncement() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (dialog && !dialog.open) {
      dialog.showModal();
    }
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="announcement-dialog"
      aria-label="Kamuoyuna duyuru"
      onCancel={(event) => event.preventDefault()}
    >
      <img
        src="assets/kamuoyuna-duyuru.jpg"
        alt="Kamuoyuna duyuru: Orman yangınları nedeniyle planlanan etkinlik iptal edilmiştir. Bilet iade işlemleri, biletin satın alındığı platform üzerinden otomatik olarak başlatılacaktır."
      />
    </dialog>
  );
}

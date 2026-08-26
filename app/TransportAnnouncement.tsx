'use client';

import { useEffect, useRef, useState } from 'react';

export default function TransportAnnouncement() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (dialog && !dialog.open) {
      dialog.showModal();
    }
  }, []);

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  if (!isOpen) return null;

  return (
    <dialog
      ref={dialogRef}
      className="transport-dialog"
      aria-labelledby="transport-dialog-title"
      aria-describedby="transport-dialog-description"
      onClose={() => setIsOpen(false)}
      onClick={(event) => {
        if (event.target === event.currentTarget) closeDialog();
      }}
    >
      <div className="transport-dialog-card">
        <button
          className="transport-dialog-close"
          type="button"
          onClick={closeDialog}
          aria-label="Ulaşım duyurusunu kapat"
        >
          <span aria-hidden="true">×</span>
        </button>

        <div className="transport-dialog-heading">
          <span className="transport-dialog-icon" aria-hidden="true">🚌</span>
          <div>
            <p>ULAŞIM DUYURUSU</p>
            <h2 id="transport-dialog-title">EK OTOBÜS SEFERLERİ</h2>
          </div>
        </div>

        <p id="transport-dialog-description" className="transport-dialog-lead">
          Konser yoğunluğu nedeniyle ulaşımda kolaylık sağlamak amacıyla ek
          otobüs seferleri düzenlenecektir.
        </p>

        <div className="transport-dialog-details">
          <div>
            <span>GÜZERGÂH</span>
            <strong>Merkez Cami Durağı <b aria-hidden="true">→</b> K. Samanlı Beach</strong>
          </div>
          <div>
            <span>SEFER SAATLERİ</span>
            <strong>18.00 – 23.30</strong>
          </div>
        </div>

        <p className="transport-dialog-note">
          Konser alanına ulaşımınızı rahat ve güvenli şekilde sağlayabilirsiniz. 🎶
        </p>
      </div>
    </dialog>
  );
}

import { createPortal } from 'react-dom';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, bigURL }) {
  useEffect(() => {
    window.removeEventListener('keydown', keyDownHandler);
  });
  const keyDownHandler = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const overlayClickHandler = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className="Overlay" onClick={overlayClickHandler}>
      <div className="Modal">
        <img src={bigURL} alt="" />
      </div>
    </div>,
    modalRoot,
  );
}

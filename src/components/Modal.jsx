export default function Modal({ title, children, onClose }) {
  return <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
    <section className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onMouseDown={event => event.stopPropagation()}>
      <button className="modal-close" onClick={onClose} aria-label="Lukk">×</button>
      <span className="modal-flower">✿</span><h2 id="modal-title">{title}</h2>{children}
    </section>
  </div>
}

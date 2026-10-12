import Icon from './Icon.jsx'

export default function ProductCard({ product, onAdd, onDetails }) {
  return <article className="product-card">
    <button type="button" className={`product-image product-image-trigger ${product.tone}`} aria-label={`Se detaljer om ${product.name}`} onClick={() => onDetails(product)}>
      <img className="product-image-photo" src={product.image} alt={product.name} />
      <span className="product-tag">{product.tag}</span>
      <span className="image-ai-label">KI-generert bilde</span>
    </button>
    <div className="product-info"><div><span className="product-category">{product.category}</span><button className="product-title-button" onClick={() => onDetails(product)}><h3>{product.name}</h3></button></div><span className="price">{product.price} kr</span></div>
    <button className="add-button" onClick={() => onAdd(product)}><Icon name="cart" size={16} /><span>Legg i handlekurv</span><Icon name="arrow" size={17} /></button>
  </article>
}

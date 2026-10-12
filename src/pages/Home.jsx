import Icon from '../components/Icon.jsx'
import ProductCard from '../components/ProductCard.jsx'

export default function Home({ products, onNavigate, onAdd, onDetails }) {
  return <>
    <section className="hero">
      <div className="hero-copy"><span className="eyebrow"><i /> Et lite gartneri med stort hjerte</span><h1>La hverdagen<br />blomstre <em>litt mer.</em></h1><p>Blomster, planter og kos til hverdagen.</p><button className="button button-dark" onClick={() => onNavigate('products')}>Utforsk butikken <Icon name="arrow" size={18} /></button><div className="hero-caption"><span className="caption-line" /> Plukket med kjærlighet i Ski</div></div>
      <div className="hero-visual"><div className="hero-photo"><span className="image-ai-label">KI-generert bilde</span></div><div className="hero-sticker"><span>✿</span><small>Små gleder,<br />dyrket lokalt</small></div><div className="hero-vertical">SOLSKINN · GARTNERI & BLOMSTERGÅRD</div></div>
      <div className="hero-index">01 <span>/</span> 03</div>
    </section>
    <section className="intro section-wrap"><div className="intro-mark">✿</div><div><span className="eyebrow">Velkommen til vårt lille univers</span><h2>Det spirer noe<br /><em>fint her.</em></h2></div><p>Hos oss finner du sesongens fineste blomster, grønne favoritter og små ting som gjør hjemmet litt varmere. Vi tror på de små gledene – og på å ta vare på jorda vi deler.</p><button className="text-link" onClick={() => onNavigate('about')}>Litt om oss <Icon name="arrow" size={17} /></button></section>
    <section className="featured section-wrap"><div className="section-heading"><div><span className="eyebrow">Plukket ut til deg</span><h2>Små <em>favoritter</em></h2></div><button className="text-link" onClick={() => onNavigate('products')}>Se alle produktene <Icon name="arrow" size={17} /></button></div><div className="product-grid">{products.slice(0, 3).map(product => <ProductCard key={product.id} product={product} onAdd={onAdd} onDetails={onDetails} />)}</div></section>
    <section className="quote-banner"><span>✿</span><p>Et lite stykke solskinn,<br /><em>rett hjem til deg.</em></p><span>✿</span></section>
  </>
}

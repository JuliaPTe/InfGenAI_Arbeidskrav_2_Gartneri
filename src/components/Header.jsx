import Icon from './Icon.jsx'

const links = [['home', 'Hjem'], ['products', 'Produkter'], ['about', 'Om oss'], ['contact', 'Kontakt']]

export default function Header({ page, onNavigate, itemCount }) {
  return <header className="site-header">
    <button className="brand" onClick={() => onNavigate('home')} aria-label="Solskinn Gartneri – hjem">
      <span className="brand-mark">s<span>✿</span></span>
      <span className="brand-name">Solskinn <small>Gartneri & Blomstergård</small></span>
    </button>
    <nav className="main-nav" aria-label="Hovedmeny">
      {links.map(([id, label]) => <button key={id} className={page === id ? 'nav-link active' : 'nav-link'} onClick={() => onNavigate(id)}>{label}</button>)}
    </nav>
    <button className="cart-button" onClick={() => onNavigate('cart')} aria-label={`Handlekurv, ${itemCount} varer`}>
      <Icon name="cart" /><span className="cart-label">Handlekurv</span><span className="cart-count">{itemCount}</span>
    </button>
  </header>
}

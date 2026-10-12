import { useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Modal from './components/Modal.jsx'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Cart from './pages/Cart.jsx'
import { products } from './data/products.js'

export default function App() {
  const [page, setPage] = useState('home')
  const [cart, setCart] = useState([])
  const [showCheckout, setShowCheckout] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  function navigate(nextPage) { setPage(nextPage); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  function addToCart(product) { setCart(current => { const existing = current.find(item => item.id === product.id); return existing ? current.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) : [...current, { ...product, quantity: 1 }] }) }
  function changeQuantity(id, amount) { setCart(current => current.map(item => item.id === id ? { ...item, quantity: item.quantity + amount } : item).filter(item => item.quantity > 0)) }
  function removeFromCart(id) { setCart(current => current.filter(item => item.id !== id)) }
  return <div className="app-shell"><a className="ai-project-badge" href="#site-footer">Studentprosjekt: KI-generert nettside</a><Header page={page} onNavigate={navigate} itemCount={itemCount}/><main className="main-content">{page === 'home' && <Home products={products} onNavigate={navigate} onAdd={addToCart} onDetails={setSelectedProduct}/ >}{page === 'products' && <Products products={products} onAdd={addToCart} onDetails={setSelectedProduct}/ >}{page === 'about' && <About/>}{page === 'contact' && <Contact/>}{page === 'cart' && <Cart cart={cart} onQuantity={changeQuantity} onRemove={removeFromCart} onClear={() => setCart([])} onCheckout={() => setShowCheckout(true)} onNavigate={navigate}/>}</main><Footer onNavigate={navigate}/>{showCheckout && <Modal title="Så hyggelig!" onClose={() => setShowCheckout(false)}><p className="modal-copy">Handlekurven din er klar for kassen. Dette er en liten demo, så ingen bestilling blir sendt – men vi håper du fant noe som spirer glede. 🌷</p><button className="button button-dark" onClick={() => { setShowCheckout(false); setCart([]); navigate('home') }}>Tilbake til butikken</button></Modal>}{selectedProduct && <Modal title={selectedProduct.name} onClose={() => setSelectedProduct(null)}><div className={`detail-modal-image-wrap ${selectedProduct.tone}`}><img className="detail-modal-image" src={selectedProduct.image} alt={selectedProduct.name} /><span className="image-ai-label">KI-generert bilde</span></div><span className="product-category detail-category">{selectedProduct.category}</span><p className="modal-copy detail-description">{selectedProduct.description}</p><div className="detail-modal-footer"><strong>{selectedProduct.price} kr</strong><button className="button button-dark" onClick={() => { addToCart(selectedProduct); setSelectedProduct(null) }}>Legg i handlekurv</button></div></Modal>}</div>
}

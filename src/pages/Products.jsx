import { useState } from 'react'
import ProductCard from '../components/ProductCard.jsx'
import { categories } from '../data/products.js'

export default function Products({ products, onAdd, onDetails }) {
  const [category, setCategory] = useState('Alle')
  const visible = category === 'Alle' ? products : products.filter(product => product.category === category)
  return <main className="page-shell"><section className="page-intro"><span className="eyebrow">Grønt og godt</span><h1>Blomster & <em>planter</em></h1><p>Små gleder, dyrket og valgt ut med omtanke.</p></section><div className="filters" aria-label="Filtrer produkter">{categories.map(item => <button key={item} onClick={() => setCategory(item)} className={category === item ? 'filter active' : 'filter'}>{item}</button>)}</div><div className="product-grid product-grid-all">{visible.map(product => <ProductCard key={product.id} product={product} onAdd={onAdd} onDetails={onDetails} />)}</div></main>
}

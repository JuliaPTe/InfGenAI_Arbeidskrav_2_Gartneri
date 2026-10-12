import Icon from './Icon.jsx'

export default function Footer({ onNavigate }) {
  return <footer className="site-footer" id="site-footer">
    <div className="footer-column footer-about"><div className="footer-brand"><span className="brand-mark">s<span>✿</span></span><div><strong>Solskinn Gartneri</strong></div></div><p>Blomster, planter og kos til hverdagen.</p><div className="footer-note"><Icon name="leaf" size={17} /> Dyrket og valgt ut med hensyn til miljøet.</div></div>
    <div className="footer-column"><h2>Snarveier</h2><button onClick={() => onNavigate('home')}>Hjem</button><button onClick={() => onNavigate('products')}>Produkter</button><button onClick={() => onNavigate('about')}>Om oss</button><button onClick={() => onNavigate('contact')}>Kontakt</button></div>
    <div className="footer-column footer-contact"><h2>Besøk & kontakt</h2><p>Gartneriveien 12, Ski</p><p>Man–fre 09–17 · Lør 10–15</p><a href="mailto:hei@solskinngartneri.no">hei@solskinngartneri.no</a><a href="tel:+4764871200">+47 64 87 12 00</a></div>
    <p className="footer-copyright">©2026 Denne nettsiden og alt innholdet er generert med KI i forbindelse med en skoleoppgave.</p>
  </footer>
}

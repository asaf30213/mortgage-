import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navLinks = [
  { label: 'שירותים', href: '#services' },
  { label: 'תהליך', href: '#process' },
  { label: 'לקוחות', href: '#testimonials' },
  { label: 'צור קשר', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeHash, setActiveHash] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onHashChange = () => setActiveHash(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        zIndex: 1000,
        padding: '0 24px',
        height: 72,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#ffffff',
        borderBottom: '1px solid var(--border)',
        boxShadow: scrolled ? '0 1px 8px rgba(0,0,0,0.06)' : 'none',
        transition: 'box-shadow 0.3s',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ fontFamily: "'Playfair Display', serif", color: 'var(--navy)', fontSize: '1.3rem', fontWeight: 700 }}>
          סמארט משכנתאות
        </span>
        <span style={{ color: 'var(--text2)', fontSize: '0.8rem', borderRight: '1px solid var(--border)', paddingRight: 12 }}>
          ייעוץ משכנתאות פרטי ואובייקטיבי
        </span>
      </div>

      {/* Desktop links */}
      <div className="nav-desktop-links" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setActiveHash(link.href)}
            style={{
              color: activeHash === link.href ? 'var(--navy)' : 'var(--text2)',
              fontSize: '0.95rem',
              fontWeight: activeHash === link.href ? 500 : 400,
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--navy)'}
            onMouseLeave={e => e.target.style.color = activeHash === link.href ? 'var(--navy)' : 'var(--text2)'}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          style={{
            background: 'var(--navy)',
            color: '#ffffff',
            padding: '8px 20px',
            borderRadius: 8,
            fontSize: '0.95rem',
            fontWeight: 500,
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.target.style.background = 'var(--slate)' }}
          onMouseLeave={e => { e.target.style.background = 'var(--navy)' }}
        >
          ייעוץ חינם ←
        </a>
      </div>

      {/* Hamburger button */}
      <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="תפריט">
        {menuOpen ? (
          <>
            <span style={{ transform: 'rotate(45deg) translate(5px, 5px)' }} />
            <span style={{ opacity: 0 }} />
            <span style={{ transform: 'rotate(-45deg) translate(5px, -5px)' }} />
          </>
        ) : (
          <>
            <span /><span /><span />
          </>
        )}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="nav-mobile-menu">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => { setActiveHash(link.href); setMenuOpen(false) }}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}>ייעוץ חינם ←</a>
        </div>
      )}
    </motion.nav>
  )
}

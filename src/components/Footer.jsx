export default function Footer() {
  return (
    <footer
      style={{
        padding: '48px 0 32px',
        background: '#111827',
      }}
    >
      <div
        className="container resp-footer-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: 40,
          alignItems: 'start',
        }}
      >
        {/* Right: Logo & info */}
        <div>
          <div style={{ fontFamily: "'Playfair Display', serif", color: '#ffffff', fontSize: '1.2rem', fontWeight: 700, marginBottom: 8 }}>
            סמארט משכנתאות
          </div>
          <div style={{ color: '#9ca3af', fontSize: '0.85rem', marginBottom: 16 }}>
            ייעוץ משכנתאות פרטי
          </div>
          <div style={{ color: '#9ca3af', fontSize: '0.85rem', lineHeight: 2 }}>
            רח׳ ויצמן 14, תל אביב
            <br />
            טל: 054-773-8891
            <br />
            info@smart-mashkanta.co.il
          </div>
        </div>

        {/* Center: Links */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ color: '#9ca3af', fontSize: '0.85rem', marginBottom: 16 }}>קישורים</div>
          {['שירותים', 'תהליך', 'אודות', 'צור קשר'].map((link, i) => (
            <a
              key={i}
              href={`#${['services', 'process', 'testimonials', 'contact'][i]}`}
              style={{
                display: 'block',
                color: '#9ca3af',
                fontSize: '0.9rem',
                marginBottom: 8,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = '#ffffff'}
              onMouseLeave={e => e.target.style.color = '#9ca3af'}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Left: Copyright */}
        <div style={{ textAlign: 'left' }}>
          <div style={{ color: '#9ca3af', fontSize: '0.8rem', lineHeight: 2 }}>
            © 2025 סמארט משכנתאות | כל הזכויות שמורות
            <br />
            רישיון יועץ משכנתאות מס׳ 58214
          </div>
        </div>
      </div>
    </footer>
  )
}

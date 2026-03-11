import { useState } from 'react'
import { motion } from 'framer-motion'

/* ── SVG Line Icons (stroke-only, 32x32) ── */

const CreditCardIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#1e3a5f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="7" width="26" height="18" rx="3" />
    <line x1="3" y1="13" x2="29" y2="13" />
    <line x1="8" y1="18" x2="16" y2="18" />
    <line x1="8" y1="21" x2="12" y2="21" />
  </svg>
)

const RefreshIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#1e3a5f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M26 16a10 10 0 01-17.07 7.07" />
    <path d="M6 16A10 10 0 0123.07 8.93" />
    <polyline points="26 6 26 12 20 12" />
    <polyline points="6 26 6 20 12 20" />
  </svg>
)

const HouseIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#1e3a5f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 16L16 5l11 11" />
    <path d="M8 14v12h16V14" />
    <rect x="13" y="20" width="6" height="6" />
  </svg>
)

const HeartsIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#1e3a5f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 10c-2-3-6-3-7 0s0 6 7 10c7-4 8-7 7-10s-5-3-7 0z" />
    <path d="M22 8c-1.5-2.2-4.5-2.2-5.2 0s0 4.5 5.2 7.5c5.2-3 6-5.2 5.2-7.5s-3.7-2.2-5.2 0z" />
  </svg>
)

const SearchDocIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#1e3a5f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="4" width="16" height="22" rx="2" />
    <line x1="10" y1="10" x2="18" y2="10" />
    <line x1="10" y1="14" x2="18" y2="14" />
    <line x1="10" y1="18" x2="14" y2="18" />
    <circle cx="23" cy="23" r="5" />
    <line x1="26.5" y1="26.5" x2="29" y2="29" />
  </svg>
)

const BuildingIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#1e3a5f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4L4 10h24L16 4z" />
    <line x1="8" y1="12" x2="8" y2="24" />
    <line x1="14" y1="12" x2="14" y2="24" />
    <line x1="18" y1="12" x2="18" y2="24" />
    <line x1="24" y1="12" x2="24" y2="24" />
    <rect x="4" y="24" width="24" height="3" rx="1" />
  </svg>
)

const services = [
  {
    Icon: CreditCardIcon,
    title: 'משכנתא לכל מטרה',
    text: 'מימון לשיפוץ, השקעה, עסקים — כנגד נכס קיים. ריביות הרבה יותר טובות מהלוואות רגילות.',
  },
  {
    Icon: RefreshIcon,
    title: 'מחזור משכנתא',
    text: 'יש לכם משכנתא קיימת? בדקו אם ניתן להוזיל אותה. ממוצע חיסכון במחזור: ₪52,000.',
  },
  {
    Icon: HouseIcon,
    title: 'משכנתא לרכישת דירה',
    text: 'ליווי מלא מהאישור העקרוני ועד החתימה הסופית. בניית תמהיל מותאם, מו״מ עם כל הבנקים.',
  },
  {
    Icon: HeartsIcon,
    title: 'משכנתא לזוגות צעירים',
    text: 'זכאויות, מחיר למשתכן, מענקים ממשלתיים — ניצור עבורכם את ההזדמנות הטובה ביותר.',
  },
  {
    Icon: SearchDocIcon,
    title: 'ייעוץ לפני רכישה',
    text: 'לפני שסוגרים על דירה — דעו מה תוכלו לקחת. אישור עקרוני מראש נותן לכם כוח בניהול משא ומתן.',
  },
  {
    Icon: BuildingIcon,
    title: 'משכנתא חוץ בנקאית',
    text: 'סורבתם על ידי הבנק? יש פתרונות. מתמחים במקרים מורכבים ומסורבי בנקים.',
  },
]

function ServiceCard({ service, delay }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#ffffff',
        border: '1px solid var(--border)',
        borderLeft: hovered ? '3px solid #059669' : '3px solid transparent',
        borderRadius: 8,
        padding: 32,
        boxShadow: hovered ? '0 12px 32px rgba(30,58,95,0.18)' : '0 4px 20px rgba(30,58,95,0.10)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.25s ease',
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: '50%',
          background: '#f0f4f8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 16,
        }}
      >
        <service.Icon />
      </div>
      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 700, marginBottom: 10, color: 'var(--navy)' }}>{service.title}</h3>
      <p style={{ color: 'var(--text2)', fontSize: '0.95rem', lineHeight: 1.7 }}>{service.text}</p>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: '100px 0',
        background: '#f5f7fa',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Dot pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(#94a3b8 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px',
          opacity: 0.6,
          zIndex: 0,
        }}
      />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          השירותים שלנו
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          פתרון מלא לכל מצב
        </motion.p>

        <div className="resp-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {services.map((s, i) => (
            <ServiceCard key={i} service={s} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import Calculator from './Calculator'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const stats = [
  { value: '₪87,000', label: 'חיסכון ממוצע' },
  { value: '15+', label: 'שנות ניסיון' },
  { value: '98%', label: 'לקוחות ממליצים' },
]

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: 72,
        background: 'var(--surface)',
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

      {/* Content */}
      <div
        className="container resp-hero-grid"
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'grid',
          gridTemplateColumns: '62fr 38fr',
          gap: 48,
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: 40,
          paddingBottom: 60,
          maxWidth: 1400,
        }}
      >
        {/* Right column — pitch */}
        <motion.div variants={stagger} initial="hidden" animate="visible" style={{ paddingRight: 24 }}>
          <motion.div
            variants={fadeUp}
            style={{
              display: 'inline-block',
              background: 'rgba(5,150,105,0.08)',
              border: '1px solid rgba(5,150,105,0.2)',
              borderRadius: 8,
              padding: '6px 18px',
              fontSize: '0.9rem',
              color: 'var(--emerald)',
              fontWeight: 500,
              marginBottom: 24,
            }}
          >
            🏆 מעל 500 משפחות קנו בית בעזרתנו
          </motion.div>

          <motion.div variants={fadeUp}>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                fontWeight: 700,
                lineHeight: 1.15,
                marginBottom: 8,
                color: 'var(--navy)',
              }}
            >
              המשכנתא שלכם
              <br />
              יכולה לעלות פחות
            </h1>
            <div
              style={{
                width: 60,
                height: 3,
                background: 'var(--emerald)',
                borderRadius: 2,
                marginBottom: 16,
              }}
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '2.2rem',
              fontWeight: 700,
              color: 'var(--emerald)',
              marginBottom: 20,
            }}
          >
            הרבה פחות.
          </motion.p>

          <motion.p
            variants={fadeUp}
            style={{
              fontSize: '1.15rem',
              color: 'var(--text2)',
              lineHeight: 1.8,
              maxWidth: 500,
              marginBottom: 40,
            }}
          >
            הבנקים עובדים לטובת עצמם.
            <br />
            אנחנו עובדים לטובתכם בלבד.
            <br />
            ייעוץ עצמאי, אובייקטיבי, ומשתלם.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="resp-hero-stats"
            style={{
              display: 'flex',
              gap: 40,
            }}
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                style={{
                  textAlign: 'center',
                  borderLeft: i < stats.length - 1 ? '1px solid var(--border)' : 'none',
                  paddingLeft: i < stats.length - 1 ? 40 : 0,
                }}
              >
                <div
                  className="mono"
                  style={{ fontSize: '2.5rem', color: 'var(--navy)', fontWeight: 700, lineHeight: 1.1 }}
                >
                  {stat.value}
                </div>
                <div style={{ color: 'var(--text2)', fontSize: '0.85rem', marginTop: 4 }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Left column — calculator */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="resp-calc"
          style={{ paddingLeft: 24, display: 'flex', justifyContent: 'flex-end' }}
        >
          <Calculator />
        </motion.div>
      </div>
    </section>
  )
}

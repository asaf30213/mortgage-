import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function AnimatedNumber({ value, prefix = '₪' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 1200
    const startTime = performance.now()

    function animate(now) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * value))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [isInView, value])

  return (
    <span ref={ref} className="mono" style={{ color: '#059669', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 700, lineHeight: 1 }}>
      {prefix}{display.toLocaleString('he-IL')}
    </span>
  )
}

const cases = [
  {
    client: 'זוג צעיר, ת״א',
    details: ['משכנתא: ₪1,800,000', 'ריבית שהציע הבנק: 5.2%', 'ריבית שהשגנו: 4.1%'],
    saving: 143000,
  },
  {
    client: 'משפחה, רמת גן',
    details: ['מחזור משכנתא: ₪950,000', 'קיצור תקופה: 4 שנים'],
    saving: 68000,
  },
  {
    client: 'משקיע, הרצליה',
    details: ['משכנתא לכל מטרה: ₪600,000', 'כנגד נכס קיים, ריבית: 3.8%'],
    saving: 41000,
    savingLabel: 'חיסכון לעומת הלוואה רגילה',
  },
]

export default function SavingsShowcase() {
  return (
    <section
      style={{
        padding: '100px 0',
        background: '#1e3a5f',
      }}
    >
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ color: '#ffffff' }}
        >
          כמה חסכנו ללקוחות שלנו
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          style={{ color: 'rgba(255,255,255,0.7)' }}
        >
          מקרי בוחן אמיתיים
        </motion.p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 8,
                padding: 32,
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                transition: 'background 0.3s',
              }}
              whileHover={{
                backgroundColor: 'rgba(255,255,255,0.13)',
              }}
            >
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', letterSpacing: '0.1em', marginBottom: 4 }}>לקוח</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.1rem', marginBottom: 16, color: '#ffffff' }}>{c.client}</div>
              {c.details.map((d, j) => (
                <div key={j} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: 4 }}>
                  {d}
                </div>
              ))}
              <div
                style={{
                  marginTop: 20,
                  paddingTop: 20,
                  borderTop: '1px solid rgba(255,255,255,0.15)',
                }}
              >
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', marginBottom: 4 }}>
                  {c.savingLabel || 'חיסכון כולל'}
                </div>
                <AnimatedNumber value={c.saving} />
                {/* Decorative bar under savings number */}
                <div
                  style={{
                    marginTop: 10,
                    width: '60%',
                    height: 3,
                    borderRadius: 2,
                    background: '#059669',
                    opacity: 0.3,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

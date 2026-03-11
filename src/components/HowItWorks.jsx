import { useState } from 'react'
import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'שיחת היכרות חינם (15 דק׳)',
    text: 'נבין את המצב הפיננסי שלכם ומה אתם מחפשים.',
  },
  {
    num: '02',
    title: 'ניתוח ובניית תמהיל (24–48 שעות)',
    text: 'נבנה עבורכם תמהיל משכנתא מותאם אישית, ונסרוק את כל הבנקים.',
  },
  {
    num: '03',
    title: 'מו״מ מול הבנקים (3–7 ימים)',
    text: 'נמשוך הצעות מכל הבנקים ונשיג את התנאים הטובים.',
  },
  {
    num: '04',
    title: 'חתימה וסגירה',
    text: 'נלווה אתכם עד לחתימה ונוודא שהכל תקין.',
  },
]

function StepCard({ step, delay }) {
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
        textAlign: 'center',
        padding: '24px 16px',
        position: 'relative',
        zIndex: 1,
        background: hovered ? '#ffffff' : 'transparent',
        borderRadius: 12,
        boxShadow: hovered ? '0 8px 24px rgba(30,58,95,0.12)' : 'none',
        transition: 'all 0.25s ease',
      }}
    >
      {/* Large watermark number */}
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 64,
          fontWeight: 700,
          color: 'rgba(30,58,95,0.12)',
          lineHeight: 1,
          position: 'absolute',
          top: 12,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 0,
          userSelect: 'none',
        }}
      >
        {step.num}
      </div>
      {/* Filled circle number on top */}
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: '50%',
          background: '#1e3a5f',
          color: '#ffffff',
          fontFamily: "'Space Mono', monospace",
          fontSize: '0.85rem',
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 20px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {step.num}
      </div>
      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', fontWeight: 700, marginBottom: 8, color: 'var(--navy)', position: 'relative', zIndex: 1 }}>{step.title}</h3>
      <p style={{ color: 'var(--text2)', fontSize: '0.9rem', lineHeight: 1.6, position: 'relative', zIndex: 1 }}>{step.text}</p>
    </motion.div>
  )
}

export default function HowItWorks() {
  return (
    <section id="process" style={{ padding: '100px 0', background: '#ffffff' }}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          איך זה עובד?
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          תהליך פשוט ב-4 שלבים
        </motion.p>

        <div className="resp-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, position: 'relative' }}>
          {/* Dashed connecting line */}
          <div
            className="resp-hide"
            style={{
              position: 'absolute',
              top: 42,
              right: '12.5%',
              left: '12.5%',
              height: 0,
              borderTop: '2px dashed #059669',
              zIndex: 0,
            }}
          />

          {steps.map((step, i) => (
            <StepCard key={i} step={step} delay={i * 0.15} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            color: 'var(--text2)',
            marginTop: 48,
            fontSize: '0.95rem',
          }}
        >
          כל התהליך לוקח בממוצע 3–4 שבועות
        </motion.p>
      </div>
    </section>
  )
}

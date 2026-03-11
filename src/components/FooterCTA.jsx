import { useState } from 'react'
import { motion } from 'framer-motion'

const CheckSvg = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
    <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="#059669" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const inputStyle = {
  width: '100%',
  padding: '13px 16px',
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 8,
  color: '#ffffff',
  fontSize: '0.95rem',
  outline: 'none',
  transition: 'border-color 0.2s, background 0.2s',
  fontFamily: "'Rubik', sans-serif",
}

const stats = [
  { value: '₪87,000', label: 'חיסכון ממוצע ללקוח' },
  { value: '98%', label: 'לקוחות ממליצים' },
  { value: '+15', label: 'שנות ניסיון' },
]

export default function FooterCTA() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', amount: '', purpose: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleFocus = (e) => {
    e.target.style.borderColor = 'rgba(5,150,105,0.5)'
    e.target.style.background = 'rgba(255,255,255,0.09)'
  }
  const handleBlur = (e) => {
    e.target.style.borderColor = 'rgba(255,255,255,0.1)'
    e.target.style.background = 'rgba(255,255,255,0.06)'
  }

  return (
    <section
      id="contact"
      style={{
        padding: '100px 0',
        background: 'linear-gradient(135deg, var(--navy) 0%, var(--slate) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Radial glow overlays */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 800px 600px at 50% 60%, rgba(5,150,105,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 600px 400px at 80% 10%, rgba(30,58,95,0.4) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />
      {/* Dot grid overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ maxWidth: 600, textAlign: 'center', position: 'relative', zIndex: 1 }}>
        {/* Eyebrow pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 20 }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(5,150,105,0.1)',
              border: '1px solid rgba(5,150,105,0.25)',
              borderRadius: 99,
              padding: '6px 14px',
              fontSize: '0.72rem',
              color: '#059669',
              fontWeight: 500,
              letterSpacing: '0.03em',
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: '#059669',
                animation: 'ctaPulse 2s infinite',
              }}
            />
            ייעוץ ראשוני ללא עלות
          </span>
        </motion.div>

        <style>{`
          @keyframes ctaPulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.4; transform: scale(1.4); }
          }
        `}</style>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ color: '#ffffff' }}
        >
          מוכנים לחסוך <em style={{ fontStyle: 'normal', color: '#059669' }}>עשרות אלפי</em> שקלים?
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          style={{ color: 'rgba(255,255,255,0.7)' }}
        >
          השאירו פרטים ונחזור אליכם תוך שעה
        </motion.p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(5,150,105,0.3)',
              borderRadius: 16,
              padding: 40,
              backdropFilter: 'blur(10px)',
            }}
          >
            <div style={{ fontSize: '3rem', marginBottom: 16 }}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="22" stroke="#059669" strokeWidth="2" />
                <path d="M14 24l7 7 13-13" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', marginBottom: 8, color: '#ffffff' }}>הפרטים התקבלו בהצלחה!</h3>
            <p style={{ color: 'rgba(255,255,255,0.6)' }}>ניצור איתכם קשר תוך שעה.</p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 16,
              padding: '36px 32px 28px',
              display: 'flex',
              flexDirection: 'column',
              gap: 11,
              backdropFilter: 'blur(10px)',
            }}
          >
            {/* Name + Phone row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 11 }}>
              <input
                type="text"
                placeholder="שם מלא"
                required
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                style={inputStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <input
                type="tel"
                placeholder="טלפון"
                required
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
                style={inputStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>

            <select
              value={form.amount}
              onChange={e => setForm({ ...form, amount: e.target.value })}
              style={{ ...inputStyle, color: form.amount ? '#ffffff' : 'rgba(255,255,255,0.4)' }}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              <option value="" disabled>סכום משכנתא</option>
              <option value="800k">עד ₪800,000</option>
              <option value="800k-1.5m">₪800,000–₪1,500,000</option>
              <option value="1.5m+">מעל ₪1,500,000</option>
            </select>
            <select
              value={form.purpose}
              onChange={e => setForm({ ...form, purpose: e.target.value })}
              style={{ ...inputStyle, color: form.purpose ? '#ffffff' : 'rgba(255,255,255,0.4)' }}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              <option value="" disabled>מטרה</option>
              <option value="first">רכישה ראשונה</option>
              <option value="second">רכישה שנייה</option>
              <option value="refinance">מחזור</option>
              <option value="other">אחר</option>
            </select>

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '14px 0',
                background: 'var(--navy)',
                color: '#ffffff',
                borderRadius: 8,
                fontWeight: 500,
                fontSize: '1.05rem',
                transition: 'transform 0.2s, box-shadow 0.2s, background 0.2s',
                marginTop: 4,
              }}
              onMouseEnter={e => {
                e.target.style.transform = 'translateY(-1px)'
                e.target.style.boxShadow = '0 4px 16px rgba(30,58,95,0.3)'
                e.target.style.background = '#2a4f80'
              }}
              onMouseLeave={e => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = 'none'
                e.target.style.background = 'var(--navy)'
              }}
            >
              קבל ייעוץ חינם ←
            </button>

            <a
              href="https://wa.me/972547738891?text=שלום, אשמח לייעוץ חינם על משכנתא"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                width: '100%',
                padding: '12px 0',
                background: 'var(--emerald)',
                color: '#fff',
                textAlign: 'center',
                borderRadius: 8,
                fontWeight: 500,
                fontSize: '0.95rem',
                transition: 'transform 0.2s, background 0.2s',
              }}
              onMouseEnter={e => {
                e.target.style.transform = 'translateY(-1px)'
                e.target.style.background = '#047857'
              }}
              onMouseLeave={e => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.background = 'var(--emerald)'
              }}
            >
              וואטסאפ
            </a>

            {/* Guarantees */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap', marginTop: 4 }}>
              {['ייעוץ ראשוני ללא עלות', 'ללא התחייבות', 'מידע מוגן ופרטי'].map((text, i) => (
                <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 4, color: 'rgba(255,255,255,0.28)', fontSize: '0.7rem' }}>
                  <CheckSvg />
                  {text}
                </span>
              ))}
            </div>
          </motion.form>
        )}

        {/* Stats bar */}
        <div
          style={{
            marginTop: 28,
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 12,
            display: 'flex',
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                padding: '20px 24px',
                textAlign: 'center',
                borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              }}
            >
              <div className="mono" style={{ fontSize: '1.3rem', color: '#ffffff', fontWeight: 700, lineHeight: 1.2 }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', fontWeight: 300, marginTop: 4 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

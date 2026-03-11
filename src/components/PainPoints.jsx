import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

/* ── Card 1: Timeline Gradient Bar ── */
function TimelineViz() {
  return (
    <div style={{ width: '100%' }}>
      {/* Labels above bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
        <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)' }}>רגע הרכישה</span>
        <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)' }}>התחלת תהליך</span>
      </div>
      {/* Gradient bar */}
      <div style={{ position: 'relative', height: 10, borderRadius: 99, background: 'linear-gradient(to left, #059669, #84cc16, #eab308, #ef4444)' }}>
        {/* White marker at ~20% from left (bad zone) */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '20%',
            transform: 'translate(-50%, -50%)',
            width: 18,
            height: 18,
            borderRadius: '50%',
            background: '#ffffff',
            border: '2px solid #ef4444',
            boxShadow: '0 0 0 4px rgba(239,68,68,0.2)',
          }}
        />
      </div>
      {/* Label below bar */}
      <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M6 0l4 4-4 4" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ fontSize: '0.65rem', color: '#ef4444' }}>כוח המיקוח שלך כאן</span>
        </div>
      </div>
    </div>
  )
}

/* ── Card 2: Two Vertical Bars ── */
function MixBarsViz() {
  return (
    <div style={{ direction: 'ltr', width: '100%', display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 24 }}>
        {/* Left bar — optimized */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.45)', marginBottom: 6, whiteSpace: 'nowrap' }}>תמהיל מותאם</span>
          <div style={{ width: 52, height: 52, borderRadius: 6, background: 'linear-gradient(to top, rgba(5,150,105,0.95), rgba(5,150,105,0.6))' }} />
          <span className="mono" style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', marginTop: 6 }}>₪40K</span>
        </div>
        {/* Difference indicator */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
          <div style={{ width: 1, height: 20, background: 'rgba(5,150,105,0.4)' }} />
          <div style={{ padding: '4px 8px', borderRadius: 4, background: 'rgba(5,150,105,0.12)', border: '1px solid rgba(5,150,105,0.25)', margin: '4px 0' }}>
            <span className="mono" style={{ fontSize: '0.7rem', color: '#059669', fontWeight: 700, whiteSpace: 'nowrap' }}>₪80K הפרש</span>
          </div>
          <div style={{ width: 1, height: 20, background: 'rgba(5,150,105,0.4)' }} />
        </div>
        {/* Right bar — regular */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.45)', marginBottom: 6, whiteSpace: 'nowrap' }}>תמהיל רגיל</span>
          <div style={{ width: 52, height: 100, borderRadius: 6, background: 'linear-gradient(to top, rgba(239,68,68,0.9), rgba(239,68,68,0.5))' }} />
          <span className="mono" style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', marginTop: 6 }}>₪120K</span>
        </div>
      </div>
    </div>
  )
}

/* ── Card 3: Disconnect Diagram ── */
function BankDisconnectViz() {
  const dashStyle = { width: 7, height: 1.5, borderRadius: 1, background: 'rgba(239,68,68,0.5)' }

  return (
    <div style={{ direction: 'ltr', width: '100%', display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
        {/* Client entity */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 10,
              background: 'rgba(5,150,105,0.12)',
              border: '1px solid rgba(5,150,105,0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="13" cy="9" r="4.5" />
              <path d="M4 24c0-5 4-9 9-9s9 4 9 9" />
            </svg>
          </div>
          <span style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.45)' }}>הלקוח</span>
        </div>

        {/* Dashed line with X */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <div style={dashStyle} />
            <div style={dashStyle} />
            <div style={dashStyle} />
            <div style={dashStyle} />
            {/* X circle */}
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: '50%',
                background: 'rgba(239,68,68,0.15)',
                border: '1px solid rgba(239,68,68,0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.6rem',
                color: '#ef4444',
                fontWeight: 700,
                flexShrink: 0,
              }}
            >
              ✕
            </div>
            <div style={dashStyle} />
            <div style={dashStyle} />
            <div style={dashStyle} />
            <div style={dashStyle} />
          </div>
          <span className="mono" style={{ fontSize: '0.58rem', color: '#ef4444', marginTop: 6 }}>ריבית גבוהה</span>
        </div>

        {/* Bank entity */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 10,
              background: 'rgba(239,68,68,0.12)',
              border: '1px solid rgba(239,68,68,0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 3L2 9h22L13 3z" />
              <line x1="6" y1="11" x2="6" y2="19" />
              <line x1="11" y1="11" x2="11" y2="19" />
              <line x1="15" y1="11" x2="15" y2="19" />
              <line x1="20" y1="11" x2="20" y2="19" />
              <rect x="2" y="20" width="22" height="2.5" rx="1" />
            </svg>
          </div>
          <span style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.45)' }}>הבנק</span>
        </div>
      </div>
    </div>
  )
}

const cards = [
  {
    title: 'מאוחר מדי = מפסידים כוח מיקוח',
    text: 'ברגע שסגרתם על דירה, כוח המיקוח שלכם מול הבנק נחלש משמעותית. צריך להגיע עם ייעוץ לפני הרכישה.',
    Viz: TimelineViz,
  },
  {
    title: 'תמהיל לא נכון = עשרות אלפי שקלים',
    text: 'רוב האנשים לוקחים תמהיל ברירת מחדל. תמהיל מותאם אישית יכול לחסוך ₪40,000–₪120,000 לאורך חיי ההלוואה.',
    Viz: MixBarsViz,
  },
  {
    title: 'הבנק לא מייצג אותך',
    text: 'יועץ הבנק מחויב למדיניות הבנק. הוא לא יציע לך את הריבית הכי טובה בשוק, כי זה לא האינטרס שלו.',
    Viz: BankDisconnectViz,
  },
]

export default function PainPoints() {
  return (
    <section style={{ padding: '100px 0', background: 'var(--navy)' }}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ color: '#ffffff' }}
        >
          למה רוב האנשים משלמים יותר מדי?
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{ color: 'rgba(255,255,255,0.7)' }}
        >
          שלוש טעויות נפוצות שעולות עשרות אלפי שקלים
        </motion.p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 40 }}>
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderTop: '2px solid #059669',
                borderRadius: 12,
                overflow: 'hidden',
                boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }}
              whileHover={{
                y: -4,
                boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
              }}
            >
              {/* TOP ZONE — visualization only */}
              <div
                style={{
                  minHeight: 150,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '28px 28px 24px',
                  borderBottom: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <card.Viz />
              </div>
              {/* BOTTOM ZONE — text only */}
              <div style={{ padding: '22px 24px 26px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.95rem', fontWeight: 700, marginBottom: 10, color: '#ffffff' }}>{card.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem', lineHeight: 1.75 }}>{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: 'rgba(5,150,105,0.07)',
            border: '1px solid rgba(5,150,105,0.2)',
            borderRight: '3px solid #059669',
            borderRadius: 10,
            padding: '20px 24px',
            maxWidth: 700,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 24,
          }}
        >
          <div>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#ffffff' }}>
              <strong style={{ color: 'var(--emerald)' }}>יועץ משכנתא עצמאי לא עולה כסף — הוא חוסך כסף.</strong>
              <br />
              <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem' }}>
                הדמי ייעוץ ממוצעים: ₪5,000–₪8,000
              </span>
            </p>
          </div>
          <div style={{ textAlign: 'center', flexShrink: 0 }}>
            <div className="mono" style={{ fontSize: '1.6rem', color: '#059669', fontWeight: 700, lineHeight: 1.2 }}>₪87,000</div>
            <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>חיסכון ממוצע</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'

const testimonials = [
  {
    text: 'בהתחלה לא הבנו למה אנחנו צריכים יועץ. אחרי שראינו את ההצעה של הבנק מול מה שסמארט השיגו — ההפרש היה 214 שקל בחודש. על 25 שנה זה הרבה כסף.',
    name: 'יעל ואורי לוי',
    location: 'פתח תקווה',
    detail: 'רכישת דירה ראשונה',
    initials: 'יא',
  },
  {
    text: 'עשינו מחזור אחרי 3 שנים שישבנו על ריבית גבוהה. לא ידענו שאפשר פשוט להחליף. התהליך עם סמארט לקח שבועיים וירדנו מ-4.8% ל-3.6%.',
    name: 'אלון ברגר',
    location: 'הוד השרון',
    detail: 'מחזור משכנתא',
    initials: 'אב',
  },
  {
    text: 'היה לנו אישור עקרוני מלאומי על 4.9%. סמארט לקחו את זה, הלכו איתו לדיסקונט ולמזרחי, וחזרו עם 4.2% בדיסקונט. פשוט ככה.',
    name: 'נועה ודניאל שמש',
    location: 'באר יעקב',
    detail: '',
    initials: 'נד',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: '100px 0', background: '#ffffff' }}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          מה אומרים הלקוחות שלנו
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          ביקורות אמיתיות מלקוחות מרוצים
        </motion.p>

        <div className="resp-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                background: '#ffffff',
                border: '1px solid var(--border)',
                borderRadius: 8,
                padding: 32,
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                transition: 'all 0.3s',
              }}
              whileHover={{
                boxShadow: '0 8px 24px rgba(30,58,95,0.12)',
                borderColor: 'var(--navy)',
              }}
            >
              {/* Stars */}
              <div style={{ color: 'var(--emerald)', fontSize: '1.1rem', marginBottom: 16 }}>
                ★★★★★
              </div>

              <p style={{
                color: 'var(--text2)',
                fontSize: '1rem',
                lineHeight: 1.8,
                flex: 1,
                marginBottom: 20,
              }}>
                &ldquo;{t.text}&rdquo;
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12, borderTop: '1px solid var(--border)', paddingTop: 16 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 8,
                    background: 'var(--navy)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontWeight: 500, fontSize: '0.95rem', color: 'var(--text)' }}>{t.name}, {t.location}</div>
                  {t.detail && (
                    <div style={{ color: 'var(--text2)', fontSize: '0.8rem' }}>{t.detail}</div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

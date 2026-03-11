import { motion } from 'framer-motion'

const BuildingIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="#059669" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1.5 11.5h10M1.5 5h10M6.5 1.5L1.5 4h10L6.5 1.5zM3.5 5v6.5M6.5 5v6.5M9.5 5v6.5" />
  </svg>
)

const LockIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="#059669" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4.5" width="9" height="7" rx="1.2" />
    <path d="M4.5 4.5V3.5a2 2 0 014 0v1" />
  </svg>
)

const StarIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="#059669" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6.5 1l1.6 3.3 3.6.5-2.6 2.6.6 3.6-3.2-1.7-3.2 1.7.6-3.6L1.3 4.8l3.6-.5L6.5 1z" />
  </svg>
)

const ShieldIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="#059669" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6.5 1.5L2 3.5v4c0 2.5 2 4.5 4.5 5 2.5-.5 4.5-2.5 4.5-5v-4L6.5 1.5z" />
    <path d="M4.5 6.5l1.5 1.5 2.5-2.5" />
  </svg>
)

const ClockIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="#059669" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6.5" cy="6.5" r="5" />
    <path d="M6.5 4v3l2 1.5" />
  </svg>
)

const signals = [
  { Icon: BuildingIcon, text: 'עובד עם כל הבנקים' },
  { Icon: LockIcon, text: 'רישיון בנק ישראל' },
  { Icon: StarIcon, text: '+500 לקוחות' },
  { Icon: ShieldIcon, text: 'שירות אובייקטיבי' },
  { Icon: ClockIcon, text: 'זמין 7 ימים' },
]

const iconWrapperStyle = {
  width: 26,
  height: 26,
  borderRadius: 6,
  background: 'rgba(5,150,105,0.1)',
  border: '1px solid rgba(5,150,105,0.2)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
}

export default function TrustBar() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      style={{
        padding: '13px 40px',
        background: '#0a1525',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        {signals.map((s, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 9,
              color: 'rgba(255,255,255,0.5)',
              fontSize: '0.78rem',
            }}
          >
            <div style={iconWrapperStyle}>
              <s.Icon />
            </div>
            <span>{s.text}</span>
          </div>
        ))}
      </div>
    </motion.section>
  )
}

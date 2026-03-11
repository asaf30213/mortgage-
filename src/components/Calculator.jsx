import { useState, useMemo, useRef, useEffect } from 'react'

const formatILS = (n) => `₪${n.toLocaleString('he-IL')}`

const calculateMortgage = (principal, years, annualRate) => {
  const months = years * 12
  const monthlyRate = annualRate / 100 / 12

  const monthlyPayment = monthlyRate === 0
    ? principal / months
    : (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1)

  const totalPayment = monthlyPayment * months
  const totalInterest = totalPayment - principal

  const improvedRate = annualRate - 0.8
  const improvedMonthlyRate = improvedRate / 100 / 12
  const improvedMonthlyPayment = (principal * improvedMonthlyRate * Math.pow(1 + improvedMonthlyRate, months)) /
    (Math.pow(1 + improvedMonthlyRate, months) - 1)
  const improvedTotal = improvedMonthlyPayment * months
  const potentialSaving = totalPayment - improvedTotal
  const monthlySaving = monthlyPayment - improvedMonthlyPayment

  return {
    monthlyPayment: Math.round(monthlyPayment),
    totalPayment: Math.round(totalPayment),
    totalInterest: Math.round(totalInterest),
    potentialSaving: Math.round(potentialSaving),
    monthlySaving: Math.round(monthlySaving),
  }
}

function RangeSlider({ label, value, min, max, step, format, onChange }) {
  const ref = useRef(null)
  const pct = ((value - min) / (max - min)) * 100

  useEffect(() => {
    if (ref.current) {
      ref.current.style.background = `linear-gradient(to right, #059669 ${pct}%, #e5e7eb ${pct}%)`
    }
  }, [pct])

  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <span style={{ color: 'var(--text2)', fontSize: '0.9rem' }}>{label}</span>
        <span className="mono" style={{ color: 'var(--emerald)', fontSize: '1.1rem', fontWeight: 700 }}>
          {format(value)}
        </span>
      </div>
      <input
        ref={ref}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
        <span style={{ color: 'var(--text2)', fontSize: '0.75rem' }}>{format(min)}</span>
        <span style={{ color: 'var(--text2)', fontSize: '0.75rem' }}>{format(max)}</span>
      </div>
    </div>
  )
}

export default function Calculator() {
  const [principal, setPrincipal] = useState(1500000)
  const [years, setYears] = useState(20)
  const [rate, setRate] = useState(4.5)

  const result = useMemo(
    () => calculateMortgage(principal, years, rate),
    [principal, years, rate]
  )

  return (
    <div
      style={{
        background: '#ffffff',
        border: '1px solid var(--border)',
        borderRadius: 8,
        padding: 32,
        maxWidth: 440,
        width: '100%',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
      }}
    >
      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: 700, marginBottom: 4, color: 'var(--navy)' }}>
        גלה כמה תוכל לחסוך
      </h3>
      <p style={{ color: 'var(--text2)', fontSize: '0.9rem', marginBottom: 24 }}>
        חישוב מיידי — ללא התחייבות
      </p>

      <RangeSlider
        label="סכום משכנתא"
        value={principal}
        min={500000}
        max={3000000}
        step={50000}
        format={v => formatILS(v)}
        onChange={setPrincipal}
      />
      <RangeSlider
        label="תקופה (שנים)"
        value={years}
        min={10}
        max={30}
        step={1}
        format={v => `${v} שנים`}
        onChange={setYears}
      />
      <RangeSlider
        label="ריבית קיימת / צפויה"
        value={rate}
        min={3.0}
        max={6.5}
        step={0.1}
        format={v => `${v.toFixed(1)}%`}
        onChange={setRate}
      />

      {/* Results */}
      <div
        style={{
          background: 'rgba(5,150,105,0.06)',
          borderRadius: 8,
          padding: 20,
          marginTop: 8,
          marginBottom: 20,
        }}
      >
        <div style={{ marginBottom: 8 }}>
          <span style={{ color: 'var(--text2)', fontSize: '0.85rem' }}>חיסכון פוטנציאלי</span>
          <div className="mono" style={{ color: 'var(--emerald)', fontSize: '1.8rem', fontWeight: 700 }}>
            {formatILS(result.potentialSaving)}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <span style={{ color: 'var(--text2)', fontSize: '0.8rem' }}>חיסכון חודשי</span>
            <div className="mono" style={{ color: 'var(--emerald)', fontSize: '1rem' }}>
              ~{formatILS(result.monthlySaving)}/חודש
            </div>
          </div>
          <div>
            <span style={{ color: 'var(--text2)', fontSize: '0.8rem' }}>החזר חודשי משוער</span>
            <div className="mono" style={{ color: 'var(--text)', fontSize: '1rem' }}>
              {formatILS(result.monthlyPayment)}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <a
        href="#contact"
        style={{
          display: 'block',
          width: '100%',
          padding: '14px 0',
          background: 'var(--navy)',
          color: '#ffffff',
          textAlign: 'center',
          borderRadius: 8,
          fontWeight: 500,
          fontSize: '1rem',
          marginBottom: 10,
          transition: 'transform 0.2s, box-shadow 0.2s, background 0.2s',
        }}
        onMouseEnter={e => {
          e.target.style.transform = 'translateY(-2px)'
          e.target.style.boxShadow = '0 4px 16px rgba(30,58,95,0.3)'
          e.target.style.background = 'var(--slate)'
        }}
        onMouseLeave={e => {
          e.target.style.transform = 'translateY(0)'
          e.target.style.boxShadow = 'none'
          e.target.style.background = 'var(--navy)'
        }}
      >
        קבל ייעוץ חינם — תוך 24 שעות ←
      </a>
      <a
        href="https://wa.me/972520000000?text=שלום, אשמח לייעוץ חינם על משכנתא"
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
          marginBottom: 16,
        }}
      >
        💬 שלח בוואטסאפ עכשיו
      </a>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ color: 'var(--text2)', fontSize: '0.8rem' }}>✓ ייעוץ ראשוני חינם</span>
        <span style={{ color: 'var(--text2)', fontSize: '0.8rem' }}>✓ ללא התחייבות</span>
        <span style={{ color: 'var(--text2)', fontSize: '0.8rem' }}>✓ תוך 24 שעות</span>
      </div>
    </div>
  )
}

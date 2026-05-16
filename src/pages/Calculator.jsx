import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import EmailCapture from '../components/EmailCapture';

function Calculator() {
  const [insulin, setInsulin] = useState('');
  const [glucose, setGlucose] = useState('');
  const [glucoseUnit, setGlucoseUnit] = useState('mg/dL'); // 'mg/dL' or 'mmol/L'
  const [score, setScore] = useState(null);
  const [resultPhase, setResultPhase] = useState('');

  const calculateHomaIr = (e) => {
    e.preventDefault();
    if (!insulin || !glucose) return;

    let glucoseConv = parseFloat(glucose);
    let insulinConv = parseFloat(insulin);

    let homaIrScore = 0;

    if (glucoseUnit === 'mg/dL') {
      homaIrScore = (insulinConv * glucoseConv) / 405;
    } else {
      homaIrScore = (insulinConv * glucoseConv) / 22.5;
    }

    setScore(homaIrScore.toFixed(2));

    if (homaIrScore < 1.0) {
      setResultPhase('Optimal');
    } else if (homaIrScore >= 1.0 && homaIrScore < 2.0) {
      setResultPhase('Early Insulin Resistance');
    } else {
      setResultPhase('Significant Insulin Resistance');
    }
  };

  return (
    <div style={{ padding: '6rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
      <Helmet>
        <title>HOMA-IR Calculator | Fasting Insulin & Brain Health | EmpowerVida</title>
        <meta name="description" content="Calculate your HOMA-IR score to check for early insulin resistance. A critical metric for predicting neuro-longevity, brain fog, and Type 3 Diabetes." />
      </Helmet>

      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-primary-navy)', marginBottom: '1rem' }}>
          HOMA-IR Clinical Calculator
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', maxWidth: '600px', margin: '0 auto' }}>
          Standard blood panels check for full-blown disease. We check for cellular dysfunction. 
          Use your Fasting Insulin and Fasting Glucose to measure your metabolic baseline.
        </p>
      </div>

      <div style={{ 
        background: '#ffffff', 
        padding: '3rem', 
        borderRadius: '16px', 
        boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
        marginBottom: '3rem'
      }}>
        <form onSubmit={calculateHomaIr}>
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--color-primary-navy)' }}>
              Fasting Insulin (µIU/mL)
            </label>
            <input 
              type="number" 
              step="any"
              value={insulin}
              onChange={(e) => setInsulin(e.target.value)}
              placeholder="e.g., 4.5"
              required
              style={{
                width: '100%',
                padding: '1rem',
                borderRadius: '8px',
                border: '1px solid #e0e0e0',
                fontSize: '1rem'
              }}
            />
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--color-primary-navy)' }}>
              <span>Fasting Glucose</span>
              <div>
                <label style={{ marginRight: '1rem', cursor: 'pointer', fontSize: '0.9rem' }}>
                  <input 
                    type="radio" 
                    value="mg/dL" 
                    checked={glucoseUnit === 'mg/dL'} 
                    onChange={() => setGlucoseUnit('mg/dL')}
                    style={{ marginRight: '0.3rem' }}
                  />
                  mg/dL
                </label>
                <label style={{ cursor: 'pointer', fontSize: '0.9rem' }}>
                  <input 
                    type="radio" 
                    value="mmol/L" 
                    checked={glucoseUnit === 'mmol/L'} 
                    onChange={() => setGlucoseUnit('mmol/L')}
                    style={{ marginRight: '0.3rem' }}
                  />
                  mmol/L
                </label>
              </div>
            </label>
            <input 
              type="number" 
              step="any"
              value={glucose}
              onChange={(e) => setGlucose(e.target.value)}
              placeholder={glucoseUnit === 'mg/dL' ? "e.g., 85" : "e.g., 4.7"}
              required
              style={{
                width: '100%',
                padding: '1rem',
                borderRadius: '8px',
                border: '1px solid #e0e0e0',
                fontSize: '1rem'
              }}
            />
          </div>

          <button 
            type="submit"
            style={{
              width: '100%',
              padding: '1rem',
              background: 'var(--color-accent-teal)',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background 0.3s ease'
            }}
          >
            Calculate System Resilience
          </button>
        </form>

        {score && (
          <div style={{ 
            marginTop: '3rem', 
            padding: '2rem', 
            borderRadius: '12px', 
            background: score < 1.0 ? '#f0fdf4' : score < 2.0 ? '#fffbeb' : '#fef2f2',
            border: `2px solid ${score < 1.0 ? '#22c55e' : score < 2.0 ? '#f59e0b' : '#ef4444'}`,
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Your HOMA-IR Score
            </h3>
            <div style={{ fontSize: '3.5rem', fontWeight: '900', color: 'var(--color-primary-navy)', marginBottom: '1rem' }}>
              {score}
            </div>
            
            <div style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '1.5rem', color: score < 1.0 ? '#166534' : score < 2.0 ? '#b45309' : '#991b1b' }}>
              {resultPhase}
            </div>

            {score >= 1.0 && (
              <div style={{ textAlign: 'left', background: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #eee' }}>
                <h4 style={{ color: '#ef4444', marginBottom: '0.5rem' }}>⚠️ The "Starving Neuron" Risk (Type 3 Diabetes)</h4>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  A score above 1.0 indicates your cells are losing sensitivity to insulin. If this resistance reaches your brain, your neurons lose the ability to uptake glucose efficiently. They literally starve while swimming in fuel, resulting in brain fog, cognitive decline, and what functional medicine calls "Type 3 Diabetes."
                </p>
                <Link 
                  to="/protocol"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '1rem 1.5rem',
                    background: '#991b1b',
                    color: '#fff',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                    boxShadow: '0 4px 12px rgba(153, 27, 27, 0.3)'
                  }}
                >
                  View The Cellular Energy Rescue Protocol ➞
                </Link>
              </div>
            )}
            
            {score < 1.0 && (
              <div style={{ textAlign: 'left', background: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #eee' }}>
                <h4 style={{ color: '#22c55e', marginBottom: '0.5rem' }}>✓ Optimal Bioenergetic Function</h4>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  Excellent. Your cells are highly sensitive to insulin, meaning your mitochondria are efficiently producing ATP and your neurons are well-fed. To maintain this baseline and slow epigenetic aging, ensure you are providing the mitochondria with the required baseline raw materials.
                </p>
                <Link 
                  to="/empower-protocol"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '1rem 1.5rem',
                    background: '#166534',
                    color: '#fff',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                    boxShadow: '0 4px 12px rgba(22, 101, 52, 0.3)'
                  }}
                >
                  View The Foundational Longevity Stack ➞
                </Link>
              </div>
            )}
          </div>
        )}
      </div>

      <div style={{ 
        padding: '2rem', 
        background: 'var(--color-bg-secondary)', 
        borderRadius: '12px',
        border: '1px solid var(--color-accent-teal)',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        <h4 style={{ color: 'var(--color-primary-navy)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Don't have your lab results handy?</h4>
        <p style={{ color: 'var(--color-text)', marginBottom: '1.5rem', fontSize: '1rem' }}>
          You can still begin repairing your bioenergetic baseline today. Review the clinical framework used to reverse cognitive exhaustion and mitochondrial dysfunction.
        </p>
        <Link 
          to="/protocol#clarity-stack"
          style={{
            display: 'inline-block',
            padding: '0.8rem 1.5rem',
            background: 'transparent',
            color: 'var(--color-accent-teal)',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            border: '2px solid var(--color-accent-teal)',
            transition: 'all 0.3s ease'
          }}
        >
          View The Brain Fog Reversal Protocol ➞
        </Link>
      </div>

      {/* Substack Email Capture to convert high-volume calculator traffic */}
      <EmailCapture variant="inline" />

      <div style={{ 
        padding: '2rem', 
        background: '#f8fafc', 
        borderRadius: '12px',
        border: '1px solid #e2e8f0',
        fontSize: '0.85rem',
        lineHeight: '1.5',
        color: '#64748b'
      }}>
        <h4 style={{ color: '#334155', marginBottom: '0.5rem' }}>Medical Disclaimer</h4>
        <p>
          This HOMA-IR (Homeostatic Model Assessment of Insulin Resistance) calculator is provided for educational and bioenergetic tracking purposes only. It is not intended to substitute for professional medical advice, diagnosis, or treatment. Standard clinical reference ranges may vary. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding your metabolic health and never disregard professional medical advice or delay in seeking it because of something you have read on this website.
        </p>
      </div>

    </div>
  );
}

export default Calculator;

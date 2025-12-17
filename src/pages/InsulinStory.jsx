import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function InsulinStory() {
    const sectionStyle = {
        marginBottom: '6rem'
    };

    const headingStyle = {
        fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
        fontWeight: '800',
        color: 'var(--color-text)',
        marginBottom: '2rem',
        fontFamily: '"Manrope", sans-serif',
        lineHeight: '1.2'
    };

    const subheadingStyle = {
        fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
        fontWeight: '700',
        color: 'var(--color-primary)',
        marginTop: '4rem',
        marginBottom: '1.5rem',
        fontFamily: '"Manrope", sans-serif'
    };

    const paragraphStyle = {
        fontSize: '1.2rem',
        lineHeight: '1.9',
        color: 'var(--color-text)',
        marginBottom: '1.8rem',
        fontWeight: '400'
    };

    const luxuryBoxStyle = {
        background: 'linear-gradient(135deg, rgba(26, 60, 52, 0.03) 0%, rgba(32, 178, 170, 0.05) 100%)',
        border: '1px solid rgba(26, 60, 52, 0.15)',
        borderRadius: '16px',
        padding: '3rem',
        marginBottom: '3rem',
        boxShadow: '0 8px 32px rgba(0,0,0,0.04)'
    };

    const stageBoxStyle = {
        background: '#FFFFFF',
        border: '2px solid #E5E5E5',
        borderRadius: '20px',
        padding: '3rem',
        marginBottom: '4rem',
        boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
        position: 'relative',
        overflow: 'hidden'
    };

    const imageStyle = {
        width: '100%',
        borderRadius: '12px',
        marginTop: '2rem',
        marginBottom: '2rem',
        boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
    };

    const citationStyle = {
        fontSize: '0.95rem',
        fontStyle: 'italic',
        color: 'var(--color-text-muted)',
        borderLeft: '3px solid var(--color-accent-teal)',
        paddingLeft: '1.5rem',
        marginTop: '2rem',
        marginBottom: '2rem'
    };

    return (
        <div style={{
            backgroundColor: '#FAFAFA',
            minHeight: '100vh',
            color: 'var(--color-text)',
            fontFamily: '"Inter", sans-serif'
        }}>
            <SEO
                title="The Insulin Story: Why You Are Aging Faster Than You Think | EMPOWERVIDA"
                description="Feed two people the same meal. One stays lean; the other stores fat. This isn't about willpower—it's about Insulin Resistance. Discover the science of smart aging."
                keywords="insulin resistance, hyperinsulinemia, metabolic health, aging, longevity, insulin sensitivity, Type 2 diabetes prevention, smart aging"
                canonical="/insulin-story"
            />

            {/* HERO SECTION */}
            <section style={{
                position: 'relative',
                minHeight: '85vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #1A3C34 0%, #0F2922 100%)',
                color: '#FFFFFF',
                padding: '8rem 2rem 6rem',
                textAlign: 'center',
                overflow: 'hidden'
            }}>
                {/* Subtle Grid Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                    opacity: 0.3,
                    pointerEvents: 'none'
                }}></div>

                <div style={{ position: 'relative', zIndex: 2, maxWidth: '1000px' }}>
                    {/* Kicker */}
                    <div style={{
                        fontSize: '0.9rem',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'var(--color-accent-teal)',
                        fontWeight: '600',
                        marginBottom: '1.5rem'
                    }}>
                        The Longevity Architect Presents
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                        fontWeight: '900',
                        lineHeight: '1.1',
                        marginBottom: '2rem',
                        fontFamily: '"Manrope", sans-serif',
                        textShadow: '0 4px 20px rgba(0,0,0,0.3)'
                    }}>
                        The Insulin Story:<br />
                        <span style={{ color: 'var(--color-accent-teal)' }}>Why You Are Aging Faster Than You Think</span>
                    </h1>

                    {/* The Tale of Two Eaters Hook */}
                    <div style={{
                        fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
                        lineHeight: '1.7',
                        color: 'rgba(255,255,255,0.95)',
                        maxWidth: '800px',
                        margin: '0 auto 3rem',
                        fontWeight: '300'
                    }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Feed two people the exact same meal.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            One stays lean. The other stores fat.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            One feels energized. The other suffers a "food coma."
                        </p>
                        <p style={{ fontSize: '1.4rem', fontWeight: '600', color: 'var(--color-accent-teal)', marginTop: '2rem' }}>
                            This is not about willpower.<br />
                            This is about <strong>Insulin Resistance</strong>.
                        </p>
                    </div>

                    {/* Hero Image */}
                    <img
                        src="/hero_cell_energy.png"
                        alt="Photorealistic 3D visualization of a human cell with golden mitochondrial energy glow - Medical Luxury aesthetic"
                        style={{
                            ...imageStyle,
                            marginTop: '4rem',
                            maxWidth: '800px',
                            margin: '4rem auto 0'
                        }}
                    />

                    {/* Scroll Indicator */}
                    <div style={{
                        marginTop: '4rem',
                        fontSize: '0.85rem',
                        color: 'rgba(255,255,255,0.6)',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase'
                    }}>
                        Scroll to Discover ↓
                    </div>
                </div>
            </section>

            {/* MAIN CONTENT */}
            <div className="container" style={{ maxWidth: '900px', paddingTop: '6rem', paddingBottom: '6rem' }}>

                {/* SECTION 2: THE PARADIGM SHIFT */}
                <section style={sectionStyle}>
                    <h2 style={headingStyle}>The Paradigm Shift</h2>
                    <div style={{ width: '80px', height: '4px', background: 'var(--color-accent-teal)', marginBottom: '3rem' }}></div>

                    <p style={paragraphStyle}>
                        For decades, we were told that <strong>Insulin Resistance</strong> was simply a "broken receptor"—a malfunctioning lock on the cell door that refused to let fuel in.
                    </p>
                    <p style={paragraphStyle}>
                        The prescription? Push harder. Pump more insulin. Force the door open.
                    </p>
                    <p style={{ ...paragraphStyle, fontSize: '1.3rem', fontWeight: '600', color: 'var(--color-primary)', marginTop: '2rem' }}>
                        But that model is wrong.
                    </p>

                    <div style={luxuryBoxStyle}>
                        <h3 style={{ fontSize: '1.8rem', fontWeight: '700', color: 'var(--color-text)', marginBottom: '1.5rem' }}>
                            The Overflow Hypothesis
                        </h3>
                        <p style={paragraphStyle}>
                            The cell is not broken. <strong>The cell is protecting itself.</strong>
                        </p>
                        <p style={paragraphStyle}>
                            The real problem is <strong>Ectopic Lipid Accumulation</strong>—fat deposited where it doesn't belong. Inside muscle cells. Inside liver cells. Inside the very machinery responsible for burning fuel.
                        </p>
                        <p style={paragraphStyle}>
                            When the cell's energy factories (mitochondria) are clogged with "soot" (reactive oxygen species) and backlogged fuel (lipids), the cell <em>locks the doors</em> to prevent an internal explosion.
                        </p>
                    </div>

                    <h3 style={subheadingStyle}>The Foreman and the Factory</h3>
                    <p style={paragraphStyle}>
                        Imagine a factory floor:
                    </p>
                    <ul style={{ fontSize: '1.2rem', lineHeight: '1.9', marginLeft: '2rem', marginBottom: '2rem' }}>
                        <li style={{ marginBottom: '1rem' }}>
                            <strong>Insulin</strong> is the <strong>Foreman</strong>, trying to push fuel (glucose) into the <strong>Cell</strong> (the Factory).
                        </li>
                        <li style={{ marginBottom: '1rem' }}>
                            The <strong>Mitochondria</strong> are the <strong>Machinery</strong>, responsible for burning that fuel cleanly and efficiently.
                        </li>
                        <li style={{ marginBottom: '1rem' }}>
                            But the Machinery is <strong>clogged with soot</strong> (ROS/Free Radicals) and <strong>backlogged with unprocessed fuel</strong> (lipids).
                        </li>
                        <li style={{ marginBottom: '1rem' }}>
                            The Factory <strong>locks the doors</strong> to prevent overload and combustion.
                        </li>
                        <li style={{ marginBottom: '1rem' }}>
                            The Foreman <strong>yells louder</strong>—the Pancreas pumps more Insulin.
                        </li>
                    </ul>
                    <p style={paragraphStyle}>
                        The result? <strong>Hyperinsulinemia</strong>—chronically elevated insulin levels, even when blood glucose appears "normal."
                    </p>

                    <div style={citationStyle}>
                        <strong>Scientific Foundation:</strong> This model is supported by the groundbreaking work of <strong>Dr. Gerald Shulman</strong> at Yale University, whose research on intramyocellular lipids demonstrated that fat accumulation inside muscle cells directly impairs insulin signaling and mitochondrial function.
                    </div>
                </section>

                {/* SECTION 3: THE THREE STAGES */}
                <section style={sectionStyle}>
                    <h2 style={headingStyle}>The Three Stages of Metabolic Decline</h2>
                    <div style={{ width: '80px', height: '4px', background: 'var(--color-accent-teal)', marginBottom: '3rem' }}></div>

                    <p style={{ ...paragraphStyle, fontSize: '1.15rem', color: 'var(--color-text-muted)' }}>
                        Metabolic disease is not a light switch. It is a slow dimmer, degrading over years—often decades—before symptoms appear.
                    </p>

                    {/* STAGE 1: METABOLIC FLEXIBILITY */}
                    <div style={stageBoxStyle}>
                        <div style={{
                            position: 'absolute',
                            top: '1.5rem',
                            left: '3rem',
                            fontSize: '6rem',
                            fontWeight: '900',
                            color: 'rgba(32, 178, 170, 0.08)',
                            lineHeight: '1',
                            fontFamily: '"Manrope", sans-serif'
                        }}>01</div>

                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <h3 style={{
                                fontSize: '2rem',
                                fontWeight: '700',
                                color: 'var(--color-accent-teal)',
                                marginBottom: '1rem',
                                fontFamily: '"Manrope", sans-serif'
                            }}>
                                Stage 1: Metabolic Flexibility
                            </h3>
                            <div style={{
                                fontSize: '1.1rem',
                                fontStyle: 'italic',
                                color: 'var(--color-text-muted)',
                                marginBottom: '2rem'
                            }}>
                                The Efficient Engine
                            </div>

                            <p style={paragraphStyle}>
                                In this healthy state, fuel is <strong>accepted and burned cleanly</strong>.
                            </p>
                            <p style={paragraphStyle}>
                                Insulin arrives. The gates open smoothly. Glucose flows into the cell. The mitochondria ignite it efficiently, producing clean energy (ATP) with minimal waste.
                            </p>
                            <p style={paragraphStyle}>
                                <strong>Key Markers:</strong>
                            </p>
                            <ul style={{ fontSize: '1.15rem', lineHeight: '1.8', marginLeft: '2rem', marginBottom: '2rem' }}>
                                <li>Fasting Insulin: &lt;5 µIU/mL</li>
                                <li>Fasting Glucose: 70-85 mg/dL</li>
                                <li>HOMA-IR: &lt;1.0</li>
                                <li>Energy: Stable, consistent, vibrant</li>
                            </ul>

                            {/* Stage 1 Image */}
                            <img
                                src="/healthy_cell_diagram.png"
                                alt="Stage 1 Metabolic Flexibility - Healthy muscle cell with clean glucose flow and bright mitochondrial energy production"
                                style={imageStyle}
                            />
                        </div>
                    </div>

                    {/* STAGE 2: THE SILENT ALARM */}
                    <div style={{ ...stageBoxStyle, borderColor: '#FF9500' }}>
                        <div style={{
                            position: 'absolute',
                            top: '1.5rem',
                            left: '3rem',
                            fontSize: '6rem',
                            fontWeight: '900',
                            color: 'rgba(255, 149, 0, 0.08)',
                            lineHeight: '1',
                            fontFamily: '"Manrope", sans-serif'
                        }}>02</div>

                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <h3 style={{
                                fontSize: '2rem',
                                fontWeight: '700',
                                color: '#FF9500',
                                marginBottom: '1rem',
                                fontFamily: '"Manrope", sans-serif'
                            }}>
                                Stage 2: The Silent Alarm
                            </h3>
                            <div style={{
                                fontSize: '1.1rem',
                                fontStyle: 'italic',
                                color: 'var(--color-text-muted)',
                                marginBottom: '2rem'
                            }}>
                                Compensated Hyperinsulinemia
                            </div>

                            <p style={{ ...paragraphStyle, fontSize: '1.25rem', fontWeight: '600', color: '#FF9500' }}>
                                This is the most dangerous stage—because <strong>your doctor will tell you that you're fine</strong>.
                            </p>

                            <p style={paragraphStyle}>
                                Your <strong>blood glucose is normal</strong>. Your HbA1c is "in range." But beneath the surface, <strong>your insulin is screaming</strong>.
                            </p>

                            <p style={paragraphStyle}>
                                The cell is beginning to resist entry. Why? Not because it's broken, but because it's <strong>protecting itself from overflow</strong>. The mitochondria are clogged. Intracellular lipids are accumulating. Oxidative stress is rising.
                            </p>

                            <p style={paragraphStyle}>
                                To compensate, the pancreas pumps <em>more</em> insulin—forcing glucose into the cell despite resistance.
                            </p>

                            <p style={paragraphStyle}>
                                <strong>Key Markers:</strong>
                            </p>
                            <ul style={{ fontSize: '1.15rem', lineHeight: '1.8', marginLeft: '2rem', marginBottom: '2rem' }}>
                                <li>Fasting Insulin: 10-20+ µIU/mL (High!)</li>
                                <li>Fasting Glucose: 85-99 mg/dL (Still "Normal")</li>
                                <li>HOMA-IR: 2.0-4.0</li>
                                <li>Energy: Post-meal crashes, cravings, brain fog</li>
                            </ul>

                            <div style={{
                                background: 'rgba(255, 149, 0, 0.08)',
                                border: '2px solid #FF9500',
                                borderRadius: '12px',
                                padding: '2rem',
                                marginTop: '2rem'
                            }}>
                                <p style={{ fontSize: '1.15rem', fontWeight: '600', color: 'var(--color-text)', marginBottom: '0' }}>
                                    ⚠️ <strong>Critical Insight:</strong> This stage can persist for <strong>10-20 years</strong> before blood glucose rises. By the time you're diagnosed with "Pre-Diabetes," the damage is already systemic.
                                </p>
                            </div>

                            {/* Stage 2 Image */}
                            <img
                                src="/compensated_resistance_cell.png"
                                alt="Stage 2 Compensated Hyperinsulinemia - Muscle cell showing lipid buildup, dimmed mitochondria, and insulin resistance"
                                style={imageStyle}
                            />
                        </div>
                    </div>

                    {/* STAGE 3: SYSTEMIC OVERFLOW */}
                    <div style={{ ...stageBoxStyle, borderColor: '#FF3B30' }}>
                        <div style={{
                            position: 'absolute',
                            top: '1.5rem',
                            left: '3rem',
                            fontSize: '6rem',
                            fontWeight: '900',
                            color: 'rgba(255, 59, 48, 0.08)',
                            lineHeight: '1',
                            fontFamily: '"Manrope", sans-serif'
                        }}>03</div>

                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <h3 style={{
                                fontSize: '2rem',
                                fontWeight: '700',
                                color: '#FF3B30',
                                marginBottom: '1rem',
                                fontFamily: '"Manrope", sans-serif'
                            }}>
                                Stage 3: Systemic Overflow
                            </h3>
                            <div style={{
                                fontSize: '1.1rem',
                                fontStyle: 'italic',
                                color: 'var(--color-text-muted)',
                                marginBottom: '2rem'
                            }}>
                                Type 2 Diabetes
                            </div>

                            <p style={paragraphStyle}>
                                The system <strong>fails</strong>.
                            </p>

                            <p style={paragraphStyle}>
                                The cell gates are <em>shut completely</em>. The mitochondria are dark, dormant, suffocated by lipid overload. The pancreas is exhausted—years of overproduction have burned out the beta cells.
                            </p>

                            <p style={paragraphStyle}>
                                Glucose can no longer enter the cell. It accumulates in the blood. Insulin can no longer compensate.
                            </p>

                            <p style={paragraphStyle}>
                                <strong>Welcome to Type 2 Diabetes.</strong>
                            </p>

                            <p style={paragraphStyle}>
                                <strong>Key Markers:</strong>
                            </p>
                            <ul style={{ fontSize: '1.15rem', lineHeight: '1.8', marginLeft: '2rem', marginBottom: '2rem' }}>
                                <li>Fasting Insulin: Variable (may decline as beta cells fail)</li>
                                <li>Fasting Glucose: 100-125+ mg/dL</li>
                                <li>HbA1c: 5.7-6.4% (Pre-Diabetes) or &gt;6.5% (Diabetes)</li>
                                <li>Energy: Chronic fatigue, neuropathy, vision changes</li>
                            </ul>

                            {/* Stage 3 Image */}
                            <img
                                src="/decompensated_failure_cell.png"
                                alt="Stage 3 Type 2 Diabetes - Muscle cell in metabolic failure with sealed gates, dark mitochondria, and glucose gridlock"
                                style={imageStyle}
                            />
                        </div>
                    </div>
                </section>

                {/* SECTION 4: THE DOUBLE THREAT */}
                <section style={sectionStyle}>
                    <h2 style={headingStyle}>The Double Threat</h2>
                    <div style={{ width: '80px', height: '4px', background: 'var(--color-accent-teal)', marginBottom: '3rem' }}></div>

                    <p style={{ ...paragraphStyle, fontSize: '1.2rem', fontWeight: '500' }}>
                        Most people think the only problem is <strong>high blood sugar</strong>. But there are <em>two</em> toxins circulating in insulin resistance:
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginTop: '4rem' }}>
                        {/* Hyperinsulinemia */}
                        <div style={{
                            background: '#FFFFFF',
                            border: '2px solid #1A3C34',
                            borderRadius: '16px',
                            padding: '2.5rem',
                            boxShadow: '0 6px 20px rgba(0,0,0,0.05)'
                        }}>
                            <div style={{
                                fontSize: '3rem',
                                marginBottom: '1rem'
                            }}>🔇</div>
                            <h3 style={{
                                fontSize: '1.8rem',
                                fontWeight: '700',
                                color: 'var(--color-primary)',
                                marginBottom: '1rem'
                            }}>
                                The Silent Assassin
                            </h3>
                            <div style={{
                                fontSize: '1rem',
                                fontWeight: '600',
                                color: 'var(--color-accent-teal)',
                                marginBottom: '1.5rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                            }}>
                                Hyperinsulinemia
                            </div>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                                High insulin itself is <strong>toxic</strong>—even if glucose is normal.
                            </p>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '0.75rem' }}>
                                <strong>Damage:</strong>
                            </p>
                            <ul style={{ fontSize: '1.05rem', lineHeight: '1.7', marginLeft: '1.5rem' }}>
                                <li>Vascular stiffening → High BP</li>
                                <li>Cancer growth signaling (mTOR, IGF-1)</li>
                                <li>Brain inflammation → Alzheimer's</li>
                                <li>Hormonal disruption (PCOS, low testosterone)</li>
                            </ul>
                        </div>

                        {/* Hyperglycemia */}
                        <div style={{
                            background: '#FFFFFF',
                            border: '2px solid #FF3B30',
                            borderRadius: '16px',
                            padding: '2.5rem',
                            boxShadow: '0 6px 20px rgba(0,0,0,0.05)'
                        }}>
                            <div style={{
                                fontSize: '3rem',
                                marginBottom: '1rem'
                            }}>🔥</div>
                            <h3 style={{
                                fontSize: '1.8rem',
                                fontWeight: '700',
                                color: '#FF3B30',
                                marginBottom: '1rem'
                            }}>
                                The Loud Destroyer
                            </h3>
                            <div style={{
                                fontSize: '1rem',
                                fontWeight: '600',
                                color: '#FF9500',
                                marginBottom: '1.5rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                            }}>
                                Hyperglycemia
                            </div>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                                High glucose <strong>"caramelizes" tissues</strong> through glycation.
                            </p>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '0.75rem' }}>
                                <strong>Damage:</strong>
                            </p>
                            <ul style={{ fontSize: '1.05rem', lineHeight: '1.7', marginLeft: '1.5rem' }}>
                                <li>AGEs (Advanced Glycation End-products)</li>
                                <li>Skin aging (wrinkles, loss of elasticity)</li>
                                <li>Organ brittleness (kidneys, nerves, eyes)</li>
                                <li>Accelerated cellular aging</li>
                            </ul>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', fontStyle: 'italic', marginTop: '1rem', color: 'var(--color-text-muted)' }}>
                                Think of it like crème brûlée: sugar hardens tissues, making them stiff and dysfunctional.
                            </p>
                        </div>
                    </div>

                    <div style={{
                        background: 'rgba(255, 59, 48, 0.05)',
                        border: '2px solid #FF3B30',
                        borderRadius: '16px',
                        padding: '2.5rem',
                        marginTop: '3rem',
                        textAlign: 'center'
                    }}>
                        <p style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--color-text)', marginBottom: '0' }}>
                            The worst case? <strong>Both are elevated simultaneously.</strong><br />
                            This is the metabolic apocalypse most people are living in—unknowingly.
                        </p>
                    </div>
                </section>

                {/* SECTION 5: THE SMART AGING PROTOCOL */}
                <section style={sectionStyle}>
                    <h2 style={headingStyle}>The "Smart Aging" Protocol</h2>
                    <div style={{ width: '80px', height: '4px', background: 'var(--color-accent-teal)', marginBottom: '3rem' }}></div>

                    <div style={{
                        textAlign: 'center',
                        fontSize: '2.5rem',
                        fontWeight: '800',
                        fontFamily: '"Manrope", sans-serif',
                        color: 'var(--color-primary)',
                        marginBottom: '3rem',
                        fontStyle: 'italic'
                    }}>
                        "To Optimize, or Not to Optimize."
                    </div>

                    <p style={{ ...paragraphStyle, fontSize: '1.2rem' }}>
                        The question is not whether insulin resistance will affect you. The question is <strong>how far it has already progressed</strong>—and whether you will reverse it.
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2.5rem',
                        marginTop: '4rem'
                    }}>
                        {/* Action 1 */}
                        <div style={{
                            background: '#FFFFFF',
                            borderRadius: '16px',
                            padding: '2.5rem',
                            boxShadow: '0 6px 24px rgba(0,0,0,0.06)',
                            borderTop: '4px solid var(--color-accent-teal)'
                        }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🏃‍♂️</div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--color-text)', marginBottom: '1rem' }}>
                                Zone 2 Training
                            </h3>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text)', marginBottom: '1rem' }}>
                                Build more "factories" (Mitochondrial Biogenesis).
                            </p>
                            <p style={{ fontSize: '1rem', lineHeight: '1.6', color: 'var(--color-text-muted)' }}>
                                <strong>Protocol:</strong> 45-60 minutes of low-intensity cardio at 60-70% max heart rate, 3-5x/week. This signals your cells to build <em>new, clean mitochondria</em>.
                            </p>
                        </div>

                        {/* Action 2 */}
                        <div style={{
                            background: '#FFFFFF',
                            borderRadius: '16px',
                            padding: '2.5rem',
                            boxShadow: '0 6px 24px rgba(0,0,0,0.06)',
                            borderTop: '4px solid var(--color-accent-teal)'
                        }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⏱️</div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--color-text)', marginBottom: '1rem' }}>
                                Time-Restricted Eating
                            </h3>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text)', marginBottom: '1rem' }}>
                                Allow the factory to clear the backlog of "dirt and grit."
                            </p>
                            <p style={{ fontSize: '1rem', lineHeight: '1.6', color: 'var(--color-text-muted)' }}>
                                <strong>Protocol:</strong> Compress your eating window to 8-10 hours. This gives your cells 14-16 hours of <em>autophagy</em>—the cellular "self-cleaning" process.
                            </p>
                        </div>

                        {/* Action 3 */}
                        <div style={{
                            background: '#FFFFFF',
                            borderRadius: '16px',
                            padding: '2.5rem',
                            boxShadow: '0 6px 24px rgba(0,0,0,0.06)',
                            borderTop: '4px solid var(--color-accent-teal)'
                        }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💊</div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--color-text)', marginBottom: '1rem' }}>
                                Targeted Supplements
                            </h3>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text)', marginBottom: '1rem' }}>
                                Support mitochondrial health and insulin sensitivity.
                            </p>
                            <ul style={{ fontSize: '1rem', lineHeight: '1.6', color: 'var(--color-text-muted)', marginLeft: '1.2rem' }}>
                                <li style={{ marginBottom: '0.5rem' }}>
                                    <strong>Berberine:</strong> AMPK activator (500mg, 2x/day)
                                </li>
                                <li>
                                    <strong>Alpha Lipoic Acid:</strong> Mitochondrial antioxidant (600mg/day)
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* CTA Box */}
                    <div style={{
                        background: 'linear-gradient(135deg, #1A3C34 0%, #0F2922 100%)',
                        borderRadius: '20px',
                        padding: '4rem 3rem',
                        marginTop: '5rem',
                        textAlign: 'center',
                        color: '#FFFFFF',
                        boxShadow: '0 12px 40px rgba(0,0,0,0.15)'
                    }}>
                        <h3 style={{
                            fontSize: '2rem',
                            fontWeight: '800',
                            marginBottom: '1.5rem',
                            color: 'var(--color-accent-teal)',
                            fontFamily: '"Manrope", sans-serif'
                        }}>
                            Stop Guessing. Start Measuring.
                        </h3>
                        <p style={{ fontSize: '1.25rem', lineHeight: '1.8', marginBottom: '2rem', color: 'rgba(255,255,255,0.95)' }}>
                            Order a <strong>Fasting Insulin test</strong>, not just an HbA1c.<br />
                            True prevention starts <em>before</em> the sugar rises.
                        </p>
                        <Link
                            to="/diagnostics"
                            style={{
                                display: 'inline-block',
                                padding: '1.2rem 3rem',
                                background: 'var(--color-accent-teal)',
                                color: '#1A3C34',
                                fontSize: '1.1rem',
                                fontWeight: '700',
                                borderRadius: '10px',
                                textDecoration: 'none',
                                boxShadow: '0 8px 24px rgba(32, 178, 170, 0.3)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={e => {
                                e.target.style.transform = 'translateY(-3px)';
                                e.target.style.boxShadow = '0 12px 32px rgba(32, 178, 170, 0.4)';
                            }}
                            onMouseLeave={e => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 8px 24px rgba(32, 178, 170, 0.3)';
                            }}
                        >
                            Explore The Diagnostics →
                        </Link>
                    </div>
                </section>

                {/* Footer Navigation */}
                <div style={{
                    marginTop: '6rem',
                    paddingTop: '3rem',
                    borderTop: '2px solid rgba(0,0,0,0.08)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '2rem'
                }}>
                    <Link
                        to="/mitochondrial-guide"
                        style={{
                            fontSize: '1.1rem',
                            color: 'var(--color-primary)',
                            textDecoration: 'none',
                            fontWeight: '600'
                        }}
                    >
                        ← Mitochondrial Health Guide
                    </Link>
                    <Link
                        to="/longevity"
                        style={{
                            fontSize: '1.1rem',
                            color: 'var(--color-primary)',
                            textDecoration: 'none',
                            fontWeight: '600'
                        }}
                    >
                        The 5 Pillars of Longevity →
                    </Link>
                </div>

            </div>
        </div>
    );
}

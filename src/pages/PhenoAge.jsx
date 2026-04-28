import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import EmailCapture from '../components/EmailCapture';

const PhenoAge = () => {
    // US Standard Units
    const [formData, setFormData] = useState({
        age: 45,
        albumin: 4.5, // g/dL
        creatinine: 0.9, // mg/dL
        glucose: 90, // mg/dL
        crp: 1.5, // mg/L
        lymphocyte: 30, // %
        mcv: 90, // fL
        rdw: 13, // %
        alp: 70, // U/L
        wbc: 6.0 // 1000/uL
    });

    const [results, setResults] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: parseFloat(value) || value
        }));
    };

    const calculateAge = () => {
        // Convert to SI units for the Levine algorithm
        const albumin_gL = formData.albumin * 10;
        const creatinine_umolL = formData.creatinine * 88.4;
        const glucose_mmolL = formData.glucose / 18;
        const crp_mgdL = formData.crp / 10; // CRP in formula is mg/dL

        // Levine Phenotypic Age Algorithm (NHANES III)
        const lnCrp = Math.log(crp_mgdL > 0 ? crp_mgdL : 0.01);
        
        let xb = -19.907 
                 - 0.0336 * albumin_gL 
                 + 0.0095 * creatinine_umolL 
                 + 0.1953 * glucose_mmolL 
                 + 0.0954 * lnCrp 
                 - 0.0120 * formData.lymphocyte 
                 + 0.0268 * formData.mcv 
                 + 0.3306 * formData.rdw 
                 + 0.00188 * formData.alp 
                 + 0.0554 * formData.wbc 
                 + 0.0804 * formData.age;

        // Baseline mortality calculation
        const mortalityScore = 1 - Math.exp(-1.51714 * Math.exp(xb) * (Math.exp(0.0076927 * 120) - 1) / 0.0076927);
        
        // Phenotypic Age Conversion
        const phenoAge = 141.50225 + (Math.log(-0.00553 * Math.log(1 - mortalityScore))) / 0.090165;
        
        const biologicalAge = isNaN(phenoAge) ? formData.age : Math.round(phenoAge * 10) / 10;
        const ageDiff = Math.round((biologicalAge - formData.age) * 10) / 10;

        setResults({
            biologicalAge,
            chronologicalAge: formData.age,
            difference: ageDiff,
            status: ageDiff < 0 ? 'Optimal' : ageDiff > 5 ? 'Accelerated Aging' : 'Standard'
        });
    };

    return (
        <div style={{ padding: '6rem 1.5rem', background: '#F8F9FA', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
            <Helmet>
                <title>Phenotypic Biological Age Calculator | EmpowerVida</title>
                <meta name="description" content="Calculate your true cellular age using the 9 clinical biomarkers of the Phenotypic Age (PhenoAge) algorithm." />
            </Helmet>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ maxWidth: '800px', margin: '0 auto' }}
            >
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <span style={{ background: 'rgba(32, 178, 170, 0.1)', color: '#20B2AA', padding: '0.5rem 1rem', borderRadius: '50px', fontSize: '0.875rem', fontWeight: 600 }}>Clinical Tool</span>
                    <h1 style={{ fontSize: '3rem', color: '#1A3C34', marginTop: '1rem', marginBottom: '1rem', fontWeight: 800 }}>Biological Age Calculator</h1>
                    <p style={{ fontSize: '1.2rem', color: '#4A5568', lineHeight: 1.6 }}>Are you aging faster inside than outside? Input your routine lab results below to calculate your validated Phenotypic Age.</p>
                </div>

                <div style={{ background: 'white', padding: '3rem', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                        {/* Age & Basic */}
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#4A5568', fontWeight: 600 }}>Chronological Age</label>
                            <input type="number" name="age" value={formData.age} onChange={handleInputChange} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '1.1rem' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#4A5568', fontWeight: 600 }}>Fasting Glucose (mg/dL)</label>
                            <input type="number" name="glucose" value={formData.glucose} onChange={handleInputChange} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '1.1rem' }} />
                        </div>
                        
                        {/* Liver/Kidney */}
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#4A5568', fontWeight: 600 }}>Albumin (g/dL)</label>
                            <input type="number" name="albumin" value={formData.albumin} onChange={handleInputChange} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '1.1rem' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#4A5568', fontWeight: 600 }}>Creatinine (mg/dL)</label>
                            <input type="number" name="creatinine" value={formData.creatinine} onChange={handleInputChange} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '1.1rem' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#4A5568', fontWeight: 600 }}>Alk Phos [ALP] (U/L)</label>
                            <input type="number" name="alp" value={formData.alp} onChange={handleInputChange} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '1.1rem' }} />
                        </div>

                        {/* Immune / Inflammation */}
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#4A5568', fontWeight: 600 }}>hs-CRP (mg/L)</label>
                            <input type="number" name="crp" value={formData.crp} onChange={handleInputChange} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '1.1rem' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#4A5568', fontWeight: 600 }}>WBC (x10³/µL)</label>
                            <input type="number" name="wbc" value={formData.wbc} onChange={handleInputChange} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '1.1rem' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#4A5568', fontWeight: 600 }}>Lymphocyte (%)</label>
                            <input type="number" name="lymphocyte" value={formData.lymphocyte} onChange={handleInputChange} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '1.1rem' }} />
                        </div>

                        {/* Red Blood Cells */}
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#4A5568', fontWeight: 600 }}>MCV (fL)</label>
                            <input type="number" name="mcv" value={formData.mcv} onChange={handleInputChange} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '1.1rem' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#4A5568', fontWeight: 600 }}>RDW (%)</label>
                            <input type="number" name="rdw" value={formData.rdw} onChange={handleInputChange} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '1.1rem' }} />
                        </div>
                    </div>

                    <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                        <button 
                            onClick={calculateAge}
                            style={{ background: '#20B2AA', color: 'white', padding: '1rem 3rem', fontSize: '1.25rem', fontWeight: 700, borderRadius: '50px', border: 'none', cursor: 'pointer', boxShadow: '0 10px 20px rgba(32, 178, 170, 0.3)', transition: 'transform 0.2s' }}
                            onMouseOver={(e) => e.target.style.transform = 'translateY(-3px)'}
                            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
                        >
                            Analyze Biological Age
                        </button>
                    </div>

                    {results && (
                        <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            style={{ marginTop: '3rem', padding: '3rem', background: '#F0FDF8', borderRadius: '16px', border: '2px solid #20B2AA', textAlign: 'center' }}
                        >
                            <h2 style={{ fontSize: '1.5rem', color: '#1A3C34', marginBottom: '1rem' }}>Clinical Analysis Complete</h2>
                            
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', margin: '2rem 0' }}>
                                <div>
                                    <p style={{ color: '#4A5568', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px', fontWeight: 600 }}>Chronological</p>
                                    <p style={{ fontSize: '3rem', fontWeight: 800, color: '#1A3C34' }}>{results.chronologicalAge}</p>
                                </div>
                                <div style={{ borderLeft: '2px solid #CBD5E1', paddingLeft: '3rem' }}>
                                    <p style={{ color: '#4A5568', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px', fontWeight: 600 }}>Biological (PhenoAge)</p>
                                    <p style={{ fontSize: '3.5rem', fontWeight: 800, color: results.difference > 0 ? '#E53E3E' : '#20B2AA' }}>{results.biologicalAge}</p>
                                </div>
                            </div>

                            <p style={{ fontSize: '1.25rem', color: '#2D3748', fontWeight: 500 }}>
                                You are biologically <span style={{ color: results.difference > 0 ? '#E53E3E' : '#20B2AA', fontWeight: 700 }}>{Math.abs(results.difference)} years {results.difference > 0 ? 'older' : 'younger'}</span> than your chronological age. 
                            </p>

                            <p style={{ fontSize: '0.85rem', color: '#718096', marginTop: '2rem', fontStyle: 'italic' }}>
                                *Disclaimer: This calculator utilizes the Levine Phenotypic Age algorithm based on NHANES data. This tool is strictly for educational purposes and should not be used as medical advice or formal diagnostics.
                            </p>
                        </motion.div>
                    )}
                </div>

                <div style={{ marginTop: '4rem' }}>
                    <EmailCapture variant="inline" />
                </div>
            </motion.div>
        </div>
    );
};

export default PhenoAge;

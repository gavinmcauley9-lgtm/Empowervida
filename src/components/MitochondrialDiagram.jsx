import React, { useState } from 'react';

const MitochondrialDiagram = () => {
    const [activeTooltip, setActiveTooltip] = useState(null);

    const supplements = [
        {
            id: 'mag',
            name: 'Magnesium L-Threonate',
            x: 260,
            y: 30,
            angle: -90,
            mechanism: 'Crosses BBB to support ATP synthesis and calcium regulation in mitochondria'
        },
        {
            id: 'creatine',
            name: 'Creatine Monohydrate',
            x: 390,
            y: 60,
            angle: -60,
            mechanism: 'Rapidly regenerates ATP from ADP, buffering cellular energy during high demand'
        },
        {
            id: 'alcar',
            name: 'ALCAR',
            x: 470,
            y: 140,
            angle: -30,
            mechanism: 'Shuttles fatty acids into mitochondria for beta-oxidation and energy production'
        },
        {
            id: 'citicoline',
            name: 'Citicoline',
            x: 490,
            y: 240,
            angle: 0,
            mechanism: 'Repairs mitochondrial membranes and supports phospholipid synthesis'
        },
        {
            id: 'ala',
            name: 'Alpha Lipoic Acid',
            x: 470,
            y: 340,
            angle: 30,
            mechanism: 'Universal antioxidant that regenerates CoQ10 and protects mitochondrial membranes'
        },
        {
            id: 'glynac',
            name: 'GlyNAC (Glycine + NAC)',
            x: 390,
            y: 420,
            angle: 60,
            mechanism: 'Synergistic glutathione precursors that restore cellular redox balance and mitochondrial function'
        },
        {
            id: 'vitc',
            name: 'Vitamin C',
            x: 260,
            y: 470,
            angle: 90,
            mechanism: 'Recycles Vitamin E and supports Complex IV (cytochrome c oxidase) function'
        },
        {
            id: 'urolithin',
            name: 'Urolithin A',
            x: 130,
            y: 420,
            angle: 120,
            mechanism: 'Induces mitophagy to remove damaged mitochondria and promote cellular renewal'
        },
        {
            id: 'pqq',
            name: 'PQQ',
            x: 50,
            y: 340,
            angle: 150,
            mechanism: 'Triggers mitochondrial biogenesis via PGC-1α activation'
        },
        {
            id: 'ubiquinol',
            name: 'Ubiquinol',
            x: 30,
            y: 240,
            angle: 180,
            mechanism: 'Active form of CoQ10, critical electron carrier in Complex I and II'
        },
        {
            id: 'nad',
            name: 'NAD+',
            x: 50,
            y: 140,
            angle: -150,
            mechanism: 'Essential cofactor for electron transport chain and PARP-mediated DNA repair'
        },
        {
            id: 'omega3',
            name: 'Omega-3',
            x: 130,
            y: 60,
            angle: -120,
            mechanism: 'Maintains mitochondrial membrane fluidity and reduces oxidative stress'
        },
        {
            id: 'rhodiola',
            name: 'Rhodiola',
            x: 180,
            y: 450,
            angle: 105,
            mechanism: 'Adaptogen that enhances mitochondrial resilience under oxidative stress'
        },
        {
            id: 'bcomplex',
            name: 'B-Complex',
            x: 340,
            y: 450,
            angle: 75,
            mechanism: 'Cofactors for Krebs cycle enzymes and electron transport chain complexes'
        }
    ];

    return (
        <div style={{
            width: '100%',
            maxWidth: '600px',
            margin: '0 auto',
            position: 'relative',
            padding: '2rem 0',
            background: 'radial-gradient(circle at center, rgba(32, 178, 170, 0.03) 0%, rgba(255, 255, 255, 0) 70%)',
            borderRadius: '20px'
        }}>
            <style>
                {`
                    @keyframes mitochondrialPulse {
                        0%, 100% {
                            filter: drop-shadow(0 0 20px rgba(32, 178, 170, 0.4));
                        }
                        50% {
                            filter: drop-shadow(0 0 35px rgba(32, 178, 170, 0.6));
                        }
                    }
                    .mitochondrion-glow {
                        animation: mitochondrialPulse 3s ease-in-out infinite;
                    }
                `}
            </style>
            <svg
                viewBox="0 0 520 540"
                style={{
                    width: '100%',
                    height: 'auto'
                }}
            >
                {/* Mitochondrion - anatomically accurate structure */}
                <defs>
                    <linearGradient id="mitoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#8B5CF6', stopOpacity: 0.8 }} />
                        <stop offset="50%" style={{ stopColor: '#EC4899', stopOpacity: 0.9 }} />
                        <stop offset="100%" style={{ stopColor: '#F59E0B', stopOpacity: 0.8 }} />
                    </linearGradient>

                    <filter id="glow">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Mitochondrion Image - soft edges blend into background */}
                <image
                    href="/mitochondrion_center.png"
                    x="115"
                    y="165"
                    width="290"
                    height="210"
                    className="mitochondrion-glow"
                />

                {/* Connection lines and labels */}
                {supplements.map((supp) => {
                    const lineEndX = 260 + Math.cos((supp.angle * Math.PI) / 180) * 100;
                    const lineEndY = 270 + Math.sin((supp.angle * Math.PI) / 180) * 75;

                    return (
                        <g key={supp.id}>
                            {/* Connection line */}
                            <line
                                x1={lineEndX}
                                y1={lineEndY}
                                x2={supp.x}
                                y2={supp.y}
                                stroke="#20B2AA"
                                strokeWidth="1.5"
                                strokeDasharray="4,4"
                                opacity="0.5"
                            />

                            {/* Label circle */}
                            <circle
                                cx={supp.x}
                                cy={supp.y}
                                r="8"
                                fill="#FFFFFF"
                                stroke="#20B2AA"
                                strokeWidth="2"
                                style={{ pointerEvents: 'none' }}
                            />

                            {/* Label text */}
                            <text
                                x={supp.x}
                                y={supp.y - 15}
                                textAnchor="middle"
                                fill="#1A1A1A"
                                fontSize="13"
                                fontWeight="600"
                                style={{
                                    userSelect: 'none',
                                    pointerEvents: 'none'
                                }}
                            >
                                {supp.name}
                            </text>

                            {/* Larger invisible hover area - covers text and circle */}
                            <rect
                                x={supp.x - 60}
                                y={supp.y - 35}
                                width="120"
                                height="50"
                                fill="transparent"
                                style={{ cursor: 'pointer' }}
                                onMouseEnter={() => setActiveTooltip(supp.id)}
                                onMouseLeave={() => setActiveTooltip(null)}
                                onClick={() => setActiveTooltip(activeTooltip === supp.id ? null : supp.id)}
                            />
                        </g>
                    );
                })}

                {/* Tooltips - rendered last to ensure they appear above all other elements */}
                {supplements.map((supp) => {
                    if (activeTooltip !== supp.id) return null;

                    // Position tooltip above if in bottom half, below if in top half
                    const tooltipY = supp.y > 270 ? supp.y - 110 : supp.y + 15;

                    // Smart X positioning to avoid clipping
                    let tooltipX;
                    if (supp.x < 150) {
                        // Left side - align tooltip to start at supplement position
                        tooltipX = supp.x - 20;
                    } else if (supp.x > 370) {
                        // Right side - align tooltip to end at supplement position
                        tooltipX = supp.x - 220;
                    } else {
                        // Center - center the tooltip
                        tooltipX = supp.x - 120;
                    }

                    return (
                        <g key={`tooltip-${supp.id}`}>
                            <rect
                                x={tooltipX}
                                y={tooltipY}
                                width="240"
                                height="90"
                                rx="8"
                                fill="rgba(0, 0, 0, 0.95)"
                                stroke="#20B2AA"
                                strokeWidth="2"
                            />
                            <foreignObject
                                x={tooltipX + 10}
                                y={tooltipY + 5}
                                width="220"
                                height="80"
                            >
                                <div style={{
                                    color: '#FFFFFF',
                                    fontSize: '11px',
                                    lineHeight: '1.4',
                                    padding: '8px',
                                    fontFamily: 'Inter, sans-serif'
                                }}>
                                    <strong style={{ color: '#20B2AA', display: 'block', marginBottom: '4px' }}>
                                        {supp.name}
                                    </strong>
                                    {supp.mechanism}
                                </div>
                            </foreignObject>
                        </g>
                    );
                })}
            </svg>

            {/* Mobile instruction */}
            <p style={{
                textAlign: 'center',
                fontSize: '0.85rem',
                color: 'var(--color-text-muted)',
                marginTop: '1rem',
                fontStyle: 'italic'
            }}>
                Hover (desktop) or tap (mobile) on supplement labels to see their mitochondrial mechanisms
            </p>
        </div>
    );
};

export default MitochondrialDiagram;

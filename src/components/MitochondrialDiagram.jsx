import React, { useState } from 'react';

const MitochondrialDiagram = () => {
    const [activeTooltip, setActiveTooltip] = useState(null);

    const supplements = [
        {
            id: 'mag',
            name: 'Magnesium L-Threonate',
            x: 180,
            y: 50,
            angle: -60,
            mechanism: 'Crosses BBB to support ATP synthesis and calcium regulation in mitochondria'
        },
        {
            id: 'alcar',
            name: 'ALCAR',
            x: 320,
            y: 80,
            angle: -30,
            mechanism: 'Shuttles fatty acids into mitochondria for beta-oxidation and energy production'
        },
        {
            id: 'omega3',
            name: 'Omega-3',
            x: 100,
            y: 140,
            angle: 180,
            mechanism: 'Maintains mitochondrial membrane fluidity and reduces oxidative stress'
        },
        {
            id: 'citicoline',
            name: 'Citicoline',
            x: 420,
            y: 140,
            angle: 0,
            mechanism: 'Repairs mitochondrial membranes and supports phospholipid synthesis'
        },
        {
            id: 'nad',
            name: 'NAD+',
            x: 80,
            y: 240,
            angle: 150,
            mechanism: 'Essential cofactor for electron transport chain and PARP-mediated DNA repair'
        },
        {
            id: 'ala',
            name: 'Alpha Lipoic Acid',
            x: 440,
            y: 220,
            angle: 30,
            mechanism: 'Universal antioxidant that regenerates CoQ10 and protects mitochondrial membranes'
        },
        {
            id: 'ubiquinol',
            name: 'Ubiquinol',
            x: 60,
            y: 340,
            angle: 120,
            mechanism: 'Active form of CoQ10, critical electron carrier in Complex I and II'
        },
        {
            id: 'nac',
            name: 'NAC',
            x: 460,
            y: 320,
            angle: 60,
            mechanism: 'Glutathione precursor that neutralizes ROS and protects mitochondrial DNA'
        },
        {
            id: 'rhodiola',
            name: 'Rhodiola',
            x: 120,
            y: 440,
            angle: 100,
            mechanism: 'Adaptogen that enhances mitochondrial resilience under oxidative stress'
        },
        {
            id: 'vitc',
            name: 'Vitamin C',
            x: 400,
            y: 420,
            angle: 80,
            mechanism: 'Recycles Vitamin E and supports Complex IV (cytochrome c oxidase) function'
        },
        {
            id: 'pqq',
            name: 'PQQ',
            x: 220,
            y: 480,
            angle: 90,
            mechanism: 'Triggers mitochondrial biogenesis via PGC-1α activation'
        },
        {
            id: 'bcomplex',
            name: 'B-Complex',
            x: 300,
            y: 490,
            angle: 90,
            mechanism: 'Cofactors for Krebs cycle enzymes and electron transport chain complexes'
        }
    ];

    return (
        <div style={{
            width: '100%',
            maxWidth: '600px',
            margin: '0 auto',
            position: 'relative',
            padding: '2rem 0'
        }}>
            <svg
                viewBox="0 0 520 540"
                style={{
                    width: '100%',
                    height: 'auto',
                    filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.3))'
                }}
            >
                {/* Mitochondrion - stylized cristae structure */}
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

                {/* Outer membrane */}
                <ellipse
                    cx="260"
                    cy="270"
                    rx="140"
                    ry="100"
                    fill="url(#mitoGradient)"
                    stroke="#20B2AA"
                    strokeWidth="3"
                    opacity="0.9"
                    filter="url(#glow)"
                />

                {/* Inner cristae folds */}
                <path
                    d="M 180 270 Q 200 250, 220 270 T 260 270 T 300 270 T 340 270"
                    fill="none"
                    stroke="#20B2AA"
                    strokeWidth="2.5"
                    opacity="0.7"
                />
                <path
                    d="M 190 300 Q 210 280, 230 300 T 270 300 T 310 300 T 330 300"
                    fill="none"
                    stroke="#20B2AA"
                    strokeWidth="2.5"
                    opacity="0.7"
                />
                <path
                    d="M 200 240 Q 220 220, 240 240 T 280 240 T 320 240"
                    fill="none"
                    stroke="#20B2AA"
                    strokeWidth="2.5"
                    opacity="0.7"
                />

                {/* ATP label in center */}
                <text
                    x="260"
                    y="275"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="32"
                    fontWeight="800"
                    style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
                >
                    ATP
                </text>

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
                                style={{ cursor: 'pointer' }}
                                onMouseEnter={() => setActiveTooltip(supp.id)}
                                onMouseLeave={() => setActiveTooltip(null)}
                                onClick={() => setActiveTooltip(activeTooltip === supp.id ? null : supp.id)}
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
                                    cursor: 'pointer',
                                    userSelect: 'none',
                                    pointerEvents: 'none'
                                }}
                            >
                                {supp.name}
                            </text>

                            {/* Tooltip */}
                            {activeTooltip === supp.id && (() => {
                                // Position tooltip above if in bottom half, below if in top half
                                const tooltipY = supp.y > 270 ? supp.y - 110 : supp.y + 15;
                                const tooltipX = supp.x - 120;

                                return (
                                    <g>
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
                            })()}
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

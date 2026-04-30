import React from 'react';

const MedicalBadge = () => {
    return (
        <div style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(32, 178, 170, 0.3)',
            borderRadius: '50px',
            padding: '8px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            zIndex: 9999,
            pointerEvents: 'none'
        }}>
            <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#20B2AA',
                boxShadow: '0 0 8px #20B2AA'
            }}></div>
            <span style={{
                fontSize: '0.8rem',
                fontWeight: '700',
                color: '#1A3C34',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
            }}>
                Medically Reviewed By Dr. Gavin McAuley, MBChB
            </span>
        </div>
    );
};

export default MedicalBadge;

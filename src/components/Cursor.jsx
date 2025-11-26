import React, { useEffect, useRef, useState } from 'react';

export default function Cursor() {
    const cursorRef = useRef(null);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
            }
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setHovered(true);
            } else {
                setHovered(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                border: '2px solid var(--color-ethereal)',
                pointerEvents: 'none',
                zIndex: 9999,
                transform: 'translate3d(-50%, -50%, 0)',
                transition: 'width 0.2s, height 0.2s, background-color 0.2s',
                backgroundColor: hovered ? 'rgba(0, 255, 204, 0.2)' : 'transparent',
                transformOrigin: 'center center',
                marginLeft: '-10px', // Center the cursor
                marginTop: '-10px',
                mixBlendMode: 'difference'
            }}
            className={hovered ? 'cursor-hover' : ''}
        />
    );
}

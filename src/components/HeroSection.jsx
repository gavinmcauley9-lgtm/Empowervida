import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = ({
    backgroundImage,
    title,
    subtitle,
    height = "100vh",
    overlay = "radial-gradient(circle at center, rgba(255,255,255,0) 0%, #FFFFFF 100%)",
    textColor = "#1A3C34",
    subtitleColor = "#1A3C34",
    textShadow = "none",
    subtitleShadow = "none",
    subtitleWeight = "400",
    children
}) => {
    const { scrollY } = useScroll();
    const backgroundY = useTransform(scrollY, [0, 500], [0, 250]); // Background moves slower (parallax)
    const contentY = useTransform(scrollY, [0, 500], [0, -150]);   // Content moves faster (parallax)
    const contentOpacity = useTransform(scrollY, [0, 300], [1, 0]); // Content fades out

    return (
        <section style={{
            position: 'relative',
            minHeight: height,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            overflow: 'hidden',
            backgroundColor: '#FFFFFF',
            color: textColor,
            paddingTop: '80px'
        }}>
            {/* Background Image Layer - Ken Burns Effect */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    y: backgroundY, // Apply Parallax Y to background
                    scale: 1.1 // Start slightly zoomed in for Ken Burns room
                }}
                animate={{
                    scale: [1.1, 1.15],
                    backgroundPosition: ['center 20%', 'center 25%']
                }}
                transition={{
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />

            {/* Gradient Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                background: overlay
            }}></div>

            {/* Right Side Fade Overlay - reduces visibility of background text */}
            <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '40%',
                height: '100%',
                zIndex: 0,
                background: 'linear-gradient(to left, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)'
            }}></div>

            {/* Bottom Fade Overlay - seamless transition to next section */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '30%',
                zIndex: 1,
                background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 40%, rgba(255,255,255,1) 70%, rgba(255,255,255,0) 100%)',
                pointerEvents: 'none'
            }}></div>

            {/* Content Layer */}
            <motion.header
                style={{
                    position: 'relative',
                    zIndex: 1,
                    maxWidth: '1000px',
                    padding: '0 var(--spacing-md)',
                    y: contentY,       // Apply Parallax Y to content
                    opacity: contentOpacity // Apply Scroll Fade
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    {/* Main Title */}
                    <h1 style={{
                        fontSize: 'clamp(3rem, 9vw, 7rem)',
                        fontWeight: 900,
                        letterSpacing: '-0.04em',
                        color: textColor,
                        marginBottom: '2rem',
                        textTransform: 'uppercase',
                        fontFamily: '"Manrope", sans-serif',
                        lineHeight: 0.9,
                        textShadow: textShadow,
                        display: 'block'
                    }}>
                        {title}
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    {/* Subtitle */}
                    <h2 style={{
                        fontSize: 'clamp(1.2rem, 3vw, 2rem)',
                        fontWeight: subtitleWeight,
                        color: subtitleColor,
                        letterSpacing: 'clamp(0.15em, 5vw, 0.3em)',
                        textTransform: 'uppercase',
                        marginBottom: '4rem',
                        textShadow: subtitleShadow
                    }}>
                        {subtitle}
                    </h2>
                </motion.div>

                {/* Additional Content (Buttons, etc.) */}
                {children && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        {children}
                    </motion.div>
                )}
            </motion.header>
        </section>
    );
};

export default HeroSection;

import Link from 'next/link';

export default function NotFound() {
  return (
    <main
      role="main"
      style={{
        minHeight: '72vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '7rem 1.5rem 5rem',
        background: '#F7FAF9',
        color: '#173D38',
        textAlign: 'center',
      }}
    >
      <section style={{ maxWidth: '620px', margin: '0 auto' }}>
        <p style={{ color: '#087F77', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
          EmpowerVida
        </p>
        <h1 style={{ color: '#173D38', fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', lineHeight: 1.12, margin: '0 0 1.5rem', fontWeight: 800 }}>
          404 — Page not found
        </h1>
        <p style={{ color: '#415D59', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', lineHeight: 1.7, margin: '0 0 2.25rem' }}>
          This page is currently unavailable. You can continue exploring our evidence-led health articles and guides.
        </p>
        <Link
          href="/"
          style={{ display: 'inline-block', padding: '0.95rem 1.6rem', background: '#086B63', color: '#FFFFFF', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', minHeight: '48px' }}
        >
          Return to homepage
        </Link>
      </section>
    </main>
  );
}

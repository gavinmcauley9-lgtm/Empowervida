import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useLayoutEffect(() => {
        // If there is a hash, let the browser or the page component handle the scroll
        if (hash) return;

        // Immediate scroll
        window.scrollTo(0, 0);

        // Fallback for race conditions (e.g. if browser tries to restore scroll)
        const timeoutId = setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);

        return () => clearTimeout(timeoutId);
    }, [pathname, hash]);

    return null;
}

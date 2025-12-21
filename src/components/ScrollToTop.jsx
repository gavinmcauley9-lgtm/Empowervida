import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        // 1. Disable browser's default scroll restoration to prevent "phantom" scroll positions
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        // 2. Force immediate scroll to top on every path change
        window.scrollTo(0, 0);

    }, [pathname]);

    return null;
}

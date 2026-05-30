"use client";

import { useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
    const { pathname } = usePathname();

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

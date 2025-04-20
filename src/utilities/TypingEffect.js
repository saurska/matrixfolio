"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypingEffect({ children, typeSpeed }) {
    const typedRef = useRef(null);
    const contentRef = useRef(null); // Preserve original HTML

    useEffect(() => {
        if (contentRef.current) {
            const typed = new Typed(typedRef.current, {
                strings: [contentRef.current.innerHTML], // Preserve nested content
                typeSpeed: typeSpeed,
                backSpeed: 0,
                showCursor: false,
                loop: false,
            });

            return () => typed.destroy();
        }
    }, [typeSpeed]);

    return (
        <div>
            {/* Hidden div to store original content */}
            <div ref={contentRef} style={{ display: "none" }}>
                {children}
            </div>

            {/* Typed.js renders here */}
            <div ref={typedRef}></div>
        </div>
    );
}

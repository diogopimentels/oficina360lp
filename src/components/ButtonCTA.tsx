"use client";

import { useState, useEffect } from "react";

interface ButtonCTAProps {
    text: string;
    onClick: () => void;
    className?: string;
}

export function ButtonCTA({ text, onClick, className = "" }: ButtonCTAProps) {
    return (
        <button
            onClick={onClick}
            className={`relative w-full md:w-auto inline-flex items-center justify-center px-8 py-4 text-xl font-bold text-black bg-[#00FF00] rounded-lg shadow-[0_0_20px_rgba(0,255,0,0.5)] transition-all hover:scale-105 hover:bg-[#00E600] animate-pulse-glow ${className}`}
        >
            {text}
        </button>
    );
}

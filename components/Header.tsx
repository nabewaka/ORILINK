"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const [open, setOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "ホーム" },
        { href: "/past-events", label: "過去のイベント" },
        { href: "/next-event", label: "次回イベント" },
        { href: "/inquiry", label: "お問い合わせ" },
    ];

    return (
        <header className="bg-blue relative">
            <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* ロゴ */}
                <Link href="/" className="flex items-center">
                    <div className="relative h-10 w-55 overflow-hidden bg-white rounded-sm">
                        <Image
                            src="/images/Logo.jpg"
                            alt="ORILINK"
                            fill
                            className="object-cover scale-110"
                        />
                    </div>
                </Link>

                {/* PC ナビ */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className="text-white hover:text-blue-dark transition-colors font-medium font-serif"
                            style={{ fontSize: "var(--text-sm)" }}
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

                {/* スマホ */}
                <div className="relative md:hidden">
                    <button
                        className="text-white text-3xl leading-none"
                        onClick={() => setOpen(!open)}
                        aria-label="メニューを開く"
                    >
                        {open ? "✕" : "☰"}
                    </button>

                    {/* ドロップダウン */}
                    <div
                        className={`
                            absolute right-0 top-full mt-2
                            bg-blue border border-blue-light
                            p-4 rounded-lg shadow-lg
                            flex flex-col gap-4 z-50 min-w-max
                            transition-all duration-200
                            ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                        `}
                    >
                        {navLinks.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className="text-white hover:text-blue-light transition-colors font-serif"
                                onClick={() => setOpen(false)}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </header>
    );
}
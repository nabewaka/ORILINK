"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

type Slide = {
  src: string;
  alt: string;
};

const slides: Slide[] = [
  { src: "/images/carousel/Logo_sq.png", alt: "ロゴ" },
  { src: "/images/carousel/01.jpg", alt: "折り紙の様子1" },
  { src: "/images/carousel/02.jpg", alt: "折り紙の様子2" },
  { src: "/images/carousel/04.jpg", alt: "折り紙の様子3" },
];

const INTERVAL = 3500;

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel mb-6">
      {/* トラック */}
      <div className="carousel__track-outer" aria-label="写真スライダー" role="region">
        <div
          className="carousel__track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div className="carousel__slide" key={i}>
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                style={{ objectFit: "cover" }}
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {/* 矢印ボタン */}
        <button
          className="carousel__arrow carousel__arrow--left"
          onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
          aria-label="前へ"
        >
          &#8249;
        </button>
        <button
          className="carousel__arrow carousel__arrow--right"
          onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
          aria-label="次へ"
        >
          &#8250;
        </button>
      </div>

      {/* ドット */}
      <div className="carousel__dots" role="tablist">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`carousel__dot${i === current ? " carousel__dot--active" : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`スライド ${i + 1}`}
            role="tab"
            aria-selected={i === current}
          />
        ))}
      </div>

      <style>{`
        .carousel {
          width: 100%;
          font-family: var(--font-sans);
        }
        .carousel__track-outer {
          position: relative;
          overflow: hidden;
          border-radius: var(--radius-lg);
          aspect-ratio: 16 / 9;
          background-color: var(--color-blue-light);
        }
        .carousel__track {
          display: flex;
          height: 100%;
          transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .carousel__slide {
          position: relative;
          min-width: 100%;
          height: 100%;
        }
        .carousel__arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.85);
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          color: var(--color-black);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.15s;
          z-index: 10;
        }
        .carousel__arrow:hover {
          background: rgba(255, 255, 255, 1);
        }
        .carousel__arrow--left  { left: 12px; }
        .carousel__arrow--right { right: 12px; }
        .carousel__dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 12px;
        }
        .carousel__dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--color-yellow-light);
          border: 1px solid var(--color-yellow);
          cursor: pointer;
          padding: 0;
          transition: background 0.2s, transform 0.2s;
        }
        .carousel__dot--active {
          background: var(--color-yellow);
          transform: scale(1.3);
        }
      `}</style>
    </div>
  );
}
// components/EventImages.tsx
import Image from "next/image";

// 途中に挟む画像（1〜2枚）
// EventImages.tsx
export function SectionImages({ images }: { 
    images: { src: string; alt: string; orientation?: "landscape" | "portrait" }[] 
}) {
    return (
        <div className="flex gap-4 justify-center items-center my-8">
            {images.map((img) => (
                <Image
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    width={img.orientation === "portrait" ? 600 : 900}
                    height={img.orientation === "portrait" ? 800 : 600}
                    className={`${images.length === 1 ? "w-1/2" : "w-1/2"} h-auto rounded-lg`}
                />
            ))}
        </div>
    );
}

// フォトギャラリー
export function PhotoGallery({ images }: { images: { src: string; alt: string }[] }) {
    return (
        <div className="grid grid-cols-2 gap-4 mt-8">
            {images.map((img) => (
                <Image
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg"
                />
            ))}
        </div>
    );
}
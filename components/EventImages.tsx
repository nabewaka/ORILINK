// components/EventImages.tsx
import Image from "next/image";

// 途中に挟む画像（1〜2枚）
export function SectionImages({ images }: { 
    images: { src: string; alt: string; orientation?: "landscape" | "portrait" }[] 
}) {
    return (
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center my-8">
            {images.map((img) => (
                <Image
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    width={img.orientation === "portrait" ? 600 : 900}
                    height={img.orientation === "portrait" ? 800 : 600}
                    className="w-2/3 sm:w-1/2 h-auto rounded-lg"
                />
            ))}
        </div>
    );
}

// フォトギャラリー
export function PhotoGallery({ images }: { 
    images: { src: string; alt: string; caption?: string }[] 
}) {
    return (
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 mt-8">
            {images.map((img) => (
                <div key={img.src} className="flex flex-col items-center">
                    <Image
                        src={img.src}
                        alt={img.alt}
                        width={800}
                        height={600}
                        className="w-2/3 sm:w-full mx-auto h-auto rounded-lg"
                    />
                    {img.caption && (
                        <p className="text-sm text-gray-500 mt-1 text-center">{img.caption}</p>
                    )}
                </div>
            ))}
        </div>
    );
}
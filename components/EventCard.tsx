import Image from "next/image";
import Link from "next/link";
 
type Props = {
    title: string;
    place: string;
    date: string;
    description?: string;
    thumbnail: string;
    path: string;
};
 
export default function EventCard({ title, place, date, description = "", thumbnail, path }: Props) {
    return (
        <Link href={`${path}`}>
            <div
                className="bg-blue overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                style={{ borderRadius: "var(--radius-lg)" }}
            >
                {/* サムネイル画像 - A4比率 (1:√2 ≈ 1:1.414) */}
                <div className="p-3">
                    <div
                        className="relative w-full overflow-hidden"
                        style={{
                            borderRadius: "var(--radius-lg)",
                            aspectRatio: "1 / 1.414",
                        }}
                    >
                        <Image src={thumbnail} alt={title} fill className="object-cover" />
                    </div>
                </div>
 
                {/* テキスト */}
                <div className="p-4">
                    <h3
                        className="text-white font-bold mb-2"
                        style={{ fontSize: "var(--text-lg)" }}
                    >
                        {title}
                    </h3>
 
                    {/* date・place */}
                    <div className="flex flex-col gap-1 mb-2">
                        <div className="flex items-center gap-1">
                            <span className="text-white shrink-0" style={{ fontSize: "var(--text-sm)", width: "2rem" }}>date</span>
                            <p className="text-white" style={{ fontSize: "var(--text-sm)" }}>
                                {date}
                            </p>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="text-white shrink-0" style={{ fontSize: "var(--text-sm)", width: "2rem" }}>@</span>
                            <p className="text-white" style={{ fontSize: "var(--text-sm)" }}>
                                {place}
                            </p>
                        </div>
                    </div>
 
                    <p className="text-white" style={{ fontSize: "var(--text-sm)" }}>
                        {description}
                    </p>
                </div>
            </div>
        </Link>
    );
}
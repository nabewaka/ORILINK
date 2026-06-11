import Image from "next/image";
import Button from "@/components/Button";
import { PhotoGallery } from "@/components/EventImages";
import Link from "next/link";

export default function NextEventPage() {
    return (
        <div className="bg-white p-8 rounded-lg max-w-none mb-6"
            style={{ borderRadius: "var(--radius-lg)" }}
        >
            <h2 className="text-black font-bold mb-4" style={{ fontSize: "var(--text-3xl)" }}>
                第二回ORILINK京都のご案内
            </h2>

            {/* 本文 */}
            <p>
                全国の大学生が京都に集結し、2日間創作作品の講習や創作秘話を披露します！</p>
            <p>初級者向けのシンプルな作品から3時間超を要するコンプレックス作品の講習も実施予定です。</p>

            <p> 作品展示も併せて実施します。全国の大学生が制作、創作した作品群を間近でご覧いただけます。</p>
            <p>   また、折り図や折り紙に関する記事、展開図とその説明などを掲載する予定の会誌も配布いたします。</p>
            <p className="mb-6">京都にて折り紙に満ちた2日間を過ごしませんか？参加をお待ちしております！</p>


            {/* 開催概要 → dl（定義リスト）が意味的に正しい */}
            <dl className="mb-6" style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "8px 24px" }}>
                <dt className="font-bold">日程</dt>
                <dd>9/22（火）〜 23（水）</dd>

                <dt className="font-bold">会場</dt>
                <dd>
                    キャンパスプラザ京都 第３講義室
                    <br />
                    <span style={{ fontSize: "var(--text-sm)", color: "var(--color-black-soft)" }}>
                        JR京都駅から徒歩5分
                    </span>
                </dd>

                <dt className="font-bold">参加費</dt>
                <dd>
                    2,000円
                    <br />
                    <span style={{ fontSize: "var(--text-sm)", color: "var(--color-black-soft)" }}>
                        親子参加の場合、保護者様の参加費に割引が適用される場合があります
                    </span>
                </dd>
            </dl>

            {/* 注意事項 → ul */}
            <ul className="mb-8" style={{ fontSize: "var(--text-sm)", color: "var(--color-black-soft)", lineHeight: "2" }}>
                <li>※小学生以下のお子様が参加される場合は、保護者の同伴が必要です</li>
                <li>※参加者には「ORILINK会誌 vol.02」を配布いたします</li>
                <li>※事前申込制となります</li>
            </ul>

            {/* ボタン */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center items-center mt-8">
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeUO_-ufQk5RTRPvCv5f5oH6M979EFhMNh5-mHXJ1QmhdaGhQ/viewform?usp=publish-editor">
                    <Button>お申し込みはこちら</Button>
                </Link>
            </div>
            <h3 className="font-bold mt-12 mb-4" style={{ fontSize: "var(--text-2xl)" }}>
                講習予定作品
            </h3>
            <PhotoGallery
                images={[
                    { src: "/images/No2_event/workshop/ピストル_松岡利明.jpg", alt: "ピストル_松岡利明" , caption: "ピストル : 松岡利明" },
                    { src: "/images/No2_event/workshop/サボテン_眞鍋和奏.jpg", alt: "サボテン_眞鍋和奏" , caption: "サボテン : 眞鍋和奏" },
                    { src: "/images/No2_event/workshop/クラシックカー_加藤眸.jpg", alt: "クラシックカー_加藤眸" , caption: "クラシックカー : 加藤眸" },
                    { src: "/images/No2_event/workshop/ミニジンベエザメ_中村遼.jpg", alt: "ミニジンベエザメ_中村遼" , caption: "ミニジンベエザメ : 中村遼" },
                ]}
            />

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center items-center mt-8">
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeUO_-ufQk5RTRPvCv5f5oH6M979EFhMNh5-mHXJ1QmhdaGhQ/viewform?usp=publish-editor">
                    <Button>お申し込みはこちら</Button>
                </Link>
            </div>
        </div>


    );
}
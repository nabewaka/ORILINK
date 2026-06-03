import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { SectionImages, PhotoGallery } from "@/components/EventImages";
export default function No1Page() {
    return (
        <div
            className="bg-white p-8 rounded-lg prose prose-lg max-w-none"
            style={{ borderRadius: "var(--radius-lg)" }}
        >
            <h2
                className="text-black font-bold mb-8"
                style={{ fontSize: "var(--text-3xl)" }}
            >
                第一回東京展示会
            </h2>

            {/* ポスター画像 */}
            <div className="flex justify-center mb-8">
                <Image
                    src="/images/No1_event/展示会ポスター.png"
                    alt="第一回東京展示会ポスター"
                    width={800}
                    height={1200}
                    className="w-2/3 h-auto"
                />
            </div>

            {/* ① 開催概要 */}
            <p>
                2026年3月25日～3月29日、東京芸術劇場アトリエウエストにてORILINK第1回東京展示会が開催されました。
                東京、名古屋、京都、大阪などを中心に活動する全国の大学生の作品70点余りが集まり、見ごたえのある展示となりました。
            </p>

            {/* 画像①（1〜2枚）TODO: パスを差し替える */}
            <SectionImages
                images={[
                    { src: "/images/No1_event/あいさつ.jpg", alt: "挨拶", orientation: "portrait" },
                    { src: "/images/No1_event/10.jpg", alt: "作品の様子", orientation: "portrait" },
                ]}
            />

            {/* ② 作品・来場者について */}
            <p>
                度肝を抜くようなコンプレックス作品から、シンプルな動物作品、非生物、抽象作品など多様な作品が並びました。
                折り紙愛好家の方をはじめ、会場に居合わせた方や外国人の方など、のべ300人あまりのお客様にお越しいただき、幅広い折り紙の世界を伝えることができました。
                折り紙好きのお子様たちの喜ぶ様子や、"Paper Crane"に留まらない現代折り紙の奥深さに衝撃を受ける外国人のお客様の様子が印象的でした。
            </p>

            {/* 画像②（1〜2枚）TODO: パスを差し替える */}
            <SectionImages
                images={[

                    { src: "/images/No1_event/13.jpg", alt: "来場者の様子" },
                ]}
            />

            {/* ③ レイアウト・展示台のこだわり */}
            <p>
                じっくりと作品を鑑賞していただけるよう、レイアウトや照明にこだわりつつ、パネル展示や展開図を添えることで作品の背景にも目を向けていただくことができました。
                オリジナルの展示台も作成し、目線を上げつつ、ひとつの作品の魅力をより繊細に伝える工夫をしました。
                また、展示台のデザインも折り紙を意識した独自の形状で、角度により見え方が変わる美しいものとなりました。
                お客様と作家の会話も多く生まれ、のびのびとした作品鑑賞の空間が実現しました。
            </p>

            {/* 画像③（1〜2枚）TODO: パスを差し替える */}
            <SectionImages
                images={[
                    { src: "/images/No1_event/03.jpg", alt: "展示台の作品" },
                    { src: "/images/No1_event/12.jpg", alt: "来場者と会話" },
                ]}
            />

            {/* ④ 物販・ワークショップ */}
            <p>
                3月28日、29日には展示会にあわせ、近隣の施設であるIKE・Bizとしま産業振興プラザにて物販・ワークショップのイベントを行いました。
                展示とは別会場となったにも関わらず、多くの方にお越しいただきました。
                販売物は東大、京大の折り紙サークルOrist・いまじろ～の部誌・折り図集の他、今イベントに向けて製作されたORILINK会誌第1号も販売されました。
                この冊子では、豊富なテキストでの記事のほか、作品解説、折り図も掲載され、幅広い層の方にお楽しみいただけるものとなりました。
            </p>
            <p>
                ワークショップは2日間で6教室開催され、お子様を中心にお楽しみいただけました。
                高難度の作品も多くありましたが、いずれの教室でも無事完成させることができました。
            </p>

            {/* 画像④（1〜2枚）TODO: パスを差し替える */}
            <SectionImages
                images={[
                    { src: "/images/No1_event/講習.jpg", alt: "ワークショップの様子" },
                    { src: "/images/No1_event/会誌の表紙.jpg", alt: "会誌" },
                ]}
            />

            {/* ⑤ まとめ */}
            <p>
                ORILINK第1回では、折り紙の静的側面—「見る」楽しみ—と動的側面—「折る」楽しみ—を両方実現させた展示・ワークショップ融合型のバランスの取れたイベントとなりました。
                今後もORILINKでは折り紙の多様なありかたを重視した幅広い活動を展開していきます。次回以降の活動もぜひご参加ください。
            </p>

            {/* フォトギャラリー TODO: パスを差し替える */}
            <h3 className="font-bold mt-12 mb-4" style={{ fontSize: "var(--text-2xl)" }}>
                フォトギャラリー
            </h3>
            <PhotoGallery
                images={[
                    { src: "/images/No1_event/01.jpg", alt: "ギャラリー1" },
                    { src: "/images/No1_event/02.jpg", alt: "ギャラリー2" },
                    { src: "/images/No1_event/04.jpg", alt: "ギャラリー3" },
                    { src: "/images/No1_event/05.jpg", alt: "ギャラリー4" },
                    { src: "/images/No1_event/06.jpg", alt: "ギャラリー5" },
                    { src: "/images/No1_event/07.jpg", alt: "ギャラリー6" },
                    { src: "/images/No1_event/08.jpg", alt: "ギャラリー7" },
                    { src: "/images/No1_event/09.jpg", alt: "ギャラリー8" },
                    { src: "/images/No1_event/10.jpg", alt: "ギャラリー9" },
                    { src: "/images/No1_event/11.jpg", alt: "ギャラリー10" },
                    { src: "/images/No1_event/14.jpg", alt: "ギャラリー11" },
                    { src: "/images/No1_event/15.jpg", alt: "ギャラリー12" },
                    { src: "/images/No1_event/16.jpg", alt: "ギャラリー13" },
                    { src: "/images/No1_event/17.jpg", alt: "ギャラリー14" },
                    { src: "/images/No1_event/ワークショップの予定.jpg", alt: "ギャラリー15" },
                    { src: "/images/No1_event/会場外観.jpg", alt: "ギャラリー16" },
                ]}
            />

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center items-center mt-8">
                <Link href="./">
                    <Button>過去のイベントに戻る</Button>
                </Link>
            </div>
        </div>
    );
}
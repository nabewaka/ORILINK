import Image from "next/image";
import Link from "next/link";
import Carousel from "@/components/Carousel";
import Button from "@/components/Button";
export default function Home() {
  return (
    <article>
      {/** ホームの動く写真 */}
      <Carousel />

      {/** 団体説明 */}
      <div className="bg-white p-8 rounded-lg max-w-none mb-3"
        style={{ borderRadius: "var(--radius-lg)" }}
      >
        <h2 className=" mb-3">ORILINKについて</h2>
        <p>
          ORILINKは2025年に結成した、大学生が運営する折り紙コミュニティです。
          全国の折り紙を愛する大学生が交流し、またチームとなって展示会や講習会を開催しています。
          現在は東京大学折り紙サークルOrist、名古屋大学折り紙サークルNU folders、京都大学折り紙サークルいまじろ～を
          はじめとした大学折り紙サークルに所属するメンバーが中心となり運営を行っています。
          新規メンバーも大募集中ですので、ご興味おありの方はぜひご連絡ください！
        </p>
      </div>

      {/** 各種SNS */}
      <div className="bg-white p-8 rounded-lg max-w-none mb-6"
        style={{ borderRadius: "var(--radius-lg)" }}
      >
        <h2 className=" mb-3">各種SNS</h2>
        <p className="mb-3">
          X 、 Instagramにて活動を発信しています！
          情報をお見逃しなく！
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center items-center">
          {/* X */}
          <Link href="https://x.com/_ORILINK_">
            <button
              className="text-white font-bold px-6 py-2 transition-colors"
              style={{
                borderRadius: "var(--radius-lg)",
                fontFamily: "var(--font-serif)",
                backgroundColor: "#000000",
              }}
            >
              X (Twitter)
            </button>
          </Link>

          {/* Instagram */}
          <Link href="https://www.instagram.com/_orilink_/">
            <button
              className="text-white font-bold px-6 py-2 transition-colors"
              style={{
                borderRadius: "var(--radius-lg)",
                fontFamily: "var(--font-serif)",
                backgroundColor: "#E1306C",
              }}
            >
              Instagram
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg max-w-none mb-3"
        style={{ borderRadius: "var(--radius-lg)" }}
      >
        <h2 className=" mb-3">入会希望の方へ</h2>
        <p>
          お問い合わせページに詳細を載せています！
        </p>
      </div>
      {/** ページへのリンク */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center items-center">
        <Link href="/past-events">
          <Button>過去のイベント</Button>
        </Link>

        <Link href="/next-event">
          <Button>次回イベント</Button>
        </Link>

        <Link href="/inquiry">
          <Button>お問い合わせ</Button>
        </Link>

      </div>

    </article >
  );
}
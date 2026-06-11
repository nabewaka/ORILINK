import Link from "next/link";

export default function InquiryPage() {
    return (
        <div className="bg-white p-8 rounded-lg prose prose-lg max-w-none"
            style={{ borderRadius: "var(--radius-lg)" }}
        >
            <h2
                className="text-black font-bold mb-8"
                style={{ fontSize: "var(--text-3xl)" }}
            >
                お問い合わせ
            </h2>

            {/* 連絡先リスト */}
            <div className="flex flex-col gap-2 mb-8">
                <div className="flex items-center gap-2">
                    <span className="text-black shrink-0" style={{ width: "7rem" }}>Email</span>
                    <a
                        href="mailto:orilink.oc@gmail.com"
                        className="text-blue-600 underline hover:opacity-70 transition-opacity"
                    >
                        orilink.oc@gmail.com
                    </a>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-black shrink-0" style={{ width: "7rem" }}>X (Twitter)</span>
                    <Link
                        href="https://x.com/_ORILINK_"
                        className="text-blue-600 underline hover:opacity-70 transition-opacity"
                    >
                        @_ORILINK_
                    </Link>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-black shrink-0" style={{ width: "7rem" }}>Instagram</span>
                    <Link
                        href="https://www.instagram.com/_orilink_/"
                        className="text-blue-600 underline hover:opacity-70 transition-opacity"
                    >
                        @_orilink_
                    </Link>
                </div>
            </div>

            <h1
                className="text-black font-bold mb-1"
                style={{ fontSize: "var(--text-2xl)" }}
            >
                入会に興味のある学生の方へ
            </h1>
            <p className="mb-8">
                大学生、高専4年生以上等の方で入会希望の方は、メールアドレスまたはSNSのDMまでご連絡ください！
                年会費は2000円です。住んでいる場所は問いません、オンライン活動も行う予定です。
                軽い気持ちでご連絡ください、みんなで楽しく折り紙をしましょう！
            </p>

            <h1
                className="text-black font-bold mb-1"
                style={{ fontSize: "var(--text-2xl)" }}
            >
                展示やワークショップ、その他依頼を考えている団体様へ
            </h1>
            <p className="mb-8">
                E-mail アドレスまでメールをお願いいたします。要件や内容により、所属部員が属している各サークルへ
                依頼を斡旋することもできます。お気軽にご相談ください。
            </p>

            <h1
                className="text-black font-bold mb-1"
                style={{ fontSize: "var(--text-2xl)" }}
            >
                ORILINKにその他ご意見、お問い合わせのある方へ
            </h1>
            <p className="mb-8">
                E-mail アドレス、SNSのDMまでご意見などをお願いします。展示会やワークショップの感想等もお待ちしております！
            </p>
        </div>
    );
}
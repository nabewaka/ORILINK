import EventCard from "@/components/EventCard";
import EventData from "@/content/event.json";
export default function PastEventsPage() {
    return (
        <div>
            <h2
                className="text-black font-bold mb-8"
                style={{ fontSize: "var(--text-3xl)" }}
            >
                過去のイベント
            </h2>
            <p
                className="text-black mb-6"
                style={{ fontSize: "var(--text-x1)" }}
            >
                イベントカードを押すと、記事を閲覧できます。

            </p>

            {/* グリッド：スマホ1列、タブレット2列、PC3列 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {EventData.map((event) => (
                    <EventCard
                        key={event.title}
                        title={event.title}
                        date={event.date}
                        place = {event.place}
                        description={event.description}
                        thumbnail={event.thumbnail}
                        path={event.path}
                    />
                ))}
            </div>
 
        </div>
    );
}
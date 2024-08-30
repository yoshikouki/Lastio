import { getActivitiesByGroup } from "@/repositories/activity";
import Link from "next/link";

export default async function HomePage() {
  const activities = await getActivitiesByGroup("group-1");

  return (
    <main className="flex flex-col items-center justify-center gap-10 py-10">
      <div className="flex flex-col gap-5">
        {activities.map((activity) => (
          <div key={activity.id} className="flex flex-col gap-1 px-4">
            <Link
              href={`/activities/${activity.id}`}
              className="font-bold text-lg"
            >
              {activity.name}
            </Link>
            <div className="text-gray-500 text-sm">
              {activity.latestLog.loggedAt} days ago
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

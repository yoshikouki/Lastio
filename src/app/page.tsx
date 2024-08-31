import { AnimatedLink } from "@/components/animated-link";
import { url } from "@/lib/url";
import { getActivitiesByGroup } from "@/repositories/activity";

export default async function HomePage() {
  const activities = await getActivitiesByGroup("group-1");

  return (
    <main className="flex flex-col items-center justify-center gap-10 py-10">
      <div className="flex flex-col gap-5">
        {activities.map((activity) => (
          <div key={activity.id} className="flex flex-col gap-1 px-4">
            <AnimatedLink
              href={url.activity(activity.id)}
              className="font-bold text-lg"
              style={{
                viewTransitionName: `activity-${activity.id}`,
              }}
            >
              {activity.name}
            </AnimatedLink>
            <div className="text-gray-500 text-sm">
              {activity.latestLog.loggedAt} days ago
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

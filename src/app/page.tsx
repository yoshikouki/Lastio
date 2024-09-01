import { AnimatedLink } from "@/components/animated-link";
import { DoneButton } from "@/components/ui/done-button";
import { formatRelativeDate } from "@/lib/format";
import { url } from "@/lib/url";
import { getActivitiesByGroup } from "@/repositories/activity";

export default async function HomePage() {
  const activities = await getActivitiesByGroup("group-1");

  return (
    <main className="flex flex-col items-center justify-center gap-10 py-10">
      <div className="flex flex-col gap-5">
        {activities.map((activity) => (
          <div key={activity.id} className="h-full w-full px-4">
            <div className="flex justify-between">
              <div className="flex flex-col gap-1">
                <AnimatedLink
                  href={url.activity(activity.id)}
                  className="font-bold text-lg"
                  style={{
                    viewTransitionName: `activity-${activity.id}`,
                  }}
                >
                  {activity.name}
                </AnimatedLink>
                <div className="flex items-center justify-start gap-2 text-gray-500 text-sm">
                  <div>{formatRelativeDate(activity.latestLog.loggedAt)}</div>
                  <div>{activity.latestLog.note}</div>
                </div>
              </div>
              <DoneButton />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

import { getActivitiesByGroup } from "@/repositories/activity";
import { ActivityItem } from "./activity-item";

export default async function HomePage() {
  const activities = await getActivitiesByGroup("group-1");

  return (
    <main className="flex flex-col items-center justify-center gap-10 py-10">
      <div className="flex flex-col">
        {activities.map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </div>
    </main>
  );
}

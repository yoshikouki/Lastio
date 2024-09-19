import { getActivitiesByGroup } from "@/repositories/activity";
import { ActivityItem } from "./activity-item";
import { AppHeader } from "./app-header";
import { AppNav } from "./app-nav";

export default async function HomePage() {
  const activities = await getActivitiesByGroup("group-1");

  return (
    <>
      <AppHeader />
      <AppNav />
      <main className="flex flex-col items-center justify-center gap-10 py-10">
        <div className="flex flex-col">
          {activities.map((activity) => (
            <ActivityItem key={activity.id} activity={activity} />
          ))}
        </div>
      </main>
    </>
  );
}

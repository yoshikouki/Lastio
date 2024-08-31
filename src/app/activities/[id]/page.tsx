import { getActivityById } from "@/repositories/activity";

export default async function ActivitiesPage({
  params,
}: { params: { id: string } }) {
  const activity = await getActivityById(params.id);

  return (
    <main className="flex flex-col items-center justify-center gap-10 py-10">
      <div className="flex flex-col gap-5">
        <h1
          className="font-bold text-2xl"
          style={{
            viewTransitionName: `activity-${activity.id}`,
          }}
        >
          {activity.name}
        </h1>
        <div className="text-gray-500">
          {activity.latestLog.loggedAt} days ago
        </div>
        <div className="flex flex-col gap-1">
          {activity.logs.map((log) => (
            <div key={log.id} className="flex flex-col gap-1">
              <div className="text-gray-500">{log.loggedAt}</div>
              <div className="text-gray-500">{log.note}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

import { DoneButton } from "@/components/ui/done-button";
import { formatLongDate, formatRelativeDate } from "@/lib/format";
import { getActivityById } from "@/repositories/activity";

export default async function ActivitiesPage({
  params,
}: { params: { id: string } }) {
  const activity = await getActivityById(params.id);

  return (
    <main className="flex flex-col items-center justify-center gap-10 py-10">
      {/* Activity Header */}
      <div className="flex w-full min-w-xs items-center justify-between px-4">
        <div className="flex flex-col gap-2">
          <h1
            className="font-bold text-2xl"
            style={{
              viewTransitionName: `activity-${activity.id}`,
            }}
          >
            {activity.name}
          </h1>
          <div className="text-gray-500">
            {formatRelativeDate(activity.latestLog.loggedAt)}
          </div>
        </div>
        <DoneButton />
      </div>

      {/* Activity Logs */}
      <section className="flex w-full min-w-xs flex-col gap-4 px-4">
        {activity.logs.map((log) => (
          <div
            key={log.id}
            className="flex w-full items-center justify-start gap-1"
          >
            <div className="text-gray-500">{formatLongDate(log.loggedAt)}</div>
            <div className="text-gray-500">{log.note}</div>
          </div>
        ))}
      </section>
    </main>
  );
}

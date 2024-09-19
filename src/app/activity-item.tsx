import { addLog } from "@/server/actions/activity-log";
import { AnimatedLink } from "../components/animated-link";
import { DoneButton } from "../components/ui/done-button";
import { formatRelativeDate } from "../lib/format";
import { url } from "../lib/url";
import type { ActivityWithLogs } from "../repositories/activity";

export const ActivityItem = ({
  activity,
}: {
  activity: ActivityWithLogs;
}) => {
  const onClickDone = addLog.bind(null, activity);

  return (
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
        <DoneButton className="h-10 w-10" onClick={onClickDone} />
      </div>
    </div>
  );
};

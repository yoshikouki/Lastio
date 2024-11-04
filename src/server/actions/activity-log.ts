"use server";

import { url } from "@/lib/url";
import { type ActivityWithLogs, addActivityLog } from "@/repositories/activity";
import { revalidatePath } from "next/cache";

export const addLog = async (activity: ActivityWithLogs) => {
  await addActivityLog(activity.id);
  revalidatePath(url.activity(activity.id));
  revalidatePath(url.root);
};

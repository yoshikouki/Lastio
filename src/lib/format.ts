import { format, formatDistanceToNowStrict } from "date-fns";
import { ja } from "date-fns/locale";

export const formatLongDate = (date: Date) => format(date, "yyyy-MM-dd");

export const formatRelativeDate = (date: Date) =>
  formatDistanceToNowStrict(date, {
    locale: ja,
    addSuffix: true,
  });

import { hc } from "hono/client";
import type { AppType } from ".";

const apiUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:8888/api";

export const cachedClient = hc<AppType>(apiUrl);
export const client = hc<AppType>(apiUrl, {
  fetch: (input: RequestInfo | URL, requestInit?: RequestInit) =>
    fetch(input, {
      cache: "no-cache",
      ...requestInit,
    }),
});

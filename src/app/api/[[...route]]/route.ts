import { app as server } from "@/server";
import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono().basePath("/api");

app.route("/", server);

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);
export const HEAD = handle(app);
export const OPTIONS = handle(app);

// Build error: Attempt to export a nullable value for "TextDecoderStream"
// ref: https://github.com/oven-sh/bun/issues/5648
// export const runtime = "edge";

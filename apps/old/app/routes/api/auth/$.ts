import { createAPIFileRoute } from "@tanstack/start/api";
import { auth } from "@live/auth";

export const APIRoute = createAPIFileRoute("/api/auth/$")({
  GET: ({ request }) => {
    return auth.handler(request);
  },
  POST: ({ request }) => {
    return auth.handler(request);
  },
});

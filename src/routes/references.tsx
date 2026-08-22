import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/references")({
  beforeLoad: () => {
    throw redirect({ to: "/cas-clients", statusCode: 301 });
  },
});

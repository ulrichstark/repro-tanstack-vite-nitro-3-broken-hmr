import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";

const loadRouteData = createServerFn().handler(() => {
    return { message: "Hello from the server!" };
});

export const Route = createFileRoute("/")({
    loader: async () => loadRouteData(),
    component: RouteComponent,
});

function RouteComponent() {
    return <h1>Test here to trigger HMR</h1>;
}

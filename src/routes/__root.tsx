import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { ReactNode } from "react";

export const Route = createRootRoute({
    head: () => ({
        meta: [{ charSet: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }],
    }),
    shellComponent: ShellComponent,
});

function ShellComponent({ children }: { children: ReactNode }) {
    return (
        <html lang="de">
            <head>
                <HeadContent />
            </head>
            <body>
                <main>{children}</main>
                <Scripts />
            </body>
        </html>
    );
}

import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "@/app/Layout";

const createAppRouter = () =>
    createBrowserRouter([
        {
            path: "/",
            element: <AppLayout />,
            children: [
                {
                    index: true,
                    lazy: () => import("@/app/routes/Home"),
                },
                {
                    path: "providers",
                    lazy: () => import("@/app/routes/Providers"),
                },
                {
                    path: "usage",
                    lazy: () => import("@/app/routes/Usage"),
                },
                {
                    path: "routing",
                    lazy: () => import("@/app/routes/Routing"),
                },
                {
                    path: "agents",
                    lazy: () => import("@/app/routes/Agents"),
                },
                {
                    path: "keys",
                    lazy: () => import("@/app/routes/Keys"),
                },
                {
                    path: "status",
                    lazy: () => import("@/app/routes/Status"),
                },
                {
                    path: "settings",
                    lazy: () => import("@/app/routes/Settings"),
                },
                {
                    path: "*",
                    lazy: () => import("@/app/routes/NotFound"),
                },
            ],
        },
    ]);

export default function AppRouter() {
    return <RouterProvider router={createAppRouter()} />;
}

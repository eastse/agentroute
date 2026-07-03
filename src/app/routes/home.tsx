import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import env from "@/config/env";

const summaryItems = [
    {
        label: "Providers",
        value: "0",
        description: "Pending setup",
    },
    {
        label: "Requests Today",
        value: "0",
        description: "No traffic yet",
    },
    {
        label: "Routing Rules",
        value: "0",
        description: "Awaiting configuration",
    },
];

const queueItems = ["Connect provider configuration", "Record token usage", "Define routing rules"];

export function HomePage() {
    return (
        <div className="flex flex-col gap-6 p-4 md:p-6">
            <div className="flex flex-col gap-3">
                <Badge
                    className="w-fit"
                    variant="outline"
                >
                    AgentRoute
                </Badge>
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-semibold md:text-3xl">Provider Routing Console</h1>
                    <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
                        Manage providers, usage, and routing strategy so agent requests land on the
                        right model channel by cost, capability, and availability.
                    </p>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                {summaryItems.map((item) => (
                    <Card key={item.label}>
                        <CardHeader className="gap-1">
                            <CardDescription>{item.label}</CardDescription>
                            <CardTitle className="text-3xl font-semibold">{item.value}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
                <Card>
                    <CardHeader>
                        <CardTitle>Gateway URL</CardTitle>
                        <CardDescription>
                            Current AgentRoute API endpoint for the frontend
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <code className="block rounded-md bg-muted px-3 py-2 text-sm">
                            {env.API_URL}
                        </code>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Next Up</CardTitle>
                        <CardDescription>
                            The main layout is ready for the next modules
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="flex flex-col gap-3">
                            {queueItems.map((item) => (
                                <li
                                    className="flex items-center gap-2 text-sm"
                                    key={item}
                                >
                                    <span className="size-2 rounded-full bg-primary" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

// Necessary for react router to lazy load.
export const Component = HomePage;

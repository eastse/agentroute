import { Route } from "lucide-react";
import PagePlaceholder from "@/app/routes/PagePlaceholder";

export function RoutingPage() {
    return (
        <PagePlaceholder
            description="Maintain cost-first, quality-first, balanced, and pinned-provider routing policies."
            icon={Route}
            title="Routing Rules"
        />
    );
}

// Necessary for react router to lazy load.
export const Component = RoutingPage;

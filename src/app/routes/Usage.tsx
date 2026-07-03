import { BarChart3 } from "lucide-react";
import PagePlaceholder from "@/app/routes/PagePlaceholder";

export function UsagePage() {
    return (
        <PagePlaceholder
            description="Review requests, token usage, model distribution, and time-window trends."
            icon={BarChart3}
            title="Usage"
        />
    );
}

// Necessary for react router to lazy load.
export const Component = UsagePage;

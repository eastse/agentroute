import { Activity } from "lucide-react";
import PagePlaceholder from "@/app/routes/PagePlaceholder";

export function StatusPage() {
    return (
        <PagePlaceholder
            description="Monitor provider health, latency, failure rate, and fallback behavior."
            icon={Activity}
            title="Status"
        />
    );
}

// Necessary for react router to lazy load.
export const Component = StatusPage;

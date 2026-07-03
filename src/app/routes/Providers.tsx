import { ServerCog } from "lucide-react";
import PagePlaceholder from "@/app/routes/PagePlaceholder";

export function ProvidersPage() {
    return (
        <PagePlaceholder
            description="Configure providers, model lists, priorities, and available quotas."
            icon={ServerCog}
            title="Providers"
        />
    );
}

// Necessary for react router to lazy load.
export const Component = ProvidersPage;

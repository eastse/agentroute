import { Bot } from "lucide-react";
import PagePlaceholder from "@/app/routes/PagePlaceholder";

export function AgentsPage() {
    return (
        <PagePlaceholder
            description="Manage default models, context windows, and task classes for each agent workflow."
            icon={Bot}
            title="Agent Profiles"
        />
    );
}

// Necessary for react router to lazy load.
export const Component = AgentsPage;

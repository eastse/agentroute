import { Settings } from "lucide-react";
import PagePlaceholder from "@/app/routes/PagePlaceholder";

export function SettingsPage() {
    return (
        <PagePlaceholder
            description="Adjust local preferences and runtime settings for the AgentRoute console."
            icon={Settings}
            title="Settings"
        />
    );
}

// Necessary for react router to lazy load.
export const Component = SettingsPage;

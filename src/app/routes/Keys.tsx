import { KeyRound } from "lucide-react";
import PagePlaceholder from "@/app/routes/PagePlaceholder";

export function KeysPage() {
    return (
        <PagePlaceholder
            description="Track provider credentials, environment boundaries, and key availability."
            icon={KeyRound}
            title="API Keys"
        />
    );
}

// Necessary for react router to lazy load.
export const Component = KeysPage;

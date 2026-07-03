import type { LucideIcon } from "lucide-react";
import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from "@/components/ui/empty";

interface PagePlaceholderProps {
    description: string;
    icon: LucideIcon;
    title: string;
}

export default function PagePlaceholder({ description, icon: Icon, title }: PagePlaceholderProps) {
    return (
        <div className="flex min-h-full p-4 md:p-6">
            <Empty className="w-full">
                <EmptyHeader>
                    <EmptyMedia variant="icon">
                        <Icon />
                    </EmptyMedia>
                    <EmptyTitle>{title}</EmptyTitle>
                    <EmptyDescription>{description}</EmptyDescription>
                </EmptyHeader>
                <EmptyContent>
                    <p className="text-muted-foreground">
                        This page file is ready for tables, forms, or detail views.
                    </p>
                </EmptyContent>
            </Empty>
        </div>
    );
}

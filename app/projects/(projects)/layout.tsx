import BackButton from "@/app/components/BackButton";
import TextContent from "@/app/components/TextContent";

interface ProjectLayoutProps {
    children: Readonly<React.ReactNode>
}

export default function ProjectLayout({ children }: ProjectLayoutProps) {
    return (
        <TextContent>
            <BackButton text="Back to Projects" href="/projects"></BackButton>
            {children}
        </TextContent>
    );
}
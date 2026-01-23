interface TextContentProps {
    children?: React.ReactNode
}

export default function TextContent({ children }: TextContentProps) {
    return (
        <div className="text-content font-serif text-beige-main flex flex-col gap-1">
            {children}
        </div>
    );
}
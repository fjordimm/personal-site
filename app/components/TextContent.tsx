interface TextContentProps {
    children?: Readonly<React.ReactNode>
}

export default function TextContent({ children }: TextContentProps) {
    return (
        <div className="text-content font-serif text-beige-main flex flex-col items-start gap-3">
            {children}
        </div>
    );
}
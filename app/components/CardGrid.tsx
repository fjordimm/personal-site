interface CardGridProps {
    children?: React.ReactNode
}

export default function CardGrid({ children }: CardGridProps) {
    return (
        <div className="flex flex-row flex-wrap gap-3">
            {children}
        </div>
    );
}

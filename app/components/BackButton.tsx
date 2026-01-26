import Link from "next/link";

interface BackButtonProps {
    text: string,
    href: string
}

export default function BackButton({ text, href }: BackButtonProps) {
    return (
        <Link href={href} className="bg-beige-main rounded-full flex items-center justify-center">
            <span className="px-4 py-1 text-[12pt]! font-sans! font-bold! text-purple!">{text}</span>
        </Link>
    );
}
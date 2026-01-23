import Link from "next/link";

interface IconLinkProps {
    children?: React.ReactNode,
    href: string
}

export default function IconLink({ children, href }: IconLinkProps) {
    return (
        <Link href={href} className="w-12 h-12 rounded-full flex items-center justify-center bg-beige-main">
            {children}
        </Link>
    );
}
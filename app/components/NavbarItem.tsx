"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarItemProps {
    name: string,
    href: string
}

export default function NavbarItem({ name, href }: NavbarItemProps) {
    const isOnTab = href === usePathname().match(/\/[^\/]+/)?.[0];

    return (
        <Link href={href}>
            <h2 className={`font-sans text-2xl font-bold bg-beige-main px-7 py-2 rounded-full ${isOnTab ? "navbar-item-shadow" : ""}`}>{name}</h2>
        </Link>
    );
}

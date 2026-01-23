import { StaticImageData } from "next/image";
import Link from "next/link";

interface CardProps {
    name: string,
    href: string,
    image: StaticImageData
}

export default function Card({ name, href, image }: CardProps) {
    return (
        <Link href={href} className="min-w-70 max-w-70 min-h-40 max-h-50 flex flex-col items-stretch rounded-lg overflow-hidden">
            <div className="grow bg-beige-main flex items-center justify-center">
                <span className="py-1 px-1 text-[12pt]! font-sans! font-bold! text-purple!">{name}</span>
            </div>
            <div className="w-full h-full">
                <img src={image.src} className="w-full h-full object-cover"></img>
            </div>
        </Link>
    );
}

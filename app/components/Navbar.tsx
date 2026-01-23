import Link from "next/link";
import personal_logo from "../res/images/personal_logo.png";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
    return (
        <div className="flex flex-row justify-between items-center flex-wrap gap-3 px-7 py-3 bg-beige-darker">
            <Link href="/" className="flex flex-row gap-3 items-center">
                <img src={personal_logo.src} width="60px" height="60px" className="rounded-full"></img>
                <h1 className="whitespace-nowrap font-sans font-black text-4xl text-purple">Bill Mularski</h1>
            </Link>

            <div className="flex flex-row gap-3">
                <NavbarItem name="Contact" href="/contact"></NavbarItem>
                <NavbarItem name="Projects" href="/projects"></NavbarItem>
            </div>
        </div>
    );
}

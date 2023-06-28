'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import SigninButton from "./_components/signinButton";


export interface Route {
    href: string;
    label: string;
    public: boolean;
}

interface HeaderProps {
    routes: Route[]
}

function Header({routes}: HeaderProps) {
    const pathname = usePathname();

    return (
        <header className="drop-shadow p-3 mb-6">
            <nav>
                {routes.map((link: Route) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.label}
                            className={`mr-3 ${isActive ? "text-blue-600" : "text-black"}`}
                            href={link.href}
                            prefetch={false}

                        >{link.label}</Link>
                    );
                })}
                <SigninButton />
            </nav>
        </header>
    );
}

export default Header;

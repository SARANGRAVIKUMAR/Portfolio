import Link from "next/link";
import React from "react";
import { Constants } from "@/app/utils/constants";
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
    return (
        <>
            <nav className="absolute lg:mx-8 right-12 top-8 z-10 items-center gap-8 text-white lg:flex">
                <div className="hidden md:block">
                    <div className="ml-10 flex items-center space-x-10">
                        {Object.keys(Constants.navbarList).map((key) => (
                            <Link
                                href={Constants.navbarRoutes[key as keyof typeof Constants.navbarRoutes]}
                                className="text-white hover:underline"
                                key={key}
                            >
                                {Constants.navbarList[key as keyof typeof Constants.navbarList]}
                            </Link>
                        ))}
                    </div>
                </div>
                <MobileNavbar />
            </nav>
        </>
    );
};

export default Navbar;
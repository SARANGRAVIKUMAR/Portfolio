import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

import React from "react";
import NavbarButton from "./NavbarButton";
import { Constants } from "@/app/utils/constants";

const Navbar = () => {
    return (
        <>
            <nav className="absolute lg:mx-8 right-12 top-8 z-10 items-center gap-8 text-white lg:flex">
                <div className="hidden md:block">
                    <div className="ml-10 flex items-center space-x-10">
                        {/* Add style when hovered for nav links  */}
                        {Object.keys(Constants.navbarList).map((key) => (
                            <Link
                                href={Constants.navbarRoutes[key as keyof typeof Constants.navbarRoutes]}
                                // give hower animation style with
                                className="text-white hover:underline"
                                key={key}
                            >
                                {Constants.navbarList[key as keyof typeof Constants.navbarList]}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="md:hidden">
                    <NavbarButton />
                </div>
            </nav>
            <div className="text md:hidden white z-10">
                <div className="ml-10 flex flex-col items-center space-x-4">
                    {Object.keys(Constants.navbarList).map((key) => (
                        <Link
                            href={Constants.navbarRoutes[key as keyof typeof Constants.navbarRoutes]}
                            key={key}
                        >
                            {Constants.navbarList[key as keyof typeof Constants.navbarList]}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Navbar;
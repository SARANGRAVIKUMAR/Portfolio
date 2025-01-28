"use client"
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import React, { useEffect } from "react";
import { Constants } from "@/app/utils/constants";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {

    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const closeModal = () => {
        setIsModalOpen(false);
    };
    const openModal = () => {
        setIsModalOpen(true);
    }
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsModalOpen(false);
            }
        };

        // Run on initial render
        handleResize();

        // Attach event listener
        window.addEventListener("resize", handleResize);

        // Cleanup event listener
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

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
                <div className="md:hidden">
                    <button onClick={openModal}>
                        {!isModalOpen && <CiMenuBurger size={24} />}
                    </button>
                </div>
            </nav>
            <div
                className={`fixed inset-0 z-50 transform ${isModalOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                    } transition-all duration-500 ease-in-out`}
            >
                <div className="flex  flex-col bg-black bg-opacity-50">
                    <div className="flex items-center justify-end p-6">
                        <button
                            onClick={closeModal}
                            className={`rounded-full p-2 text-white transition-all duration-300 hover:bg-white/10 transform ${isModalOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                                } transition-all duration-500 delay-300`}
                        >
                            <IoMdClose />
                            <span className="sr-only">Close menu</span>
                        </button>
                    </div>

                    <nav className="flex flex-1 flex-col items-center justify-center space-y-8 text-white">
                        {Object.keys(Constants.navbarList).map((key) => (
                            <Link
                                key={key}
                                href={Constants.navbarRoutes[key as keyof typeof Constants.navbarRoutes]}
                                onClick={closeModal}
                                className={`text-2x  font-medium transition-all duration-500 hover:text-gray-400 hover:scale-110 transform ${isModalOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                                    } delay-[400ms]"`}
                            >
                                {Constants.navbarList[key as keyof typeof Constants.navbarList]}
                            </Link>
                        ))}

                    </nav>
                </div>
            </div>
        </>
    );
};

export default Navbar;
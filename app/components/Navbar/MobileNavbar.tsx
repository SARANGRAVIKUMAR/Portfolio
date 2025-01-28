"use client";
import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { CiMenuBurger } from 'react-icons/ci';
import { Constants } from "@/app/utils/constants";
import Link from "next/link";

const MobileNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeModal = () => setIsMenuOpen(false);
    const openModal = () => setIsMenuOpen(true);

    return (
        <>
            <button className='md:hidden' onClick={openModal}>
                {!isMenuOpen && <CiMenuBurger size={24} />}
            </button>
            <div className={`fixed inset-0 z-50 transform ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"} transition-all duration-500 ease-in-out`}>
                <div className="flex flex-col bg-black bg-opacity-50">
                    <div className="flex items-center justify-end p-6">
                        <button onClick={closeModal} className="rounded-full p-2 text-white">
                            <IoMdClose size={24} />
                            <span className="sr-only">Close menu</span>
                        </button>
                    </div>
                    <nav className="flex flex-1 flex-col items-center justify-center space-y-8 text-white">
                        {Object.keys(Constants.navbarList).map((key) => (
                            <Link key={key} href={Constants.navbarRoutes[key as keyof typeof Constants.navbarRoutes]} onClick={closeModal}>
                                {Constants.navbarList[key as keyof typeof Constants.navbarList]}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </>
    );
};

export default MobileNavbar;

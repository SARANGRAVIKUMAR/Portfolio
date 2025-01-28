"use client";
import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const NavbarButton = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <button onClick={toggleMenu}>
            {isMenuOpen ? <IoMdClose size={24} /> : <CiMenuBurger size={24} />}
        </button>

    );
};

export default NavbarButton;
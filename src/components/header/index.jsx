"use client";
import React, { useState } from 'react'
import { HoveredLink, ImageLink, Menu, MenuItem } from '../ui/navbar-menu'
import Image from 'next/image';

const Navbar = () => {
    const [active, setactive] = useState(null);

    return (
        <Menu setActive={setactive} >
            <ImageLink src="/assets/logo.webp" alt="logo" width={200} height={30} />
            {/* <span>b</span> */}
            <div className='flex justify-center items-center space-x-4 w-full'>
                <MenuItem setActive={setactive} active={active} item="Products">
                    <div className="flex flex-col space-y-2.5 text-sm">
                        <HoveredLink href="/career" className="hover:font-semibold text-base">Engine Oil</HoveredLink>
                        <HoveredLink href="/leadership" className="hover:font-semibold text-base">Genrator Oil</HoveredLink>
                        <HoveredLink href="/our-team" className="hover:font-semibold text-base">Machine Oil</HoveredLink>
                    </div>
                </MenuItem>
                <HoveredLink href="/about-us" className="hover:font-semibold text-base">About Us</HoveredLink>
                <HoveredLink href="/contact-us" className="hover:font-semibold text-base">Contact Us</HoveredLink>
            </div>

            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-medium text-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-[16%]">
                Contact Us
            </button>



        </Menu>
    )
}

export default Navbar
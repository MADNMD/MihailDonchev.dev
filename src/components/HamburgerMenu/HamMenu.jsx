import React, { useState } from 'react';
import HamburgerMenu from 'react-hamburger-menu';

import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation';
import { Footer } from '../Footer/Footer';

export const HamMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const closeMenu = () => {
        setIsOpen(false);
    }

    return (
        <div>
            <div className="lg:hidden fixed top-4 right-4 z-50">
                <HamburgerMenu
                    isOpen={isOpen}
                    menuClicked={toggleMenu}
                    width={30}
                    height={25}
                    strokeWidth={3}
                    color='grey'
                    animation="ease-in-out"
                    animationDuration={0.5}
                />
            </div>

            {isOpen && (
                <div className="flex flex-col bg-navigation-bg fixed w-full h-5/6 top-0 left-0 z-40">
                    <div className="flex justify-end p-4">
                        <HamburgerMenu
                            isOpen={isOpen}
                            menuClicked={toggleMenu}
                            width={30}
                            height={25}
                            strokeWidth={3}
                            color='grey'
                            animation="ease-in-out"
                            animationDuration={0.5}
                        />
                    </div>
                    <Logo closeMenu={closeMenu} />
                    <Navigation closeMenu={closeMenu} />
                    <Footer />
                </div>
            )}
        </div>
    )
}

export default HamMenu;
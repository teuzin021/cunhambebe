import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const navRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(navRef.current, {
                backgroundColor: 'rgba(248, 250, 252, 0.8)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid rgba(15, 40, 30, 0.1)',
                scrollTrigger: {
                    start: 'top top',
                    end: '+=100',
                    scrub: true,
                },
            });
        }, navRef);

        return () => ctx.revert();
    }, []);

    return (
        <nav
            ref={navRef}
            className="fixed top-0 left-0 w-full z-50 transition-colors duration-300 px-6 py-4 flex justify-between items-center bg-transparent"
        >
            <div className="text-forest font-display text-2xl tracking-tighter">
                CUNHAMBEBE
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest text-forest">
                <a href="#about" className="hover:text-earth transition-colors">O Parque</a>
                <a href="#highlights" className="hover:text-earth transition-colors">Atrações</a>
                <a href="#conservation" className="hover:text-earth transition-colors">Preservação</a>
                <a href="#contact" className="hover:text-earth transition-colors">Contato</a>
            </div>

            <button
                className="md:hidden text-forest"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu Overlay (Simplified) */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-off-white shadow-xl md:hidden py-6 flex flex-col items-center space-y-4">
                    <a href="#about" className="text-forest font-medium" onClick={() => setIsMenuOpen(false)}>O Parque</a>
                    <a href="#highlights" className="text-forest font-medium" onClick={() => setIsMenuOpen(false)}>Atrações</a>
                    <a href="#conservation" className="text-forest font-medium" onClick={() => setIsMenuOpen(false)}>Preservação</a>
                    <a href="#contact" className="text-forest font-medium" onClick={() => setIsMenuOpen(false)}>Contato</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import Icon from '../AppIcon';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigationItems = [
        { name: 'Home', path: '/homepage', icon: 'Home' },
        { name: 'About', path: '/about-us', icon: 'Info' },
        { name: '360 Marketing', path: '/services/360-marketing', icon: 'Share2' },
        { name: 'Influencer', path: '/services/influencer-growth', icon: 'Users' },
        { name: 'IT Services', path: '/services/it-services', icon: 'Monitor' },
        { name: 'Case Studies', path: '/growth-case-studies', icon: 'TrendingUp' },
        { name: 'Contact', path: '/contact-us', icon: 'Phone' },
    ];

    const isActivePath = (path) => {
        return location?.pathname === path;
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-background/95 backdrop-blur-md shadow-card border-b border-border'
                : 'bg-transparent'
                }`}
        >
            <div className="w-full">
                <div className="flex items-center justify-between h-[72px] lg:h-20 px-4 lg:px-8">
                    {/* Logo - Fixed Height & Alignment */}
                    <Link
                        to="/homepage"
                        className="flex items-center"
                        onClick={closeMenu}
                    >
                        <img
                            src="/images/logo_v2.png"
                            alt="GetFame"
                            className="h-[56px] lg:h-[70px] w-auto object-contain"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        {navigationItems?.map((item) => (
                            <Link
                                key={item?.path}
                                to={item?.path}
                                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${isActivePath(item?.path)
                                    ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                                    }`}
                            >
                                <div className="flex items-center space-x-2">
                                    <Icon
                                        name={item?.icon}
                                        size={16}
                                        className={`transition-colors ${isActivePath(item?.path) ? 'text-primary' : 'text-current'
                                            }`}
                                    />
                                    <span>{item?.name}</span>
                                </div>
                                {isActivePath(item?.path) && (
                                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <Button
                            variant="outline"
                            size="sm"
                            iconName="Phone"
                            iconPosition="left"
                            iconSize={16}
                            className="border-primary/20 text-primary hover:bg-primary/10"
                        >
                            Book Call
                        </Button>
                        <Button
                            variant="default"
                            size="sm"
                            iconName="ArrowRight"
                            iconPosition="right"
                            iconSize={16}
                            className="gradient-brand hover:gradient-brand-hover shadow-brand"
                        >
                            Start Your Fame
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                        aria-label="Toggle menu"
                    >
                        <Icon
                            name={isMenuOpen ? "X" : "Menu"}
                            size={24}
                            className="transition-transform duration-200"
                        />
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`lg:hidden transition-all duration-300 ease-smooth ${isMenuOpen
                        ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                        }`}
                >
                    <div className="px-6 py-4 bg-background/95 backdrop-blur-md border-t border-border">
                        <nav className="space-y-2">
                            {navigationItems?.map((item) => (
                                <Link
                                    key={item?.path}
                                    to={item?.path}
                                    onClick={closeMenu}
                                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${isActivePath(item?.path)
                                        ? 'text-primary bg-primary/10 border-l-2 border-primary' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                                        }`}
                                >
                                    <Icon
                                        name={item?.icon}
                                        size={18}
                                        className={`transition-colors ${isActivePath(item?.path) ? 'text-primary' : 'text-current'
                                            }`}
                                    />
                                    <span>{item?.name}</span>
                                </Link>
                            ))}
                        </nav>

                        {/* Mobile CTAs */}
                        <div className="mt-6 space-y-3">
                            <Button
                                variant="outline"
                                fullWidth
                                iconName="Phone"
                                iconPosition="left"
                                iconSize={16}
                                className="border-primary/20 text-primary hover:bg-primary/10"
                                onClick={closeMenu}
                            >
                                Book Strategy Call
                            </Button>
                            <Button
                                variant="default"
                                fullWidth
                                iconName="ArrowRight"
                                iconPosition="right"
                                iconSize={16}
                                className="gradient-brand hover:gradient-brand-hover shadow-brand"
                                onClick={closeMenu}
                            >
                                Start Your Fame Architecture
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
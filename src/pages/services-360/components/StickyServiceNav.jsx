import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const StickyServiceNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const services = [
        { id: 'seo', label: 'SEO Services' },
        { id: 'social-media', label: 'Social Media Marketing' },
        { id: 'paid-ads', label: 'Paid Ads' },
        { id: 'brand-strategy', label: 'Brand Strategy' },
        { id: 'lead-generation', label: 'Lead & Demand Gen' },
        { id: 'content', label: 'Content Creation' },
        { id: 'local-marketing', label: 'Local & Platform Marketing' },
        { id: 'ecommerce', label: 'E-commerce Marketing' },
        { id: 'reviews', label: 'Reviews & Reputation' },
    ];

    const handleScroll = (id) => {
        setIsOpen(false);
        const element = document.getElementById(id);
        if (element) {
            // Offset for sticky header + sticky nav
            const offset = 140;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    // Optional: Highlight active section
    useEffect(() => {
        const handleScrollSpy = () => {
            let current = '';
            services.forEach(service => {
                const element = document.getElementById(service.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 200 && rect.bottom >= 200) {
                        current = service.id;
                    }
                }
            });
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScrollSpy);
        return () => window.removeEventListener('scroll', handleScrollSpy);
    }, []);

    return (
        <>
            {/* Sticky Nav Container - Mobile Only */}
            <div className="lg:hidden fixed top-[60px] left-0 w-full z-40 px-4 py-2 bg-background/95 backdrop-blur-md border-b border-border shadow-sm transition-all duration-300">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 bg-primary/5 rounded-lg border border-primary/20 text-foreground font-medium"
                >
                    <span className="flex items-center space-x-2">
                        <Icon name="Menu" size={18} className="text-primary" />
                        <span>{isOpen ? 'Select Service' : activeSection ? services.find(s => s.id === activeSection)?.label || '360° Marketing Services' : '360° Marketing Services'}</span>
                    </span>
                    <Icon name={isOpen ? "ChevronUp" : "ChevronDown"} size={18} className="text-muted-foreground" />
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                    <div className="absolute top-full left-0 w-full bg-background border-b border-border shadow-xl max-h-[60vh] overflow-y-auto">
                        <div className="p-2 space-y-1">
                            {services.map((service) => (
                                <button
                                    key={service.id}
                                    onClick={() => handleScroll(service.id)}
                                    className={`w-full text-left px-4 py-3 rounded-md text-sm transition-colors flex items-center justify-between ${activeSection === service.id
                                            ? 'bg-primary/10 text-primary font-medium'
                                            : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                                        }`}
                                >
                                    <span>{service.label}</span>
                                    {activeSection === service.id && <Icon name="Check" size={14} />}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default StickyServiceNav;

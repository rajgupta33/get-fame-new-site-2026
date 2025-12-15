import React from 'react';
import Icon from '../../../components/AppIcon';

const ServicesOverview = () => {
    const services = [
        { id: 'seo', label: 'SEO Services', icon: 'Search' },
        { id: 'social-media', label: 'Social Media', icon: 'Share2' },
        { id: 'paid-ads', label: 'Paid Ads', icon: 'Megaphone' },
        { id: 'brand-strategy', label: 'Brand Strategy', icon: 'Target' },
        { id: 'lead-generation', label: 'Lead Gen', icon: 'Users' },
        { id: 'content', label: 'Content', icon: 'PenTool' },
        { id: 'local-marketing', label: 'Local Marketing', icon: 'MapPin' },
        { id: 'ecommerce', label: 'E-commerce', icon: 'ShoppingBag' },
        { id: 'reviews', label: 'Reputation', icon: 'Star' },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="services-overview" className="py-12 px-4 lg:px-8 border-b border-border/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8">
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">Explore Our Ecosystem</span>
                </div>

                {/* Horizontal Scroll on Mobile, Grid on Desktop */}
                <div className="flex overflow-x-auto pb-6 -mx-4 px-4 space-x-4 lg:grid lg:grid-cols-9 lg:gap-4 lg:space-x-0 lg:mx-0 lg:px-0 scrollbar-hide">
                    {services.map((service) => (
                        <button
                            key={service.id}
                            onClick={() => scrollToSection(service.id)}
                            className="flex flex-col items-center justify-center min-w-[100px] p-4 rounded-xl bg-surface hover:bg-muted transition-colors border border-border group gap-2 flex-shrink-0"
                        >
                            <div className="p-2 rounded-full bg-primary/5 text-primary group-hover:bg-primary/10 transition-colors">
                                <Icon name={service.icon} size={20} />
                            </div>
                            <span className="text-xs font-medium text-foreground text-center whitespace-nowrap">{service.label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;

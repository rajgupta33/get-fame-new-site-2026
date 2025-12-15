import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const ServicesShowcase = () => {
    const services = [
        {
            title: "360° Digital Marketing",
            description: "Integrated SEO, paid ads, and social strategies that work in unison.",
            icon: "Globe",
            link: "/services/360-marketing"
        },
        {
            title: "Influencer Growth",
            description: "Viral campaigns with micro-influencers and mass collaborations.",
            icon: "Users",
            link: "/services/influencer-growth"
        },
        {
            title: "Performance Ads",
            description: "High-ROAS campaigns on Meta, Google, and LinkedIn.",
            icon: "TrendingUp",
            link: "/services/360-marketing#paid-ads"
        },
        {
            title: "IT & Innovation",
            description: "Custom websites, apps, and AI solutions built for scale.",
            icon: "Cpu",
            link: "/services/it-services"
        }
    ];

    return (
        <section className="py-24 px-6 lg:px-8 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-primary font-semibold tracking-wider text-sm uppercase">Our Ecosystem</span>
                    <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
                        The 360° Martech Ecosystem
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Everything you need to scale. Nothing you don't.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            to={service.link}
                            className="group flex flex-col p-8 bg-surface border border-border rounded-[20px] hover:border-primary/50 hover:shadow-lg transition-all duration-300 h-full"
                        >
                            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 mb-6">
                                <Icon name={service.icon} size={28} />
                            </div>

                            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                                {service.description}
                            </p>

                            <div className="flex items-center text-sm font-medium text-foreground group-hover:text-primary transition-colors mt-auto">
                                Explore <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesShowcase;
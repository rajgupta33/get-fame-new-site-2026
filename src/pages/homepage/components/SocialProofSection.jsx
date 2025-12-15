import React from 'react';
import Icon from '../../../components/AppIcon';

const SocialProofSection = () => {
    // Soft stats (no heavy numbers/percentages overload)
    const stats = [
        { label: "Active Clients", value: "200+" },
        { label: "Campaigns Launched", value: "1.5k+" },
        { label: "Ad Spend Managed", value: "$50M+" }
    ];

    const testimonials = [
        {
            quote: "GetFame didn't just run ads, they built our entire digital presence.",
            author: "Sarah J., CEO of TechFlow",
            role: "SaaS Founder"
        },
        {
            quote: "The influencer campaign went viral in 48 hours. Unreal results.",
            author: "Mike R., CMO",
            role: "E-commerce Brand"
        }
    ];

    return (
        <section className="py-20 bg-muted/20 border-y border-border/50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Stats Column */}
                    <div>
                        <h2 className="text-3xl font-bold text-foreground mb-6">
                            Success Speaks Louder
                        </h2>
                        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                            We measure success in revenue, retention, and real growth. Join the brands that chose architecture over guesswork.
                        </p>

                        <div className="grid grid-cols-3 gap-8">
                            {stats.map((stat, idx) => (
                                <div key={idx}>
                                    <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                                    <div className="text-sm text-foreground/70 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Testimonials / Trust Column */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {testimonials.map((t, idx) => (
                            <div key={idx} className="bg-background p-6 rounded-xl border border-border shadow-sm">
                                <div className="flex text-primary mb-4">
                                    {[1, 2, 3, 4, 5].map(s => <Icon key={s} name="Star" size={14} fill="currentColor" />)}
                                </div>
                                <p className="text-foreground text-sm leading-relaxed mb-4">"{t.quote}"</p>
                                <div>
                                    <div className="font-bold text-sm text-foreground">{t.author}</div>
                                    <div className="text-xs text-muted-foreground">{t.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProofSection;

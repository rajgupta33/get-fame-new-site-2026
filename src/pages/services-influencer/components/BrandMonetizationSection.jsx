import React from 'react';
import Icon from '../../../components/AppIcon';

const BrandMonetizationSection = () => {
    return (
        <section className="py-16 lg:py-20 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                    <div className="inline-flex items-center space-x-2 bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                        <Icon name="DollarSign" size={12} />
                        <span>Monetization</span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                        We Don’t Just Grow You — <br />
                        <span className="text-gradient">We Monetize You</span>
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        Our influencer network connects creators with brand collaboration opportunities across niches. We actively help influencers secure paid deals, long-term partnerships, and visibility opportunities.
                    </p>

                    <div className="space-y-4 mb-8">
                        {[
                            "Brand collaborations & sponsorships",
                            "Paid deal opportunities",
                            "Long-term influencer positioning"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center space-x-3">
                                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                                    <Icon name="Check" size={14} className="text-green-500" />
                                </div>
                                <span className="font-medium text-foreground">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="p-4 bg-muted/30 rounded-lg border-l-4 border-green-500">
                        <p className="text-sm text-foreground/80 italic">
                            "Many influencers experience faster growth, better deals, and stronger visibility after partnering with GetFame."
                        </p>
                    </div>
                </div>

                <div className="order-1 lg:order-2 relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                    <div className="relative rounded-2xl overflow-hidden bg-surface border border-border aspect-[4/3] flex items-center justify-center">
                        {/* Placeholder for visual or illustration */}
                        <div className="text-center p-8">
                            <Icon name="Briefcase" size={64} className="text-green-500 mb-4 mx-auto opacity-50" />
                            <p className="text-muted-foreground font-medium">Brand Deal Network</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandMonetizationSection;

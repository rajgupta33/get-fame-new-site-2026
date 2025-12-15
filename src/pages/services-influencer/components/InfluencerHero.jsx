import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const InfluencerHero = () => {
    return (
        <section className="pt-28 lg:pt-32 pb-16 lg:pb-20 px-6 lg:px-8 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-20 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[150px]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-[150px]"></div>
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-pink-500 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-medium mb-6 border border-pink-500/20 backdrop-blur-sm">
                    <Icon name="Zap" size={14} className="lg:w-4 lg:h-4" />
                    <span>Influencer Growth Engine • Multi-Platform Expertise</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight flex flex-col gap-2">
                    <span>Turn Your Social Media Profile Into a</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 font-bold">Powerful Growth Engine</span>
                </h1>

                {/* Animated Subheading */}
                <div className="h-8 mb-6 overflow-hidden">
                    <div className="animate-slide-up-fade text-lg lg:text-2xl font-medium text-muted-foreground">
                        Instagram • TikTok • YouTube — Built for Virality & Brand Deals
                    </div>
                </div>

                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto line-clamp-3 lg:line-clamp-none opacity-90">
                    We help influencers grow faster using competitive content strategies, viral growth systems, and brand collaboration networks. We don’t just post content — we build long-term influence, visibility, and monetization.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center w-full sm:w-auto">
                    <Button
                        variant="default"
                        size="lg"
                        iconName="Rocket"
                        iconPosition="left"
                        className="gradient-brand shadow-brand animate-pulse-slow w-full sm:w-auto justify-center"
                    >
                        Boost Your Profile Now
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default InfluencerHero;

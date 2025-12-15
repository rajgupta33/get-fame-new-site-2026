import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
    return (
        <section className="pt-32 lg:pt-32 pb-16 lg:pb-20 px-6 lg:px-8 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-20 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[150px]"></div>
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-3 py-1.5 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-medium mb-6 border border-primary/20 backdrop-blur-sm">
                    <Icon name="Cpu" size={14} className="lg:w-4 lg:h-4" />
                    <span>AI-Powered • Performance-Driven • Growth-Focused</span>
                </div>

                {/* Mobile Optimized H1 */}
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight flex flex-col gap-2">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-secondary font-bold">360° Digital Marketing</span>
                    <span>That Builds Visibility,</span>
                    <span>Growth & Revenue</span>
                </h1>

                {/* Animated Subheading */}
                <div className="h-8 mb-6 overflow-hidden">
                    <div className="animate-slide-up-fade text-lg lg:text-2xl font-medium text-muted-foreground whitespace-nowrap">
                        SEO • Social Media • Paid Ads • Brand Strategy
                    </div>
                </div>

                <p className="text-sm lg:text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto line-clamp-3 lg:line-clamp-none opacity-90">
                    At GetFame, we deliver 360 degree digital marketing solutions that combine SEO, social media marketing, paid advertising, brand strategy, and AI-powered growth systems.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md mx-auto sm:max-w-none">
                    <Button
                        variant="default"
                        size="lg"
                        iconName="Zap"
                        iconPosition="left"
                        className="gradient-brand shadow-brand animate-pulse-slow w-full sm:w-auto justify-center"
                    >
                        Get Free Growth Audit
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        iconName="Grid"
                        iconPosition="left"
                        className="border-primary/20 text-primary hover:bg-primary/10 w-full sm:w-auto justify-center"
                        onClick={() => document.getElementById('services-overview')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Explore Services
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

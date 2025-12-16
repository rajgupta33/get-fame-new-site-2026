import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import InfluencerHero from './components/InfluencerHero';
import InfluencerPainPoints from './components/InfluencerPainPoints';
import CorePositioning from './components/CorePositioning';
import PlatformGrowthSection from './components/PlatformGrowthSection';
import CenterCtaSection from './components/CenterCtaSection';
import BrandMonetizationSection from './components/BrandMonetizationSection';
import ViralityEducationSection from './components/ViralityEducationSection';
import InfluencerFaqSection from './components/InfluencerFaqSection';
import FinalCtaSection from './components/FinalCtaSection';
import Footer from '../../components/ui/Footer';
import Button from '../../components/ui/Button';

const ServicesInfluencer = () => {
    const [showStickyCta, setShowStickyCta] = useState(false);

    // Scroll listener for sticky CTA
    useEffect(() => {
        const handleScroll = () => {
            // Show after 30% of viewport height
            if (window.scrollY > window.innerHeight * 0.3) {
                setShowStickyCta(true);
            } else {
                setShowStickyCta(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Helmet>
                <title>Influencer Growth - GetFame Martech</title>
                <meta name="description" content="Scale your personal brand with data-driven influencer marketing campaigns and virality systems." />
            </Helmet>
            <div className="min-h-screen bg-background pb-20 lg:pb-0">
                <Header />

                {/* 1. Hero Section */}
                <InfluencerHero />

                {/* 2. Pain Points Section */}
                <InfluencerPainPoints />

                {/* 3. Core Positioning */}
                <CorePositioning />

                {/* 4. Platform Growth Packages */}
                <PlatformGrowthSection />

                {/* 5. Center CTA */}
                <CenterCtaSection />

                {/* 6. Brand Monetization */}
                <BrandMonetizationSection />

                {/* 7. Virality Education */}
                <ViralityEducationSection />

                {/* 8. FAQ Section */}
                <InfluencerFaqSection />

                {/* 9. Final CTA */}
                <FinalCtaSection />

                {/* Footer */}
                <Footer />

                {/* Sticky Mobile CTA */}
                <div className={`fixed bottom-0 left-0 right-0 p-4 bg-background/90 backdrop-blur-md border-t border-border z-50 transition-transform duration-300 lg:hidden ${showStickyCta ? 'translate-y-0' : 'translate-y-full'}`}>
                    <a href="https://growth.getfame.social" target="_blank" rel="noopener noreferrer">
                        <Button
                            variant="default"
                            size="lg"
                            className="w-full gradient-brand shadow-lg justify-center"
                        >
                            Boost Your Profile Now
                        </Button>
                    </a>
                </div>
            </div>
        </>
    );
};

export default ServicesInfluencer;

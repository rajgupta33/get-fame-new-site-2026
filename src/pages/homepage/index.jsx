import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';

// Page Components
import HeroSection from './components/HeroSection';
import PositioningSection from './components/PositioningSection';
import ServicesShowcase from './components/ServicesShowcase';
import SocialProofSection from './components/SocialProofSection';
import FeaturedCaseStudy from './components/FeaturedCaseStudy';
import InnovationVision from './components/InnovationVision';
import CTASection from './components/CTASection';

const Homepage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background font-sans text-foreground">
            <Helmet>
                <title>GetFame Martech - We Architect Fame | Premium Digital Growth</title>
                <meta name="description" content="GetFame is not just a marketing agency. We are a fame growth engine combining 360° strategies, AI innovation, and creative storytelling." />
            </Helmet>

            <Header />

            <main className="pt-0">
                {/* 1. Hero */}
                <HeroSection />

                {/* 2. Positioning */}
                <PositioningSection />

                {/* 3. 360 Ecosystem */}
                <ServicesShowcase />

                {/* 4. Social Proof & Metrics */}
                <SocialProofSection />

                {/* 5. Transformation Stories */}
                {/* 5. Transformation Stories - REMOVED */}

                {/* 6. Future / AI Vision */}
                <InnovationVision />

                {/* 7. Final CTA */}
                <CTASection />
            </main>

            <Footer />
        </div>
    );
};

export default Homepage;
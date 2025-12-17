import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import WhyChooseUs from './components/WhyChooseUs';
import OurStory from './components/OurStory';
import Footer from '../../components/ui/Footer';

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background">
            <Helmet>
                <title>About Us - GetFame Martech</title>
                <meta name="description" content="Learn about GetFame Martech, our mission to architect fame, and why we are the preferred digital growth partner." />
            </Helmet>
            <Header />



            {/* Hero Section */}
            <section className="pt-24 pb-16 px-6 lg:px-8 bg-gradient-to-br from-background via-primary/5 to-background">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20">
                        <Icon name="Users" size={16} />
                        <span>Our Mission</span>
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                        We Don't Just Market.
                        <span className="text-gradient block">We Architect Fame.</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        At GetFame, we believe that in the digital age, visibility is currency. We combine creative storytelling with data-driven technology to build brands that don't just exist—they dominate.
                    </p>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 px-6 lg:px-8">
                <WhyChooseUs />
            </section>

            {/* Our Story / Team Section */}
            <section className="py-16 px-6 lg:px-8 bg-muted/30">
                <OurStory />
            </section>

            {/* Footer CTA */}
            <section className="py-20 px-6 lg:px-8 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6">Ready to Write Your Success Story?</h2>
                    <p className="text-muted-foreground mb-8 text-lg">Join the ranks of brands that refuse to be ignored.</p>
                    <a href="/contact-us" className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors">
                        Start Your Journey
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutUs;

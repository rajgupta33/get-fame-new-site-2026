import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import Footer from '../../components/ui/Footer';

const ContactUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background">
            <Helmet>
                <title>Contact Us - GetFame Martech</title>
                <meta name="description" content="Get in touch with GetFame Martech. top-tier digital marketing agency in India." />
            </Helmet>
            <Header />

            <section className="pt-24 pb-12 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20">
                            <Icon name="Mail" size={16} />
                            <span>Get In Touch</span>
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                            Let's Architect
                            <span className="text-gradient block">Your Fame</span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                            Have a project in mind? We'd love to hear from you.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <ContactInfo />
                        </div>
                        <div className="bg-surface rounded-xl p-8 shadow-card border border-border">
                            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactUs;

import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';

const FinalCtaSection = () => {
    return (
        <section className="py-16 lg:py-20 px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-cyan-500/5 to-blue-600/10">

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                    Let’s Build Technology <br /> That Works for Your Growth
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 w-full max-w-md mx-auto sm:max-w-none">
                    <Link to="/contact-us" className="w-full sm:w-auto">
                        <Button
                            variant="default"
                            size="lg"
                            iconName="MessageSquare"
                            iconPosition="left"
                            className="gradient-brand shadow-brand hover:scale-105 transition-transform w-full justify-center"
                        >
                            Get Free Tech Consultation
                        </Button>
                    </Link>

                </div>
            </div>
        </section>
    );
};

export default FinalCtaSection;

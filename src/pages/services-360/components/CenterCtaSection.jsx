import React from 'react';
import Button from '../../../components/ui/Button';

const CenterCtaSection = () => {
    return (
        <section className="py-16 px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="rounded-2xl overflow-hidden relative p-8 lg:p-14 text-center bg-gradient-to-r from-primary via-purple-600 to-secondary shadow-2xl">
                    <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay"></div>

                    <div className="relative z-10 flex flex-col items-center">
                        <h2 className="text-2xl lg:text-4xl font-bold text-white mb-8">
                            Ready to Stop Guessing and Start Growing?
                        </h2>
                        <Button
                            variant="secondary"
                            size="lg"
                            iconName="Rocket"
                            iconPosition="right"
                            className="bg-white text-primary hover:bg-gray-100 font-bold px-8 lg:w-auto w-full shadow-lg"
                        >
                            Start Your 360° Growth Journey
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CenterCtaSection;

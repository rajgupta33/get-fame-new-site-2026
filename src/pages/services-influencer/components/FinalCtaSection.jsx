import React from 'react';
import Button from '../../../components/ui/Button';

const FinalCtaSection = () => {
    return (
        <section className="py-20 px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-purple-900 to-pink-900">
            <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                    Ready to Turn Views Into Fame & Revenue?
                </h2>
                <p className="text-xl text-pink-200 mb-8 font-light">
                    Grow smarter. Get visible. Get paid.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md mx-auto sm:max-w-none">
                    <Button
                        variant="secondary"
                        size="lg"
                        className="bg-white text-purple-900 hover:bg-gray-100 font-bold w-full sm:w-auto justify-center"
                    >
                        Boost Your Profile Now
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default FinalCtaSection;

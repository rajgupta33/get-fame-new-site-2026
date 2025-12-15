import React from 'react';
import Button from '../../../components/ui/Button';

const CenterCtaSection = () => {
    return (
        <section className="py-12 px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="rounded-2xl overflow-hidden relative p-8 lg:p-12 text-center bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 shadow-2xl">
                    <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay"></div>

                    <div className="relative z-10 flex flex-col items-center">
                        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">Ready to Explosively Grow Your Audience?</h2>
                        <Button
                            variant="secondary"
                            size="lg"
                            className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 lg:w-auto w-full"
                        >
                            Boost Your Profile Now
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CenterCtaSection;

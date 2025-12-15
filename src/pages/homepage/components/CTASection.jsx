import React from 'react';
import Button from '../../../components/ui/Button';

const CTASection = () => {
    return (
        <section className="py-24 px-6 lg:px-8 bg-surface">
            <div className="max-w-5xl mx-auto text-center">
                <div className="p-12 rounded-[32px] bg-gradient-to-br from-primary via-purple-600 to-secondary relative overflow-hidden shadow-2xl">
                    <div className="relative z-10">
                        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                            Your Brand's Journey to Fame Starts Here
                        </h2>

                        <div className="flex justify-center">
                            <Button
                                variant="secondary"
                                size="lg"
                                className="bg-white text-primary hover:bg-gray-100 font-bold px-12 py-6 text-lg rounded-xl shadow-lg"
                            >
                                Get Free Growth Audit
                            </Button>
                        </div>
                    </div>

                    {/* Texture/Decoration */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
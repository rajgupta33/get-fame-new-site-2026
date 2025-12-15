import React from 'react';
import Button from '../../../components/ui/Button';

const FinalCtaSection = () => {
    return (
        <section className="py-20 px-6 lg:px-8 relative overflow-hidden bg-black">
            {/* Abstract Lines */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:24px_24px]"></div>
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                    One Strategy. All Channels. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Real Growth.</span>
                </h2>

                <div className="flex justify-center mt-8">
                    <Button
                        variant="default"
                        size="lg"
                        className="gradient-brand shadow-brand hover:scale-105 transition-transform px-10"
                    >
                        Get Free Growth Audit
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default FinalCtaSection;

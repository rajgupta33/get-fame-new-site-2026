import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InnovationVision = () => {
    return (
        <section className="py-24 px-6 lg:px-8 relative overflow-hidden bg-black text-white">
            <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-overlay"></div>

            {/* Soft Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <Icon name="Cpu" size={48} className="text-primary mx-auto mb-8 animate-pulse-slow" />

                <h2 className="text-4xl lg:text-6xl font-bold mb-8 tracking-tight">
                    The Future of Growth <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Is Artificial Intelligence.</span>
                </h2>

                <p className="text-xl text-white/70 leading-relaxed mb-12 max-w-2xl mx-auto">
                    We are building the next generation of marketing engines. From predictive analytics to automated content scaling, our Innovation Lab is defining what's possible.
                </p>


            </div>
        </section>
    );
};

export default InnovationVision;

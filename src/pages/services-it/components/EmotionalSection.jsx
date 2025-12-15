import React from 'react';

const EmotionalSection = () => {
    return (
        <section className="py-16 lg:py-20 px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('/images/grid-pattern.svg')]"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-3xl lg:text-5xl font-bold mb-8 leading-tight">
                    Tired of Agencies <br />
                    That Just <span className="text-gray-400">“Build”</span> <br />
                    But Don’t Think <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Growth</span>?
                </h2>

                <p className="text-lg lg:text-2xl text-gray-300 font-light mb-10">
                    Most agencies deliver code. <br className="hidden lg:block" />
                    We deliver <span className="font-semibold text-white">digital products designed to grow with your business.</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-8 text-left">
                    {[
                        "No scalability",
                        "Poor mobile UX",
                        "No SEO thinking",
                        "No growth roadmap"
                    ].map((pain, i) => (
                        <div key={i} className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10 flex items-center space-x-3">
                            <span className="text-lg">❌</span>
                            <span className="text-gray-300 text-sm font-medium">{pain}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-12 p-6 bg-white/5 rounded-xl border border-purple-500/30 inline-block w-full lg:w-auto">
                    <p className="text-lg font-medium">
                        GetFame builds <span className="text-purple-400 block lg:inline">technology that evolves as your brand grows.</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default EmotionalSection;

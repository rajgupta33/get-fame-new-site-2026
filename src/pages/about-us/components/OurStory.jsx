import React from 'react';

const OurStory = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                    <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
                    <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                        <p>
                            GetFame began with a simple observation: most marketing agencies were still living in 2010. They were applying traditional tactics to a TikTok world. We saw a disconnect between where attention was actually going and where brands were spending their budget.
                        </p>
                        <p>
                            We started as a small collective of growth hackers and content creators in a garage (cliché, but true). We obsessed over what makes content go viral. We reverse-engineered algorithms. We built tools to measure what others said couldn't be measured.
                        </p>
                        <p>
                            Today, we are a team of 50+ strategists, developers, and creatives working with some of the boldest brands in the world. But our core mission hasn't changed: we are here to help you get famous, get noticed, and get results.
                        </p>
                    </div>
                </div>
                <div className="order-1 lg:order-2">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-primary/20 bg-gradient-to-br from-primary/20 to-secondary/20 h-96 w-full flex items-center justify-center">
                        {/* Placeholder for team image or abstract creative visual */}
                        <div className="text-primary/40 font-bold text-9xl select-none opacity-20">GF</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurStory;

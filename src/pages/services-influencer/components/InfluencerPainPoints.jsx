import React from 'react';
import Icon from '../../../components/AppIcon';

const InfluencerPainPoints = () => {
    const painPoints = [
        "Posting daily but no growth",
        "Views without followers",
        "Followers without brand deals",
        "One viral reel… then nothing"
    ];

    return (
        <section className="py-12 lg:py-16 px-4 lg:px-8 bg-muted/20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8 lg:mb-12">
                    <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3 lg:mb-4">Why Most Influencers Stay Stuck for Years</h2>
                </div>

                {/* Mobile: Horizontal Swipe / Desktop: Grid */}
                <div className="flex overflow-x-auto pb-6 -mx-4 px-4 snap-x space-x-4 lg:grid lg:grid-cols-4 lg:space-x-0 lg:gap-6 lg:overflow-visible lg:pb-0 lg:mx-0 lg:px-0 scrollbar-hide">
                    {painPoints.map((point, index) => (
                        <div key={index} className="flex-none w-[260px] lg:w-auto snap-center bg-surface p-6 rounded-xl border border-destructive/20 hover:border-destructive/40 transition-all shadow-sm group">
                            <div className="flex flex-col items-center text-center space-y-4 h-full justification-center">
                                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-destructive/10 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                                    <Icon name="X" size={20} className="text-destructive lg:w-6 lg:h-6" />
                                </div>
                                <p className="font-medium text-foreground text-sm lg:text-base">{point}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-8 lg:mt-12">
                    <p className="text-lg font-medium text-foreground">
                        Growth without strategy is temporary. <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Virality without systems never lasts.</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default InfluencerPainPoints;

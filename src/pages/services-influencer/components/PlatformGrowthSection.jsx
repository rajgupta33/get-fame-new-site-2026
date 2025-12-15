import React from 'react';
import Icon from '../../../components/AppIcon';

const PlatformGrowthSection = () => {
    const platforms = [
        {
            id: 'instagram',
            title: 'Instagram Growth & Monetization',
            icon: 'Instagram',
            description: 'We help influencers grow on Instagram using reel virality frameworks, profile optimization, content positioning, and engagement systems that attract both followers and brands.',
            includes: ['Reels virality strategy', 'Profile optimization', 'Engagement growth', 'Brand-ready positioning'],
            color: 'from-purple-500 to-pink-500',
            iconColor: 'text-pink-500',
            highlight: false
        },
        {
            id: 'tiktok',
            title: 'TikTok Virality Engine 🚀',
            icon: 'Video', // Using Video as proxy for TikTok if not available, or standard icon
            description: 'TikTok is the fastest platform for visibility — if done right. We build TikTok growth systems that focus on watch time, repeat reach, and algorithm triggers for consistent virality.',
            includes: ['Viral content frameworks', 'Hook & retention strategies', 'Fast audience scaling', 'Trend-based growth'],
            color: 'from-black to-gray-900',
            iconColor: 'text-foreground',
            highlight: true
        },
        {
            id: 'youtube',
            title: 'YouTube Growth & Authority Building',
            icon: 'Youtube',
            description: 'We help creators grow on YouTube through content planning, Shorts strategy, SEO optimization, and long-term authority building.',
            includes: ['Shorts + long-form strategy', 'SEO-optimized titles', 'Audience retention planning'],
            color: 'from-red-600 to-red-500',
            iconColor: 'text-red-500',
            highlight: false
        }
    ];

    return (
        <section className="py-16 lg:py-20 px-6 lg:px-8 bg-muted/10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Multi-Platform Influencer Growth Packages</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {platforms.map((platform) => (
                        <div
                            key={platform.id}
                            className={`relative rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col ${platform.highlight
                                    ? 'border-primary shadow-brand scale-100 lg:scale-105 z-10 bg-surface'
                                    : 'border-border bg-surface/50 hover:bg-surface hover:border-border/80'
                                }`}
                        >
                            {/* Header Gradient */}
                            <div className={`h-2 bg-gradient-to-r ${platform.color}`}></div>

                            <div className="p-6 flex-grow flex flex-col">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className={`p-2 rounded-lg bg-muted/50 ${platform.iconColor}`}>
                                        <Icon name={platform.icon} size={24} />
                                    </div>
                                    <h3 className="text-lg lg:text-xl font-bold text-foreground leading-tight">{platform.title}</h3>
                                </div>

                                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                                    {platform.description}
                                </p>

                                <div className="mt-auto space-y-3">
                                    {platform.includes.map((item, idx) => (
                                        <div key={idx} className="flex items-start space-x-2 text-sm">
                                            <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                                            <span className="text-foreground/80">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PlatformGrowthSection;

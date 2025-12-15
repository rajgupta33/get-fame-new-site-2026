import React from 'react';
import Icon from '../../../components/AppIcon';

const PlatformCertifications = () => {
    const certifications = [
        {
            id: 1,
            name: "Meta Business Partner",
            platform: "Meta",
            icon: "Facebook",
            level: "Premier",
            description: "Advanced Facebook & Instagram advertising expertise",
            color: "bg-blue-500",
            verified: true
        },
        {
            id: 2,
            name: "Google Ads Certified",
            platform: "Google",
            icon: "Search",
            level: "Expert",
            description: "Search, Display, Video & Shopping campaigns",
            color: "bg-green-500",
            verified: true
        },
        {
            id: 3,
            name: "TikTok Marketing Partner",
            platform: "TikTok",
            icon: "Music",
            level: "Certified",
            description: "Creative strategy and performance optimization",
            color: "bg-pink-500",
            verified: true
        },
        {
            id: 4,
            name: "LinkedIn Marketing Solutions",
            platform: "LinkedIn",
            icon: "Linkedin",
            level: "Advanced",
            description: "B2B lead generation and brand awareness",
            color: "bg-blue-600",
            verified: true
        },
        {
            id: 5,
            name: "YouTube Creator Certified",
            platform: "YouTube",
            icon: "Play",
            level: "Expert",
            description: "Content strategy and audience development",
            color: "bg-red-500",
            verified: true
        },
        {
            id: 6,
            name: "Shopify Plus Partner",
            platform: "Shopify",
            icon: "ShoppingBag",
            level: "Plus",
            description: "E-commerce optimization and growth",
            color: "bg-green-600",
            verified: true
        }
    ];

    return (
        <div className="bg-surface rounded-2xl border border-border p-6 shadow-card">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">Platform Certifications</h2>
                    <p className="text-muted-foreground">
                        Verified expertise across major marketing platforms
                    </p>
                </div>
                <div className="flex items-center space-x-2 text-success">
                    <Icon name="Shield" size={20} />
                    <span className="text-sm font-medium">All Verified</span>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {certifications?.map((cert) => (
                    <div
                        key={cert?.id}
                        className="relative group bg-muted/30 rounded-xl p-4 hover:bg-muted/50 transition-all duration-300 border border-transparent hover:border-primary/20"
                    >
                        {/* Certification Badge */}
                        <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center space-x-3">
                                <div className={`w-10 h-10 ${cert?.color} rounded-lg flex items-center justify-center text-white shadow-sm`}>
                                    <Icon name={cert?.icon} size={20} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground text-sm">{cert?.name}</h3>
                                    <p className="text-xs text-muted-foreground">{cert?.platform}</p>
                                </div>
                            </div>
                            {cert?.verified && (
                                <div className="flex items-center space-x-1 text-success">
                                    <Icon name="CheckCircle" size={16} />
                                </div>
                            )}
                        </div>

                        {/* Level Badge */}
                        <div className="flex items-center justify-between mb-3">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${cert?.level === 'Premier' || cert?.level === 'Expert' ? 'bg-primary/10 text-primary border border-primary/20'
                                    : cert?.level === 'Plus' ? 'bg-success/10 text-success border border-success/20' : 'bg-secondary/10 text-secondary border border-secondary/20'
                                }`}>
                                {cert?.level}
                            </span>
                        </div>

                        {/* Description */}
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            {cert?.description}
                        </p>

                        {/* Hover Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                ))}
            </div>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border/50">
                <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">6</div>
                    <div className="text-xs text-muted-foreground">Platform Partners</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl font-bold text-success mb-1">100%</div>
                    <div className="text-xs text-muted-foreground">Verified Status</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl font-bold text-secondary mb-1">2024</div>
                    <div className="text-xs text-muted-foreground">Latest Updates</div>
                </div>
            </div>
        </div>
    );
};

export default PlatformCertifications;
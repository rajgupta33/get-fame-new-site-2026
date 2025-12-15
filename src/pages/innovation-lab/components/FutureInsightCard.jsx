import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FutureInsightCard = ({ insight }) => {
    const getTypeColor = (type) => {
        switch (type) {
            case 'Speaking': return 'text-primary bg-primary/10 border-primary/30';
            case 'Research': return 'text-accent bg-accent/10 border-accent/30';
            case 'Conference': return 'text-success bg-success/10 border-success/30';
            case 'Whitepaper': return 'text-warning bg-warning/10 border-warning/30';
            default: return 'text-muted-foreground bg-muted border-border';
        }
    };

    return (
        <div className="bg-surface rounded-2xl border border-border overflow-hidden hover:shadow-floating transition-all duration-300 group">
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={insight?.image}
                    alt={insight?.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(insight?.type)}`}>
                        {insight?.type}
                    </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-bold text-white mb-1">{insight?.title}</h3>
                    <p className="text-sm text-white/80">{insight?.venue}</p>
                </div>
            </div>
            <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                    <Icon name={insight?.icon} size={16} className="text-primary" strokeWidth={2} />
                    <span className="text-sm font-medium text-primary">{insight?.category}</span>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {insight?.description}
                </p>

                <div className="space-y-4 mb-6">
                    <div>
                        <h4 className="text-sm font-medium text-foreground mb-2">Key Topics</h4>
                        <div className="flex flex-wrap gap-2">
                            {insight?.topics?.map((topic, index) => (
                                <span
                                    key={index}
                                    className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground"
                                >
                                    {topic}
                                </span>
                            ))}
                        </div>
                    </div>

                    {insight?.highlights && (
                        <div>
                            <h4 className="text-sm font-medium text-foreground mb-2">Key Highlights</h4>
                            <div className="space-y-2">
                                {insight?.highlights?.map((highlight, index) => (
                                    <div key={index} className="flex items-start space-x-2">
                                        <Icon name="ArrowRight" size={12} className="text-primary mt-0.5" strokeWidth={2.5} />
                                        <span className="text-xs text-muted-foreground">{highlight}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {insight?.metrics && (
                        <div>
                            <h4 className="text-sm font-medium text-foreground mb-2">Impact Metrics</h4>
                            <div className="grid grid-cols-2 gap-3">
                                {Object.entries(insight?.metrics)?.map(([key, value]) => (
                                    <div key={key} className="text-center p-3 bg-muted/30 rounded-lg">
                                        <div className="text-lg font-bold text-primary">{value}</div>
                                        <div className="text-xs text-muted-foreground capitalize">
                                            {key?.replace(/([A-Z])/g, ' $1')}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                            <Icon name="Calendar" size={14} className="text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">{insight?.date}</span>
                        </div>
                        {insight?.audience && (
                            <div className="flex items-center space-x-1">
                                <Icon name="Users" size={14} className="text-muted-foreground" />
                                <span className="text-xs text-muted-foreground">{insight?.audience}</span>
                            </div>
                        )}
                    </div>
                    <div className="flex items-center space-x-2">
                        {insight?.isUpcoming && (
                            <div className="flex items-center space-x-1">
                                <Icon name="Clock" size={14} className="text-warning" />
                                <span className="text-xs text-warning font-medium">Upcoming</span>
                            </div>
                        )}
                        {insight?.downloadUrl && (
                            <Icon name="Download" size={14} className="text-accent cursor-pointer hover:text-accent/80" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FutureInsightCard;
import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PartnershipCard = ({ partnership }) => {
    const getStatusColor = (status) => {
        switch (status) {
            case 'Active': return 'text-success bg-success/10 border-success/30';
            case 'Launching': return 'text-warning bg-warning/10 border-warning/30';
            case 'Planning': return 'text-accent bg-accent/10 border-accent/30';
            default: return 'text-muted-foreground bg-muted border-border';
        }
    };

    return (
        <div className="bg-surface rounded-2xl border border-border overflow-hidden hover:shadow-floating transition-all duration-300 group">
            <div className="relative h-32 bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
                <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(partnership?.status)}`}>
                        {partnership?.status}
                    </span>
                </div>
                <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-1">
                        <Icon name="Calendar" size={14} className="text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{partnership?.announcedDate}</span>
                    </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center shadow-card">
                            <Image
                                src={partnership?.partnerLogo}
                                alt={partnership?.partnerName}
                                className="w-8 h-8 object-contain"
                            />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-foreground">{partnership?.title}</h3>
                            <p className="text-sm text-muted-foreground">{partnership?.partnerName}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                    <Icon name={partnership?.typeIcon} size={16} className="text-primary" strokeWidth={2} />
                    <span className="text-sm font-medium text-primary">{partnership?.type}</span>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {partnership?.description}
                </p>

                <div className="space-y-4 mb-6">
                    <div>
                        <h4 className="text-sm font-medium text-foreground mb-2">Key Benefits</h4>
                        <div className="space-y-2">
                            {partnership?.benefits?.map((benefit, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <Icon name="Check" size={14} className="text-success" strokeWidth={2.5} />
                                    <span className="text-xs text-muted-foreground">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-medium text-foreground mb-2">Focus Areas</h4>
                        <div className="flex flex-wrap gap-2">
                            {partnership?.focusAreas?.map((area, index) => (
                                <span
                                    key={index}
                                    className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground"
                                >
                                    {area}
                                </span>
                            ))}
                        </div>
                    </div>

                    {partnership?.metrics && (
                        <div>
                            <h4 className="text-sm font-medium text-foreground mb-2">Expected Impact</h4>
                            <div className="grid grid-cols-2 gap-3">
                                {Object.entries(partnership?.metrics)?.map(([key, value]) => (
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
                            <Icon name="Users" size={14} className="text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">{partnership?.teamSize} team members</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <Icon name="Target" size={14} className="text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">{partnership?.duration}</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        {partnership?.isExclusive && (
                            <div className="flex items-center space-x-1">
                                <Icon name="Star" size={14} className="text-warning" />
                                <span className="text-xs text-warning font-medium">Exclusive</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnershipCard;
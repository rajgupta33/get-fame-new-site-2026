import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TechDemoCard = ({ demo, onTryDemo }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="bg-surface rounded-2xl border border-border overflow-hidden hover:shadow-floating transition-all duration-300 group">
            <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
                <div className="relative z-10 text-center">
                    <div className="w-16 h-16 rounded-2xl gradient-brand flex items-center justify-center shadow-brand mx-auto mb-3">
                        <Icon name={demo?.icon} size={32} color="white" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{demo?.title}</h3>
                    <p className="text-sm text-muted-foreground">{demo?.category}</p>
                </div>
                <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${demo?.readiness === 'Production Ready' ? 'bg-success/20 text-success border border-success/30'
                            : demo?.readiness === 'Beta' ? 'bg-warning/20 text-warning border border-warning/30' : 'bg-accent/20 text-accent border border-accent/30'
                        }`}>
                        {demo?.readiness}
                    </span>
                </div>
            </div>
            <div className="p-6">
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {demo?.description}
                </p>

                <div className="space-y-4 mb-6">
                    <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Capabilities</h4>
                        <div className="grid grid-cols-1 gap-2">
                            {demo?.capabilities?.slice(0, isExpanded ? demo?.capabilities?.length : 3)?.map((capability, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <Icon name="Zap" size={14} className="text-primary" strokeWidth={2.5} />
                                    <span className="text-xs text-muted-foreground">{capability}</span>
                                </div>
                            ))}
                        </div>
                        {demo?.capabilities?.length > 3 && (
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="text-xs text-primary hover:text-primary/80 mt-2 flex items-center space-x-1"
                            >
                                <span>{isExpanded ? 'Show Less' : `+${demo?.capabilities?.length - 3} More`}</span>
                                <Icon
                                    name={isExpanded ? 'ChevronUp' : 'ChevronDown'}
                                    size={12}
                                    strokeWidth={2.5}
                                />
                            </button>
                        )}
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                        <div className="text-center">
                            <div className="text-lg font-bold text-primary">{demo?.metrics?.accuracy}</div>
                            <div className="text-xs text-muted-foreground">Accuracy</div>
                        </div>
                        <div className="text-center">
                            <div className="text-lg font-bold text-accent">{demo?.metrics?.speed}</div>
                            <div className="text-xs text-muted-foreground">Processing Speed</div>
                        </div>
                        <div className="text-center">
                            <div className="text-lg font-bold text-success">{demo?.metrics?.efficiency}</div>
                            <div className="text-xs text-muted-foreground">Efficiency Gain</div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Icon name="Users" size={16} className="text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{demo?.usedBy} clients testing</span>
                    </div>
                    <Button
                        variant="default"
                        size="sm"
                        iconName="Play"
                        iconPosition="left"
                        iconSize={16}
                        onClick={() => onTryDemo(demo)}
                        className="gradient-brand hover:gradient-brand-hover shadow-brand"
                    >
                        Try Demo
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default TechDemoCard;
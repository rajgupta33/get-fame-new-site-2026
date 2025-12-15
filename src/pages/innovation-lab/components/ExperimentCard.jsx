import React from 'react';
import Icon from '../../../components/AppIcon';

const ExperimentCard = ({ experiment }) => {
    const getStatusColor = (status) => {
        switch (status) {
            case 'Completed': return 'text-success bg-success/10 border-success/30';
            case 'In Progress': return 'text-warning bg-warning/10 border-warning/30';
            case 'Planning': return 'text-accent bg-accent/10 border-accent/30';
            default: return 'text-muted-foreground bg-muted border-border';
        }
    };

    const getResultColor = (result) => {
        if (result?.includes('+')) return 'text-success';
        if (result?.includes('-')) return 'text-error';
        return 'text-muted-foreground';
    };

    return (
        <div className="bg-surface rounded-2xl p-6 border border-border hover:shadow-card transition-all duration-300 group">
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg gradient-brand flex items-center justify-center shadow-brand">
                        <Icon name={experiment?.icon} size={20} color="white" strokeWidth={2} />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-foreground">{experiment?.title}</h3>
                        <p className="text-sm text-muted-foreground">{experiment?.platform}</p>
                    </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(experiment?.status)}`}>
                    {experiment?.status}
                </span>
            </div>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {experiment?.description}
            </p>
            <div className="space-y-4 mb-6">
                <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Hypothesis</h4>
                    <p className="text-xs text-muted-foreground bg-muted/50 p-3 rounded-lg">
                        {experiment?.hypothesis}
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h4 className="text-sm font-medium text-foreground mb-2">Test Variables</h4>
                        <div className="space-y-1">
                            {experiment?.variables?.map((variable, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <Icon name="Target" size={12} className="text-primary" strokeWidth={2.5} />
                                    <span className="text-xs text-muted-foreground">{variable}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-sm font-medium text-foreground mb-2">Key Metrics</h4>
                        <div className="space-y-1">
                            {experiment?.metrics?.map((metric, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <Icon name="BarChart3" size={12} className="text-accent" strokeWidth={2.5} />
                                    <span className="text-xs text-muted-foreground">{metric}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {experiment?.results && (
                    <div>
                        <h4 className="text-sm font-medium text-foreground mb-2">Results</h4>
                        <div className="grid grid-cols-2 gap-3">
                            {Object.entries(experiment?.results)?.map(([key, value]) => (
                                <div key={key} className="text-center p-3 bg-muted/30 rounded-lg">
                                    <div className={`text-lg font-bold ${getResultColor(value)}`}>{value}</div>
                                    <div className="text-xs text-muted-foreground capitalize">{key?.replace(/([A-Z])/g, ' $1')}</div>
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
                        <span className="text-xs text-muted-foreground">{experiment?.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <Icon name="Users" size={14} className="text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{experiment?.sampleSize}</span>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    {experiment?.learnings && (
                        <div className="flex items-center space-x-1">
                            <Icon name="Lightbulb" size={14} className="text-warning" />
                            <span className="text-xs text-warning font-medium">Key Insights</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ExperimentCard;
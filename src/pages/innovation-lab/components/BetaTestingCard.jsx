import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const BetaTestingCard = ({ program, onJoinBeta }) => {
    return (
        <div className="bg-surface rounded-2xl p-6 border border-border hover:shadow-floating transition-all duration-300 group">
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center shadow-brand">
                        <Icon name={program?.icon} size={24} color="white" strokeWidth={2} />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-foreground">{program?.title}</h3>
                        <div className="flex items-center space-x-2 mt-1">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${program?.status === 'Active' ? 'bg-success/10 text-success'
                                    : program?.status === 'Coming Soon' ? 'bg-warning/10 text-warning' : 'bg-muted text-muted-foreground'
                                }`}>
                                {program?.status}
                            </span>
                            <span className="text-xs text-muted-foreground">
                                {program?.participants} participants
                            </span>
                        </div>
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-sm font-medium text-foreground">{program?.duration}</div>
                    <div className="text-xs text-muted-foreground">Duration</div>
                </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {program?.description}
            </p>
            <div className="space-y-3 mb-6">
                <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Key Features</h4>
                    <div className="grid grid-cols-1 gap-2">
                        {program?.features?.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <Icon name="Check" size={14} className="text-success" strokeWidth={2.5} />
                                <span className="text-xs text-muted-foreground">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Requirements</h4>
                    <div className="flex flex-wrap gap-2">
                        {program?.requirements?.map((req, index) => (
                            <span
                                key={index}
                                className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground"
                            >
                                {req}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center space-x-4">
                    <div className="text-center">
                        <div className="text-lg font-semibold text-primary">{program?.successRate}%</div>
                        <div className="text-xs text-muted-foreground">Success Rate</div>
                    </div>
                    <div className="text-center">
                        <div className="text-lg font-semibold text-accent">{program?.avgLift}</div>
                        <div className="text-xs text-muted-foreground">Avg Performance Lift</div>
                    </div>
                </div>
                <Button
                    variant={program?.status === 'Active' ? 'default' : 'outline'}
                    size="sm"
                    iconName={program?.status === 'Active' ? 'Rocket' : 'Clock'}
                    iconPosition="left"
                    iconSize={16}
                    disabled={program?.status !== 'Active'}
                    onClick={() => onJoinBeta(program)}
                    className={program?.status === 'Active' ? 'gradient-brand hover:gradient-brand-hover shadow-brand' : ''}
                >
                    {program?.status === 'Active' ? 'Join Beta' : program?.status}
                </Button>
            </div>
        </div>
    );
};

export default BetaTestingCard;
import React from 'react';
import Icon from '../../../components/AppIcon';

const ConsultationProcess = () => {
    const processSteps = [
        {
            step: 1,
            title: 'Initial Assessment',
            duration: '15 minutes',
            description: 'We review your current marketing setup, analyze your brand presence, and identify immediate opportunities.',
            activities: [
                'Current platform audit',
                'Competitor analysis overview',
                'Brand positioning review',
                'Quick wins identification'
            ],
            icon: 'Search'
        },
        {
            step: 2,
            title: 'Strategy Deep Dive',
            duration: '30 minutes',
            description: 'Collaborative discussion about your goals, challenges, and the custom martech solutions we recommend.',
            activities: [
                'Goal alignment workshop',
                'Challenge prioritization',
                'Solution architecture',
                'Timeline planning'
            ],
            icon: 'Target'
        },
        {
            step: 3,
            title: 'Custom Roadmap',
            duration: '15 minutes',
            description: 'We present a tailored action plan with specific tactics, timelines, and expected outcomes for your brand.',
            activities: [
                'Personalized strategy presentation',
                'ROI projections',
                'Implementation timeline',
                'Next steps planning'
            ],
            icon: 'Map'
        }
    ];

    const outcomes = [
        {
            title: 'Actionable Strategy',
            description: 'Leave with a clear 90-day action plan tailored to your specific business goals and market position.',
            icon: 'CheckCircle',
            color: 'text-success'
        },
        {
            title: 'ROI Projections',
            description: 'Detailed forecasts showing expected returns on investment for each recommended marketing channel.',
            icon: 'TrendingUp',
            color: 'text-primary'
        },
        {
            title: 'Competitive Insights',
            description: 'Understand how your competitors are winning and discover untapped opportunities in your market.',
            icon: 'Eye',
            color: 'text-secondary'
        },
        {
            title: 'Technology Recommendations',
            description: 'Specific martech tools and platforms that will accelerate your growth and improve efficiency.',
            icon: 'Zap',
            color: 'text-accent'
        }
    ];

    const preparation = [
        'Current marketing metrics and performance data',
        'List of your primary business objectives',
        'Information about your target audience',
        'Current marketing budget and resource allocation',
        'Any specific challenges or pain points',
        'Competitor examples you admire or want to outperform'
    ];

    return (
        <div className="space-y-8">
            {/* What to Expect */}
            <div className="bg-surface rounded-xl p-6 shadow-card border border-border">
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">What to Expect in Your Session</h3>
                    <p className="text-sm text-muted-foreground">A structured 60-minute consultation designed to maximize value</p>
                </div>

                <div className="space-y-6">
                    {processSteps?.map((step, index) => (
                        <div key={index} className="relative">
                            <div className="flex items-start space-x-4">
                                <div className="relative">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <Icon name={step?.icon} size={20} className="text-primary" />
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                                        {step?.step}
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-center space-x-3 mb-2">
                                        <h4 className="font-semibold text-foreground">{step?.title}</h4>
                                        <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                                            {step?.duration}
                                        </span>
                                    </div>

                                    <p className="text-sm text-muted-foreground mb-3">{step?.description}</p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {step?.activities?.map((activity, actIndex) => (
                                            <div key={actIndex} className="flex items-center space-x-2">
                                                <Icon name="Check" size={14} className="text-success" />
                                                <span className="text-sm text-foreground">{activity}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {index < processSteps?.length - 1 && (
                                <div className="absolute left-6 top-12 w-0.5 h-8 bg-border"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            {/* Expected Outcomes */}
            <div className="bg-surface rounded-xl p-6 shadow-card border border-border">
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">What You'll Walk Away With</h3>
                    <p className="text-sm text-muted-foreground">Tangible deliverables from your strategy session</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {outcomes?.map((outcome, index) => (
                        <div key={index} className="p-4 bg-background rounded-lg border border-border">
                            <div className="flex items-start space-x-3">
                                <Icon name={outcome?.icon} size={20} className={outcome?.color} />
                                <div>
                                    <h4 className="font-medium text-foreground mb-1">{outcome?.title}</h4>
                                    <p className="text-sm text-muted-foreground">{outcome?.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* How to Prepare */}
            <div className="bg-surface rounded-xl p-6 shadow-card border border-border">
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">How to Prepare</h3>
                    <p className="text-sm text-muted-foreground">Get the most value by bringing these items to your session</p>
                </div>

                <div className="space-y-3">
                    {preparation?.map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                            <Icon name="FileText" size={16} className="text-primary mt-0.5" />
                            <span className="text-sm text-foreground">{item}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="flex items-start space-x-3">
                        <Icon name="Lightbulb" size={20} className="text-primary" />
                        <div>
                            <h4 className="font-medium text-foreground mb-1">Pro Tip</h4>
                            <p className="text-sm text-muted-foreground">
                                Don't worry if you don't have all this information. We'll help you identify what's missing and how to get it during our session.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Meeting Options */}
            <div className="bg-surface rounded-xl p-6 shadow-card border border-border">
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Meeting Options</h3>
                    <p className="text-sm text-muted-foreground">Choose the format that works best for you</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-background rounded-lg border border-border">
                        <div className="flex items-center space-x-3 mb-3">
                            <Icon name="Video" size={20} className="text-primary" />
                            <h4 className="font-medium text-foreground">Virtual Meeting</h4>
                        </div>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center space-x-2">
                                <Icon name="Check" size={14} className="text-success" />
                                <span>Screen sharing for live analysis</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Icon name="Check" size={14} className="text-success" />
                                <span>Recording available for reference</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Icon name="Check" size={14} className="text-success" />
                                <span>No travel time required</span>
                            </li>
                        </ul>
                    </div>

                    <div className="p-4 bg-background rounded-lg border border-border">
                        <div className="flex items-center space-x-3 mb-3">
                            <Icon name="MapPin" size={20} className="text-primary" />
                            <h4 className="font-medium text-foreground">In-Person Meeting</h4>
                        </div>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center space-x-2">
                                <Icon name="Check" size={14} className="text-success" />
                                <span>Face-to-face collaboration</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Icon name="Check" size={14} className="text-success" />
                                <span>Office tour and team introductions</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Icon name="Check" size={14} className="text-success" />
                                <span>Available in NYC, LA, Chicago</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConsultationProcess;
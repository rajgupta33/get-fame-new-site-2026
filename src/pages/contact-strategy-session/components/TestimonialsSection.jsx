import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Sarah Chen',
            title: 'Marketing Director',
            company: 'TechFlow Solutions',
            avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
            rating: 5,
            content: `The strategy session was incredibly valuable. GetFame's team identified gaps in our social media approach that we hadn't even considered. Within 30 days of implementing their recommendations, our engagement increased by 340% and lead quality improved dramatically.`,
            results: {
                metric: 'Engagement Increase',
                value: '340%',
                timeframe: '30 days'
            },
            sessionType: 'Virtual'
        },
        {
            id: 2,
            name: 'Marcus Rodriguez',
            title: 'Founder & CEO',
            company: 'GreenSpace Innovations',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
            rating: 5,
            content: `I was skeptical about another marketing consultation, but GetFame's approach was different. They came prepared with actual data about our competitors and presented a roadmap that made perfect sense. The ROI projections they provided were spot-on.`,
            results: {
                metric: 'ROI Accuracy', value: '98%', timeframe: '6 months'
            },
            sessionType: 'In-Person'
        },
        {
            id: 3,
            name: 'Emily Watson', title: 'VP of Marketing', company: 'FinanceForward', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
            rating: 5,
            content: `The consultation process was thorough and professional. They asked the right questions and provided actionable insights immediately. Our conversion rates doubled after implementing just the first phase of their recommendations.`,
            results: {
                metric: 'Conversion Rate', value: '2x', timeframe: '45 days'
            },
            sessionType: 'Virtual'
        }
    ];

    const consultationStats = [
        {
            metric: 'Average ROI Increase',
            value: '285%',
            description: 'Within 90 days of implementation',
            icon: 'TrendingUp'
        },
        {
            metric: 'Client Satisfaction',
            value: '98%',
            description: 'Would recommend to others',
            icon: 'Heart'
        },
        {
            metric: 'Strategy Success Rate',
            value: '94%',
            description: 'Achieve projected outcomes',
            icon: 'Target'
        },
        {
            metric: 'Follow-up Partnerships',
            value: '87%',
            description: 'Continue with full engagement',
            icon: 'Handshake'
        }
    ];

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <Icon
                key={index}
                name="Star"
                size={16}
                className={index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
            />
        ));
    };

    return (
        <div className="space-y-8">
            {/* Consultation Statistics */}
            <div className="bg-surface rounded-xl p-6 shadow-card border border-border">
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Consultation Success Metrics</h3>
                    <p className="text-sm text-muted-foreground">Real results from our strategy sessions</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {consultationStats?.map((stat, index) => (
                        <div key={index} className="text-center p-4 bg-background rounded-lg border border-border">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                                <Icon name={stat?.icon} size={20} className="text-primary" />
                            </div>
                            <div className="text-2xl font-bold text-foreground mb-1">{stat?.value}</div>
                            <div className="text-sm font-medium text-foreground mb-1">{stat?.metric}</div>
                            <div className="text-xs text-muted-foreground">{stat?.description}</div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Client Testimonials */}
            <div className="bg-surface rounded-xl p-6 shadow-card border border-border">
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">What Clients Say About Our Sessions</h3>
                    <p className="text-sm text-muted-foreground">Hear from leaders who've experienced our consultation process</p>
                </div>

                <div className="space-y-6">
                    {testimonials?.map((testimonial, index) => (
                        <div key={testimonial?.id} className="p-6 bg-background rounded-lg border border-border">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <Image
                                        src={testimonial?.avatar}
                                        alt={testimonial?.name}
                                        className="w-16 h-16 rounded-full object-cover"
                                    />
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-2">
                                        <div>
                                            <h4 className="font-semibold text-foreground">{testimonial?.name}</h4>
                                            <p className="text-sm text-muted-foreground">
                                                {testimonial?.title} at {testimonial?.company}
                                            </p>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <div className="flex space-x-1">
                                                {renderStars(testimonial?.rating)}
                                            </div>
                                            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                                                {testimonial?.sessionType}
                                            </span>
                                        </div>
                                    </div>

                                    <blockquote className="text-sm text-foreground mb-4 italic">
                                        "{testimonial?.content}"
                                    </blockquote>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <div className="text-center">
                                                <div className="text-lg font-bold text-primary">{testimonial?.results?.value}</div>
                                                <div className="text-xs text-muted-foreground">{testimonial?.results?.metric}</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-sm font-medium text-foreground">{testimonial?.results?.timeframe}</div>
                                                <div className="text-xs text-muted-foreground">Implementation</div>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-2 text-success">
                                            <Icon name="CheckCircle" size={16} />
                                            <span className="text-sm font-medium">Verified Result</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Trust Indicators */}
            <div className="bg-surface rounded-xl p-6 shadow-card border border-border">
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Why Leaders Trust Our Consultations</h3>
                    <p className="text-sm text-muted-foreground">The credentials and security that matter to decision-makers</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <Icon name="Shield" size={24} className="text-primary" />
                        </div>
                        <h4 className="font-semibold text-foreground mb-2">Data Security</h4>
                        <p className="text-sm text-muted-foreground">
                            SOC 2 Type II certified with enterprise-grade security protocols. Your business information is protected.
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <Icon name="Award" size={24} className="text-primary" />
                        </div>
                        <h4 className="font-semibold text-foreground mb-2">Industry Recognition</h4>
                        <p className="text-sm text-muted-foreground">
                            Certified Google Premier Partners, Facebook Marketing Partners, and HubSpot Diamond Partners.
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <Icon name="Users" size={24} className="text-primary" />
                        </div>
                        <h4 className="font-semibold text-foreground mb-2">Expert Team</h4>
                        <p className="text-sm text-muted-foreground">
                            15+ years average experience, with backgrounds from Google, Meta, and leading martech companies.
                        </p>
                    </div>
                </div>
            </div>
            {/* Consultation Guarantee */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 border border-primary/20">
                <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon name="CheckCircle" size={24} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Our Consultation Guarantee</h3>
                    <p className="text-sm text-muted-foreground mb-4 max-w-2xl mx-auto">
                        If you don't walk away with at least 3 actionable strategies that could improve your marketing ROI by 25% or more,
                        we'll provide a follow-up session at no charge until you do.
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-primary">
                        <Icon name="Clock" size={16} />
                        <span className="text-sm font-medium">100% Satisfaction Guaranteed</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsSection;
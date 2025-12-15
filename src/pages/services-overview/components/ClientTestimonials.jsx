import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ClientTestimonials = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const testimonials = [
        {
            id: 1,
            client: "Sarah Chen",
            company: "TechFlow Solutions",
            role: "Marketing Director",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
            service: "Social Media Marketing",
            quote: `GetFame transformed our social media presence completely. Within 6 months, we saw a 340% increase in engagement and generated over $2.1M in attributed revenue. Their strategic approach to content creation and community building is unmatched.`,
            metrics: {
                engagement: "+340%",
                revenue: "$2.1M",
                followers: "+185%",
                conversions: "+220%"
            },
            videoUrl: "https://example.com/testimonial-1",
            rating: 5
        },
        {
            id: 2,
            client: "Marcus Rodriguez",
            company: "EcoLiving Brand",
            role: "Founder & CEO",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
            service: "Influencer Partnerships",
            quote: `The influencer network GetFame connected us with was incredible. We partnered with 50+ micro-influencers who genuinely aligned with our brand values. The authentic content they created drove a 280% increase in brand awareness and 150% boost in sales.`,
            metrics: {
                awareness: "+280%",
                sales: "+150%",
                partnerships: "50+",
                reach: "2.5M"
            },
            videoUrl: "https://example.com/testimonial-2",
            rating: 5
        },
        {
            id: 3,
            client: "Jennifer Park",
            company: "FinanceFirst",
            role: "VP of Marketing",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
            service: "Performance Analytics",
            quote: `The analytics dashboard GetFame built for us is a game-changer. We can now track every touchpoint in our customer journey and optimize in real-time. Our ROAS improved by 190% and customer acquisition cost dropped by 45%.`,
            metrics: {
                roas: "+190%",
                cac: "-45%",
                ltv: "+125%",
                attribution: "95%"
            },
            videoUrl: "https://example.com/testimonial-3",
            rating: 5
        }
    ];

    const nextTestimonial = () => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
    };

    const prevTestimonial = () => {
        setActiveTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
    };

    const currentTestimonial = testimonials?.[activeTestimonial];

    return (
        <div className="bg-surface rounded-2xl border border-border shadow-card overflow-hidden">
            {/* Header */}
            <div className="p-6 border-b border-border/50">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-foreground mb-2">Client Success Stories</h2>
                        <p className="text-muted-foreground">Real results from real partnerships</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Button
                            variant="outline"
                            size="icon"
                            iconName="ChevronLeft"
                            iconSize={16}
                            onClick={prevTestimonial}
                            className="w-8 h-8"
                        />
                        <Button
                            variant="outline"
                            size="icon"
                            iconName="ChevronRight"
                            iconSize={16}
                            onClick={nextTestimonial}
                            className="w-8 h-8"
                        />
                    </div>
                </div>
            </div>
            {/* Active Testimonial */}
            <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Client Info & Quote */}
                    <div className="lg:col-span-2 space-y-4">
                        {/* Client Header */}
                        <div className="flex items-start space-x-4">
                            <div className="relative">
                                <img
                                    src={currentTestimonial?.avatar}
                                    alt={currentTestimonial?.client}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                                />
                                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full border-2 border-surface flex items-center justify-center">
                                    <Icon name="Check" size={12} color="white" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-foreground">{currentTestimonial?.client}</h3>
                                <p className="text-sm text-muted-foreground">{currentTestimonial?.role}</p>
                                <p className="text-sm font-medium text-primary">{currentTestimonial?.company}</p>
                                <div className="flex items-center space-x-1 mt-1">
                                    {[...Array(currentTestimonial?.rating)]?.map((_, i) => (
                                        <Icon key={i} name="Star" size={14} className="text-warning fill-current" />
                                    ))}
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-xs text-muted-foreground mb-1">Service</div>
                                <div className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20">
                                    {currentTestimonial?.service}
                                </div>
                            </div>
                        </div>

                        {/* Quote */}
                        <div className="relative">
                            <Icon name="Quote" size={24} className="text-primary/20 absolute -top-2 -left-2" />
                            <blockquote className="text-foreground leading-relaxed pl-6">
                                {currentTestimonial?.quote}
                            </blockquote>
                        </div>

                        {/* Video Placeholder */}
                        <div className="relative bg-muted/30 rounded-lg aspect-video flex items-center justify-center group cursor-pointer hover:bg-muted/50 transition-colors">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-3 mx-auto group-hover:bg-primary/30 transition-colors">
                                    <Icon name="Play" size={24} className="text-primary ml-1" />
                                </div>
                                <p className="text-sm font-medium text-foreground">Watch Full Testimonial</p>
                                <p className="text-xs text-muted-foreground">3:24 minutes</p>
                            </div>
                        </div>
                    </div>

                    {/* Metrics */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-foreground flex items-center">
                            <Icon name="BarChart3" size={18} className="text-primary mr-2" />
                            Results Achieved
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                            {Object.entries(currentTestimonial?.metrics)?.map(([key, value]) => (
                                <div key={key} className="bg-muted/30 rounded-lg p-3 text-center">
                                    <div className="text-lg font-bold text-primary mb-1">{value}</div>
                                    <div className="text-xs text-muted-foreground capitalize">
                                        {key?.replace(/([A-Z])/g, ' $1')?.trim()}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Timeline */}
                        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-4 border border-primary/10">
                            <h5 className="font-semibold text-foreground mb-2 flex items-center">
                                <Icon name="Clock" size={16} className="text-secondary mr-2" />
                                Project Timeline
                            </h5>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Duration</span>
                                    <span className="text-foreground font-medium">6 months</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Started</span>
                                    <span className="text-foreground font-medium">Jan 2024</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Status</span>
                                    <span className="text-success font-medium">Ongoing</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Navigation Dots */}
            <div className="flex items-center justify-center space-x-2 p-4 border-t border-border/50">
                {testimonials?.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTestimonial(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeTestimonial
                                ? 'bg-primary w-6' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ClientTestimonials;
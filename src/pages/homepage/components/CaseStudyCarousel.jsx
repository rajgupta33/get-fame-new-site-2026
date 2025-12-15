import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CaseStudyCarousel = () => {
    const [activeCase, setActiveCase] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    const caseStudies = [
        {
            id: 1,
            client: "TechFlow Solutions",
            industry: "B2B SaaS",
            challenge: "Low brand awareness in competitive market",
            solution: "Integrated social media and influencer campaign with performance analytics",
            results: {
                awareness: "+340%",
                leads: "+156%",
                revenue: "$2.4M",
                timeline: "6 months"
            },
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
            testimonial: `GetFame transformed our entire marketing approach. Their data-driven strategies 
                   and creative execution helped us achieve results we never thought possible.`,
            clientName: "Sarah Chen",
            clientRole: "CMO, TechFlow Solutions",
            clientAvatar: "https://randomuser.me/api/portraits/women/32.jpg",
            tags: ["B2B Marketing", "Lead Generation", "Analytics"]
        },
        {
            id: 2,
            client: "Urban Lifestyle Co.",
            industry: "E-commerce Fashion",
            challenge: "Declining engagement and conversion rates",
            solution: "TikTok-first content strategy with micro-influencer partnerships",
            results: {
                engagement: "+280%",
                conversions: "+89%",
                revenue: "$1.8M",
                timeline: "4 months"
            },
            image: "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?w=800&h=600&fit=crop",
            testimonial: `The team at GetFame understood our brand vision perfectly. Their innovative 
                   approach to social commerce drove incredible results across all metrics.`,
            clientName: "Marcus Rodriguez",
            clientRole: "Founder, Urban Lifestyle Co.",
            clientAvatar: "https://randomuser.me/api/portraits/men/45.jpg",
            tags: ["E-commerce", "Social Commerce", "Influencer Marketing"]
        },
        {
            id: 3,
            client: "HealthTech Innovations",
            industry: "Healthcare Technology",
            challenge: "Complex product requiring educational content strategy",
            solution: "Multi-platform thought leadership campaign with webinar series",
            results: {
                authority: "+420%",
                qualified_leads: "+234%",
                revenue: "$3.2M",
                timeline: "8 months"
            },
            image: "https://images.pixabay.com/photo/2017/10/04/09/56/laboratory-2815641_1280.jpg?w=800&h=600&fit=crop",
            testimonial: `GetFame's strategic approach to healthcare marketing was exceptional. They helped 
                   us build trust and authority while navigating complex compliance requirements.`,
            clientName: "Dr. Emily Watson",
            clientRole: "VP Marketing, HealthTech Innovations",
            clientAvatar: "https://randomuser.me/api/portraits/women/28.jpg",
            tags: ["Healthcare", "Thought Leadership", "Compliance"]
        }
    ];

    useEffect(() => {
        if (!isPlaying) return;

        const interval = setInterval(() => {
            setActiveCase((prev) => (prev + 1) % caseStudies?.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isPlaying, caseStudies?.length]);

    const handlePrevious = () => {
        setActiveCase((prev) => (prev - 1 + caseStudies?.length) % caseStudies?.length);
        setIsPlaying(false);
    };

    const handleNext = () => {
        setActiveCase((prev) => (prev + 1) % caseStudies?.length);
        setIsPlaying(false);
    };

    const currentCase = caseStudies?.[activeCase];

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-6">
                        <Icon name="Star" size={16} className="mr-2" />
                        Success Stories
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Transformation <span className="text-gradient">Stories</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Real brands, real challenges, real results. See how we've helped companies
                        across industries achieve breakthrough marketing performance.
                    </p>
                </div>

                <div className="relative">
                    {/* Main Case Study Display */}
                    <div className="bg-surface rounded-3xl overflow-hidden border border-border shadow-floating">
                        <div className="grid lg:grid-cols-2 gap-0">
                            {/* Image Section */}
                            <div className="relative h-64 lg:h-auto overflow-hidden">
                                <Image
                                    src={currentCase?.image}
                                    alt={`${currentCase?.client} case study`}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
                                <div className="absolute top-6 left-6">
                                    <div className="bg-background/90 backdrop-blur-sm rounded-lg px-3 py-2">
                                        <span className="text-sm font-medium text-foreground">{currentCase?.industry}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8 lg:p-12">
                                <div className="mb-6">
                                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                                        {currentCase?.client}
                                    </h3>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {currentCase?.tags?.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-6 mb-8">
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                                        <p className="text-muted-foreground">{currentCase?.challenge}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                                        <p className="text-muted-foreground">{currentCase?.solution}</p>
                                    </div>
                                </div>

                                {/* Results Grid */}
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    {Object.entries(currentCase?.results)?.map(([key, value]) => (
                                        <div key={key} className="text-center p-4 bg-muted/30 rounded-xl">
                                            <div className="text-2xl font-bold text-primary mb-1">{value}</div>
                                            <div className="text-sm text-muted-foreground capitalize">
                                                {key?.replace('_', ' ')}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Testimonial */}
                                <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6 mb-6">
                                    <p className="text-muted-foreground italic mb-4">
                                        "{currentCase?.testimonial}"
                                    </p>
                                    <div className="flex items-center space-x-3">
                                        <Image
                                            src={currentCase?.clientAvatar}
                                            alt={currentCase?.clientName}
                                            className="w-10 h-10 rounded-full"
                                        />
                                        <div>
                                            <div className="font-semibold text-foreground">{currentCase?.clientName}</div>
                                            <div className="text-sm text-muted-foreground">{currentCase?.clientRole}</div>
                                        </div>
                                    </div>
                                </div>

                                <Button
                                    variant="outline"
                                    iconName="ExternalLink"
                                    iconPosition="right"
                                    className="border-primary/20 text-primary hover:bg-primary/10"
                                >
                                    View Full Case Study
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex items-center justify-between mt-8">
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={handlePrevious}
                                className="w-12 h-12 bg-surface border border-border rounded-full flex items-center justify-center hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                            >
                                <Icon name="ChevronLeft" size={20} className="text-foreground" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="w-12 h-12 bg-surface border border-border rounded-full flex items-center justify-center hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                            >
                                <Icon name="ChevronRight" size={20} className="text-foreground" />
                            </button>
                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="w-12 h-12 bg-surface border border-border rounded-full flex items-center justify-center hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                            >
                                <Icon name={isPlaying ? "Pause" : "Play"} size={20} className="text-foreground" />
                            </button>
                        </div>

                        {/* Indicators */}
                        <div className="flex space-x-2">
                            {caseStudies?.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setActiveCase(index);
                                        setIsPlaying(false);
                                    }}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${activeCase === index
                                            ? 'bg-primary scale-125' : 'bg-border hover:bg-primary/50'
                                        }`}
                                />
                            ))}
                        </div>

                        <div className="text-sm text-muted-foreground">
                            {activeCase + 1} of {caseStudies?.length}
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16">
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                        Ready to Write Your Success Story?
                    </h3>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Join hundreds of brands who've transformed their marketing performance with GetFame's
                        data-driven martech solutions.
                    </p>
                    <Link to="/contact-strategy-session">
                        <Button
                            variant="default"
                            size="lg"
                            iconName="Calendar"
                            iconPosition="left"
                            className="gradient-brand hover:gradient-brand-hover shadow-brand text-white font-semibold px-8 py-4"
                        >
                            Start Your Transformation
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CaseStudyCarousel;
import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, isExpanded, onToggle, onCalculate }) => {
    const [hoveredFeature, setHoveredFeature] = useState(null);

    return (
        <div className={`relative group transition-all duration-500 ${isExpanded ? 'col-span-full' : 'col-span-1'
            }`}>
            <div className={`relative bg-surface rounded-2xl border border-border overflow-hidden transition-all duration-500 ${isExpanded ? 'shadow-floating' : 'shadow-card hover:shadow-brand'
                }`}>
                {/* Gradient Background */}
                <div className="absolute inset-0 gradient-brand opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>

                {/* Card Header */}
                <div className="relative p-6 border-b border-border/50">
                    <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <div className={`w-12 h-12 rounded-xl gradient-brand flex items-center justify-center shadow-brand transition-transform duration-300 ${isExpanded ? 'scale-110' : 'group-hover:scale-105'
                                    }`}>
                                    <Icon name={service?.icon} size={24} color="white" strokeWidth={2.5} />
                                </div>
                                {service?.isNew && (
                                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full border-2 border-surface"></div>
                                )}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-foreground mb-1">{service?.name}</h3>
                                <p className="text-sm text-muted-foreground">{service?.tagline}</p>
                            </div>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
                            iconSize={20}
                            onClick={() => onToggle(service?.id)}
                            className="text-muted-foreground hover:text-foreground"
                        />
                    </div>
                </div>

                {/* Card Content */}
                <div className="relative p-6">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service?.description}
                    </p>

                    {/* Key Features */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                        {service?.features?.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer"
                                onMouseEnter={() => setHoveredFeature(index)}
                                onMouseLeave={() => setHoveredFeature(null)}
                            >
                                <Icon
                                    name="Check"
                                    size={16}
                                    className={`text-success transition-transform duration-200 ${hoveredFeature === index ? 'scale-110' : ''
                                        }`}
                                />
                                <span className="text-sm font-medium text-foreground">{feature}</span>
                            </div>
                        ))}
                    </div>

                    {/* Metrics Preview */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                        {service?.metrics?.map((metric, index) => (
                            <div key={index} className="text-center p-3 rounded-lg bg-primary/5 border border-primary/10">
                                <div className="text-lg font-bold text-primary mb-1">{metric?.value}</div>
                                <div className="text-xs text-muted-foreground">{metric?.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Expanded Content */}
                    {isExpanded && (
                        <div className="space-y-6 border-t border-border/50 pt-6">
                            {/* Methodology */}
                            <div>
                                <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                                    <Icon name="Target" size={18} className="text-primary mr-2" />
                                    Our Methodology
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {service?.methodology?.map((step, index) => (
                                        <div key={index} className="relative">
                                            <div className="flex items-center space-x-2 mb-2">
                                                <div className="w-6 h-6 rounded-full gradient-brand flex items-center justify-center text-white text-xs font-bold">
                                                    {index + 1}
                                                </div>
                                                <span className="text-sm font-medium text-foreground">{step?.title}</span>
                                            </div>
                                            <p className="text-xs text-muted-foreground pl-8">{step?.description}</p>
                                            {index < service?.methodology?.length - 1 && (
                                                <div className="hidden lg:block absolute top-3 left-full w-full h-px bg-gradient-to-r from-primary/50 to-transparent"></div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Timeline */}
                            <div>
                                <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                                    <Icon name="Clock" size={18} className="text-secondary mr-2" />
                                    Project Timeline
                                </h4>
                                <div className="bg-muted/30 rounded-lg p-4">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-muted-foreground">Setup & Strategy</span>
                                        <span className="text-foreground font-medium">{service?.timeline?.setup}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm mt-2">
                                        <span className="text-muted-foreground">Implementation</span>
                                        <span className="text-foreground font-medium">{service?.timeline?.implementation}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm mt-2">
                                        <span className="text-muted-foreground">Optimization</span>
                                        <span className="text-foreground font-medium">{service?.timeline?.optimization}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Tools & Platforms */}
                            <div>
                                <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                                    <Icon name="Wrench" size={18} className="text-accent mr-2" />
                                    Tools & Platforms
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {service?.tools?.map((tool, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full border border-accent/20"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 mt-6">
                        <Button
                            variant="outline"
                            iconName="Calculator"
                            iconPosition="left"
                            iconSize={16}
                            onClick={() => onCalculate(service)}
                            className="flex-1 border-primary/20 text-primary hover:bg-primary/10"
                        >
                            ROI Calculator
                        </Button>
                        <Button
                            variant="default"
                            iconName="ArrowRight"
                            iconPosition="right"
                            iconSize={16}
                            className="flex-1 gradient-brand hover:gradient-brand-hover shadow-brand"
                        >
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
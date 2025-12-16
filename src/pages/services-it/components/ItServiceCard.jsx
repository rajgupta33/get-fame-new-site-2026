import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ItServiceCard = ({ service, isExpanded, onToggle, onCalculate }) => {
    const [hoveredFeature, setHoveredFeature] = useState(null);

    // Mobile accordion state for details
    const [mobileDetailsOpen, setMobileDetailsOpen] = useState(false);

    const toggleMobileDetails = () => {
        setMobileDetailsOpen(!mobileDetailsOpen);
    };

    return (
        <div className={`relative group transition-all duration-500 col-span-1 ${isExpanded ? 'lg:col-span-3' : ''}`}>
            <div className={`relative bg-surface rounded-2xl border border-border overflow-hidden transition-all duration-500 h-full flex flex-col ${isExpanded ? 'shadow-floating' : 'shadow-card hover:shadow-brand'}`}>
                {/* Gradient Background */}
                <div className="absolute inset-0 gradient-brand opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>

                {/* Card Header */}
                <div className="relative p-6 border-b border-border/50 pb-4">
                    <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center shadow-brand">
                            <Icon name={service?.icon} size={24} color="white" strokeWidth={2.5} />
                        </div>
                        {/* Desktop Expand Button */}
                        <div className="hidden lg:block">
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

                    <h3 className="text-xl font-bold text-foreground mb-2">{service?.name}</h3>
                    <p className="text-sm text-foreground/80 font-medium mb-3">{service?.tagline}</p>

                    {/* Perfect For Chips - Visible Always */}
                    {service?.perfectFor && (
                        <div className="flex flex-wrap gap-2 mb-2">
                            {service.perfectFor.slice(0, 3).map((tag, i) => ( // Show first 3 on mobile card preview
                                <span key={i} className="px-2 py-1 bg-muted/40 text-[10px] uppercase font-bold tracking-wider text-muted-foreground rounded-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                {/* Card Content */}
                <div className="relative p-6 pt-4 flex-grow flex flex-col">

                    {/* Mobile: Accordion for details */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMobileDetails}
                            className="flex items-center justify-between w-full text-sm font-semibold text-primary mb-4"
                        >
                            <span>{mobileDetailsOpen ? 'Show Less' : 'View Features & Details'}</span>
                            <Icon name={mobileDetailsOpen ? 'ChevronUp' : 'ChevronDown'} size={16} />
                        </button>

                        <div className={`transition-all duration-300 overflow-hidden ${mobileDetailsOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                                {service?.description}
                            </p>

                            {/* Value Highlights */}
                            {service?.valueHighlights && (
                                <div className="mb-6">
                                    <h4 className="text-xs font-bold text-foreground mb-3 uppercase tracking-wider">Highlights</h4>
                                    <div className="space-y-2">
                                        {service.valueHighlights.map((highlight, index) => (
                                            <div key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                                                <Icon name="Zap" size={14} className="text-primary" />
                                                <span>{highlight}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Capabilities */}
                            {service?.features && (
                                <div className="mb-6">
                                    <h4 className="text-xs font-bold text-foreground mb-3 uppercase tracking-wider">Capabilities</h4>
                                    <div className="space-y-2">
                                        {service.features.map((feature, index) => (
                                            <div key={index} className="flex items-center space-x-2 text-sm text-foreground">
                                                <Icon name="Check" size={14} className="text-success" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Desktop: Regular Content */}
                    <div className="hidden lg:block flex-grow">
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            {service?.description}
                        </p>

                        {/* Value Highlights */}
                        {service?.valueHighlights && (
                            <div className="mb-6">
                                <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Value Highlights</h4>
                                <div className="space-y-2">
                                    {service.valueHighlights.map((highlight, index) => (
                                        <div key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                                            <Icon name="Zap" size={14} className="text-primary" />
                                            <span>{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Capabilities */}
                        {service?.features && (
                            <div className="mb-6">
                                <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Capabilities</h4>
                                <div className="grid grid-cols-2 gap-3">
                                    {service.features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center space-x-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer"
                                            onMouseEnter={() => setHoveredFeature(index)}
                                            onMouseLeave={() => setHoveredFeature(null)}
                                        >
                                            <Icon
                                                name="Check"
                                                size={16}
                                                className={`text-success transition-transform duration-200 ${hoveredFeature === index ? 'scale-110' : ''}`}
                                            />
                                            <span className="text-sm font-medium text-foreground">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Expanded Extra Content (Desktop) */}
                        {isExpanded && (
                            <div className="space-y-6 border-t border-border/50 pt-6 mt-6">
                                {service?.weSolve && (
                                    <div>
                                        <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                                            <Icon name="ShieldCheck" size={18} className="text-secondary mr-2" />
                                            {service.id === 'enterprise-software' ? 'Problems We Solve' : 'We Solve'}
                                        </h4>
                                        <div className="grid grid-cols-2 gap-3">
                                            {service.weSolve.map((solution, index) => (
                                                <div key={index} className="flex items-center space-x-2 text-sm text-foreground">
                                                    <Icon name="CheckCircle" size={16} className="text-success" />
                                                    <span>{solution}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3 mt-auto pt-4 border-t border-border/50 lg:border-none lg:pt-0">
                        <Link to="/contact-us" className="w-full">
                            <Button
                                variant="default"
                                iconName="ArrowRight"
                                iconPosition="right"
                                className="w-full gradient-brand hover:gradient-brand-hover shadow-brand justify-center"
                            >
                                Get Started
                            </Button>
                        </Link>
                        <Button
                            variant="outline"
                            iconName="Calculator"
                            iconPosition="left"
                            iconSize={16}
                            onClick={() => onCalculate(service)}
                            className="w-full border-primary/20 text-primary hover:bg-primary/10 justify-center"
                        >
                            ROI Calculator
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItServiceCard;

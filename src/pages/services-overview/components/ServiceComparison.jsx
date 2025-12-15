import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const ServiceComparison = () => {
    const [selectedServices, setSelectedServices] = useState(['social-media', 'influencer']);
    const [selectedBudget, setSelectedBudget] = useState('25000');
    const [selectedIndustry, setSelectedIndustry] = useState('ecommerce');

    const services = [
        {
            id: 'social-media',
            name: 'Social Media Marketing',
            icon: 'Share2',
            basePrice: 3500,
            features: ['Content Strategy', 'Community Management', 'Analytics', 'Paid Social'],
            timeline: '2-3 weeks setup',
            roi: 280
        },
        {
            id: 'influencer',
            name: 'Influencer Partnerships',
            icon: 'Users',
            basePrice: 5000,
            features: ['Creator Network', 'Campaign Management', 'Content Rights', 'Performance Tracking'],
            timeline: '3-4 weeks setup',
            roi: 420
        },
        {
            id: 'analytics',
            name: 'Performance Analytics',
            icon: 'BarChart3',
            basePrice: 2500,
            features: ['Custom Dashboards', 'Attribution Modeling', 'Predictive Analytics', 'Reporting'],
            timeline: '1-2 weeks setup',
            roi: 350
        },
        {
            id: 'strategy',
            name: 'Brand Strategy',
            icon: 'Target',
            basePrice: 4000,
            features: ['Brand Positioning', 'Competitive Analysis', 'Go-to-Market', 'Messaging Framework'],
            timeline: '4-6 weeks setup',
            roi: 480
        },
        {
            id: 'content',
            name: 'Content Creation',
            icon: 'PenTool',
            basePrice: 3000,
            features: ['Video Production', 'Graphic Design', 'Copywriting', 'Content Calendar'],
            timeline: '2-3 weeks setup',
            roi: 310
        },
        {
            id: 'paid-media',
            name: 'Paid Media Optimization',
            icon: 'Zap',
            basePrice: 4500,
            features: ['Campaign Setup', 'Bid Management', 'Creative Testing', 'Landing Page Optimization'],
            timeline: '1-2 weeks setup',
            roi: 390
        }
    ];

    const budgetOptions = [
        { value: '10000', label: '$10,000/month' },
        { value: '25000', label: '$25,000/month' },
        { value: '50000', label: '$50,000/month' },
        { value: '100000', label: '$100,000/month' }
    ];

    const industryOptions = [
        { value: 'ecommerce', label: 'E-commerce' },
        { value: 'saas', label: 'SaaS' },
        { value: 'healthcare', label: 'Healthcare' },
        { value: 'finance', label: 'Finance' }
    ];

    const toggleService = (serviceId) => {
        setSelectedServices(prev => {
            if (prev?.includes(serviceId)) {
                return prev?.filter(id => id !== serviceId);
            } else {
                return [...prev, serviceId];
            }
        });
    };

    const getSelectedServices = () => {
        return services?.filter(service => selectedServices?.includes(service?.id));
    };

    const calculateTotalCost = () => {
        const selected = getSelectedServices();
        const baseCost = selected?.reduce((sum, service) => sum + service?.basePrice, 0);
        const budgetMultiplier = parseInt(selectedBudget) / 25000; // Base multiplier
        return Math.round(baseCost * budgetMultiplier);
    };

    const calculateProjectedROI = () => {
        const selected = getSelectedServices();
        const avgROI = selected?.reduce((sum, service) => sum + service?.roi, 0) / selected?.length;
        const industryMultiplier = {
            'ecommerce': 1.1,
            'saas': 1.3,
            'healthcare': 0.9,
            'finance': 1.2
        };
        return Math.round(avgROI * (industryMultiplier?.[selectedIndustry] || 1.0));
    };

    return (
        <div className="bg-surface rounded-2xl border border-border shadow-card">
            {/* Header */}
            <div className="p-6 border-b border-border/50">
                <h2 className="text-2xl font-bold text-foreground mb-2">Service Package Builder</h2>
                <p className="text-muted-foreground">
                    Configure your ideal service mix and see projected outcomes
                </p>
            </div>
            <div className="p-6 space-y-6">
                {/* Configuration */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Select
                        label="Monthly Budget"
                        options={budgetOptions}
                        value={selectedBudget}
                        onChange={setSelectedBudget}
                    />
                    <Select
                        label="Industry"
                        options={industryOptions}
                        value={selectedIndustry}
                        onChange={setSelectedIndustry}
                    />
                </div>

                {/* Service Selection */}
                <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">Select Services</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {services?.map((service) => {
                            const isSelected = selectedServices?.includes(service?.id);
                            return (
                                <div
                                    key={service?.id}
                                    onClick={() => toggleService(service?.id)}
                                    className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${isSelected
                                            ? 'border-primary bg-primary/5 shadow-brand'
                                            : 'border-border hover:border-primary/50 bg-muted/30'
                                        }`}
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="flex items-center space-x-3">
                                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isSelected ? 'gradient-brand text-white' : 'bg-muted text-muted-foreground'
                                                }`}>
                                                <Icon name={service?.icon} size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-foreground text-sm">{service?.name}</h4>
                                                <p className="text-xs text-muted-foreground">{service?.timeline}</p>
                                            </div>
                                        </div>
                                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${isSelected
                                                ? 'border-primary bg-primary' : 'border-muted-foreground/30'
                                            }`}>
                                            {isSelected && <Icon name="Check" size={12} color="white" />}
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="text-lg font-bold text-foreground">
                                            ${service?.basePrice?.toLocaleString()}/mo
                                        </div>
                                        <div className="text-xs text-success">
                                            {service?.roi}% avg ROI
                                        </div>
                                    </div>
                                    {isSelected && (
                                        <div className="mt-3 pt-3 border-t border-primary/20">
                                            <div className="space-y-1">
                                                {service?.features?.slice(0, 2)?.map((feature, index) => (
                                                    <div key={index} className="flex items-center space-x-2">
                                                        <Icon name="Check" size={12} className="text-primary" />
                                                        <span className="text-xs text-muted-foreground">{feature}</span>
                                                    </div>
                                                ))}
                                                {service?.features?.length > 2 && (
                                                    <div className="text-xs text-primary">
                                                        +{service?.features?.length - 2} more features
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Results */}
                {selectedServices?.length > 0 && (
                    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-6 border border-primary/10">
                        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                            <Icon name="Calculator" size={18} className="text-primary mr-2" />
                            Package Summary
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-foreground mb-1">
                                    {selectedServices?.length}
                                </div>
                                <div className="text-sm text-muted-foreground">Services Selected</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary mb-1">
                                    ${calculateTotalCost()?.toLocaleString()}
                                </div>
                                <div className="text-sm text-muted-foreground">Monthly Investment</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-success mb-1">
                                    {calculateProjectedROI()}%
                                </div>
                                <div className="text-sm text-muted-foreground">Projected ROI</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-secondary mb-1">
                                    ${Math.round(calculateTotalCost() * (calculateProjectedROI() / 100))?.toLocaleString()}
                                </div>
                                <div className="text-sm text-muted-foreground">Monthly Return</div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button
                                variant="outline"
                                iconName="Download"
                                iconPosition="left"
                                iconSize={16}
                                className="flex-1 border-primary/20 text-primary hover:bg-primary/10"
                            >
                                Download Proposal
                            </Button>
                            <Button
                                variant="default"
                                iconName="Calendar"
                                iconPosition="left"
                                iconSize={16}
                                className="flex-1 gradient-brand hover:gradient-brand-hover shadow-brand"
                            >
                                Book Strategy Session
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ServiceComparison;
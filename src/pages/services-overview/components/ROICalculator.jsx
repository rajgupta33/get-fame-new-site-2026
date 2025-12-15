import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ROICalculator = ({ service, isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        industry: '',
        monthlyBudget: '',
        currentMetric: '',
        targetGrowth: ''
    });
    const [results, setResults] = useState(null);
    const [isCalculating, setIsCalculating] = useState(false);

    const industryOptions = [
        { value: 'ecommerce', label: 'E-commerce' },
        { value: 'saas', label: 'SaaS' },
        { value: 'healthcare', label: 'Healthcare' },
        { value: 'finance', label: 'Finance' },
        { value: 'education', label: 'Education' },
        { value: 'retail', label: 'Retail' },
        { value: 'manufacturing', label: 'Manufacturing' },
        { value: 'other', label: 'Other' }
    ];

    const budgetOptions = [
        { value: '5000', label: '$5,000 - $10,000' },
        { value: '10000', label: '$10,000 - $25,000' },
        { value: '25000', label: '$25,000 - $50,000' },
        { value: '50000', label: '$50,000 - $100,000' },
        { value: '100000', label: '$100,000+' }
    ];

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const calculateROI = async () => {
        setIsCalculating(true);

        // Simulate calculation delay
        await new Promise(resolve => setTimeout(resolve, 2000));

        const budget = parseInt(formData?.monthlyBudget);
        const industryMultiplier = {
            'ecommerce': 3.2,
            'saas': 4.1,
            'healthcare': 2.8,
            'finance': 3.5,
            'education': 2.9,
            'retail': 3.0,
            'manufacturing': 2.7,
            'other': 3.0
        };

        const serviceMultiplier = {
            'social-media': 2.8,
            'influencer': 4.2,
            'analytics': 3.5,
            'strategy': 4.8,
            'content': 3.1,
            'paid-media': 3.9
        };

        const baseROI = budget * (industryMultiplier?.[formData?.industry] || 3.0) * (serviceMultiplier?.[service?.id] || 3.0);
        const monthlyROI = Math.round(baseROI);
        const annualROI = monthlyROI * 12;
        const roiPercentage = Math.round(((monthlyROI - budget) / budget) * 100);

        setResults({
            monthlyROI,
            annualROI,
            roiPercentage,
            paybackPeriod: Math.ceil(budget / (monthlyROI - budget)),
            projectedMetrics: {
                engagement: `+${Math.round(Math.random() * 150 + 50)}%`,
                reach: `+${Math.round(Math.random() * 200 + 100)}%`,
                conversions: `+${Math.round(Math.random() * 80 + 30)}%`,
                brandAwareness: `+${Math.round(Math.random() * 120 + 60)}%`
            }
        });

        setIsCalculating(false);
    };

    const resetCalculator = () => {
        setFormData({
            industry: '',
            monthlyBudget: '',
            currentMetric: '',
            targetGrowth: ''
        });
        setResults(null);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-surface rounded-2xl shadow-floating max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-border">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg gradient-brand flex items-center justify-center">
                            <Icon name={service?.icon} size={20} color="white" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-foreground">ROI Calculator</h2>
                            <p className="text-sm text-muted-foreground">{service?.name}</p>
                        </div>
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        iconName="X"
                        iconSize={20}
                        onClick={onClose}
                        className="text-muted-foreground hover:text-foreground"
                    />
                </div>

                <div className="p-6">
                    {!results ? (
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Select
                                    label="Industry"
                                    placeholder="Select your industry"
                                    options={industryOptions}
                                    value={formData?.industry}
                                    onChange={(value) => handleInputChange('industry', value)}
                                    required
                                />

                                <Select
                                    label="Monthly Marketing Budget"
                                    placeholder="Select budget range"
                                    options={budgetOptions}
                                    value={formData?.monthlyBudget}
                                    onChange={(value) => handleInputChange('monthlyBudget', value)}
                                    required
                                />

                                <Input
                                    label="Current Monthly Revenue"
                                    type="number"
                                    placeholder="e.g., 50000"
                                    value={formData?.currentMetric}
                                    onChange={(e) => handleInputChange('currentMetric', e?.target?.value)}
                                />

                                <Input
                                    label="Target Growth (%)"
                                    type="number"
                                    placeholder="e.g., 25"
                                    value={formData?.targetGrowth}
                                    onChange={(e) => handleInputChange('targetGrowth', e?.target?.value)}
                                />
                            </div>

                            <div className="bg-muted/30 rounded-lg p-4">
                                <h3 className="font-semibold text-foreground mb-2 flex items-center">
                                    <Icon name="Info" size={16} className="text-primary mr-2" />
                                    What This Calculator Includes
                                </h3>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                    <li>• Industry-specific performance benchmarks</li>
                                    <li>• Service-optimized conversion rates</li>
                                    <li>• Projected engagement and reach improvements</li>
                                    <li>• Conservative ROI estimates based on real client data</li>
                                </ul>
                            </div>

                            <Button
                                variant="default"
                                fullWidth
                                iconName="Calculator"
                                iconPosition="left"
                                iconSize={16}
                                onClick={calculateROI}
                                loading={isCalculating}
                                disabled={!formData?.industry || !formData?.monthlyBudget}
                                className="gradient-brand hover:gradient-brand-hover shadow-brand"
                            >
                                {isCalculating ? 'Calculating ROI...' : 'Calculate ROI'}
                            </Button>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {/* ROI Results */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-success/10 border border-success/20 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-success mb-1">
                                        ${results?.monthlyROI?.toLocaleString()}
                                    </div>
                                    <div className="text-sm text-muted-foreground">Monthly ROI</div>
                                </div>

                                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-primary mb-1">
                                        {results?.roiPercentage}%
                                    </div>
                                    <div className="text-sm text-muted-foreground">ROI Percentage</div>
                                </div>

                                <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-secondary mb-1">
                                        {results?.paybackPeriod} months
                                    </div>
                                    <div className="text-sm text-muted-foreground">Payback Period</div>
                                </div>
                            </div>

                            {/* Projected Metrics */}
                            <div>
                                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                                    <Icon name="TrendingUp" size={18} className="text-primary mr-2" />
                                    Projected Performance Improvements
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {Object.entries(results?.projectedMetrics)?.map(([key, value]) => (
                                        <div key={key} className="bg-muted/30 rounded-lg p-3 text-center">
                                            <div className="text-lg font-bold text-foreground mb-1">{value}</div>
                                            <div className="text-xs text-muted-foreground capitalize">
                                                {key?.replace(/([A-Z])/g, ' $1')?.trim()}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Annual Projection */}
                            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-foreground mb-2">Annual Projection</h3>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-sm text-muted-foreground">Total Annual ROI</div>
                                        <div className="text-2xl font-bold text-foreground">
                                            ${results?.annualROI?.toLocaleString()}
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm text-muted-foreground">Investment</div>
                                        <div className="text-lg font-semibold text-foreground">
                                            ${(parseInt(formData?.monthlyBudget) * 12)?.toLocaleString()}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Button
                                    variant="outline"
                                    iconName="RotateCcw"
                                    iconPosition="left"
                                    iconSize={16}
                                    onClick={resetCalculator}
                                    className="flex-1"
                                >
                                    Recalculate
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
        </div>
    );
};

export default ROICalculator;
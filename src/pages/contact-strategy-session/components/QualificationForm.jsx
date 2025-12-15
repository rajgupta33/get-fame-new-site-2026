import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const QualificationForm = ({ onSubmit, isSubmitting }) => {
    const [formData, setFormData] = useState({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        companySize: '',
        currentSpend: '',
        primaryObjectives: [],
        challenges: '',
        currentPlatforms: [],
        timeline: '',
        budget: '',
        additionalInfo: ''
    });

    const [errors, setErrors] = useState({});

    const companySizeOptions = [
        { value: 'startup', label: 'Startup (1-10 employees)' },
        { value: 'small', label: 'Small Business (11-50 employees)' },
        { value: 'medium', label: 'Medium Business (51-200 employees)' },
        { value: 'large', label: 'Large Business (201-1000 employees)' },
        { value: 'enterprise', label: 'Enterprise (1000+ employees)' }
    ];

    const spendOptions = [
        { value: 'under-5k', label: 'Under $5,000/month' },
        { value: '5k-15k', label: '$5,000 - $15,000/month' },
        { value: '15k-50k', label: '$15,000 - $50,000/month' },
        { value: '50k-100k', label: '$50,000 - $100,000/month' },
        { value: 'over-100k', label: 'Over $100,000/month' }
    ];

    const objectiveOptions = [
        { value: 'brand-awareness', label: 'Brand Awareness' },
        { value: 'lead-generation', label: 'Lead Generation' },
        { value: 'sales-conversion', label: 'Sales Conversion' },
        { value: 'customer-retention', label: 'Customer Retention' },
        { value: 'market-expansion', label: 'Market Expansion' },
        { value: 'thought-leadership', label: 'Thought Leadership' }
    ];

    const platformOptions = [
        { value: 'facebook', label: 'Facebook' },
        { value: 'instagram', label: 'Instagram' },
        { value: 'linkedin', label: 'LinkedIn' },
        { value: 'twitter', label: 'Twitter/X' },
        { value: 'tiktok', label: 'TikTok' },
        { value: 'youtube', label: 'YouTube' },
        { value: 'google-ads', label: 'Google Ads' },
        { value: 'email', label: 'Email Marketing' }
    ];

    const timelineOptions = [
        { value: 'immediate', label: 'Immediate (Within 1 month)' },
        { value: 'short', label: 'Short-term (1-3 months)' },
        { value: 'medium', label: 'Medium-term (3-6 months)' },
        { value: 'long', label: 'Long-term (6+ months)' }
    ];

    const budgetOptions = [
        { value: 'under-10k', label: 'Under $10,000' },
        { value: '10k-25k', label: '$10,000 - $25,000' },
        { value: '25k-50k', label: '$25,000 - $50,000' },
        { value: '50k-100k', label: '$50,000 - $100,000' },
        { value: 'over-100k', label: 'Over $100,000' },
        { value: 'discuss', label: 'Prefer to discuss' }
    ];

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));

        // Clear error when user starts typing
        if (errors?.[field]) {
            setErrors(prev => ({
                ...prev,
                [field]: ''
            }));
        }
    };

    const handleCheckboxChange = (field, value, checked) => {
        setFormData(prev => ({
            ...prev,
            [field]: checked
                ? [...prev?.[field], value]
                : prev?.[field]?.filter(item => item !== value)
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData?.companyName?.trim()) newErrors.companyName = 'Company name is required';
        if (!formData?.contactName?.trim()) newErrors.contactName = 'Contact name is required';
        if (!formData?.email?.trim()) newErrors.email = 'Email is required';
        if (!formData?.phone?.trim()) newErrors.phone = 'Phone number is required';
        if (!formData?.companySize) newErrors.companySize = 'Company size is required';
        if (!formData?.currentSpend) newErrors.currentSpend = 'Current spend is required';
        if (formData?.primaryObjectives?.length === 0) newErrors.primaryObjectives = 'Select at least one objective';
        if (!formData?.challenges?.trim()) newErrors.challenges = 'Please describe your challenges';
        if (!formData?.timeline) newErrors.timeline = 'Timeline is required';
        if (!formData?.budget) newErrors.budget = 'Budget range is required';

        setErrors(newErrors);
        return Object.keys(newErrors)?.length === 0;
    };

    const handleSubmit = (e) => {
        e?.preventDefault();
        if (validateForm()) {
            onSubmit(formData);
        }
    };

    return (
        <div className="bg-surface rounded-xl p-6 shadow-card border border-border">
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Tell Us About Your Business</h3>
                <p className="text-sm text-muted-foreground">Help us prepare a customized consultation for you</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Company Information */}
                <div className="space-y-4">
                    <h4 className="text-md font-medium text-foreground flex items-center">
                        <Icon name="Building" size={18} className="mr-2 text-primary" />
                        Company Information
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                            label="Company Name"
                            type="text"
                            placeholder="Your company name"
                            value={formData?.companyName}
                            onChange={(e) => handleInputChange('companyName', e?.target?.value)}
                            error={errors?.companyName}
                            required
                        />

                        <Input
                            label="Contact Name"
                            type="text"
                            placeholder="Your full name"
                            value={formData?.contactName}
                            onChange={(e) => handleInputChange('contactName', e?.target?.value)}
                            error={errors?.contactName}
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                            label="Email Address"
                            type="email"
                            placeholder="your.email@company.com"
                            value={formData?.email}
                            onChange={(e) => handleInputChange('email', e?.target?.value)}
                            error={errors?.email}
                            required
                        />

                        <Input
                            label="Phone Number"
                            type="tel"
                            placeholder="+1 (555) 123-4567"
                            value={formData?.phone}
                            onChange={(e) => handleInputChange('phone', e?.target?.value)}
                            error={errors?.phone}
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Select
                            label="Company Size"
                            options={companySizeOptions}
                            value={formData?.companySize}
                            onChange={(value) => handleInputChange('companySize', value)}
                            error={errors?.companySize}
                            placeholder="Select company size"
                            required
                        />

                        <Select
                            label="Current Marketing Spend"
                            options={spendOptions}
                            value={formData?.currentSpend}
                            onChange={(value) => handleInputChange('currentSpend', value)}
                            error={errors?.currentSpend}
                            placeholder="Select monthly spend"
                            required
                        />
                    </div>
                </div>

                {/* Marketing Objectives */}
                <div className="space-y-4">
                    <h4 className="text-md font-medium text-foreground flex items-center">
                        <Icon name="Target" size={18} className="mr-2 text-primary" />
                        Marketing Objectives
                    </h4>

                    <div>
                        <label className="text-sm font-medium text-foreground mb-3 block">
                            Primary Objectives (Select all that apply)
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {objectiveOptions?.map(option => (
                                <Checkbox
                                    key={option?.value}
                                    label={option?.label}
                                    checked={formData?.primaryObjectives?.includes(option?.value)}
                                    onChange={(e) => handleCheckboxChange('primaryObjectives', option?.value, e?.target?.checked)}
                                />
                            ))}
                        </div>
                        {errors?.primaryObjectives && (
                            <p className="text-sm text-error mt-2">{errors?.primaryObjectives}</p>
                        )}
                    </div>
                </div>

                {/* Current Challenges */}
                <div className="space-y-4">
                    <h4 className="text-md font-medium text-foreground flex items-center">
                        <Icon name="AlertCircle" size={18} className="mr-2 text-primary" />
                        Current Challenges
                    </h4>

                    <Input
                        label="Describe Your Marketing Challenges"
                        type="text"
                        placeholder="What specific marketing challenges are you facing?"
                        value={formData?.challenges}
                        onChange={(e) => handleInputChange('challenges', e?.target?.value)}
                        error={errors?.challenges}
                        description="Help us understand your pain points"
                        required
                    />
                </div>

                {/* Current Platforms */}
                <div className="space-y-4">
                    <h4 className="text-md font-medium text-foreground flex items-center">
                        <Icon name="Smartphone" size={18} className="mr-2 text-primary" />
                        Current Marketing Platforms
                    </h4>

                    <div>
                        <label className="text-sm font-medium text-foreground mb-3 block">
                            Which platforms are you currently using?
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {platformOptions?.map(option => (
                                <Checkbox
                                    key={option?.value}
                                    label={option?.label}
                                    checked={formData?.currentPlatforms?.includes(option?.value)}
                                    onChange={(e) => handleCheckboxChange('currentPlatforms', option?.value, e?.target?.checked)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Project Details */}
                <div className="space-y-4">
                    <h4 className="text-md font-medium text-foreground flex items-center">
                        <Icon name="Calendar" size={18} className="mr-2 text-primary" />
                        Project Details
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Select
                            label="Timeline"
                            options={timelineOptions}
                            value={formData?.timeline}
                            onChange={(value) => handleInputChange('timeline', value)}
                            error={errors?.timeline}
                            placeholder="When do you want to start?"
                            required
                        />

                        <Select
                            label="Budget Range"
                            options={budgetOptions}
                            value={formData?.budget}
                            onChange={(value) => handleInputChange('budget', value)}
                            error={errors?.budget}
                            placeholder="Select budget range"
                            required
                        />
                    </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-4">
                    <Input
                        label="Additional Information (Optional)"
                        type="text"
                        placeholder="Any additional details you'd like to share?"
                        value={formData?.additionalInfo}
                        onChange={(e) => handleInputChange('additionalInfo', e?.target?.value)}
                        description="Tell us anything else that might help us prepare for your consultation"
                    />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                    <Button
                        type="submit"
                        variant="default"
                        size="lg"
                        fullWidth
                        loading={isSubmitting}
                        iconName="Calendar"
                        iconPosition="left"
                        className="gradient-brand hover:gradient-brand-hover shadow-brand"
                    >
                        {isSubmitting ? 'Submitting...' : 'Complete Booking'}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default QualificationForm;
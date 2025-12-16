import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const BetaInterestForm = ({ isOpen, onClose, selectedProgram }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        company: '',
        role: '',
        riskTolerance: '',
        objectives: [],
        budget: '',
        timeline: '',
        additionalInfo: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const riskToleranceOptions = [
        { value: 'low', label: 'Low - Proven strategies only' },
        { value: 'medium', label: 'Medium - Some experimental approaches' },
        { value: 'high', label: 'High - Cutting-edge innovations welcome' }
    ];

    const budgetOptions = [
        { value: '10k-25k', label: '$10K - $25K' },
        { value: '25k-50k', label: '$25K - $50K' },
        { value: '50k-100k', label: '$50K - $100K' },
        { value: '100k+', label: '$100K+' }
    ];

    const timelineOptions = [
        { value: '1-3months', label: '1-3 months' },
        { value: '3-6months', label: '3-6 months' },
        { value: '6-12months', label: '6-12 months' },
        { value: '12months+', label: '12+ months' }
    ];

    const objectiveOptions = [
        'Increase brand awareness',
        'Improve conversion rates',
        'Reduce customer acquisition cost',
        'Enhance customer engagement',
        'Test new market segments',
        'Optimize attribution modeling',
        'Explore emerging platforms',
        'Improve content performance'
    ];

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleObjectiveChange = (objective, checked) => {
        setFormData(prev => ({
            ...prev,
            objectives: checked
                ? [...prev?.objectives, objective]
                : prev?.objectives?.filter(obj => obj !== objective)
        }));
    };

    const handleSubmit = async (e) => {
        e?.preventDefault();
        setIsSubmitting(true);

        const payload = {
            ...formData,
            program: selectedProgram?.title,
            page: window.location.href,
            formType: 'Beta Interest'
        };

        try {
            await fetch("https://script.google.com/macros/s/AKfycbxePCKfnMdBuTHF5sXO589O_Yi1ErEXIf650BYPx75EmLF-cRqhVV2wflhV-ZJVcQAv/exec", {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "text/plain;charset=utf-8",
                }
            });
            console.log('Beta interest form submitted:', payload);
            alert('Thank you for your interest! Our innovation team will contact you within 24 hours.');
            onClose();
        } catch (error) {
            console.error("Error submitting form", error);
            alert("There was an error sending your application. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-surface rounded-2xl border border-border max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-surface border-b border-border p-6 rounded-t-2xl">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-lg gradient-brand flex items-center justify-center shadow-brand">
                                <Icon name="Rocket" size={20} color="white" strokeWidth={2} />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-foreground">Join Beta Program</h2>
                                <p className="text-sm text-muted-foreground">
                                    {selectedProgram ? `Interest in: ${selectedProgram?.title}` : 'Express your innovation interests'}
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                        >
                            <Icon name="X" size={20} />
                        </button>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                            label="Full Name"
                            type="text"
                            placeholder="Enter your full name"
                            value={formData?.fullName}
                            onChange={(e) => handleInputChange('fullName', e?.target?.value)}
                            required
                        />
                        <Input
                            label="Email Address"
                            type="email"
                            placeholder="Enter your email"
                            value={formData?.email}
                            onChange={(e) => handleInputChange('email', e?.target?.value)}
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                            label="Company"
                            type="text"
                            placeholder="Enter your company name"
                            value={formData?.company}
                            onChange={(e) => handleInputChange('company', e?.target?.value)}
                            required
                        />
                        <Input
                            label="Role/Title"
                            type="text"
                            placeholder="Enter your role"
                            value={formData?.role}
                            onChange={(e) => handleInputChange('role', e?.target?.value)}
                            required
                        />
                    </div>

                    <Select
                        label="Risk Tolerance"
                        description="How comfortable are you with experimental approaches?"
                        options={riskToleranceOptions}
                        value={formData?.riskTolerance}
                        onChange={(value) => handleInputChange('riskTolerance', value)}
                        placeholder="Select your risk tolerance"
                        required
                    />

                    <div>
                        <label className="block text-sm font-medium text-foreground mb-3">
                            Innovation Objectives <span className="text-error">*</span>
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {objectiveOptions?.map((objective) => (
                                <Checkbox
                                    key={objective}
                                    label={objective}
                                    checked={formData?.objectives?.includes(objective)}
                                    onChange={(e) => handleObjectiveChange(objective, e?.target?.checked)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Select
                            label="Budget Range"
                            description="Monthly marketing budget"
                            options={budgetOptions}
                            value={formData?.budget}
                            onChange={(value) => handleInputChange('budget', value)}
                            placeholder="Select budget range"
                            required
                        />
                        <Select
                            label="Project Timeline"
                            description="Expected project duration"
                            options={timelineOptions}
                            value={formData?.timeline}
                            onChange={(value) => handleInputChange('timeline', value)}
                            placeholder="Select timeline"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                            Additional Information
                        </label>
                        <textarea
                            className="w-full px-3 py-2 border border-border rounded-lg bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
                            rows={4}
                            placeholder="Tell us about your specific innovation goals, challenges, or questions..."
                            value={formData?.additionalInfo}
                            onChange={(e) => handleInputChange('additionalInfo', e?.target?.value)}
                        />
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-border">
                        <div className="text-sm text-muted-foreground">
                            Our innovation team will review your application and contact you within 24 hours.
                        </div>
                        <div className="flex items-center space-x-3">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={onClose}
                                disabled={isSubmitting}
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                variant="default"
                                loading={isSubmitting}
                                iconName="Send"
                                iconPosition="right"
                                iconSize={16}
                                className="gradient-brand hover:gradient-brand-hover shadow-brand"
                            >
                                Submit Application
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BetaInterestForm;
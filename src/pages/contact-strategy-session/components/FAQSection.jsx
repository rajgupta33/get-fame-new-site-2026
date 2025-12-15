import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
    const [openFAQ, setOpenFAQ] = useState(0);

    const faqs = [
        {
            category: 'General',
            question: 'What exactly happens during a strategy session?',
            answer: `Our 60-minute strategy session is divided into three phases: Initial Assessment (15 min) where we audit your current marketing setup, Strategy Deep Dive (30 min) for collaborative goal setting and solution design, and Custom Roadmap (15 min) where we present your personalized action plan with ROI projections and next steps.`
        },
        {
            category: 'Pricing',
            question: 'How much does the consultation cost?',
            answer: `The initial strategy session is complimentary for qualified businesses. We believe in demonstrating value upfront. If we determine we're a good fit and you choose to move forward with our services, the consultation insights become part of your comprehensive strategy package.`
        },
        {
            category: 'Preparation', question: 'What should I bring to the consultation?',
            answer: `Come prepared with your current marketing metrics, business objectives, target audience information, and any specific challenges you're facing. Don't worry if you don't have everything - we'll help identify what's missing and how to get it during our session.`
        },
        {
            category: 'Timeline',
            question: 'How quickly can we start after the consultation?',
            answer: `For most clients, we can begin implementation within 1-2 weeks of your consultation. Complex enterprise engagements may require 2-4 weeks for proper onboarding and team alignment. We'll provide a detailed timeline during your session.`
        },
        {
            category: 'Services', question: 'Do you work with businesses in my industry?', answer: `We work across industries including SaaS, e-commerce, professional services, healthcare, fintech, and more. Our martech approach is adaptable to any industry with B2B or B2C marketing needs. We'll discuss your specific industry challenges during the consultation.`
        },
        {
            category: 'Results',
            question: 'What kind of results can I expect?',
            answer: `While results vary by business, our clients typically see 25-40% improvement in key metrics within 90 days. Common outcomes include increased lead quality, higher conversion rates, improved ROI, and better brand visibility. We'll provide realistic projections based on your specific situation.`
        },
        {
            category: 'Team', question: 'Who will be leading my consultation?', answer: `Your consultation will be led by one of our senior strategists with 10+ years of experience in your industry or business model. They'll be supported by our analytics team for data insights and our creative team for campaign examples relevant to your brand.`
        },
        {
            category: 'Follow-up',
            question: 'What happens after the consultation?',
            answer: `Within 24 hours, you'll receive a detailed summary of our discussion, your custom strategy roadmap, and recommended next steps. There's no pressure to move forward - we want you to make the best decision for your business. We're available for follow-up questions anytime.`
        },
        {
            category: 'Technology', question: 'What martech tools do you recommend?', answer: `We're platform-agnostic and recommend tools based on your specific needs, budget, and technical capabilities. Our team has expertise with 50+ martech platforms including HubSpot, Salesforce, Google Analytics, Facebook Business Manager, and emerging AI-powered tools.`
        },
        {
            category: 'Contracts',
            question: 'Are there long-term contracts required?',
            answer: `We offer flexible engagement models from project-based work to ongoing partnerships. Most clients start with a 3-month pilot program to test our approach and results. We believe in earning your business through performance, not locking you into lengthy contracts.`
        }
    ];

    const categories = [...new Set(faqs.map(faq => faq.category))];

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? -1 : index);
    };

    return (
        <div className="bg-surface rounded-xl p-6 shadow-card border border-border">
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Frequently Asked Questions</h3>
                <p className="text-sm text-muted-foreground">Get answers to common questions about our consultation process</p>
            </div>
            {/* Category Filter */}
            <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                    {categories?.map((category, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                            {category}
                        </span>
                    ))}
                </div>
            </div>
            {/* FAQ List */}
            <div className="space-y-4">
                {faqs?.map((faq, index) => (
                    <div key={index} className="border border-border rounded-lg overflow-hidden">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full px-6 py-4 text-left bg-background hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                                        {faq?.category}
                                    </span>
                                    <h4 className="font-medium text-foreground">{faq?.question}</h4>
                                </div>
                                <Icon
                                    name={openFAQ === index ? "ChevronUp" : "ChevronDown"}
                                    size={20}
                                    className="text-muted-foreground transition-transform"
                                />
                            </div>
                        </button>

                        {openFAQ === index && (
                            <div className="px-6 py-4 bg-muted border-t border-border">
                                <p className="text-sm text-foreground leading-relaxed">{faq?.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            {/* Still Have Questions */}
            <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/20">
                <div className="text-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon name="MessageCircle" size={20} className="text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Still Have Questions?</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                        Our team is here to help with any specific questions about your situation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <button
                            onClick={() => window.open('tel:+15551234567')}
                            className="flex items-center justify-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                        >
                            <Icon name="Phone" size={16} />
                            <span className="text-sm font-medium">Call (555) 123-4567</span>
                        </button>
                        <button
                            onClick={() => window.open('mailto:strategy@getfame.com')}
                            className="flex items-center justify-center space-x-2 px-4 py-2 bg-background text-foreground border border-border rounded-lg hover:bg-muted transition-colors"
                        >
                            <Icon name="Mail" size={16} />
                            <span className="text-sm font-medium">Email Our Team</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQSection;
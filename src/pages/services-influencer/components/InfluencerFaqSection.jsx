import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const InfluencerFaqSection = () => {
    const faqs = [
        {
            question: "Do you provide growth for all social media platforms?",
            answer: "Yes, we offer influencer growth packages for Instagram, TikTok, YouTube, and more."
        },
        {
            question: "Is getting viral guaranteed?",
            answer: "Virality is not instant. We focus on consistent growth systems that increase viral potential over time."
        },
        {
            question: "Do you help with brand deals?",
            answer: "Yes, we actively help influencers connect with brands and secure paid collaborations."
        },
        {
            question: "Is this suitable for new influencers?",
            answer: "Absolutely. Our strategies work for beginners and established creators."
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 px-6 lg:px-8" itemScope itemType="https://schema.org/FAQPage">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-border rounded-lg bg-surface overflow-hidden" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                            <button
                                className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
                                onClick={() => toggleFaq(index)}
                                aria-expanded={openIndex === index}
                            >
                                <span className="font-medium text-foreground pr-4" itemProp="name">{faq.question}</span>
                                <div className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    <Icon
                                        name={openIndex === index ? "Minus" : "Plus"}
                                        size={20}
                                        className="text-primary flex-shrink-0"
                                    />
                                </div>
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                                itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"
                            >
                                <div className="p-5 pt-0 text-muted-foreground border-t border-border/50 bg-muted/20 text-sm leading-relaxed" itemProp="text">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InfluencerFaqSection;

import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FaqSection = () => {
    const faqs = [
        {
            question: "What is 360 degree digital marketing?",
            answer: "It's a holistic approach that connects all your marketing channels—SEO, social, ads, content—into a unified system where they support each other, ensuring maximum visibility and ROI."
        },
        {
            question: "Do you use AI in marketing?",
            answer: "Yes. We use advanced AI tools for keyword clustering, ad creative testing, predictive analytics, and content optimization to give you a competitive edge."
        },
        {
            question: "Is this suitable for startups?",
            answer: "Absolutely. We tailor the scale of the strategy to your growth phase, focusing on high-impact channels first before expanding to full maturity."
        },
        {
            question: "Can I choose specific services?",
            answer: "Yes, while we recommend an integrated approach, we can start with specific high-need areas like SEO or Paid Ads and expand as we demonstrate value."
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 px-6 lg:px-8 bg-surface">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-border rounded-lg bg-background overflow-hidden" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
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

export default FaqSection;

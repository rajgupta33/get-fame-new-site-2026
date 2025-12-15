import React from 'react';
import Icon from '../../../components/AppIcon';

const Why360Section = () => {
    return (
        <section className="py-16 lg:py-20 px-6 lg:px-8 bg-muted/20">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                    Why 360° Marketing Beats Isolated Campaigns
                </h2>

                <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                    Running SEO without content, ads without strategy, or social media without funnel alignment leads to wasted budgets and slow growth. Our 360 degree marketing approach ensures every channel supports the other — maximizing ROI and brand impact.
                </p>

                <div className="grid sm:grid-cols-3 gap-6">
                    {[
                        "Unified brand messaging",
                        "Cross-channel growth systems",
                        "Better ROI with less waste"
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center p-6 bg-surface rounded-xl border border-border shadow-sm">
                            <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mb-4">
                                <Icon name="CheckCircle" size={24} className="text-success" />
                            </div>
                            <span className="font-semibold text-foreground">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Why360Section;

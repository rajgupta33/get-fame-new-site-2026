import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';

const Careers = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Helmet>
                <title>Careers - GetFame</title>
                <meta name="description" content="Career opportunities at GetFame Martech." />
            </Helmet>
            <Header />

            <main className="pt-32 pb-20 px-6 lg:px-8 max-w-4xl mx-auto text-center">
                <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                    Join the Team
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                    Careers at GET FAME
                </h1>
                <p className="text-xl text-muted-foreground mb-12">
                    We’re Not Hiring Right Now — But We’re Always Open to Talent
                </p>

                <div className="bg-surface border border-border rounded-2xl p-8 lg:p-12 mb-12 shadow-sm">
                    <p className="text-lg leading-relaxed mb-6">
                        At GET FAME, we build growth systems for brands and creators.
                        While there are no active openings currently, we believe great talent is always worth discovering.
                    </p>
                    <p className="font-medium text-foreground">
                        If you think your mindset and skills align with what we do, feel free to reach out.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-muted/30 rounded-xl p-8 text-left">
                        <h2 className="text-2xl font-bold mb-4">📩 Share Your Resume</h2>
                        <p className="mb-4 text-muted-foreground">Send your resume or portfolio to:</p>
                        <a href="mailto:careers@getfame.social" className="text-xl font-bold text-primary hover:underline">
                            careers@getfame.social
                        </a>
                        <div className="mt-6 text-sm text-muted-foreground bg-background p-4 rounded-lg border border-border/50">
                            <strong>Subject format:</strong><br />
                            Career Inquiry – Your Name – Skill / Role<br />
                            <em className="opacity-70">Example: Career Inquiry – Aditi Verma – Social Media Strategy</em>
                        </div>
                    </div>

                    <div className="bg-muted/30 rounded-xl p-8 text-left">
                        <h2 className="text-2xl font-bold mb-4">🧠 What We Look For</h2>
                        <ul className="space-y-3">
                            {['Curiosity', 'Ownership', 'Creativity', 'Growth mindset'].map((skill) => (
                                <li key={skill} className="flex items-center space-x-2">
                                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                                    <span>{skill}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-6 text-sm text-muted-foreground">
                            We review every submission and keep strong profiles in our talent pool.
                            Shortlisted candidates will be contacted when opportunities open.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Careers;

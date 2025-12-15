import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Helmet>
                <title>Privacy Policy - GetFame</title>
                <meta name="description" content="Privacy Policy for GetFame Martech." />
            </Helmet>
            <Header />

            <main className="pt-24 pb-16 px-6 lg:px-8 max-w-4xl mx-auto">
                <h1 className="text-3xl lg:text-4xl font-bold mb-8 text-foreground">Privacy Policy</h1>
                <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

                <div className="space-y-8 text-foreground/80 leading-relaxed">
                    <p>At GET FAME (“we”, “our”, “us”), your privacy is important to us. This Privacy Policy explains how we collect, use, protect, and handle your information when you visit our website or use our services.</p>
                    <p>By accessing or using our website, you agree to the terms of this Privacy Policy.</p>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">1. Information We Collect</h2>
                        <p className="mb-2">We may collect the following types of information:</p>
                        <h3 className="font-semibold text-foreground mt-4 mb-2">a) Personal Information</h3>
                        <p className="mb-2">When you fill out forms, book a call, or contact us, we may collect:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Name</li>
                            <li>Email address</li>
                            <li>Phone number</li>
                            <li>Business or brand details</li>
                            <li>Any information you voluntarily share with us</li>
                        </ul>
                        <h3 className="font-semibold text-foreground mt-4 mb-2">b) Non-Personal Information</h3>
                        <p className="mb-2">We may automatically collect:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>IP address</li>
                            <li>Browser type and device information</li>
                            <li>Pages visited and time spent on our website</li>
                            <li>Referral sources</li>
                        </ul>
                        <p className="mt-2">This data helps us understand user behavior and improve our website experience.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
                        <p className="mb-2">We use the collected information to:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Respond to inquiries and contact requests</li>
                            <li>Provide our marketing, growth, and consulting services</li>
                            <li>Improve website performance and user experience</li>
                            <li>Send relevant updates, insights, or promotional communication (only if opted-in)</li>
                            <li>Analyze trends and audience behavior</li>
                        </ul>
                        <p className="mt-4">We do not sell or rent your personal information to third parties.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">3. Cookies & Tracking Technologies</h2>
                        <p>Our website may use cookies and similar technologies to:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                            <li>Improve site functionality</li>
                            <li>Analyze traffic and performance</li>
                            <li>Personalize user experience</li>
                        </ul>
                        <p className="mt-2">You can choose to disable cookies through your browser settings. However, some features of the website may not function properly.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">4. Third-Party Services</h2>
                        <p>We may use trusted third-party tools and platforms such as:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                            <li>Analytics tools (e.g., Google Analytics)</li>
                            <li>Advertising platforms</li>
                            <li>CRM or communication tools</li>
                        </ul>
                        <p className="mt-2">These third parties may collect information as per their own privacy policies. We recommend reviewing their policies for more details.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">5. Data Protection & Security</h2>
                        <p>We take reasonable technical and organizational measures to protect your data from:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                            <li>Unauthorized access</li>
                            <li>Misuse or disclosure</li>
                            <li>Loss or alteration</li>
                        </ul>
                        <p className="mt-2">However, no online transmission or storage method is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">6. Data Retention</h2>
                        <p>We retain your personal data only for as long as necessary to:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                            <li>Fulfill the purpose for which it was collected</li>
                            <li>Comply with legal or regulatory requirements</li>
                        </ul>
                        <p className="mt-2">Once data is no longer required, it is securely deleted.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">7. Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                            <li>Request access to your personal data</li>
                            <li>Request correction or deletion of your data</li>
                            <li>Withdraw consent for marketing communications at any time</li>
                        </ul>
                        <p className="mt-2">To exercise these rights, contact us using the details below.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">8. External Links</h2>
                        <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of external sites. We encourage you to review their privacy policies before sharing any information.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">9. Children’s Privacy</h2>
                        <p>Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">10. Changes to This Privacy Policy</h2>
                        <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
                        <p className="mt-2">We encourage you to review this page periodically.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">11. Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy or how your data is handled, you can contact us at:</p>
                        <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                            <p className="font-bold">GET FAME</p>
                            <p>📧 Email: getfamecompany@gmail.com</p>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';

const Terms = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Helmet>
                <title>Terms & Conditions - GetFame</title>
                <meta name="description" content="Terms and Conditions for GetFame Martech." />
            </Helmet>
            <Header />

            <main className="pt-24 pb-16 px-6 lg:px-8 max-w-4xl mx-auto">
                <h1 className="text-3xl lg:text-4xl font-bold mb-8 text-foreground">Terms & Conditions</h1>
                <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

                <div className="space-y-8 text-foreground/80 leading-relaxed">
                    <p>Welcome to GET FAME (“Company”, “we”, “our”, “us”).</p>
                    <p>By accessing or using our website, services, or content, you agree to comply with and be bound by these Terms & Conditions. If you do not agree, please do not use our website or services.</p>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">1. Use of Website</h2>
                        <p>By using this website, you confirm that:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                            <li>You are at least 18 years old</li>
                            <li>You will use the website for lawful purposes only</li>
                            <li>You will not engage in any activity that may harm, disrupt, or interfere with the website or services</li>
                        </ul>
                        <p className="mt-2 text-primary font-medium">Unauthorized use of this website may result in legal action.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">2. Services Disclaimer</h2>
                        <p>GET FAME provides digital marketing, growth strategy, branding, advertising, website/app development, and consulting services.</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                            <li>Results may vary depending on multiple factors including industry, market conditions, budget, and client participation</li>
                            <li>We do not guarantee specific outcomes, rankings, revenue, or growth metrics</li>
                            <li>Any examples or case studies shared are for informational purposes only</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">3. Intellectual Property</h2>
                        <p>All content on this website, including:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                            <li>Text</li>
                            <li>Graphics</li>
                            <li>Logos</li>
                            <li>Designs</li>
                            <li>Videos</li>
                            <li>Code and layouts</li>
                        </ul>
                        <p className="mt-2">is the property of GET FAME unless otherwise stated.</p>
                        <p className="mt-2 font-medium">You may not copy, reproduce, distribute, modify, or use any content without prior written permission.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">4. Payments & Billing</h2>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Fees for services will be communicated clearly before engagement</li>
                            <li>All payments are due as per the agreed schedule</li>
                            <li>Payments once made are non-refundable unless otherwise stated in a written agreement</li>
                            <li>Late or failed payments may result in suspension of services</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">5. Client Responsibilities</h2>
                        <p>Clients agree to:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                            <li>Provide accurate and complete information</li>
                            <li>Respond in a timely manner when required</li>
                            <li>Approve creatives, strategies, or deliverables within reasonable timelines</li>
                        </ul>
                        <p className="mt-2">Delays caused by the client may impact timelines and results.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">6. Third-Party Platforms</h2>
                        <p>Our services may involve third-party platforms such as:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                            <li>Social media networks</li>
                            <li>Advertising platforms</li>
                            <li>Hosting providers</li>
                            <li>Analytics tools</li>
                        </ul>
                        <p className="mt-4 font-semibold">We are not responsible for:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                            <li>Changes in policies of third-party platforms</li>
                            <li>Account suspensions or restrictions imposed by these platforms</li>
                            <li>Platform downtime or technical issues</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">7. Limitation of Liability</h2>
                        <p>GET FAME shall not be liable for:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                            <li>Any direct, indirect, incidental, or consequential damages</li>
                            <li>Loss of revenue, data, or business opportunities</li>
                            <li>Outcomes resulting from reliance on our strategies or recommendations</li>
                        </ul>
                        <p className="mt-2">Use of our services is at your own discretion and risk.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">8. Confidentiality</h2>
                        <p>Any confidential information shared between the client and GET FAME will be kept private and used only for project-related purposes, unless disclosure is required by law.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">9. Termination of Services</h2>
                        <p>We reserve the right to:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                            <li>Suspend or terminate services if terms are violated</li>
                            <li>Terminate engagement due to non-payment or misuse</li>
                        </ul>
                        <p className="mt-2">Clients may also terminate services by providing written notice, subject to contractual obligations.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">10. External Links</h2>
                        <p>Our website may contain links to external websites. GET FAME is not responsible for the content, accuracy, or privacy practices of third-party sites.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">11. Governing Law</h2>
                        <p>These Terms & Conditions shall be governed and interpreted in accordance with the laws of India, without regard to conflict of law principles.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">12. Changes to Terms</h2>
                        <p>We reserve the right to update or modify these Terms & Conditions at any time. Continued use of the website constitutes acceptance of the updated terms.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">13. Contact Information</h2>
                        <p>For questions regarding these Terms & Conditions, contact us at:</p>
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

export default Terms;

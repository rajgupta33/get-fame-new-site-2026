import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Footer = () => {
    return (
        <footer className="pt-16 pb-8 border-t border-white/10" style={{ background: 'linear-gradient(180deg, #0E0016, #12001F)' }}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Column 1: Brand */}
                    <div className="space-y-6">
                        <Link to="/homepage" className="block w-fit">
                            <img
                                src="/images/logo_v2.png"
                                alt="GetFame"
                                className="h-14 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-[#9B8BB4] text-sm leading-relaxed">
                            We build 360° digital growth engines that combine AI, strategy, and creativity to scale visibility and revenue.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.linkedin.com/company/get-fame-agency/posts/?feedView=all"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#9B8BB4] hover:text-white hover:border-white/30 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Icon name="Linkedin" size={18} />
                            </a>
                            <a
                                href="https://www.instagram.com/getfame_agency/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#9B8BB4] hover:text-white hover:border-white/30 transition-colors"
                                aria-label="Instagram"
                            >
                                <Icon name="Instagram" size={18} />
                            </a>
                            <a
                                href="https://wa.me/917906755171"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#9B8BB4] hover:text-white hover:border-white/30 transition-colors"
                                aria-label="WhatsApp"
                            >
                                <Icon name="Phone" size={18} />
                            </a>
                            <a
                                href="mailto:getfamecompany@gmail.com"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#9B8BB4] hover:text-white hover:border-white/30 transition-colors"
                                aria-label="Email"
                            >
                                <Icon name="Mail" size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Growth Services */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Growth Services</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link to="/services/360-marketing" className="text-[#D1B3FF] hover:text-white transition-colors text-sm">
                                    360° Digital Marketing
                                </Link>
                            </li>
                            <li>
                                <Link to="/services/influencer-growth" className="text-[#D1B3FF] hover:text-white transition-colors text-sm">
                                    Influencer Growth
                                </Link>
                            </li>
                            <li>
                                <Link to="/services/it-services" className="text-[#D1B3FF] hover:text-white transition-colors text-sm">
                                    IT & Custom Development
                                </Link>
                            </li>

                        </ul>
                    </div>

                    {/* Column 3: Company */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link to="/about-us" className="text-[#D1B3FF] hover:text-white transition-colors text-sm">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/growth-case-studies" className="text-[#D1B3FF] hover:text-white transition-colors text-sm">
                                    Case Studies
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact-us" className="text-[#D1B3FF] hover:text-white transition-colors text-sm">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/careers" className="text-[#D1B3FF] hover:text-white transition-colors text-sm">
                                    Careers
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter / CTA */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Stay Ahead</h4>
                        <p className="text-[#9B8BB4] text-sm mb-4">
                            Get the latest growth hacking strategies delivered to your inbox.
                        </p>
                        <div className="flex flex-col space-y-3">
                            <Button
                                variant="default"
                                className="w-full gradient-brand justify-center text-white font-medium"
                                iconName="ArrowRight"
                                iconPosition="right"
                            >
                                Book Strategy Call
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-[#9B8BB4]">
                        © {new Date().getFullYear()} GetFame Martech. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-sm text-[#D1B3FF]">
                        <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

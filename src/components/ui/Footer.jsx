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
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                </svg>
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
                            <Link to="/contact-us">
                                <Button
                                    variant="default"
                                    className="w-full gradient-brand justify-center text-white font-medium"
                                    iconName="ArrowRight"
                                    iconPosition="right"
                                >
                                    Book Strategy Call
                                </Button>
                            </Link>
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

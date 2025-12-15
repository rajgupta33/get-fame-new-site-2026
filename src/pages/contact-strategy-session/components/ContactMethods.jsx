import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ContactMethods = () => {
    const [chatOpen, setChatOpen] = useState(false);
    const [chatMessage, setChatMessage] = useState('');

    const contactMethods = [
        {
            type: 'phone',
            title: 'Call Us Directly',
            description: 'Speak with our strategy team immediately',
            value: '+1 (555) 123-4567',
            action: 'Call Now',
            icon: 'Phone',
            available: 'Mon-Fri 9AM-6PM EST',
            urgent: true
        },
        {
            type: 'email',
            title: 'Email Our Team',
            description: 'Get detailed responses within 2 hours',
            value: 'strategy@getfame.com',
            action: 'Send Email',
            icon: 'Mail',
            available: '24/7 Response',
            urgent: false
        },
        {
            type: 'whatsapp',
            title: 'WhatsApp Business',
            description: 'Quick questions and instant responses',
            value: '+1 (555) 987-6543',
            action: 'Message Us',
            icon: 'MessageCircle',
            available: 'Mon-Fri 9AM-8PM EST',
            urgent: false
        }
    ];

    const socialLinks = [
        { name: 'LinkedIn', icon: 'Linkedin', url: '#', followers: '12.5K' },
        { name: 'Twitter', icon: 'Twitter', url: '#', followers: '8.2K' },
        { name: 'Instagram', icon: 'Instagram', url: '#', followers: '15.3K' },
        { name: 'YouTube', icon: 'Youtube', url: '#', followers: '5.7K' }
    ];

    const handleContactAction = (method) => {
        switch (method?.type) {
            case 'phone':
                window.open(`tel:${method?.value}`);
                break;
            case 'email':
                window.open(`mailto:${method?.value}?subject=Strategy Session Inquiry`);
                break;
            case 'whatsapp':
                window.open(`https://wa.me/${method?.value?.replace(/\D/g, '')}`);
                break;
            default:
                break;
        }
    };

    const handleChatSubmit = (e) => {
        e?.preventDefault();
        if (chatMessage?.trim()) {
            // Mock chat submission
            alert('Message sent! Our team will respond shortly.');
            setChatMessage('');
            setChatOpen(false);
        }
    };

    return (
        <div className="space-y-6">
            {/* Direct Contact Methods */}
            <div className="bg-surface rounded-xl p-6 shadow-card border border-border">
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Get In Touch Directly</h3>
                    <p className="text-sm text-muted-foreground">Multiple ways to reach our strategy team</p>
                </div>

                <div className="space-y-4">
                    {contactMethods?.map((method, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:border-primary/20 transition-colors"
                        >
                            <div className="flex items-center space-x-4">
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${method?.urgent ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'
                                    }`}>
                                    <Icon name={method?.icon} size={20} />
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-center space-x-2">
                                        <h4 className="font-medium text-foreground">{method?.title}</h4>
                                        {method?.urgent && (
                                            <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                                                Urgent
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-sm text-muted-foreground">{method?.description}</p>
                                    <div className="flex items-center space-x-4 mt-1">
                                        <span className="text-sm font-medium text-foreground">{method?.value}</span>
                                        <span className="text-xs text-muted-foreground">{method?.available}</span>
                                    </div>
                                </div>
                            </div>

                            <Button
                                variant={method?.urgent ? "default" : "outline"}
                                size="sm"
                                iconName={method?.icon}
                                iconPosition="left"
                                onClick={() => handleContactAction(method)}
                                className={method?.urgent ? "gradient-brand hover:gradient-brand-hover" : ""}
                            >
                                {method?.action}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
            {/* Live Chat */}
            <div className="bg-surface rounded-xl p-6 shadow-card border border-border">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h3 className="text-lg font-semibold text-foreground">Live Chat Support</h3>
                        <p className="text-sm text-muted-foreground">Get instant answers to your questions</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                        <span className="text-sm text-success font-medium">Online Now</span>
                    </div>
                </div>

                {!chatOpen ? (
                    <Button
                        variant="outline"
                        fullWidth
                        iconName="MessageSquare"
                        iconPosition="left"
                        onClick={() => setChatOpen(true)}
                        className="border-primary/20 text-primary hover:bg-primary/10"
                    >
                        Start Live Chat
                    </Button>
                ) : (
                    <form onSubmit={handleChatSubmit} className="space-y-4">
                        <div className="p-4 bg-muted rounded-lg">
                            <div className="flex items-center space-x-2 mb-2">
                                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                                    <Icon name="User" size={16} color="white" />
                                </div>
                                <span className="text-sm font-medium text-foreground">GetFame Support</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Hi! I'm here to help with any questions about our strategy sessions. What would you like to know?
                            </p>
                        </div>

                        <div className="flex space-x-2">
                            <input
                                type="text"
                                value={chatMessage}
                                onChange={(e) => setChatMessage(e?.target?.value)}
                                placeholder="Type your message..."
                                className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            />
                            <Button
                                type="submit"
                                variant="default"
                                size="sm"
                                iconName="Send"
                                iconPosition="right"
                                className="gradient-brand hover:gradient-brand-hover"
                            >
                                Send
                            </Button>
                        </div>
                    </form>
                )}
            </div>
            {/* Social Media Links */}
            <div className="bg-surface rounded-xl p-6 shadow-card border border-border">
                <div className="mb-4">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Follow Our Journey</h3>
                    <p className="text-sm text-muted-foreground">See our latest work and industry insights</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {socialLinks?.map((social, index) => (
                        <a
                            key={index}
                            href={social?.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-3 p-3 bg-background rounded-lg border border-border hover:border-primary/20 hover:bg-primary/5 transition-all duration-200 group"
                        >
                            <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                <Icon name={social?.icon} size={18} className="text-muted-foreground group-hover:text-primary" />
                            </div>
                            <div>
                                <div className="font-medium text-foreground text-sm">{social?.name}</div>
                                <div className="text-xs text-muted-foreground">{social?.followers} followers</div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 border border-primary/20">
                <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Icon name="AlertTriangle" size={20} className="text-primary" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-2">Urgent Marketing Crisis?</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            If you're facing an immediate marketing emergency or reputation crisis, our rapid response team is available 24/7.
                        </p>
                        <Button
                            variant="default"
                            size="sm"
                            iconName="Phone"
                            iconPosition="left"
                            className="gradient-brand hover:gradient-brand-hover shadow-brand"
                            onClick={() => window.open('tel:+15551234567')}
                        >
                            Emergency Hotline: (555) 123-4567
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMethods;
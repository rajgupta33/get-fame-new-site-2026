import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactInfo = () => {
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <p className="text-muted-foreground mb-8">
                    Ready to start your journey? Reach out to us through any of the channels below.
                </p>
            </div>

            <div className="space-y-6">
                <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-foreground mb-1">Visit Us</h4>
                        <p className="text-muted-foreground">
                            Sanjay Palace,<br />
                            Agra, Uttar Pradesh<br />
                            India
                        </p>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-foreground mb-1">Call / WhatsApp</h4>
                        <p className="text-muted-foreground">+91 79067 55171</p>
                        <p className="text-xs text-muted-foreground mt-1">Mon-Fri 9am - 7pm IST</p>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                        <p className="text-muted-foreground">getfamecompany@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;

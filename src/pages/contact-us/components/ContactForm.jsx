import React, { useState } from 'react';
import Button from '../../../components/ui/Button';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            ...formData,
            page: window.location.href,
            formType: 'General Contact'
        };

        try {
            await fetch("https://script.google.com/macros/s/AKfycbxePCKfnMdBuTHF5sXO589O_Yi1ErEXIf650BYPx75EmLF-cRqhVV2wflhV-ZJVcQAv/exec", {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "text/plain;charset=utf-8",
                }
            });
            alert("Message sent successfully!");
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error("Error submitting form", error);
            alert("There was an error sending your message. Please try again.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your Name"
                    required
                />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="john@example.com"
                    required
                />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Tell us about your project..."
                    required
                ></textarea>
            </div>
            <Button
                type="submit"
                variant="default"
                fullWidth
                className="gradient-brand hover:gradient-brand-hover shadow-brand"
            >
                Send Message
            </Button>
        </form>
    );
};

export default ContactForm;

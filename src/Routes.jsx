import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import ContactStrategySession from './pages/contact-strategy-session';
import ServicesOverview from './pages/services-overview';
import InnovationLab from './pages/innovation-lab';
import HomePage from './pages/homepage';
import Services360 from './pages/services-360';
import ServicesInfluencer from './pages/services-influencer';
import ServicesIT from './pages/services-it';
import ContactUs from './pages/contact-us';
import GrowthCaseStudies from './pages/growth-case-studies';
import PrivacyPolicy from './pages/privacy-policy';
import Terms from './pages/terms';
import Careers from './pages/careers';


import AboutUs from './pages/about-us';

const Routes = () => {
    return (
        <BrowserRouter>
            <ErrorBoundary>
                <ScrollToTop />
                <RouterRoutes>
                    {/* Define your route here */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/contact-strategy-session" element={<ContactUs />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/services-overview" element={<Services360 />} />
                    <Route path="/services/360-marketing" element={<Services360 />} />
                    <Route path="/services/influencer-growth" element={<ServicesInfluencer />} />
                    <Route path="/services/it-services" element={<ServicesIT />} />
                    <Route path="/growth-case-studies" element={<GrowthCaseStudies />} />
                    <Route path="/innovation-lab" element={<ServicesIT />} />
                    <Route path="/homepage" element={<HomePage />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="*" element={<NotFound />} />
                </RouterRoutes>
            </ErrorBoundary>
        </BrowserRouter>
    );
};

export default Routes;

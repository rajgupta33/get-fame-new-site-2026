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
import StarbucksCaseStudy from './pages/growth-case-studies/StarbucksCaseStudy';
import AirbnbCaseStudy from './pages/growth-case-studies/AirbnbCaseStudy';
import CanvaCaseStudy from './pages/growth-case-studies/CanvaCaseStudy';
import SeoAssetStrategy from './pages/blog/SeoAssetStrategy';
import AdsRoiFix from './pages/blog/AdsRoiFix';
import PremiumPricingPsychology from './pages/blog/PremiumPricingPsychology';



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
                    <Route path="/growth-case-studies/starbucks-billion-dollar-experience" element={<StarbucksCaseStudy />} />
                    <Route path="/growth-case-studies/airbnb-community-led-growth" element={<AirbnbCaseStudy />} />
                    <Route path="/growth-case-studies/canva-seo-product-growth" element={<CanvaCaseStudy />} />
                    <Route path="/insights/seo-asset-strategy" element={<SeoAssetStrategy />} />
                    <Route path="/insights/ads-roi-fix" element={<AdsRoiFix />} />
                    <Route path="/insights/premium-pricing-psychology" element={<PremiumPricingPsychology />} />
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

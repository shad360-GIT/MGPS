/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { GlobalNetworkSection } from './components/GlobalNetworkSection';
import { SelectedWorksSection } from './components/SelectedWorksSection';
import { ProductionPhilosophySection } from './components/ProductionPhilosophySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedHubForInquiry, setSelectedHubForInquiry] = useState<string>('');
  const [selectedScopeForInquiry, setSelectedScopeForInquiry] = useState<string>('');

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCapability = (capTitle: string) => {
    setSelectedScopeForInquiry(`Capability Spec: ${capTitle}`);
    scrollToContact();
  };

  const handleSelectHub = (hubCity: string) => {
    setSelectedHubForInquiry(hubCity);
    scrollToContact();
  };

  const handleInquireProject = (projectTitle: string) => {
    setSelectedScopeForInquiry(`Production Scope Reference: ${projectTitle}`);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#141416] flex flex-col font-sans-ui selection:bg-[#141416] selection:text-[#FAF9F5]">
      {/* Editorial Header with Live Global Clocks */}
      <Header onOpenInquiry={scrollToContact} />

      <main className="flex-1">
        {/* 01: Hero Section (3-5 Second Clarity, Executive Brief, Verified Metrics) */}
        <Hero onOpenInquiry={scrollToContact} />

        {/* 02: Core Capabilities & Service Matrix (Asymmetrical Editorial Grid) */}
        <CapabilitiesSection onSelectCapabilityForInquiry={handleSelectCapability} />

        {/* 03: Global Hubs & Territorial Dossiers (Interactive Timezones, Rebates, Permits) */}
        <GlobalNetworkSection onSelectHub={handleSelectHub} />

        {/* 04: Selected Works (Curated Portfolio in Selective Dark Media Mode) */}
        <SelectedWorksSection onInquireProject={handleInquireProject} />

        {/* 05: The MGPS Standard / Philosophy (Experienced people who know how to make it happen) */}
        <ProductionPhilosophySection />

        {/* 06: Production Dispatch & Interactive Brief Initiation */}
        <ContactSection
          prefilledLocation={selectedHubForInquiry}
          prefilledScope={selectedScopeForInquiry}
        />
      </main>

      {/* Editorial Colophon & Directory */}
      <Footer />
    </div>
  );
}

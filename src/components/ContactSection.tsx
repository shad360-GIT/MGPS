import React, { useState } from 'react';
import { InquiryFormData } from '../types';
import { Send, CheckCircle2, Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';

interface ContactSectionProps {
  prefilledLocation?: string;
  prefilledScope?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledLocation, prefilledScope }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    email: '',
    company: '',
    projectType: 'Commercial',
    primaryLocation: prefilledLocation || 'New York, US',
    targetTimeline: 'Within 30–60 Days',
    estimatedBudget: '$150,000 – $500,000',
    needsPermits: true,
    needsCarnet: true,
    needsRemoteMonitoring: false,
    briefDetails: prefilledScope ? `Interested in: ${prefilledScope}` : ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = `MGPS-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefNumber(generatedRef);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 border-b border-neutral-300 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Index Meta */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-200 text-xs font-mono uppercase tracking-widest text-neutral-500">
          <div className="flex items-center gap-3">
            <span className="text-neutral-900 font-semibold">[06/06]</span>
            <span>PRODUCTION DISPATCH & BRIEF INITIATION</span>
          </div>
          <span>RESPONSE WITHIN 4 OPERATING HOURS</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-10">
          
          {/* Left Column: Direct Contact & Global Hotlines */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-neutral-950 leading-tight">
                Initiate Production.
              </h2>
              <p className="mt-4 font-serif-editorial text-xl text-neutral-700 leading-relaxed">
                Connect directly with senior line producers in New York, London, or Tokyo. We provide immediate feasibility analysis, ballpark territorial budgets, and tax rebate breakdowns.
              </p>
            </div>

            {/* Direct Dispatch Desks */}
            <div className="border border-neutral-300 bg-white p-6 space-y-6">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 pb-3 border-b border-neutral-200 flex justify-between">
                <span>Executive Dispatch Hotlines</span>
                <span className="text-neutral-900 font-semibold">24/7 PRODUCER LINE</span>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div>
                  <div className="text-neutral-500 uppercase">AMERICAS HEADQUARTERS // NEW YORK</div>
                  <div className="text-neutral-900 font-bold text-sm mt-0.5">+1 (212) 555-MGPS (6477)</div>
                  <div className="text-neutral-500">dispatch.nyc@mgps.media</div>
                </div>

                <div className="pt-3 border-t border-neutral-100">
                  <div className="text-neutral-500 uppercase">EUROPE & UK DESK // LONDON</div>
                  <div className="text-neutral-900 font-bold text-sm mt-0.5">+44 20 7946 0920</div>
                  <div className="text-neutral-500">dispatch.ldn@mgps.media</div>
                </div>

                <div className="pt-3 border-t border-neutral-100">
                  <div className="text-neutral-500 uppercase">ASIA-PACIFIC DESK // TOKYO</div>
                  <div className="text-neutral-900 font-bold text-sm mt-0.5">+81 3 5555 0192</div>
                  <div className="text-neutral-500">dispatch.tyo@mgps.media</div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200 text-[11px] font-mono text-neutral-500 flex items-center justify-between">
                <span>ENCRYPTED SECURE TRANSFERS:</span>
                <span className="text-neutral-900 font-semibold">ASPERA / SIGNIANT</span>
              </div>
            </div>

            {/* Turnaround Pledge */}
            <div className="p-5 border border-neutral-300 bg-neutral-100/70 text-xs font-sans-ui text-neutral-700 space-y-2">
              <strong className="block font-mono uppercase tracking-wider text-neutral-900">
                The MGPS Turnaround Pledge
              </strong>
              <p>
                Every submission is reviewed personally by a designated Head of Production. We don't use automated forms or junior triage. You receive a structured response with realistic schedule constraints and territorial incentive options within 4 business hours.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Production Brief Form */}
          <div className="lg:col-span-7 bg-white border border-neutral-950 p-6 sm:p-10">
            
            {submitted ? (
              <div className="py-12 text-center space-y-6 animate-fadeIn">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-700">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block">
                    PRODUCTION BRIEF LOGGED
                  </span>
                  <h3 className="font-display text-3xl font-extrabold uppercase tracking-tight text-neutral-950 mt-1">
                    Transmission Acknowledged.
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 font-mono">
                    REFERENCE FILE: <strong className="text-neutral-950 font-bold">{refNumber}</strong>
                  </p>
                </div>

                <div className="max-w-md mx-auto p-4 bg-[#FAF9F5] border border-neutral-200 text-xs font-sans-ui text-neutral-700 text-left space-y-2">
                  <p>
                    Thank you, <strong>{formData.name}</strong> ({formData.company || 'Production Unit'}).
                  </p>
                  <p>
                    Your brief for <strong>{formData.projectType}</strong> in <strong>{formData.primaryLocation}</strong> has been routed directly to the regional dispatch desk.
                  </p>
                  <p className="font-mono text-[11px] text-neutral-500 pt-2 border-t border-neutral-200">
                    Expected producer contact window: Under 4 hours to {formData.email}.
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        projectType: 'Commercial',
                        primaryLocation: 'New York, US',
                        targetTimeline: 'Within 30–60 Days',
                        estimatedBudget: '$150,000 – $500,000',
                        needsPermits: true,
                        needsCarnet: true,
                        needsRemoteMonitoring: false,
                        briefDetails: ''
                      });
                    }}
                    className="px-6 py-2.5 bg-neutral-950 text-white text-xs font-mono uppercase tracking-wider hover:bg-neutral-800"
                  >
                    Submit Another Brief
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#E1392B] font-bold">
                    PRODUCTION SPECIFICATION
                  </span>
                  <span className="text-xs font-mono text-neutral-400">STAGE 01/02</span>
                </div>

                {/* Primary Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-600 mb-1">
                      Producer / Director Name *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-3.5 py-2.5 bg-[#FAF9F5] border border-neutral-300 text-sm text-neutral-900 focus:outline-none focus:border-neutral-950 focus:bg-white font-sans-ui"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-600 mb-1">
                      Professional Email *
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="producer@agency.com"
                      className="w-full px-3.5 py-2.5 bg-[#FAF9F5] border border-neutral-300 text-sm text-neutral-900 focus:outline-none focus:border-neutral-950 focus:bg-white font-sans-ui"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-600 mb-1">
                      Agency / Production Company
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Epoch Films / Wieden+Kennedy"
                      className="w-full px-3.5 py-2.5 bg-[#FAF9F5] border border-neutral-300 text-sm text-neutral-900 focus:outline-none focus:border-neutral-950 focus:bg-white font-sans-ui"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-600 mb-1">
                      Project Format *
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAF9F5] border border-neutral-300 text-sm text-neutral-900 focus:outline-none focus:border-neutral-950 focus:bg-white font-sans-ui"
                    >
                      <option value="Commercial">Commercial / Global Campaign</option>
                      <option value="Feature / Doc">Feature Film / Documentary</option>
                      <option value="Fashion Editorial">High-Fashion / Stills Editorial</option>
                      <option value="Brand Film">Automotive / Technology Brand Film</option>
                      <option value="Remote Direction">Remote Unit Direction Only</option>
                    </select>
                  </div>
                </div>

                {/* Locations & Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-600 mb-1">
                      Target Shooting Territory / City *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.primaryLocation}
                      onChange={(e) => setFormData({ ...formData, primaryLocation: e.target.value })}
                      placeholder="e.g. Tokyo & Kyoto, Japan"
                      className="w-full px-3.5 py-2.5 bg-[#FAF9F5] border border-neutral-300 text-sm text-neutral-900 focus:outline-none focus:border-neutral-950 focus:bg-white font-sans-ui"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-600 mb-1">
                      Estimated Production Window
                    </label>
                    <select
                      value={formData.targetTimeline}
                      onChange={(e) => setFormData({ ...formData, targetTimeline: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAF9F5] border border-neutral-300 text-sm text-neutral-900 focus:outline-none focus:border-neutral-950 focus:bg-white font-sans-ui"
                    >
                      <option value="Immediate (< 2 Weeks)">Emergency Mobilization (&lt; 2 Weeks)</option>
                      <option value="Within 30–60 Days">Within 30–60 Days (Standard)</option>
                      <option value="Next Quarter">Next Quarter (Scouting Phase)</option>
                      <option value="Flexible / Feasibility Only">Feasibility / Preliminary Tax Modeling</option>
                    </select>
                  </div>
                </div>

                {/* Specialized Requirements Matrix */}
                <div className="pt-2">
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-neutral-600 mb-2">
                    Specialized Production Capabilities Required:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <label className="flex items-center gap-2 p-2.5 bg-[#FAF9F5] border border-neutral-200 text-xs text-neutral-800 cursor-pointer hover:bg-neutral-100">
                      <input
                        type="checkbox"
                        checked={formData.needsPermits}
                        onChange={(e) => setFormData({ ...formData, needsPermits: e.target.checked })}
                        className="rounded border-neutral-400 text-neutral-950 focus:ring-0"
                      />
                      <span>Municipal Permits</span>
                    </label>

                    <label className="flex items-center gap-2 p-2.5 bg-[#FAF9F5] border border-neutral-200 text-xs text-neutral-800 cursor-pointer hover:bg-neutral-100">
                      <input
                        type="checkbox"
                        checked={formData.needsCarnet}
                        onChange={(e) => setFormData({ ...formData, needsCarnet: e.target.checked })}
                        className="rounded border-neutral-400 text-neutral-950 focus:ring-0"
                      />
                      <span>ATA Carnets / Freight</span>
                    </label>

                    <label className="flex items-center gap-2 p-2.5 bg-[#FAF9F5] border border-neutral-200 text-xs text-neutral-800 cursor-pointer hover:bg-neutral-100">
                      <input
                        type="checkbox"
                        checked={formData.needsRemoteMonitoring}
                        onChange={(e) => setFormData({ ...formData, needsRemoteMonitoring: e.target.checked })}
                        className="rounded border-neutral-400 text-neutral-950 focus:ring-0"
                      />
                      <span>Remote Agency Feed</span>
                    </label>
                  </div>
                </div>

                {/* Project Scope / Treatment Notes */}
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-600 mb-1">
                    Production Scope, Camera Spec or Key Requirements
                  </label>
                  <textarea
                    rows={4}
                    value={formData.briefDetails}
                    onChange={(e) => setFormData({ ...formData, briefDetails: e.target.value })}
                    placeholder="Provide script notes, expected shoot days, camera package preference (Arri/Sony/Panavision), or specific location challenges..."
                    className="w-full px-3.5 py-2.5 bg-[#FAF9F5] border border-neutral-300 text-sm text-neutral-900 focus:outline-none focus:border-neutral-950 focus:bg-white font-sans-ui"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    id="submit-brief-button"
                    className="w-full py-4 bg-neutral-950 text-[#FAF9F5] text-xs font-semibold uppercase tracking-widest hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Transmit Production Brief</span>
                    <ArrowUpRight className="w-4 h-4 text-[#E1392B]" />
                  </button>
                  <p className="text-[10px] font-mono text-neutral-500 text-center mt-2.5">
                    ALL SUBMISSIONS PROTECTED BY AUTOMATIC RECIPROCAL NON-DISCLOSURE AGREEMENT
                  </p>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

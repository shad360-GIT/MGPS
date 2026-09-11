import React, { useState } from 'react';
import { ArrowDownRight, Globe2, ShieldCheck, Clock, CheckCircle2, ChevronRight } from 'lucide-react';

interface HeroProps {
  onOpenInquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  const [showQuickBrief, setShowQuickBrief] = useState(false);

  return (
    <section id="overview" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-neutral-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Top Editorial Index Meta */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-200 text-xs font-mono uppercase tracking-widest text-neutral-500">
          <div className="flex items-center gap-3">
            <span className="text-neutral-900 font-semibold">[01/06]</span>
            <span>MOSCOT GLOBAL PRODUCTION SERVICES</span>
          </div>
          <div className="flex items-center gap-4 text-neutral-600">
            <span>TERRITORIES: 48 COUNTRIES</span>
            <span className="text-neutral-300">/</span>
            <span>ESTABLISHED WORLDWIDE REACH</span>
          </div>
        </div>

        {/* The 3-5 Second Anchor Headline */}
        <div className="pt-10 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-200/70 text-neutral-800 text-[11px] font-mono uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E1392B]"></span>
            FULL-SCALE COMMERCIAL, NARRATIVE & EDITORIAL EXECUTION
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-neutral-950 uppercase leading-[0.95]">
            Global <br className="hidden sm:inline" />
            <span className="text-neutral-900">Production</span> <br />
            Services.
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 lg:pt-12 items-start">
            {/* Editorial Thesis Statement */}
            <div className="lg:col-span-7">
              <p className="font-serif-editorial text-2xl sm:text-3xl text-neutral-800 leading-snug font-normal">
                MGPS handles the entire physical, financial, and logistical machinery of international filmmaking—delivering pristine line production, vetted local crewing, location access, and cross-border customs across five continents.
              </p>
              
              <p className="mt-5 text-base sm:text-lg text-neutral-600 leading-relaxed font-sans-ui max-w-2xl">
                Experienced people who know how to make international production happen without friction, delays, or hidden markups. We ensure creative visions are realized on schedule and strictly on budget.
              </p>

              {/* Action Buttons & Fast Summary Trigger */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  id="hero-inquire-cta"
                  onClick={onOpenInquiry}
                  className="px-6 py-3.5 bg-neutral-950 text-[#FAF9F5] text-xs font-semibold uppercase tracking-widest hover:bg-neutral-800 transition-all flex items-center gap-2 shadow-sm"
                >
                  <span>Initiate Production Brief</span>
                  <ArrowDownRight className="w-4 h-4 text-[#E1392B]" />
                </button>

                <button
                  id="hero-capabilities-link"
                  onClick={() => {
                    const el = document.getElementById('capabilities');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 bg-transparent border border-neutral-300 text-neutral-900 text-xs font-semibold uppercase tracking-widest hover:border-neutral-950 hover:bg-neutral-100 transition-all"
                >
                  <span>Explore Capabilities</span>
                </button>

                <button
                  id="hero-quick-summary-toggle"
                  onClick={() => setShowQuickBrief(!showQuickBrief)}
                  className="text-xs font-mono uppercase tracking-wider text-neutral-600 hover:text-neutral-950 underline underline-offset-4 py-2 flex items-center gap-1.5"
                >
                  <span>{showQuickBrief ? 'Hide 10-Second Brief' : 'Read 10-Second Brief'}</span>
                  <ChevronRight className={`w-3.5 h-3.5 transition-transform ${showQuickBrief ? 'rotate-90' : ''}`} />
                </button>
              </div>

              {/* 10-Second Executive Summary Accordion Card */}
              {showQuickBrief && (
                <div className="mt-6 p-6 bg-white border border-neutral-300 text-sm space-y-3 font-sans-ui animate-fadeIn">
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
                    <span className="font-mono text-xs uppercase tracking-wider text-neutral-500">Executive Briefing · 10 Seconds</span>
                    <span className="text-[11px] font-mono text-[#E1392B] font-medium">MGPS.MEDIA</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                    <div>
                      <strong className="block text-neutral-900 uppercase tracking-wide mb-1 font-mono">What We Do</strong>
                      <p className="text-neutral-600">Full local line production, union & non-union crewing, permitting, carnets, gear packages, and daily budget reconciliation.</p>
                    </div>
                    <div>
                      <strong className="block text-neutral-900 uppercase tracking-wide mb-1 font-mono">Who We Serve</strong>
                      <p className="text-neutral-600">Global advertising agencies, automotive clients, prestige luxury fashion houses, streaming networks, and commercial directors.</p>
                    </div>
                    <div>
                      <strong className="block text-neutral-900 uppercase tracking-wide mb-1 font-mono">Our Guarantee</strong>
                      <p className="text-neutral-600">Transparent open-book accounting, 72-hour unit mobilization, zero unscheduled downtime, and rigorous IP privacy.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Editorial Data & Key Assurance Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white border border-neutral-300 p-6 lg:p-7">
                <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 pb-3 border-b border-neutral-200 flex justify-between items-center">
                  <span>Operating Metric</span>
                  <span className="text-neutral-900 font-semibold">2026 AUDIT</span>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-5">
                  <div>
                    <div className="font-display text-4xl font-extrabold text-neutral-950">48+</div>
                    <div className="text-xs uppercase tracking-wider font-mono text-neutral-500 mt-1">Countries Serviced</div>
                    <p className="text-xs text-neutral-600 mt-2">Active producer network across the Americas, Europe, Asia, and Arctic zones.</p>
                  </div>

                  <div>
                    <div className="font-display text-4xl font-extrabold text-neutral-950">100%</div>
                    <div className="text-xs uppercase tracking-wider font-mono text-neutral-500 mt-1">Open-Book Ledger</div>
                    <p className="text-xs text-neutral-600 mt-2">Transparent raw invoices, real-time hot costs, and guaranteed tax incentive capture.</p>
                  </div>

                  <div className="pt-4 border-t border-neutral-100">
                    <div className="font-display text-3xl font-extrabold text-neutral-950">72h</div>
                    <div className="text-xs uppercase tracking-wider font-mono text-neutral-500 mt-1">Rapid Mobilization</div>
                    <p className="text-xs text-neutral-600 mt-2">Fully insured camera and key crews ready to deploy internationally on short notice.</p>
                  </div>

                  <div className="pt-4 border-t border-neutral-100">
                    <div className="font-display text-3xl font-extrabold text-neutral-950">0</div>
                    <div className="text-xs uppercase tracking-wider font-mono text-neutral-500 mt-1">IP Leaks</div>
                    <p className="text-xs text-neutral-600 mt-2">Strict confidential staging for unreleased automotive and consumer products.</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span className="flex items-center gap-1 text-emerald-700">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    LOCAL CARNET COMPLIANT
                  </span>
                  <span>REF: MGPS.COM</span>
                </div>
              </div>

              {/* Verified Producer Credentials Banner */}
              <div className="border border-neutral-300 bg-[#FAF9F5] p-4 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-neutral-700 shrink-0" />
                <div className="text-xs text-neutral-700">
                  <strong className="text-neutral-900 font-medium uppercase tracking-wide font-mono block">Direct Film Commission Relationships</strong>
                  Fast-tracked municipal authorizations across London, New York, Paris, Mexico City, and Tokyo.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Editorial Lead Plate with Intentional Crop */}
        <div className="mt-6 relative border border-neutral-300 bg-neutral-900 text-white overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[360px] lg:min-h-[420px]">
            {/* Image section with intentional cropping */}
            <div className="lg:col-span-8 relative min-h-[260px] lg:min-h-full">
              <img
                src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1600&auto=format&fit=crop"
                alt="International camera unit and location production setup"
                className="w-full h-full object-cover object-center grayscale contrast-110 opacity-90"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent lg:hidden"></div>
              <div className="absolute bottom-4 left-4 bg-neutral-950/90 text-white text-[10px] font-mono uppercase tracking-wider px-3 py-1 border border-neutral-700">
                FIELD UNIT 08 · KYOTO METROPOLITAN NIGHT UNIT
              </div>
            </div>

            {/* Accompanying Editorial Meta Sidebar */}
            <div className="lg:col-span-4 p-8 flex flex-col justify-between bg-neutral-950 border-t lg:border-t-0 lg:border-l border-neutral-800">
              <div className="space-y-4">
                <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest">
                  PRODUCTION CASE NOTE // 2025
                </div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-neutral-100">
                  "No excuses. Just the equipment on set and the permit in hand."
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-sans-ui">
                  From multi-city automotive campaigns spanning the Atacama Desert to Paris fashion weeks, MGPS operates as the quiet force behind ambitious creative directors and agencies.
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-800 space-y-2 text-[11px] font-mono text-neutral-400">
                <div className="flex justify-between">
                  <span className="text-neutral-500">LINE EXECUTIVE:</span>
                  <span className="text-neutral-200">JULIAN MOSCOT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">SPECIALITY:</span>
                  <span className="text-neutral-200">CROSS-BORDER CARNETS & TAX REBATES</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">HOTLINE:</span>
                  <span className="text-neutral-200">+1 (212) 555-MGPS</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

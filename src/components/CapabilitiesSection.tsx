import React, { useState } from 'react';
import { SERVICE_CAPABILITIES } from '../data/productionData';
import { ServiceCapability } from '../types';
import { Check, ArrowRight, Layers, FileCheck2, Compass, Radio, DollarSign, ShieldAlert } from 'lucide-react';

interface CapabilitiesSectionProps {
  onSelectCapabilityForInquiry: (capTitle: string) => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({ onSelectCapabilityForInquiry }) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>('line-production');

  const filteredCapabilities = activeTab === 'all' 
    ? SERVICE_CAPABILITIES 
    : SERVICE_CAPABILITIES.filter(c => c.category.toLowerCase().includes(activeTab.toLowerCase()));

  const getCapabilityIcon = (id: string) => {
    switch (id) {
      case 'line-production': return <Layers className="w-5 h-5 text-neutral-800" />;
      case 'location-intelligence': return <Compass className="w-5 h-5 text-neutral-800" />;
      case 'cross-border-logistics': return <FileCheck2 className="w-5 h-5 text-neutral-800" />;
      case 'remote-broadcasting': return <Radio className="w-5 h-5 text-neutral-800" />;
      case 'tax-incentives': return <DollarSign className="w-5 h-5 text-neutral-800" />;
      case 'safety-extreme': return <ShieldAlert className="w-5 h-5 text-neutral-800" />;
      default: return <Layers className="w-5 h-5 text-neutral-800" />;
    }
  };

  return (
    <section id="capabilities" className="py-16 lg:py-24 border-b border-neutral-300 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-200 text-xs font-mono uppercase tracking-widest text-neutral-500">
          <div className="flex items-center gap-3">
            <span className="text-neutral-900 font-semibold">[02/06]</span>
            <span>CORE CAPABILITIES & SERVICE MATRIX</span>
          </div>
          <span>END-TO-END PRODUCTION DISCIPLINE</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-10 items-baseline">
          <div className="lg:col-span-6">
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-neutral-950 leading-tight">
              Production Architecture.
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="font-serif-editorial text-xl sm:text-2xl text-neutral-700 leading-relaxed">
              Every production challenge has a structural solution. We assemble local crews, secure uncompromised locations, and resolve regulatory hurdles before cameras roll.
            </p>
          </div>
        </div>

        {/* Asymmetrical Editorial Grid of Capabilities */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-300 border border-neutral-300">
          {SERVICE_CAPABILITIES.map((cap) => {
            const isSelected = expandedId === cap.id;
            return (
              <div
                key={cap.id}
                onClick={() => setExpandedId(isSelected ? null : cap.id)}
                className={`p-8 bg-[#FAF9F5] transition-all cursor-pointer flex flex-col justify-between group hover:bg-white ${
                  isSelected ? 'ring-1 ring-neutral-950 bg-white shadow-sm' : ''
                }`}
              >
                <div>
                  {/* Top Metadata */}
                  <div className="flex items-center justify-between text-xs font-mono pb-4 border-b border-neutral-200">
                    <span className="text-[#E1392B] font-bold">[{cap.index}]</span>
                    <span className="text-neutral-500 uppercase tracking-wider">{cap.category}</span>
                  </div>

                  <div className="pt-6 flex items-start gap-3">
                    <div className="p-2 bg-neutral-100 border border-neutral-200 shrink-0 mt-0.5">
                      {getCapabilityIcon(cap.id)}
                    </div>
                    <h3 className="font-display text-xl font-bold uppercase tracking-tight text-neutral-950 group-hover:text-neutral-700 transition-colors">
                      {cap.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-sm text-neutral-600 leading-relaxed font-sans-ui">
                    {cap.summary}
                  </p>

                  {/* Deliverables List */}
                  <div className="mt-6 pt-4 border-t border-neutral-200/80 space-y-2.5">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-semibold">
                      KEY DELIVERABLES:
                    </div>
                    <ul className="space-y-2">
                      {cap.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-neutral-700 leading-snug">
                          <Check className="w-3.5 h-3.5 text-neutral-950 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Field Note & Action */}
                <div className="mt-8 pt-4 border-t border-neutral-200">
                  <div className="text-[11px] font-mono text-neutral-500 italic mb-4">
                    "{cap.fieldNote}"
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectCapabilityForInquiry(cap.title);
                    }}
                    className="w-full py-2.5 px-3 bg-neutral-100 hover:bg-neutral-950 hover:text-white border border-neutral-300 text-[11px] font-mono uppercase tracking-wider text-neutral-800 transition-colors flex items-center justify-between"
                  >
                    <span>Request Spec Brief</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Production Assurance Strip */}
        <div className="mt-8 p-6 bg-white border border-neutral-300 flex flex-wrap items-center justify-between gap-6 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            <span className="text-neutral-800 font-semibold uppercase tracking-wider">Turnkey Line Production Standard</span>
          </div>
          <div className="text-neutral-500 uppercase tracking-wider">
            All equipment packages secured through authorized Arri / Panavision / Sony technical rental hubs with full worldwide transit insurance.
          </div>
        </div>

      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { PRODUCTION_HUBS } from '../data/productionData';
import { ProductionHub } from '../types';
import { Globe, Clock, MapPin, Shield, ArrowUpRight, CheckCircle } from 'lucide-react';

interface GlobalNetworkSectionProps {
  onSelectHub: (hubCity: string) => void;
}

export const GlobalNetworkSection: React.FC<GlobalNetworkSectionProps> = ({ onSelectHub }) => {
  const [selectedHub, setSelectedHub] = useState<ProductionHub>(PRODUCTION_HUBS[0]);
  const [regionFilter, setRegionFilter] = useState<string>('All');
  const [hubTimes, setHubTimes] = useState<Record<string, string>>({});

  useEffect(() => {
    const updateAllHubTimes = () => {
      const now = new Date();
      const times: Record<string, string> = {};
      PRODUCTION_HUBS.forEach((hub) => {
        try {
          times[hub.id] = now.toLocaleTimeString('en-US', {
            timeZone: hub.timezone,
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
          });
        } catch {
          times[hub.id] = '--:--';
        }
      });
      setHubTimes(times);
    };

    updateAllHubTimes();
    const interval = setInterval(updateAllHubTimes, 15000);
    return () => clearInterval(interval);
  }, []);

  const regions = ['All', 'Americas', 'Europe & UK', 'Asia-Pacific', 'Specialized Units'];

  const filteredHubs = regionFilter === 'All' 
    ? PRODUCTION_HUBS 
    : PRODUCTION_HUBS.filter(h => h.region === regionFilter);

  return (
    <section id="hubs" className="py-16 lg:py-24 border-b border-neutral-300 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Index Meta */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-200 text-xs font-mono uppercase tracking-widest text-neutral-500">
          <div className="flex items-center gap-3">
            <span className="text-neutral-900 font-semibold">[03/06]</span>
            <span>GLOBAL HUBS & TERRITORIAL REACH</span>
          </div>
          <span>48+ COUNTRIES WITH DIRECT STANDING ACCOUNTS</span>
        </div>

        {/* Section Heading */}
        <div className="pt-10 pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-neutral-950 leading-tight">
              International Footprint.
            </h2>
            <p className="mt-3 font-serif-editorial text-xl text-neutral-700 max-w-2xl">
              Local production depth backed by global financial accountability. We operate established dispatch desks in key cinematic capitals.
            </p>
          </div>

          {/* Region Tabs */}
          <div className="flex flex-wrap gap-2 text-xs font-mono uppercase">
            {regions.map((reg) => (
              <button
                key={reg}
                onClick={() => setRegionFilter(reg)}
                className={`px-3 py-1.5 border transition-all ${
                  regionFilter === reg
                    ? 'bg-neutral-950 text-[#FAF9F5] border-neutral-950'
                    : 'bg-white text-neutral-600 border-neutral-300 hover:border-neutral-950'
                }`}
              >
                {reg}
              </button>
            ))}
          </div>
        </div>

        {/* Two-Column Interactive Hub Inspector */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Hub Selector List */}
          <div className="lg:col-span-6 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 pb-2 border-b border-neutral-200 flex justify-between">
              <span>Selected Dispatch Desks</span>
              <span>Local Time / Status</span>
            </div>

            <div className="space-y-2">
              {filteredHubs.map((hub) => {
                const isActive = selectedHub.id === hub.id;
                const time = hubTimes[hub.id] || '12:00';

                return (
                  <div
                    key={hub.id}
                    onClick={() => setSelectedHub(hub)}
                    className={`p-4 border transition-all cursor-pointer flex items-center justify-between group ${
                      isActive 
                        ? 'bg-white border-neutral-950 shadow-sm' 
                        : 'bg-white/60 border-neutral-300 hover:border-neutral-500 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`w-2 h-2 rounded-full ${
                        hub.status === 'Active Units on Set' ? 'bg-[#E1392B] animate-pulse' : 'bg-emerald-600'
                      }`} />
                      <div>
                        <div className="font-display text-lg font-bold text-neutral-950 uppercase tracking-tight group-hover:text-neutral-700">
                          {hub.city}, <span className="font-normal text-neutral-600">{hub.country}</span>
                        </div>
                        <div className="text-[11px] font-mono text-neutral-500">
                          {hub.region} · {hub.permitTurnaround}
                        </div>
                      </div>
                    </div>

                    <div className="text-right font-mono">
                      <div className="text-sm font-semibold text-neutral-900">
                        {time} <span className="text-[10px] text-neutral-500 font-normal">{hub.timeZoneCode}</span>
                      </div>
                      <div className="text-[10px] text-neutral-500 uppercase">
                        {hub.status}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Selected Hub Detailed Breakdown */}
          <div className="lg:col-span-6 bg-white border border-neutral-950 p-6 lg:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#E1392B] font-bold">
                  TERRITORIAL DOSSIER
                </span>
                <h3 className="font-display text-2xl lg:text-3xl font-extrabold uppercase tracking-tight text-neutral-950 mt-1">
                  {selectedHub.city}, {selectedHub.country}
                </h3>
              </div>
              <div className="text-right font-mono">
                <span className="text-xs uppercase text-neutral-500 block">LOCAL TIME</span>
                <span className="font-display text-xl font-bold text-neutral-900">
                  {hubTimes[selectedHub.id] || '12:00'} {selectedHub.timeZoneCode}
                </span>
              </div>
            </div>

            <div className="py-6 space-y-6">
              {/* Turnaround & Rebate Stats */}
              <div className="grid grid-cols-2 gap-4 pb-6 border-b border-neutral-200">
                <div className="p-3 bg-[#FAF9F5] border border-neutral-200">
                  <span className="text-[10px] font-mono uppercase text-neutral-500 block">Permitting Turnaround</span>
                  <span className="font-semibold text-sm text-neutral-900 mt-1 block font-mono">
                    {selectedHub.permitTurnaround}
                  </span>
                </div>
                <div className="p-3 bg-[#FAF9F5] border border-neutral-200">
                  <span className="text-[10px] font-mono uppercase text-neutral-500 block">Tax Incentive / Rebate</span>
                  <span className="font-semibold text-sm text-neutral-900 mt-1 block font-mono">
                    {selectedHub.taxRebate}
                  </span>
                </div>
              </div>

              {/* Strengths & Infrastructure */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-3">
                  TERRITORIAL CAPABILITIES & ADVANTAGES:
                </div>
                <ul className="space-y-2">
                  {selectedHub.strengths.map((str, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-neutral-800">
                      <CheckCircle className="w-4 h-4 text-neutral-950 shrink-0 mt-0.5" />
                      <span>{str}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Local Producer & Contact */}
              <div className="pt-4 border-t border-neutral-200 text-xs font-mono space-y-1.5 text-neutral-600">
                <div className="flex justify-between">
                  <span className="text-neutral-500">HEAD OF REGION:</span>
                  <span className="text-neutral-900 font-medium">{selectedHub.headOfProduction}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">DISPATCH BASE:</span>
                  <span className="text-neutral-900">{selectedHub.addressSummary}</span>
                </div>
              </div>
            </div>

            {/* Quick Button to Route to Inquiry */}
            <div className="pt-2">
              <button
                onClick={() => onSelectHub(selectedHub.city)}
                className="w-full py-3 bg-neutral-950 text-[#FAF9F5] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-neutral-800 transition-colors"
              >
                <span>Initiate Production in {selectedHub.city}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { PRODUCTION_PILLARS } from '../data/productionData';
import { ShieldCheck, Scale, Zap, Lock } from 'lucide-react';

export const ProductionPhilosophySection: React.FC = () => {
  const getPillarIcon = (num: string) => {
    switch (num) {
      case '01': return <Scale className="w-5 h-5 text-neutral-800" />;
      case '02': return <ShieldCheck className="w-5 h-5 text-neutral-800" />;
      case '03': return <Zap className="w-5 h-5 text-neutral-800" />;
      case '04': return <Lock className="w-5 h-5 text-neutral-800" />;
      default: return <ShieldCheck className="w-5 h-5 text-neutral-800" />;
    }
  };

  return (
    <section id="standards" className="py-20 lg:py-28 border-b border-neutral-300 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Index Meta */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-200 text-xs font-mono uppercase tracking-widest text-neutral-500">
          <div className="flex items-center gap-3">
            <span className="text-neutral-900 font-semibold">[05/06]</span>
            <span>THE MGPS STANDARD</span>
          </div>
          <span>EXPERIENCE · INTEGRITY · INFRASTRUCTURE</span>
        </div>

        {/* Section Heading with Editorial Statement */}
        <div className="pt-10 pb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline">
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-neutral-950 leading-tight">
              Experienced People Who Know How to Make International Production Happen.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="font-serif-editorial text-xl text-neutral-700 leading-relaxed">
              Global filmmaking is unforgiving of amateurism. When weather windows close or municipal permits are delayed, you need producers with the institutional muscle to solve the problem before it reaches the client.
            </p>
          </div>
        </div>

        {/* 4 Pillars Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-300 border border-neutral-300">
          {PRODUCTION_PILLARS.map((pillar) => (
            <div key={pillar.number} className="p-8 lg:p-10 bg-[#FAF9F5] flex flex-col justify-between hover:bg-white transition-colors">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-neutral-200 text-xs font-mono">
                  <span className="text-[#E1392B] font-bold">PILLAR {pillar.number}</span>
                  <div className="p-1.5 bg-neutral-100 border border-neutral-200">
                    {getPillarIcon(pillar.number)}
                  </div>
                </div>

                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-neutral-950 mt-6">
                  {pillar.title}
                </h3>

                <div className="text-sm font-serif-editorial text-neutral-800 italic mt-2">
                  {pillar.subtitle}
                </div>

                <p className="mt-4 text-sm text-neutral-600 leading-relaxed font-sans-ui">
                  {pillar.body}
                </p>
              </div>

              {/* Prominent Metric & Label */}
              <div className="mt-8 pt-6 border-t border-neutral-200 flex items-baseline justify-between">
                <div>
                  <div className="font-display text-4xl font-black text-neutral-950">
                    {pillar.metric}
                  </div>
                  <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 mt-1">
                    {pillar.metricLabel}
                  </div>
                </div>
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                  MGPS VERIFIED
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Executive Quote Block */}
        <div className="mt-12 p-8 lg:p-12 bg-white border border-neutral-300">
          <div className="max-w-3xl">
            <blockquote className="font-serif-editorial text-2xl sm:text-3xl text-neutral-900 leading-snug font-normal">
              “Our value isn't just knowing how to rent an Alexa 35 or book a hotel block in London. It's knowing who to call when customs holds your lenses at 3 a.m. and the director needs to roll at dawn.”
            </blockquote>
            <div className="mt-6 flex items-center gap-4 text-xs font-mono uppercase tracking-wider text-neutral-500">
              <span className="text-neutral-900 font-semibold">Julian Moscot</span>
              <span>—</span>
              <span>Managing Director & Head of Global Production, MGPS</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

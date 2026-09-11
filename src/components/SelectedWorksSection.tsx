import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/productionData';
import { PortfolioProject } from '../types';
import { Camera, Calendar, Users, MapPin, ExternalLink, X, Film, CheckCircle2 } from 'lucide-react';

interface SelectedWorksProps {
  onInquireProject: (projectTitle: string) => void;
}

export const SelectedWorksSection: React.FC<SelectedWorksProps> = ({ onInquireProject }) => {
  const [selectedFormat, setSelectedFormat] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<PortfolioProject | null>(null);

  const formats = ['All', 'Commercial', 'Feature / Doc', 'Fashion Editorial', 'Brand Film'];

  const filteredProjects = selectedFormat === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.format === selectedFormat);

  return (
    <section id="selected-works" className="py-20 lg:py-28 bg-[#111113] text-[#FAF9F5] border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Dark Media Mode Section Index Meta */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-800 text-xs font-mono uppercase tracking-widest text-neutral-400">
          <div className="flex items-center gap-3">
            <span className="text-white font-semibold">[04/06]</span>
            <span>DARK MEDIA MODE // PRODUCTION FOLIO</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E1392B]"></span>
            <span>CURATED LINE PRODUCTION LOGISTICS</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="pt-10 pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
              Selected Works.
            </h2>
            <p className="mt-3 font-serif-editorial text-xl text-neutral-300 max-w-2xl font-light">
              A record of complex international productions executed on schedule, across remote wilderness, dense metropolitan centers, and high-security installations.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 text-xs font-mono uppercase">
            {formats.map((fmt) => (
              <button
                key={fmt}
                onClick={() => setSelectedFormat(fmt)}
                className={`px-3.5 py-1.5 border transition-all ${
                  selectedFormat === fmt
                    ? 'bg-white text-neutral-950 border-white font-semibold'
                    : 'bg-neutral-900 text-neutral-400 border-neutral-700 hover:border-neutral-400 hover:text-white'
                }`}
              >
                {fmt}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Project Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => setActiveProjectModal(project)}
              className="group cursor-pointer border border-neutral-800 bg-neutral-950/60 transition-all hover:border-neutral-500 flex flex-col justify-between"
            >
              <div>
                {/* Intentional Editorial Image Frame with Technical Aspect Ratio Tag */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover object-center grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-neutral-950/90 text-white text-[10px] font-mono px-2.5 py-1 border border-neutral-700 uppercase">
                    {project.index} · {project.aspectRatio}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-neutral-950/90 text-white text-[10px] font-mono px-2.5 py-1 border border-neutral-700 uppercase">
                    {project.format}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6">
                  <div className="flex items-baseline justify-between text-xs font-mono text-neutral-400 pb-2 border-b border-neutral-800">
                    <span>{project.client}</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-white mt-3 group-hover:text-neutral-300 transition-colors">
                    {project.title}
                  </h3>

                  <div className="mt-2 text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#E1392B]" />
                    <span>{project.locations.join(' · ')}</span>
                  </div>

                  <p className="mt-4 text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                    {project.logisticsChallenge}
                  </p>

                  <div className="mt-5 pt-3 border-t border-neutral-800 text-[11px] font-mono text-neutral-400 flex justify-between">
                    <span>{project.cameraPackage.split('·')[0]}</span>
                    <span>{project.shootDays} Shoot Days</span>
                  </div>
                </div>
              </div>

              {/* View Case Breakdown trigger */}
              <div className="px-6 pb-5 pt-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 group-hover:text-white flex items-center justify-between border-t border-neutral-800/80 pt-3">
                  <span>Inspect Logistics Case</span>
                  <span className="text-[#E1392B] font-bold">→</span>
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Technical Reel Assurance Notice */}
        <div className="mt-12 p-6 border border-neutral-800 bg-neutral-900/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-3">
            <Film className="w-4 h-4 text-neutral-300" />
            <span>FULL EDITORIAL DIRECTORS’ CUTS & REELS AVAILABLE UPON QUALIFIED REQUEST</span>
          </div>
          <span className="text-neutral-500">STRICT NDA EMBARGO PROTOCOLS OBSERVED</span>
        </div>

      </div>

      {/* Project Logistics Detail Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="bg-[#141416] border border-neutral-700 text-white max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative">
            
            <button
              onClick={() => setActiveProjectModal(null)}
              className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-white border border-neutral-700 bg-neutral-900"
              aria-label="Close Project Details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-xs font-mono uppercase tracking-widest text-[#E1392B] pb-2">
              PRODUCTION CASE NOTE // {activeProjectModal.index}
            </div>

            <h3 className="font-display text-3xl font-extrabold uppercase tracking-tight text-white">
              {activeProjectModal.title}
            </h3>

            <div className="text-xs font-mono text-neutral-400 mt-1 pb-4 border-b border-neutral-800 flex flex-wrap gap-4">
              <span>CLIENT: <strong className="text-neutral-200">{activeProjectModal.client}</strong></span>
              <span>FORMAT: <strong className="text-neutral-200">{activeProjectModal.format}</strong></span>
              <span>YEAR: <strong className="text-neutral-200">{activeProjectModal.year}</strong></span>
            </div>

            {/* Modal Image */}
            <div className="my-6 aspect-video bg-neutral-900 border border-neutral-800 overflow-hidden">
              <img
                src={activeProjectModal.heroImage}
                alt={activeProjectModal.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Logistics & Scope Specs */}
            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono uppercase text-neutral-400 block mb-1">
                  Logistics & Permitting Challenge Solved:
                </span>
                <p className="text-sm text-neutral-200 leading-relaxed font-sans-ui bg-neutral-900 p-4 border border-neutral-800">
                  {activeProjectModal.logisticsChallenge}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3 bg-neutral-900 border border-neutral-800">
                  <span className="text-neutral-400 block text-[10px] uppercase">Locations Serviced</span>
                  <span className="text-neutral-200 font-semibold">{activeProjectModal.locations.join(', ')}</span>
                </div>
                <div className="p-3 bg-neutral-900 border border-neutral-800">
                  <span className="text-neutral-400 block text-[10px] uppercase">Camera & Optics Package</span>
                  <span className="text-neutral-200 font-semibold">{activeProjectModal.cameraPackage}</span>
                </div>
                <div className="p-3 bg-neutral-900 border border-neutral-800">
                  <span className="text-neutral-400 block text-[10px] uppercase">Unit Crew Size</span>
                  <span className="text-neutral-200 font-semibold">{activeProjectModal.crewSize} Technical & Creative Crew</span>
                </div>
                <div className="p-3 bg-neutral-900 border border-neutral-800">
                  <span className="text-neutral-400 block text-[10px] uppercase">Principal Photography</span>
                  <span className="text-neutral-200 font-semibold">{activeProjectModal.shootDays} Shoot Days on Set</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {activeProjectModal.tags.map((t, idx) => (
                  <span key={idx} className="text-[11px] font-mono px-2.5 py-1 bg-neutral-800 border border-neutral-700 text-neutral-300">
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center justify-between gap-4">
              <button
                onClick={() => {
                  const title = activeProjectModal.title;
                  setActiveProjectModal(null);
                  onInquireProject(title);
                }}
                className="w-full py-3 bg-white text-neutral-950 text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-colors"
              >
                Inquire Similar Production Scope
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

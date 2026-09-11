import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141416] text-[#FAF9F5] pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Main Footer Colophon Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-neutral-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-3xl font-extrabold tracking-tight text-white">
                MGPS
              </span>
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400">
                MOSCOT GLOBAL PRODUCTION SERVICES
              </span>
            </div>

            <p className="font-serif-editorial text-lg text-neutral-300 max-w-md font-light leading-relaxed">
              International line production, location intelligence, and creative logistics for commercial, narrative, and editorial motion pictures worldwide.
            </p>

            <div className="text-xs font-mono text-neutral-500 space-y-1 pt-2">
              <div>OFFICIAL DOMAINS: <span className="text-neutral-300">MGPS.MEDIA</span> · <span className="text-neutral-300">MGPS.COM</span></div>
              <div>ESTABLISHED WORLDWIDE REACH · 48 SOVEREIGN TERRITORIES</div>
            </div>
          </div>

          {/* Quick Directory */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold pb-2 border-b border-neutral-800">
              Navigation
            </div>
            <ul className="space-y-2 text-xs font-mono uppercase tracking-wider text-neutral-400">
              <li><a href="#overview" className="hover:text-white transition-colors">01. Overview</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">02. Capabilities</a></li>
              <li><a href="#hubs" className="hover:text-white transition-colors">03. Global Hubs</a></li>
              <li><a href="#selected-works" className="hover:text-white transition-colors">04. Selected Works (Dark Media)</a></li>
              <li><a href="#standards" className="hover:text-white transition-colors">05. The MGPS Standard</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">06. Production Dispatch</a></li>
            </ul>
          </div>

          {/* Global Desk Coordinates */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold pb-2 border-b border-neutral-800">
              Primary Regional Desks
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs font-mono text-neutral-400">
              <div>
                <strong className="text-white block">NEW YORK (HQ)</strong>
                <span>530 West 25th St</span>
                <span className="block text-neutral-500">+1 212 555 6477</span>
              </div>
              <div>
                <strong className="text-white block">LONDON</strong>
                <span>14 Berwick St, Soho</span>
                <span className="block text-neutral-500">+44 20 7946 0920</span>
              </div>
              <div>
                <strong className="text-white block">TOKYO</strong>
                <span>Minato-ku, Aoyama</span>
                <span className="block text-neutral-500">+81 3 5555 0192</span>
              </div>
              <div>
                <strong className="text-white block">MEXICO CITY</strong>
                <span>Roma Norte, CDMX</span>
                <span className="block text-neutral-500">+52 55 5555 3190</span>
              </div>
            </div>
          </div>

        </div>

        {/* Ethical Standards & Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} MOSCOT GLOBAL PRODUCTION SERVICES. ALL RIGHTS RESERVED.</span>
            <span>·</span>
            <span>GREEN PRODUCTION & CARBON OFFSET PROTOCOL</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors py-1 px-3 border border-neutral-800 hover:border-neutral-600 bg-neutral-900"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

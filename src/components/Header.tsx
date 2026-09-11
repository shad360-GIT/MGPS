import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenInquiry: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenInquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState({
    nyc: '',
    ldn: '',
    tyo: '',
    cdmx: ''
  });

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      setCurrentTime({
        nyc: now.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', hour12: false }),
        ldn: now.toLocaleTimeString('en-US', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit', hour12: false }),
        tyo: now.toLocaleTimeString('en-US', { timeZone: 'Asia/Tokyo', hour: '2-digit', minute: '2-digit', hour12: false }),
        cdmx: now.toLocaleTimeString('en-US', { timeZone: 'America/Mexico_City', hour: '2-digit', minute: '2-digit', hour12: false }),
      });
    };
    updateTimes();
    const timer = setInterval(updateTimes, 10000);
    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Global Hubs', href: '#hubs' },
    { label: 'Selected Works', href: '#selected-works' },
    { label: 'The MGPS Standard', href: '#standards' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F5]/95 backdrop-blur-md border-b border-neutral-300/80 transition-colors">
      {/* Top Global Dispatch Clock Bar */}
      <div className="hidden lg:flex items-center justify-between px-8 py-1.5 text-[11px] uppercase tracking-wider text-neutral-500 border-b border-neutral-200 font-mono">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-neutral-800 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E1392B] animate-pulse"></span>
            GLOBAL DISPATCH ACTIVE
          </span>
          <span className="text-neutral-300">|</span>
          <span>NYC <strong className="text-neutral-900 font-normal">{currentTime.nyc || '12:00'}</strong> EDT</span>
          <span>LDN <strong className="text-neutral-900 font-normal">{currentTime.ldn || '17:00'}</strong> BST</span>
          <span>TYO <strong className="text-neutral-900 font-normal">{currentTime.tyo || '01:00'}</strong> JST</span>
          <span>CDMX <strong className="text-neutral-900 font-normal">{currentTime.cdmx || '10:00'}</strong> CST</span>
        </div>
        <div className="flex items-center gap-6">
          <span>REF: MGPS.MEDIA</span>
          <span className="text-neutral-300">|</span>
          <span>48+ COUNTRIES · 100% AUDIT RECONCILED</span>
        </div>
      </div>

      {/* Main Masthead Bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Lockup */}
        <a href="#overview" className="flex items-baseline gap-3 group">
          <span className="font-display text-2xl lg:text-3xl font-bold tracking-tight text-neutral-950 group-hover:text-neutral-700 transition-colors">
            MGPS
          </span>
          <span className="hidden sm:inline-block text-[11px] font-mono uppercase tracking-widest text-neutral-500 border-l border-neutral-300 pl-3 leading-tight">
            Moscot Global<br />Production Services
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-7 text-xs font-medium uppercase tracking-wider text-neutral-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-neutral-950 transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[1.5px] hover:after:bg-[#141416]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            id="header-inquire-btn"
            onClick={onOpenInquiry}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-950 text-[#FAF9F5] text-xs font-medium uppercase tracking-wider hover:bg-neutral-800 transition-all active:scale-[0.99] border border-neutral-950"
          >
            <span>Initiate Production</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-900 hover:text-neutral-600 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-[#FAF9F5] px-6 py-6 space-y-4">
          <div className="space-y-3 pb-4 border-b border-neutral-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-medium uppercase tracking-wider text-neutral-800 hover:text-neutral-950 py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-3 bg-neutral-950 text-[#FAF9F5] text-xs font-medium uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>Initiate Production</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="text-[11px] font-mono text-neutral-500 pt-2 flex flex-col gap-1">
            <span>MGPS.MEDIA · EST. GLOBAL PRODUCTION</span>
            <span>NEW YORK · LONDON · TOKYO · MEXICO CITY</span>
          </div>
        </div>
      )}
    </header>
  );
};

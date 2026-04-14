import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Dashboard } from './components/Dashboard';
import { Benefits } from './components/Benefits';
import { FinalCTA } from './components/FinalCTA';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const socialLinks = [
  {
    href: 'https://www.facebook.com/CheckPayApp',
    label: 'Facebook',
    icon: <Facebook className="w-4 h-4" />,
  },
  {
    href: 'https://www.instagram.com/CheckPayApp',
    label: 'Instagram',
    icon: <Instagram className="w-4 h-4" />,
  },
  {
    href: 'https://x.com/CheckPayApp',
    label: 'X',
    icon: <Twitter className="w-4 h-4" />,
  },
  {
    href: 'https://www.tiktok.com/@user2545261380081',
    label: 'TikTok',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
      </svg>
    ),
  },
];

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0f] overflow-x-hidden" style={{ fontFamily: 'var(--font-body)' }}>
      {/* Social media links */}
      <div className="absolute top-4 right-4 z-50 flex items-center gap-2">
        {socialLinks.map(({ href, label, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-[#13131a]/80 border border-gray-800 text-gray-400 hover:text-white hover:border-[#7863fe] hover:bg-[#7863fe]/20 transition-all duration-200 backdrop-blur-sm"
          >
            {icon}
          </a>
        ))}
      </div>

      <Hero />
      <Problem />
      <Solution />
      <Dashboard />
      <Benefits />
      <FinalCTA />
    </div>
  );
}
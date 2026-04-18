'use client';
import { motion } from 'framer-motion';
import Link from 'next/link'; 
import Snowfall from '../components/Snowfall';
import ClientLogos from '../components/ClientLogos'; // 1. Import คอมโพเนนต์มาใช้งาน

export default function ContactPage() {
  const contactMethods = [
    {
      name: "LinkedIn",
      label: "Professional Profile",
      handle: "Patcharin Chanaphukdee",
      href: "https://www.linkedin.com/in/patcharin-chanaphukdee-813340128/?locale=th",
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      color: "hover:text-blue-400"
    },
    {
      name: "GitHub",
      label: "Technical Portfolio",
      handle: "Patcharin-Dev",
      href: "https://github.com/yourgithub",
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      color: "hover:text-zinc-400"
    },
    {
      name: "Email",
      label: "Business Inquiry",
      handle: "organ_29@hotmail.com",
      href: "mailto:organ_29@hotmail.com",
      icon: (
        <svg className="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      color: "hover:text-lime-400"
    }
  ];

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#a302a3]">
      <Snowfall />

      {/* Content Section */}
      <div className="max-w-6xl mx-auto relative z-10 px-8 pt-20 pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Side: Big Text */}
          <header>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-8xl md:text-9xl font-black tracking-tighter text-white leading-[0.8]"
            >
              SAY <br />
              <span className="text-lime-400">HELLO.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-12 text-2xl text-zinc-200 font-light max-w-md leading-relaxed"
            >
              Have a project in mind? <br />
              Let’s bridge the gap together.
            </motion.p>
          </header>

          {/* Right Side: Contact List */}
          <div className="flex flex-col gap-6">
            {contactMethods.map((method, idx) => (
              <motion.a
                key={method.name}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + (idx * 0.1) }}
                className={`group relative p-8 rounded-4xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-between transition-all duration-500 hover:bg-white/10 hover:border-lime-400/30 ${method.color}`}
              >
                <div className="flex items-center gap-6">
                  <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors">
                    {method.icon}
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-bold">{method.label}</span>
                    <h3 className="text-2xl font-bold text-white tracking-tight">{method.name}</h3>
                    <p className="text-zinc-500 text-sm">{method.handle}</p>
                  </div>
                </div>
                
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-lime-400 group-hover:bg-lime-400 group-hover:text-black transition-all duration-500">
                  <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7,7 17,7 17,17"/>
                  </svg>
                </div>
              </motion.a>
            ))}

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-10 px-8 py-4 rounded-full border border-white/5 bg-white/5 w-fit flex items-center gap-3 backdrop-blur-md"
            >
              <div className="w-2 h-2 rounded-full bg-lime-400 animate-pulse shadow-[0_0_10px_#a3e635]" />
              <span className="text-xs font-bold tracking-widest text-zinc-300 uppercase">Based in Bangkok, Thailand</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 2. แทรกส่วน ClientLogos ก่อน Footer เพื่อเพิ่ม Social Proof */}
      <div className="relative z-10 py-10">
         <ClientLogos />
      </div>

      {/* 5. Footer Section */}
      <footer className="relative z-10 pt-24 pb-12 border-t border-white/10 bg-black/10 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            
            {/* Brand Section */}
            <div className="col-span-1">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl border-2 border-lime-400 flex items-center justify-center">
                  <span className="text-lime-400 font-bold text-xl">F</span>
                </div>
                <span className="text-4xl font-black tracking-tighter text-white">FAOS</span>
              </div>
              <p className="text-zinc-400 text-xl leading-relaxed">
                Connecting top-tier IT talent with innovative organizations.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-white font-bold mb-8 uppercase tracking-[0.2em] text-sm">Navigation</h4>
              <ul className="space-y-5">
                <li><Link href="/" className="text-zinc-400 hover:text-white text-lg transition-colors">Home</Link></li>
                <li><Link href="/projects" className="text-zinc-400 hover:text-white text-lg transition-colors">Projects</Link></li>
                <li><Link href="/experience" className="text-zinc-400 hover:text-white text-lg transition-colors">Experience</Link></li>
                <li><Link href="/contact" className="text-zinc-400 hover:text-white text-lg transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Follow Me */}
            <div>
              <h4 className="text-white font-bold mb-8 uppercase tracking-[0.2em] text-sm">Follow Me</h4>
              <div className="flex flex-col gap-5">
                <a href="#" className="group flex items-center gap-4 text-zinc-400 hover:text-lime-400 transition-all">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-lime-400 transition-all">
                    <span className="text-[10px] font-bold">LI</span>
                  </div>
                  <span className="text-lg">LinkedIn</span>
                </a>
                <a href="#" className="group flex items-center gap-4 text-zinc-400 hover:text-lime-400 transition-all">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-lime-400 transition-all">
                    <span className="text-[10px] font-bold">GH</span>
                  </div>
                  <span className="text-lg">GitHub</span>
                </a>
              </div>
            </div>

            {/* Get in Touch */}
            <div className="flex flex-col">
              <h4 className="text-white font-bold mb-8 uppercase tracking-[0.2em] text-sm">Get in Touch</h4>
              <div className="mb-8">
                <p className="text-lime-400 text-[11px] font-black uppercase tracking-widest mb-2">Verified Business</p>
                <p className="text-white/80 text-lg leading-snug font-medium">Registered E-Commerce<br />Individual Business</p>
              </div>
              <div className="flex flex-col gap-4">
                <a href="#" className="flex items-center gap-4 px-6 py-4 bg-[#25D366] text-white rounded-2xl font-bold text-lg hover:brightness-110 transition-all w-full">
                   <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                   WhatsApp
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-zinc-500 text-xs uppercase tracking-[0.3em]">
              © 2026 PATCHARIN CHANAPHUKDEE. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
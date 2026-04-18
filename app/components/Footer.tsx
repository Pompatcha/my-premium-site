'use client';
import Link from 'next/link';

export default function Footer() {
  return (
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
              <a href="https://www.linkedin.com/in/patcharin-chanaphukdee-813340128/" target="_blank" className="group flex items-center gap-4 text-zinc-400 hover:text-lime-400 transition-all">
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
              <a href="https://wa.me/yournumber" className="flex items-center gap-4 px-6 py-4 bg-[#25D366] text-white rounded-2xl font-bold text-lg hover:brightness-110 transition-all w-full">
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
  );
}
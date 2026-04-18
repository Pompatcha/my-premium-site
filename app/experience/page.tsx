'use client';
import { motion } from 'framer-motion';
import Snowfall from '../components/Snowfall';
import ClientLogos from '../components/ClientLogos'; // 1. Import คอมโพเนนต์โลโก้
import Footer from '../components/Footer';

export default function ExperiencePage() {
  const experiences = [
    {
      company: "FAOS",
      role: "Digital Procurement & Carbon Analytics",
      period: "2024 - PRESENT",
      desc: "Architecting ESG-focused procurement platforms and automated GHG accounting software with Power BI integration.",
      skills: ["Next.js", "AI/LLM", "Power BI"]
    },
    {
      company: "International Trade Solutions",
      role: "Senior Procurement Specialist",
      period: "2018 - 2024",
      desc: "Mastered strategic sourcing and supplier relationship management across global markets for over a decade.",
      skills: ["Strategic Sourcing", "Compliance", "SAP"]
    },
    {
      company: "Global Logistics Hub",
      role: "Business Development Manager",
      period: "2010 - 2018",
      desc: "Spearheaded international expansion and optimized supply chain operations for large-scale enterprises.",
      skills: ["Business Dev", "Supply Chain", "Contracting"]
    }
  ];

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#a302a3]">
      <Snowfall />

      <div className="max-w-5xl mx-auto relative z-10 px-8 pt-14 pb-20">
        
        {/* Header */}
        <header className="mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-[9rem] font-black tracking-tighter text-white leading-[0.8] uppercase"
          >
            EXPERI<span className="text-lime-400">ENCE</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-300 text-lg md:text-xl mt-3 font-light max-w-2xl leading-tight opacity-90"
          >
            A decade of bridging the gap between <span className="text-white font-medium">Traditional Procurement</span> and <span className="text-lime-400 font-medium">Digital Intelligence</span>.
          </motion.p>
        </header>

        {/* Timeline Section */}
        <div className="relative border-l border-white/10 ml-6 md:ml-12 mt-2">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 ml-12 relative group"
            >
              <div className="absolute -left-15.25 top-2 w-6 h-6 bg-[#a302a3] border-4 border-lime-400 rounded-full shadow-[0_0_20px_rgba(163,230,53,0.6)] group-hover:scale-125 transition-transform duration-300" />
              
              <div className="p-7 rounded-4xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 hover:border-lime-400/30 transition-all duration-500 shadow-2xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                   <div>
                      <span className="text-lime-400 font-black text-[10px] tracking-[0.3em] uppercase">{exp.period}</span>
                      <h3 className="text-2xl md:text-3xl font-bold text-white leading-none mt-1">{exp.role}</h3>
                   </div>
                   <h4 className="text-lg text-zinc-300 font-medium opacity-70">{exp.company}</h4>
                </div>
                
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light italic mb-5">
                  &quot;{exp.desc}&quot;
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map(skill => (
                    <span key={skill} className="px-3 py-0.5 rounded-full bg-white/5 border border-white/5 text-[9px] font-bold text-zinc-300 uppercase tracking-widest">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 2. เพิ่ม ClientLogos ตรงนี้เพื่อให้เห็นหลังจากอ่านประวัติเสร็จ */}
      <div className="relative z-10 mb-20">
        <ClientLogos />
      </div>

      <Footer />
    </main>
  );
}
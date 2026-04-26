"use client";

import Image from 'next/image';
import Snowfall from '../components/Snowfall';
import Footer from '../components/Footer';
import ClientLogos from '../components/ClientLogos';

export default function ProjectsPage() {
  const projects = [
    {
      title: "AI-Powered Recruitment Precision",
      category: "LLM & Predictive Analytics",
      desc: "Advanced AI-driven screening system utilizing RAG to accurately match candidate skills with organizational needs.",
      tags: ["Next.js", "OpenAI", "RAG"],
      color: "from-blue-600/20 to-cyan-500/20"
    },
    {
      title: "End-to-End Procurement Analytics",
      category: "Power BI & Automation",
      desc: "Transforming tens of thousands of raw procurement records into high-precision cost-reduction strategies.",
      tags: ["Power BI", "Power Automate", "SQL"],
      color: "from-purple-600/20 to-pink-500/20"
    },
    {
      title: "Sustainable Procurement & ESG Dashboard",
      category: "Sustainability Analytics",
      desc: "Integrated platform for tracking supplier carbon footprints and ESG performance for global compliance.",
      tags: ["Power BI", "Carbon Tracking", "ESG"],
      color: "from-lime-500/20 to-emerald-500/20"
    },
    {
      title: "Heritage Food website development",
      category: "Web Development",
      desc: "Designed and developed a responsive website for a traditional food brand, focusing on user experience and modern design principles.",
      tags: ["Next.js", "Tailwind CSS", "Figma"],
      color: "from-amber-500/20 to-orange-500/20"
    },
    {
      title: "Procurement Power BI Dashboard",
      category: "Data Analytics",
      desc: "Designed and developed a responsive dashboard for visualizing procurement data and insights.",
      tags: ["Power BI", "Data Visualization", "Procurement"],
      color: "from-amber-500/20 to-orange-500/20"
    },
    {
      title: "Supplier Risk Management Dashboard",
      category: "Data Analytics",
      desc: "Designed and developed a responsive dashboard for visualizing supplier risks and compliance metrics.",
      tags: ["Power BI", "Data Visualization", "Supplier Management"],
      color: "from-amber-500/20 to-orange-500/20"
    },
    {
      title: "E-Commerce Business Dashboard",
      category: "Data Analytics",
      desc: "Designed and developed a high-performance dashboard for visualizing e-commerce sales and partner performance.",
      tags: ["Power BI", "Data Visualization", "E-commerce"],
      color: "from-cyan-500/20 to-blue-500/20"
    }
  ];

  return (
    <main className="min-h-screen relative bg-[#a302a3] overflow-hidden">
      
      <Snowfall />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto relative z-10 px-8 pt-24 pb-32">
        
        {/* Header Section */}
        <header className="mb-24">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-lime-400/30 bg-lime-400/10 backdrop-blur-md">
            <span className="text-[12px] font-bold tracking-[0.3em] text-lime-400 uppercase">
              Portfolio Showcase
            </span>
          </div>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white mb-8 leading-[0.85]">
            My <span className="text-lime-400">Projects</span>
          </h1>
          <p className="text-xl text-zinc-200 max-w-2xl font-light leading-relaxed opacity-80">
            A deep dive into how I bridge Elite Procurement expertise with cutting-edge technology and AI automation.
          </p>
        </header>

        {/* Project Grid - แสดงแถวละ 3 กล่อง (md:grid-cols-3) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {projects.map((project, idx) => (
            <div key={idx} className="group flex flex-col h-full cursor-pointer">
              
              {/* Project Image Container */}
              <div className={`relative aspect-16/10 rounded-[2.5rem] overflow-hidden border border-white/10 ${project.color} backdrop-blur-md mb-8 transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:border-lime-400/50 shadow-2xl`}>
                <Image 
                  src={`/projects/project-${idx}.jpg`}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw" // ปรับให้เหมาะกับ 3 คอลัมน์
                  quality={95}
                  priority={idx === 0}
                  className="object-cover opacity-100 transition-all duration-1000 group-hover:scale-110 'grayscale-[20%]' group-hover:grayscale-0"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="bg-white text-black px-10 py-4 rounded-full font-black uppercase text-[10px] tracking-[0.2em] transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                    Explore Case Study
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="flex flex-col gap-4 px-2 grow">
                <div className="flex items-center gap-3">
                  <div className="h-px w-8 bg-lime-400"></div>
                  <span className="text-lime-400 font-black text-[11px] uppercase tracking-[0.25em]">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-3xl font-bold text-white tracking-tight leading-tight group-hover:text-lime-300 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-zinc-200/70 text-[15px] leading-relaxed mb-6 font-light italic">
                  &quot;{project.desc}&quot;
                </p>
                
                {/* Tags */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-zinc-100 font-bold uppercase tracking-widest backdrop-blur-md group-hover:bg-lime-400/10 group-hover:border-lime-400/20 transition-all">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ClientLogos Section */}
      <div className="pb-20 relative z-10">
        <ClientLogos />
      </div>

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
import { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "SISTEMA HSI",
    category: "Salud Pública / Angular",
    description: "Digitalización de historias clínicas integradas para el Ministerio de Salud.",
    tag: "(01)"
  },
  {
    title: "PORTAL PACIENTE",
    category: "Full Stack / FastAPI",
    description: "Plataforma de autogestión de turnos y visualización de datos médicos.",
    tag: "(02)"
  },
  {
    title: "CLIMA APP",
    category: "Mobile / React Native",
    description: "Visualización dinámica de datos meteorológicos con enfoque en UX.",
    tag: "(03)"
  }
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // EFECTO PAGE TURN: Revelación de abajo hacia arriba pisando la sección anterior
    gsap.fromTo(sectionRef.current, 
      { clipPath: "inset(100% 0% 0% 0%)" }, 
      {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom", 
          end: "top top",
          scrub: true,
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      id="proyectos" 
      // Agregamos relative, z-40 y una sombra para el efecto de hoja física
      className="relative z-40 min-h-screen bg-black text-white py-32 px-6 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
    >
      <div className="mb-20">
        <span className="text-sm uppercase tracking-tighter text-zinc-500">Selección de Proyectos</span>
      </div>

      <div className="flex flex-col gap-40">
        {projects.map((project, index) => (
          <div key={index} className="relative group cursor-pointer">
            <div className="flex justify-between items-end border-b border-zinc-800 pb-10">
              <div>
                <span className="text-xs mb-4 block text-zinc-500">{project.tag}</span>
                <h3 className="text-6xl md:text-8xl font-black leading-none group-hover:italic transition-all">
                  {project.title}
                </h3>
                <p className="text-sm uppercase tracking-widest mt-4 text-zinc-400">{project.category}</p>
              </div>
              <div className="hidden md:block max-w-xs text-right text-zinc-500">
                <p>{project.description}</p>
              </div>
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="absolute -top-20 right-1/4 w-64 h-80 bg-zinc-900 z-[-1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 grayscale overflow-hidden"
            >
              <div className="w-full h-full flex items-center justify-center text-[10px] text-zinc-700">
                [ VISTA_PREVIA_{project.title} ]
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
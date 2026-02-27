import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "SISTEMA HSI",
    category: "Salud Pública / Angular",
    description: "Digitalización de historias clínicas integradas para el Ministerio de Salud.",
    tag: "(01)",
    link: "https://hsi.larioja.gob.ar/auth/login"
  },
  {
    title: "PORTAL PACIENTE",
    category: "Full Stack / FastAPI",
    description: "Plataforma de autogestión de turnos y visualización de datos médicos.",
    tag: "(02)",
    link: "https://portalsalud.larioja.gob.ar/login"
    
  },
  {
    title: "CLIMA APP",
    category: "React Native / Expo",
    description: "Proyecto desarrollado para la práctica y el perfeccionamiento de habilidades en React Native y Expo, utilizando Typescript/Javascript.",
    tag: "(03)",
    link: "https://github.com/RodrigoCba96/ClimaApp-ReactNativeEXPO"
  },
  {
    title: "ADMINISTRADOR DE PERSONAL",
    category: "Angular / Python",
    description: "Un proyecto realizado a fines de control de empleados y alumnos, adaptable a distintas instituciones.",
    tag: "(04)",
    link: "https://management-frontend-chi.vercel.app/"
  },
  {
    title: "PLANIFICADOR DE VIAJES",
    category: "Angular / Python",
    description: "Un proyecto realizado a fines de organizar viajes internacionales con fines turísticos o laborales.",
    tag: "(05)",
    link: "https://viajero-frontend.vercel.app/"
  },
  {
    title: "LABORATORIO DIGITAL - Envio de Casos",
    category: "WordPress / SEO",
    description: "Se creó un sistema de gestión de casos para el Laboratorio Digital.",
    tag: "(06)",
    link: "https://olivesti.bio/contacto-2/"
  }
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
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
      className="relative z-40 min-h-screen bg-[#0a0a0a] text-zinc-100 py-32 px-[5vw] shadow-[0_-20px_50px_rgba(0,0,0,0.8)]"
    >
      <div className="mb-24">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 block mb-4">
          Trabajos Destacados
        </span>
        <h2 className="text-xs uppercase tracking-widest text-zinc-400">
          Selección de Proyectos
        </h2>
      </div>

{/* Grilla */}

     <div className="flex flex-col border-t border-white/10">
        {projects.map((project, index) => (
          <a 
            key={index} 
            href={project.link}
            target="_blank" 
            rel="noopener noreferrer"
            className="group block cursor-pointer border-b border-white/10 py-12 md:py-16 hover:bg-white/[0.02] transition-colors duration-700">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-16">
                <span className="text-xs font-medium text-zinc-600 group-hover:text-zinc-300 transition-colors duration-500">
                  {project.tag}
                </span>
                <div>
                  <h3 className="text-3xl md:text-5xl font-black leading-none tracking-tighter transition-all duration-500 group-hover:italic group-hover:translate-x-4">
                    {project.title}
                  </h3>
                  <p className="text-[10px] uppercase tracking-[0.2em] mt-3 text-zinc-500 group-hover:text-zinc-300 transition-colors duration-500">
                    {project.category}
                  </p>
                </div>
              </div>

              <div className="md:w-[25vw] text-left md:text-right">
                <p className="text-xs md:text-sm text-zinc-500 font-light leading-relaxed group-hover:text-zinc-200 transition-colors duration-500">
                  {project.description}
                </p>
              </div>

            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
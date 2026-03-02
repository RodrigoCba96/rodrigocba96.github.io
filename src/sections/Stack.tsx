import { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  "FRONTEND: ANGULAR & REACT",
  "BACKEND: FASTAPI & SPRING BOOT",
  "MOBILE: REACT NATIVE",
  "DEVOPS: DOCKER & CI/CD"
];

const Stack = () => {
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
      className="relative z-40 min-h-screen bg-[#0a0a0a] text-zinc-100 py-32 px-[5vw] shadow-[0_-20px_50px_rgba(0,0,0,0.8)]"
    >
      
      <div className="mb-24">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 block mb-4">
          Herramientas
        </span>
        <h2 className="text-xs uppercase tracking-widest text-zinc-400">
          Stack Tecnológico
        </h2>
      </div>
      
      <div className="flex flex-col border-t border-white/10">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="overflow-hidden border-b border-white/10 py-8 md:py-10 group cursor-default hover:bg-white/[0.02] transition-colors duration-700"
          >
            <motion.h3 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-xl md:text-3xl font-black leading-none tracking-tighter text-zinc-300 transition-all duration-500 group-hover:italic group-hover:translate-x-4 group-hover:text-white"
            >
              {skill}
            </motion.h3>
          </div>
        ))}
      </div>

      <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
        
        <div className="flex flex-col gap-6">
          <p className="text-sm md:text-base text-zinc-500 font-light leading-relaxed max-w-md">
            Especialista en la construcción de <span className="font-medium text-zinc-200">librerías de componentes reutilizables</span> que optimizan los tiempos de entrega.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:items-end text-left md:text-right">
          <p className="text-sm md:text-base text-zinc-500 font-light leading-relaxed max-w-md">
            Enfoque en la <span className="font-medium text-zinc-200">latencia mínima</span> y arquitecturas escalables para sistemas de salud de alta criticidad.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Stack;
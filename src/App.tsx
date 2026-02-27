import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Lenis from '@studio-freight/lenis';

import Hero from './sections/Hero';
import Experience from './sections/Experience';
import Stack from './sections/Stack';
import Projects from './sections/Projects';
import About from './sections/About';
import './App.css';

// Registrar el plugin de GSAP
gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Animaciones
  useGSAP(() => {
    // --- EFECTO PÁGINA DE LIBRO ---
    ScrollTrigger.create({
      trigger: ".hero-wrapper",
      start: "top top",
      pin: true,
      pinSpacing: false,
    });

    // --- CAMBIO DE COLORES POR SECCIONN ---
    const sections = gsap.utils.toArray<HTMLElement>('.section-wrapper');

    sections.forEach((section) => {
      const bgColor = section.dataset.bg || '#000000';
      const textColor = section.dataset.text || '#ffffff';

      ScrollTrigger.create({
        trigger: section,
        start: "top 50%", 
        end: "bottom 50%",
        onEnter: () => {
          gsap.to(containerRef.current, {
            backgroundColor: bgColor,
            color: textColor,
            duration: 0.6,
            ease: "power2.inOut"
          });
        },
        onEnterBack: () => {
          gsap.to(containerRef.current, {
            backgroundColor: bgColor,
            color: textColor,
            duration: 0.6,
            ease: "power2.inOut"
          });
        }
      });
    });
  }, { scope: containerRef });

  return (
    <main 
      ref={containerRef} 
      className="bg-black text-white antialiased transition-colors duration-500 min-h-screen"
    >
      <div className="section-wrapper hero-wrapper" data-bg="#ffffff" data-text="#000000">
        <Hero />
      </div>
      
      <div className="relative z-30 shadow-[0_-50px_100px_rgba(0,0,0,0.1)]">
        <div className="section-wrapper" data-bg="#ffffff" data-text="#000000">
          <Experience />
        </div>

        <div className="section-wrapper" data-bg="#000000" data-text="#ffffff">
          <Stack />
        </div>

        <div className="section-wrapper" data-bg="#f4f4f4" data-text="#000000">
          <About />
        </div>

        <div className="section-wrapper" data-bg="#000000" data-text="#ffffff">
          <Projects />
        </div>
        
        <footer 
          className="relative flex flex-col px-[5vw] py-24 bg-white text-black section-wrapper z-40" 
          data-bg="#ffffff" 
          data-text="#000000"
        >
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 mb-12 block">
              (04) Contacto
            </span>
            
            <a href="mailto:rodrigocordoba2296@gmail.com" className="group inline-block w-fit">
              <h2 className="text-7xl md:text-[3vw] font-black leading-[0.8] tracking-tighter transition-all duration-500 group-hover:italic group-hover:translate-x-6 group-hover:text-black/70">
                HABLEMOS.
              </h2>
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16 border-t border-black/10 pt-12 mt-16">
            
            <div className="flex flex-col gap-6">
               <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
                 Conectemos
               </span>
               <div className="flex gap-12 text-sm md:text-base font-bold uppercase tracking-widest">
                <a href="https://linkedin.com/in/rodrigocordoba2296/" target="_blank" rel="noreferrer" className="hover:opacity-50 transition-opacity">
                  LinkedIn
                </a>
                <a href="mailto:rodrigocordoba2296@gmail.com" className="hover:opacity-50 transition-opacity">
                  Email
                </a>
              </div>
            </div>

            <div className="flex flex-col md:items-end gap-6 text-left md:text-right">
               <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
                 Ubicación
               </span>
               <p className="text-sm md:text-base font-medium text-black/80 uppercase tracking-widest leading-relaxed">
                 La Rioja, Argentina <br />
                 <span className="text-xs font-light tracking-normal normal-case opacity-60">
                   © {new Date().getFullYear()} Rodrigo Cordoba. Todos los derechos reservados.
                 </span>
               </p>
            </div>

          </div>
        </footer>
      </div>
    </main>
  );
}

export default App;
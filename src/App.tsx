import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Lenis from '@studio-freight/lenis';

// Importación de Secciones
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

  // 1. Scroll Suave con Lenis
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

  // 2. Lógica de Animaciones (Pinning + Colores)
  useGSAP(() => {
    // --- EFECTO PÁGINA DE LIBRO ---
    // Fijamos la sección Hero para que lo demás suba encima
    ScrollTrigger.create({
      trigger: ".hero-wrapper",
      start: "top top",
      pin: true,
      pinSpacing: false,
    });

    // --- CAMBIO DE COLORES POR SECCIÓN ---
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
      {/* Marcamos el Hero con hero-wrapper para el efecto de libro */}
      <div className="section-wrapper hero-wrapper" data-bg="#ffffff" data-text="#000000">
        <Hero />
      </div>
      
      {/* Secciones que tapan al Hero al subir */}
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
          className="h-screen flex flex-col justify-center px-6 bg-white text-black section-wrapper" 
          data-bg="#ffffff" 
          data-text="#000000"
        >
          <span className="text-sm uppercase tracking-tighter">(04) Contacto</span>
          <h2 className="text-display font-black leading-none mt-4 hover:italic transition-all cursor-pointer">
            HABLEMOS.
          </h2>
          <div className="mt-20 flex gap-10 font-bold">
            <a href="https://linkedin.com/in/rodrigocordoba2296/" target="_blank" rel="noreferrer">LINKEDIN</a>
            <a href="mailto:rodrigocordoba2296@gmail.com">EMAIL</a>
          </div>
        </footer>
      </div>
    </main>
  );
}

export default App;
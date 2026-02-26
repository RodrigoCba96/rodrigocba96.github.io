import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    // 1. EFECTO PAGE TURN (Revelación Vertical)
    // Usamos clip-path para que la sección se revele de abajo hacia arriba
    gsap.fromTo(sectionRef.current, 
      { clipPath: "inset(100% 0% 0% 0%)" }, // Empieza oculta abajo
      {
        clipPath: "inset(0% 0% 0% 0%)",      // Se revela completa
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom", 
          end: "top top",
          scrub: true,
        }
      }
    );

    // 2. ANIMACIÓN DE TEXTO (Efecto de aparición suave)
    gsap.from(contentRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    // 3. ASEGURAR TEMA LIGHT (Blanco)
    // Por si el usuario viene de scrollear desde una sección oscura
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top center",
      onEnter: () => {
        gsap.to(":root", {
          "--background": "#ffffff",
          "--foreground": "#000000",
          "--border-color": "rgba(0, 0, 0, 0.1)",
          duration: 0.5
        });
      }
    });

  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen flex items-center px-[5vw] py-24 z-50 shadow-[-20px_0_50px_rgba(0,0,0,0.05)]"
      style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
    >
      <div ref={contentRef} className="max-w-6xl w-full">
        
        {/* Etiqueta de sección estilo editorial */}
        <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 mb-12 block">
          (01) Filosofía & Enfoque
        </span>

        <h2 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter max-w-5xl">
          No me conformo con lo funcional. <br />
          Busco la <span className="italic font-light">excelencia técnica</span> en sistemas que impactan directamente en la vida de las personas.
        </h2>

        {/* Línea divisoria fina que respeta tu index.css */}
        <div className="w-full h-[1px] my-16 bg-current opacity-10" />

        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <p className="text-xl md:text-2xl text-current/70 max-w-2xl leading-relaxed font-light">
            Desde la <span className="font-bold text-current">reducción del 60% en la latencia de APIs</span> hasta la creación de librerías que aceleran el desarrollo, mi enfoque siempre es la escalabilidad y el rendimiento extremo para proyectos críticos como <span className="italic">HSI (Historia de Salud Integrada)</span>.
          </p>
          
          {/* Métricas rápidas al costado */}
          <div className="flex flex-col gap-4 text-right">
            <div className="border-l-2 border-current pl-4">
              <span className="block text-3xl font-black">-60%</span>
              <span className="text-[10px] uppercase font-bold opacity-50 tracking-widest">Latencia API</span>
            </div>
            <div className="border-l-2 border-current pl-4">
              <span className="block text-3xl font-black">+40%</span>
              <span className="text-[10px] uppercase font-bold opacity-50 tracking-widest">Velocidad Dev</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
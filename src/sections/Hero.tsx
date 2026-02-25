import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import reelVideo from '../assets/test.mp4'; 

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const triggerRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const tileTopRef = useRef(null);
  const tileBottomRef = useRef(null);
  const nameRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2,
      }
    });

    // 1. LOS TILES SE DESLIZAN A LA DERECHA (Revelan el video)
    tl.to(tileTopRef.current, { xPercent: 105, ease: "power2.inOut" }, 0);
    tl.to(tileBottomRef.current, { xPercent: 105, ease: "power2.inOut" }, 0.05);

    // 2. EL VIDEO SE EXPANDE (Ocupa la columna izquierda)
    tl.to(videoWrapperRef.current, {
      width: "50vw", height: "100vh", left: "0%", top: "0%", ease: "power2.inOut"
    }, 0);

    // 3. EL NOMBRE SE MUEVE A LA DERECHA (Efecto de "empuje")
    tl.to(nameRef.current, { x: "35%", ease: "none" }, 0);

  }, { scope: triggerRef });

  return (
    <section ref={triggerRef} className="relative h-[400vh] bg-white w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* CAPA INFERIOR: Video y Tiles (z-10) */}
        <div 
          ref={videoWrapperRef}
          className="row-logo absolute z-10 bg-zinc-100 overflow-hidden shadow-2xl transition-all"
          style={{ 
            width: "calc((100% / 10) * 4)", 
            height: "50vh",
            left: "10vw",
            top: "15vh"
          }}
        >
          <video 
            src={reelVideo} 
            autoPlay loop muted playsInline
            className="absolute inset-0 w-full h-full object-cover" 
          />

          {/* Play Reel Text */}
          <div className="absolute top-1/2 left-[15%] -translate-y-1/2 z-30 pointer-events-auto cursor-pointer mix-blend-difference text-white">
             <h4 className="text-[11px] font-black uppercase tracking-widest leading-tight">
               Play Reel <br/> (00:33)
             </h4>
          </div>

          {/* Tiles Blancos (Máscaras) */}
          <div ref={tileTopRef} className="absolute top-0 right-0 w-[70%] h-1/2 bg-white z-40 pointer-events-none" />
          <div ref={tileBottomRef} className="absolute bottom-0 right-0 w-[70%] h-1/2 bg-white z-40 pointer-events-none border-t border-zinc-50" />
        </div>

        {/* CAPA SUPERIOR: Nombre Gigante (z-30) - EL CAMBIO CLAVE */}
        {/* Al estar en z-30, la "R" tapa físicamente al video al inicio */}
        <div className="absolute bottom-[-5vh] left-0 w-full z-30 pointer-events-none">
          <h1 ref={nameRef} className="text-[32vw] font-black tracking-tighter leading-none whitespace-nowrap text-black">
            RODRIGO
          </h1>
        </div>

        {/* INFO DESCRIPTIVA (z-40) */}
        <div className="absolute top-[25vh] right-[8vw] w-[35vw] z-40 text-right">
          <div className="flex justify-end gap-10 text-[9px] font-black uppercase tracking-[0.2em] mb-12 text-zinc-400">
            <p>Full Stack <br /> Developer</p>
            <p>Software <br /> Architect</p>
          </div>
          <h2 className="text-6xl font-medium leading-[0.85] tracking-tighter">
            Digitalizando la salud <br /> pública con <span className="italic">precisión</span>.
          </h2>
        </div>

      </div>
    </section>
  );
};

export default Hero;
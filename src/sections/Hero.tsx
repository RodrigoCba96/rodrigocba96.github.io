import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import reelVideo from '../assets/test.mp4';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const triggerRef = useRef(null);
  const tileTopRef = useRef(null);
  const tileMiddleRef = useRef(null);
  const tileBottomRef = useRef(null);
  const nameRef = useRef(null);
  const infoRef = useRef(null);

  const magneticAreaRef = useRef<HTMLDivElement>(null);
  const magneticTextRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2,
      }
    });

    // Movimiento físico sin alterar los colores
    tl.to([
      tileTopRef.current,
      tileMiddleRef.current,
      tileBottomRef.current,
      nameRef.current
    ], { x: "35vw", ease: "power2.inOut" }, 0);

    tl.to(infoRef.current, { opacity: 0, x: 50, ease: "power2.inOut" }, 0);

  }, { scope: triggerRef });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!magneticAreaRef.current || !magneticTextRef.current) return;
    const rect = magneticAreaRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    gsap.to(magneticTextRef.current, {
      x: (e.clientX - centerX) * 0.3,
      y: (e.clientY - centerY) * 0.3,
      duration: 1,
      ease: "power3.out"
    });
  };

  const handleMouseLeave = () => {
    gsap.to(magneticTextRef.current, { x: 0, y: 0, duration: 1.2, ease: "elastic.out(1, 0.3)" });
  };

  return (
    <section ref={triggerRef} className="relative h-[400vh] bg-white w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-white">

        <div className="absolute top-0 left-0 w-[50vw] h-screen overflow-hidden z-10 bg-zinc-100">
          <video
            src={reelVideo}
            autoPlay loop muted playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div
            ref={magneticAreaRef}
            className="absolute top-0 left-0 w-[70%] h-full z-30 cursor-default flex items-center justify-center"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div ref={magneticTextRef} className="mix-blend-difference text-white pointer-events-none">
              <h4 className="text-[11px] font-black uppercase tracking-widest leading-tight text-center">
                Reproduccion en desarrollo <br /> (00:26)               </h4>
            </div>
          </div>

          <div ref={tileTopRef} className="absolute top-0 right-0 w-[20%] h-[33.3%] bg-white z-20 pointer-events-none" />
          <div ref={tileMiddleRef} className="absolute top-[33.3%] right-0 w-[45%] h-[33.4%] bg-white z-20 pointer-events-none border-t border-zinc-100/50">
            <span className="absolute top-4 left-4 text-[12px] font-black tracking-tighter text-black"></span>
          </div>
          <div ref={tileBottomRef} className="absolute bottom-0 right-0 w-[70%] h-[33.3%] bg-white z-20 pointer-events-none border-t border-zinc-100/50" />
        </div>

        <div className="absolute bottom-[-1vh] left-[16vw] w-full z-20 pointer-events-none">
          <h1 ref={nameRef} className="text-[7vw] font-black tracking-tighter leading-none whitespace-nowrap text-black">
            RODRIGO CORDOBA
          </h1>
        </div>

        <div ref={infoRef} className="absolute top-[25vh] right-[8vw] w-[35vw] z-30 text-right pointer-events-none">
          <div className="flex justify-end gap-10 text-[9px] font-black uppercase tracking-[0.2em] mb-12 text-zinc-400">
            <p>Full Stack <br /> Developer</p>
            <p>Software <br /> Architect</p>
          </div>
          <h2 className="text-6xl font-medium leading-[0.85] tracking-tighter text-black">
            Digitalizando la salud <br /> pública con <span className="italic">precisión</span>.
          </h2>
        </div>

      </div>
    </section>
  );
};

export default Hero;
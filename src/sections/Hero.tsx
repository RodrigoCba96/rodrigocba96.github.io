import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import reelVideo from '../assets/test.mp4';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const triggerRef = useRef(null);
  const wrapperRef = useRef(null);
  const tileTopRef = useRef(null);
  const tileMiddleRef = useRef(null);
  const tileBottomRef = useRef(null);
  const nameRef = useRef(null);
  const infoRef = useRef(null);

  const magneticAreaRef = useRef<HTMLDivElement>(null);
  const magneticTextRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();


    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
          pin: wrapperRef.current,
          onLeave: () => gsap.set(wrapperRef.current, { visibility: "hidden" }),
          onEnterBack: () => gsap.set(wrapperRef.current, { visibility: "visible" }),
        }
      });

      tl.to([
        tileTopRef.current,
        tileMiddleRef.current,
        tileBottomRef.current,
        nameRef.current
      ], { x: "35vw", ease: "power2.inOut", duration: 1 }, 0);

      tl.to(infoRef.current, { opacity: 0, x: 50, ease: "power2.inOut", duration: 1 }, 0);

      tl.to(wrapperRef.current, { opacity: 0, ease: "power2.inOut", duration: 0.2 }, 0.8);
    });

    mm.add("(max-width: 767px)", () => {
      const tlMobile = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
          pin: wrapperRef.current,
          onLeave: () => gsap.set(wrapperRef.current, { visibility: "hidden" }),
          onEnterBack: () => gsap.set(wrapperRef.current, { visibility: "visible" }),
        }
      });

      tlMobile.to(wrapperRef.current, { opacity: 0, scale: 0.95, ease: "power2.inOut", duration: 1 }, 0);
    });

    return () => mm.revert(); 
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
    <section ref={triggerRef} className="relative h-[400vh] w-full z-0 bg-white overflow-hidden">
      
      <div ref={wrapperRef} className="relative h-screen w-full overflow-hidden bg-white flex flex-col md:block pt-16 md:pt-0">

        <div ref={infoRef} className="relative md:absolute md:top-[25vh] md:right-[8vw] md:w-[35vw] z-30 text-left md:text-right pointer-events-none order-1 md:order-none px-6 md:px-0 mb-auto md:mb-0">
          <div className="flex md:justify-end gap-10 text-[9px] font-black uppercase tracking-[0.2em] mb-6 md:mb-12 text-zinc-400">
            <p>Full Stack <br /> Developer</p>
            <p>Software <br /> Architect</p>
          </div>
          <h2 className="text-4xl md:text-6xl font-medium leading-[0.85] tracking-tighter text-black">
            Digitalizando la salud <br /> pública con <span className="italic">precisión</span>.
          </h2>
        </div>

        {/* {mobile} */}
        <div className="relative md:absolute md:bottom-[-1vh] md:left-[16vw] w-full z-20 pointer-events-none order-2 md:order-none px-6 md:px-0 mb-8 md:mb-0">
          <h1 ref={nameRef} className="text-[13vw] md:text-[7vw] font-black tracking-tighter leading-none text-black">
            RODRIGO <br className="block md:hidden"/> CORDOBA
          </h1>
        </div>

        {/* {mobile} */}
        <div className="relative md:absolute top-0 left-0 w-full md:w-[50vw] h-[45vh] md:h-screen overflow-hidden z-10 bg-zinc-100 order-3 md:order-none mt-auto md:mt-0">
          <video
            src={reelVideo}
            autoPlay loop muted playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div
            ref={magneticAreaRef}
            className="absolute top-0 left-0 w-full md:w-[70%] h-full z-30 cursor-default flex items-center justify-center"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div ref={magneticTextRef} className="mix-blend-difference text-white pointer-events-none">
              <h4 className="text-[11px] font-black uppercase tracking-widest leading-tight text-center">
                Reproduccion en desarrollo <br /> (00:26)
              </h4>
            </div>
          </div>

          <div ref={tileTopRef} className="hidden md:block absolute top-0 right-0 w-[20%] h-[33.3%] bg-white z-20 pointer-events-none" />
          <div ref={tileMiddleRef} className="hidden md:block absolute top-[33.3%] right-0 w-[45%] h-[33.4%] bg-white z-20 pointer-events-none border-t border-zinc-100/50">
            <span className="absolute top-4 left-4 text-[12px] font-black tracking-tighter text-black"></span>
          </div>
          <div ref={tileBottomRef} className="hidden md:block absolute bottom-0 right-0 w-[70%] h-[33.3%] bg-white z-20 pointer-events-none border-t border-zinc-100/50" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-end p-6 overflow-hidden bg-black text-white">
      {/* Contenedor de Video (Referencia 00:00 del video) */}
      <div className="absolute top-10 left-6 w-72 h-96 bg-zinc-800 overflow-hidden grayscale">
        <div className="absolute inset-0 flex items-center justify-center text-xs text-zinc-500 text-center px-4">
          {/* Aquí podrías poner un video de tu Renault Sandero o de HSI */}
          [ TU REEL DE PROYECTOS ]
        </div>
      </div>

      <div className="relative z-10 mb-10 self-end max-w-lg text-right">
        <p className="text-sm uppercase tracking-widest mb-4">Full Stack Developer</p>
        <h2 className="text-2xl leading-tight">
          Especialista en modernizar sistemas de salud y optimizar infraestructuras digitales.
        </h2>
      </div>

      {/* El efecto FLOW del video (00:01) */}
      <motion.h1 
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-huge font-black leading-none -mb-8 select-none"
      >
        RODRIGO
      </motion.h1>
    </section>
  );
};

export default Hero;
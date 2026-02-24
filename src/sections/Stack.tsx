import { motion } from 'framer-motion';

const skills = [
  "FRONTEND: ANGULAR & REACT",
  "BACKEND: FASTAPI & SPRING BOOT",
  "MOBILE: REACT NATIVE",
  "DEVOPS: DOCKER & CI/CD"
];

const Stack = () => {
  return (
    <section className="min-h-screen bg-black text-white py-32 px-6 overflow-hidden">
      <span className="text-sm uppercase tracking-tighter text-zinc-500">(03) Stack Tecnológico</span>
      
      <div className="mt-20 flex flex-col gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="overflow-hidden border-b border-zinc-800 pb-4">
            <motion.h3 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-black leading-none hover:text-zinc-400 transition-colors"
            >
              {skill}
            </motion.h3>
          </div>
        ))}
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        <p className="text-zinc-400 max-w-md">
          Especialista en la construcción de **librerías de componentes reutilizables** que optimizan los tiempos de entrega[cite: 32].
        </p>
        <p className="text-zinc-400 max-w-md">
          Enfoque en la **latencia mínima** y arquitecturas escalables para sistemas de salud de alta criticidad[cite: 33].
        </p>
      </div>
    </section>
  );
};

export default Stack;
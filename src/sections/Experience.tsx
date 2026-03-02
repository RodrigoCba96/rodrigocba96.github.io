
const Experience = () => {
  return (
    <section className="min-h-screen bg-white text-black py-20 px-6 flex flex-col justify-center">
      <div className="mb-20">
        <span className="text-sm uppercase tracking-tighter">(02) Experiencia & Resultados</span>
        <h2 className="text-display font-black leading-none mt-4">
          INGENIERÍA <br /> CON IMPACTO.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Velocidad */}
        <div className="border-t-2 border-black pt-8">
          <h3 className="text-huge font-black leading-none">+40%</h3>
          <p className="text-xl font-bold mt-4">Aceleración del Ciclo de Desarrollo</p>
          <p className="mt-2 text-zinc-600 max-w-sm">
            Optimización de flujos de trabajo en el **Proyecto de Historia Clínica Digital** mediante la creación de librerías de componentes reutilizables[cite: 4, 32].
          </p>
        </div>

        {/* Latenccia */}
        <div className="border-t-2 border-black pt-8">
          <h3 className="text-huge font-black leading-none">-60%</h3>
          <p className="text-xl font-bold mt-4">Eficiencia en Integración de Datos</p>
          <p className="mt-2 text-zinc-600 max-w-sm">
            Reducción drástica de la latencia en el **Portal del Paciente**, mejorando la comunicación entre APIs y Front-end[cite: 9, 33].
          </p>
        </div>
      </div>

      {/* Frase de cierre de sección */}
      <div className="mt-32 self-end text-right max-w-2xl">
        <p className="text-3xl leading-tight">
          Especializado en transformar sistemas complejos en herramientas ágiles y seguras para el sector salud y proyectos independientes.
        </p>
      </div>
    </section>
  );
};

export default Experience;
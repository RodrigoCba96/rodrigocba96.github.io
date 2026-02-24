const About = () => {
  return (
    <section className="min-h-screen bg-white text-black flex items-center p-6">
      <div className="max-w-4xl">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tighter">
          No me conformo con lo funcional. <br />
          Busco la <span className="italic">excelencia técnica</span> en sistemas que impactan directamente en la vida de las personas. 
        </h2>
        <p className="mt-10 text-xl text-zinc-600 max-w-2xl">
          Desde la reducción del 60% en la latencia de APIs hasta la creación de librerías que aceleran el desarrollo, mi enfoque siempre es la escalabilidad y el rendimiento extremo.
        </p>
      </div>
    </section>
  );
};

export default About;
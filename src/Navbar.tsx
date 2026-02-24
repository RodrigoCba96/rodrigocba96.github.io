const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-6 mix-blend-difference text-white">
      <div className="font-black text-xl tracking-tighter">RC.</div>
      <div className="flex gap-8 text-xs uppercase tracking-widest font-bold">
        <a href="#proyectos" className="hover:line-through">Proyectos</a>
        <a href="#experiencia" className="hover:line-through">Experiencia</a>
        <a href="#contacto" className="hover:line-through">Contacto</a>
      </div>
    </nav>
  );
};

export default Navbar;
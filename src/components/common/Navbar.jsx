export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-900/70 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo / Name */}
        <h1 className="text-2xl font-extrabold text-indigo-400">
          Aditya Yadav
        </h1>

        {/* Links */}
        <div className="flex gap-8 text-lg text-white">
          {["About", "Projects", "Contact"].map((item, idx) => (
            <a
              key={idx}
              href={`#${item.toLowerCase()}`}
              className="relative group transition duration-300"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}



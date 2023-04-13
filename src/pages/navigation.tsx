import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="flex justify-between items-center w-full mt-6">
      <span className="text-blue-600 text-2xl font-bold">Vinicius</span>
      <nav className="flex sm:justify-center space-x-4">
        {[
          ["Principal", "#home"],
          ["Sobre", "#about"],
          ["Técnologias", "#technology"],
        ].map(([title, url]) => (
          <Link
            to={url}
            className="text-sm tracking-widest uppercase rounded-lg px-3 py-2 text-zinc-900 font-bold hover:text-blue-600 transition"
          >
            {title}
          </Link>
        ))}
      </nav>
    </div>
  );
}

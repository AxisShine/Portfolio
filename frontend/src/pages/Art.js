import artProjects from '../content/ArtProjects';

export default function Art() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-6 py-12">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center text-pink-300 font-heading drop-shadow-md">
          Art Portfolio
        </h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {artProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl hover:scale-105 transition-transform"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-md mb-4 object-cover h-72 w-full"
                />
              )}
              {project.video && (
                <video
                  src={project.video}
                  controls
                  className="rounded-md mb-4 object-cover h-48 w-full"
                />
              )}
              <h2 className="text-xl font-semibold text-pink-200 mb-2">{project.title}</h2>
              <p className="text-blue-100 text-sm mb-3">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 underline hover:text-pink-400 text-sm"
                >
                  View Project ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
export default function Sailing() {
  const sailingStories = [
    {
      title: "Brigs Youth Sail Training ~ Pathfinder and Playfair",
      description: "Crewed aboard Pathfinder and Playfair as a Senior Watch Officer. Sailed the Great Lakes in Canada.",
      image: "/sailing/brigs.jpg",
      link: "https://brigs-youth-sail-training",
    },
    {
      title: "ATYLA",
      description: "2 weeks as a trainee on board ATYLA thanks to their international scholarship program. Sailed along the coast of Spain and Portugal.",
      image: "/sailing/atyla.jpg",
    },
    {
      title: "Windeward Bound",
      description: "Crewed on board ATYLA for 7 months as a senior Deckhand and White Watch Leader. Sailed along the Southen coast of Tasmania",
      image: "/sailing/windeward_bound.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#00111c] via-[#072b40] to-[#0d1e2d] text-white px-4 py-12">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-heading text-blue-200 font-bold mb-12 text-center drop-shadow-md">
          Sailing Experience
        </h1>
        <div className="space-y-10">
          {sailingStories.map((story, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-400/30 transition-shadow"
            >
              {story.image && (
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full object-cover h-64 sm:h-80 md:h-96"
                />
              )}
              {story.video && (
                <video
                  src={story.video}
                  controls
                  className="w-full object-cover h-64 sm:h-80 md:h-96"
                />
              )}
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-sky-300 mb-2">{story.title}</h2>
                <p className="text-blue-100 text-base leading-relaxed mb-4">
                  {story.description}
                </p>
                {story.link && (
                  <a
                    href={story.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-300 underline hover:text-sky-400 text-sm"
                  >
                    Read More ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function Sailing() {
  const sailingStories = [
    {
      title: "Brigs Youth Sail Training ~ Pathfinder and Playfair",
      role: "Senior Watch Officer",
      date: "June 2019 - May 2024",
      description: "Crewed aboard Pathfinder and Playfair as a Senior Watch Officer. Sailed the Great Lakes in Canada.",
      image: "sailing/brigs.jfif",
      link: "https://www.brigs.ca/",
      video: "https://www.youtube.com/watch?v=HOxWcEFsa7Y",
    },
    {
      title: "ATYLA",
      role: "Trainee",
      date: "August - September 2021",
      description: "2 weeks as a trainee on board ATYLA thanks to their international scholarship program. Sailed along the coast of Spain and Portugal.",
      image: "sailing/atyla.jpg",
      link: "https://atyla.org/",
    },
    {
      title: "Windeward Bound",
      role: "Senior Deckhand and White Watch Leader",
      date: "Jan 2026 - August 2026",
      description: "Crewed on board ATYLA for 7 months as a senior Deckhand and White Watch Leader. Sailed along the Southen coast of Tasmania",
      image: "sailing/windy.webp",
      link: "https://www.windewardbound.com.au/",
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
              <div className="grid md:grid-cols-2 gap-6">
                <div className="grid grid-cols-2 gap-4">
                  {story.image && (
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full aspect-video object-cover rounded-lg"
                    />
                  )}

                  {story.video && (
                    <iframe
                      src={`https://www.youtube.com/embed/${story.video.split("v=")[1]}`}
                      title={story.title}
                      className="w-full aspect-video rounded-lg"
                      allowFullScreen
                    />
                  )}
                </div>
                <div className="p-6 flex flex-col justify-center">
                <h2 className="text-2xl font-semibold text-sky-300 mb-2">{story.title}</h2>
                <h2 className="text-1xl font-semibold text-blue-200 mb-2">
                  {story.role}
                </h2>
                <h2 className="text-1xl font-semibold text-blue-100 mb-2">
                  {story.date}
                </h2>
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
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

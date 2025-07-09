export default function Sailing() {
  const sailingStories = [
    {
      title: "Racing the 8-Metre Nationals",
      description: "Crewed aboard *Norway's Challenge* in a weeklong regatta on Lake Ontario. I handled spinnaker trim in high wind conditions — a challenging and exhilarating experience.",
      image: "/sailing/8m_race.jpg",
      link: "https://your-portfolio-site.com/8m-nationals",
    },
    {
      title: "Overnight Crossing to Niagara",
      description: "Planned and captained a solo overnight trip from Toronto to Niagara-on-the-Lake. Navigated through changing wind patterns, maintained logbook, and tracked position using charts and compass.",
      image: "/sailing/niagara_crossing.jpg",
    },
    {
      title: "Sailing Club Executive Work",
      description: "As VP of Operations at UofT Sailing, I organized fleet maintenance and training sessions. Developed onboarding documents and led safety briefings for novice sailors.",
      video: "/sailing/club_footage.mp4",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#00111c] via-[#072b40] to-[#0d1e2d] text-white px-4 py-12">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-heading text-blue-200 font-bold mb-12 text-center drop-shadow-md">
          Sailing Logs & Leadership
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

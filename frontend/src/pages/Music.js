export default function Music() {
  const musicProjects = [
    {
      title: "Take the Stand OST",
      description: "Original soundtrack for my narrative game. Features piano, synth, and vocal layering to match emotional beats in the story.",
      audio: "/music/take_the_stand_theme.mp3",
      link: "https://jg-z.itch.io/take-the-stand",
    },
    {
      title: "Sea Shanty Covers",
      description: "A personal recording project reimagining old sailing songs with layered harmonies and modern acoustic twists.",
      video: "/music/shanty_demo.mp4",
    },
    {
      title: "UofT Jazz Ensemble",
      description: "Sang alto and performed student arrangements at university events and recitals. Developed ensemble dynamics and improv comfort.",
      image: "/music/ensemble.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1b0032] via-[#3c165c] to-[#180021] text-white px-6 py-12">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-heading font-bold text-pink-300 mb-10 text-center drop-shadow-md">
          Music & Sound
        </h1>
        <div className="grid gap-8 md:grid-cols-2">
          {musicProjects.map((item, idx) => (
            <div
              key={idx}
              className="backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-xl shadow-md hover:shadow-pink-500/30 transition-shadow"
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              )}
              {item.video && (
                <video
                  src={item.video}
                  controls
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              )}
              {item.audio && (
                <audio
                  controls
                  src={item.audio}
                  className="w-full mb-4"
                />
              )}
              <h2 className="text-2xl font-semibold text-pink-200 mb-1">{item.title}</h2>
              <p className="text-blue-100 mb-2">{item.description}</p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-300 underline hover:text-pink-400 text-sm"
                >
                  Listen / View ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
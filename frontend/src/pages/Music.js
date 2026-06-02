export default function Music() {
  const musicProjects = [
    {
      title: "Candy Rush",
      description: "Original Song",
      audio: "/music/candy_rush.m4a",
      image: "/art/candy_rush.png",
      link: "https://jg-z.itch.io/take-the-stand",
    },
    {
      title: "Call my name",
      description: "Original Song",
      audio: "/music/call_my_name.mp4",
      image: "/music/call_my_name_cover.png",
    },
    {
      title: "New Resonance",
      description: "Performed with New Resonance at the University of Toronto for 4 years, sang Soprano.",
      video: "/music/new_res.mp4",
      link: "https://youtube.com/New_College_Resonance",
    },
    {
      title: "Toronto Children's Chorus",
      description: "Performed with Toronto Children's Chorus for 10 years.",
      video: "music/ttc.mp4",
      link: "https://ttc.com"
    }
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
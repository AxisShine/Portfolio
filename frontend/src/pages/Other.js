const miscProjects = [
  {
    title: 'LED Light Show',
    description: 'An Arduino-powered LED installation that reacts to music.',
    image: 'https://placekitten.com/300/200',
  },
  {
    title: 'Spontaneous Poetry Generator',
    description: 'A chaotic text generator that assembles found words into poetry.',
    image: 'https://placekitten.com/301/200',
  },
  {
    title: 'Urban Foraging App',
    description: 'Helps users identify edible plants in their local area.',
    image: 'https://placekitten.com/302/200',
  },
  {
    title: 'Soundscape Maker',
    description: 'Layer and manipulate field recordings to make ambient compositions.',
    image: 'https://placekitten.com/303/200',
  },
];

export default function MiscPage() {
  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-br from-yellow-300 via-pink-300 to-purple-400 text-gray-900 font-sans overflow-x-hidden">
      <h1 className="text-center text-5xl font-bold drop-shadow-lg mb-10">Miscellaneous Magic</h1>

      <div className="grid gap-6 grid-cols-2 md:grid-cols-6 auto-rows-[200px]">
        {miscProjects.map((project, i) => (
          <div
            key={project.title}
            className={`bg-white shadow-xl p-4 overflow-hidden rounded-xl transition transform hover:scale-105
              ${i % 4 === 0 ? 'col-span-2 row-span-2' : i % 3 === 0 ? 'col-span-2 row-span-1' : 'col-span-1 row-span-1'}`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-32 object-cover rounded-md mb-2"
            />
            <h2 className="text-xl font-semibold mb-1">{project.title}</h2>
            <p className="text-gray-700 text-sm leading-snug">{project.description}</p>
          </div>
        ))}
      </div>

      <p className="mt-16 text-center text-md text-white/70 italic">Because not everything fits into a box 📦</p>
    </div>
  );
}

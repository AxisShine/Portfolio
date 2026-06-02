const miscProjects = [
  {
    title: 'UTRA ART',
    description: 'University of Toronto Autonomous Rover Team, mechanical team member for 2 years.',
    image: '/other/ART1.png',
  },
  {
    title: 'UTRA Hacks',
    description: 'Robotics Hackathon hosted by University of Toronto Robotics Association, participated twice building a small autonomous rover.',
    image: '/other/UTRAhacks3.png',
    video: '/other/UTRAhacks4.mov',
  },
  {
    title: 'Costuming',
    description: 'Homemade Halloween Costumes and performance costumes.',
    image: '/other/ernie_cosplay3.jpeg',
  },
  {
    title: 'Writing',
    description: 'Some writing I have done.',
  },
];

export default function MiscPage() {
  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-br from-yellow-300 via-pink-300 to-purple-400 text-gray-900 font-sans overflow-x-hidden">
      <h1 className="text-center text-5xl font-bold drop-shadow-lg mb-10">More Fun!</h1>

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

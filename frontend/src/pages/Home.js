export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white font-sans px-6 py-10">
      
      {/* Hero */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h1 className="text-5xl md:text-6xl font-heading font-bold text-pink-400 drop-shadow-md mb-4">
          Alice Sedgwick
        </h1>
        <p className="text-lg md:text-xl text-blue-200">
          Programmer • Artist • Sailor • Musician<br />
          CS Specialist @ UofT (Class of 2026)
        </p>
      </section>

      {/* About Me */}
      <section className="max-w-4xl mx-auto mb-12 backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-heading text-purple-300 mb-4 border-b border-purple-500 inline-block">
          About Me
        </h2>
        <p className="text-base md:text-lg text-blue-100 leading-relaxed">
          I'm a passionate developer and creative problem solver with experience in building drone simulation software,
          leading sailing crews on Lake Ontario, and designing for both web and print. I blend technical skill and artistic expression
          into everything I do — whether it's coding, sailing, or singing.
        </p>
      </section>

      {/* Skills */}
      <section className="max-w-4xl mx-auto mb-12 backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-heading text-pink-300 mb-4 border-b border-pink-500 inline-block">
          Skills
        </h2>
        <ul className="grid md:grid-cols-3 gap-3 text-base md:text-lg text-blue-100 list-disc list-inside">
          <li>Python</li>
          <li>Java</li>
          <li>React</li>
          <li>Django</li>
          <li>Gazebo / ArduPilot</li>
          <li>Figma & Design</li>
          <li>Git & GitHub</li>
          <li>REST APIs</li>
          <li>HTML, CSS, JS</li>
        </ul>
      </section>

      {/* Work Navigation */}
      <section className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 text-center mb-20">
        {[
          { name: 'Coding', href: '/coding', color: 'from-purple-500 to-pink-500' },
          { name: 'Art', href: '/art', color: 'from-pink-500 to-blue-500' },
          { name: 'Sailing', href: '/sailing', color: 'from-blue-500 to-purple-500' },
          { name: 'Music', href: '/music', color: 'from-indigo-400 to-pink-400' },
          { name: 'Other', href: '/other', color: 'from-purple-400 to-indigo-600' },
        ].map(({ name, href, color }) => (
          <a
            key={name}
            href={href}
            className={`rounded-xl p-6 bg-gradient-to-tr ${color} hover:scale-105 transition-transform shadow-xl text-white font-semibold`}
          >
            <h3 className="text-xl">{name}</h3>
          </a>
        ))}
      </section>

      {/* Contact */}
      <footer className="text-center text-sm text-blue-300 space-y-2">
        <p>📍 Toronto, ON | 📧 alicejsedgwick2004@gmail.com</p>
        <p>
          <a href="https://github.com/AxisShine" className="underline hover:text-pink-400">GitHub</a> ·
          <a href="https://www.linkedin.com/in/alice-sedgwick-2a1aa0286/" className="underline hover:text-purple-300"> LinkedIn</a> ·
          <a href="https://jg-z.itch.io/take-the-stand" className="underline hover:text-blue-300"> Itch.io</a>
        </p>
      </footer>
    </div>
  );
}
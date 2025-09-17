import { useState } from 'react';

const codingProjects = [
  {
    name: 'Spiri SDK',
    description: 'A software development kit for users writing code for Spiri drones.',
    link: 'https://github.com/spiri-robotics/spiri_development_kit',
    image: '/coding/sdk_image.png',
  },
  {
    name: 'Portfolio Website',
    description: 'This site! Built using React, Tailwind CSS, and deployed with Vercel. Includes sections for art, music, sailing, and coding.',
    link: 'react.com/portfolio',
    image: '/coding/portfolio_site.png',
  },
  {
    name: 'Take the Stand',
    description: 'A Surealist horror game developed using Unity.',
    link: 'https://jg-z.itch.io/take-the-stand',
    image: '/coding/take_the_stand.png',
  },
  {
    name: 'Just a Job App',
    description: 'A web application for job application tracking developed using Python, Tailwing and Docker.', 
    link: 'https://github.com/just-a-job-app/jobseeker-analytics',
    image: '/coding/jaja.png'
  }
];

export default function Coding() {
  const [activeTab, setActiveTab] = useState(0);
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f1c] via-[#1c2541] to-[#0b132b] text-white flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white/5 border-r border-white/10 p-4 space-y-4">
        <h2 className="text-xl font-heading text-blue-300 mb-4">Projects</h2>
        {codingProjects.map((project, index) => (
          <div key={index}>
            <button
              onClick={() => setActiveTab(index)}
              className={`w-full text-left px-3 py-2 rounded-md transition hover:bg-blue-500/20 ${
                activeTab === index ? 'bg-blue-500/30 text-blue-200' : 'text-white'
              }`}
            >
              {project.name}
            </button>
            <button
              onClick={() => setExpanded(expanded === index ? null : index)}
              className="text-xs text-blue-300 ml-3 hover:underline"
            >
              {expanded === index ? 'Hide description' : 'Show description'}
            </button>
            {expanded === index && (
              <p className="text-sm text-blue-100 mt-1 px-3">{project.description}</p>
            )}
          </div>
        ))}
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-pink-300 mb-6">
          {codingProjects[activeTab].name}
        </h1>
        <p className="text-lg text-blue-100 mb-4">
          {codingProjects[activeTab].description}
        </p>
        <img
          src={codingProjects[activeTab].image}
          alt={codingProjects[activeTab].name}
          className="max-w-2xl w-full rounded-md shadow-xl border border-white/10"
        />
      </main>
    </div>
  );
} 

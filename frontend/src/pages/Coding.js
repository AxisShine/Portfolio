import { useState } from 'react';

const codingProjects = [
  {
    name: 'Drone Simulator',
    description: 'A custom drone simulator using Gazebo and ArduPilot with autonomous pathfinding and gimbal control.',
    image: '/coding/drone_sim.png',
  },
  {
    name: 'Portfolio Website',
    description: 'This site! Built using React, Tailwind CSS, and deployed with Vercel. Includes sections for art, music, sailing, and coding.',
    image: '/coding/portfolio_site.png',
  },
  {
    name: 'API Visualizer',
    description: 'A Django + React webapp to visualize REST API requests/responses for educational purposes.',
    image: '/coding/api_tool.png',
  },
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

import React, { useState } from 'react';
import portfolioData from '../data/portfolioData.js';

export default function WorksSection() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'UI/UX', 'Web design', 'Vibe coding'];

  const projectImages = {
    ikea: '/assets/ikea_laptop_mockup.png',
    nosmoking: '/assets/nosmoking_campaign_poster.png',
    webarchive: '/assets/web_archive_preview.png',
  };

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(filter));

  return (
    <section id="works" className="py-20 md:py-32 figma-container space-y-12">
      {/* Section Header & Subtitle */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-gray-200">
        <div className="space-y-4">
          <span className="text-sm font-semibold font-funnel text-accent-purple uppercase tracking-wider block">
            Works
          </span>
          <h2 className="figma-title-44 text-4xl md:text-5xl font-semibold text-text-main">
            Featured projects
          </h2>
          <p className="text-base text-text-mid-gray font-pretendard max-w-xl">
            Explore a selection of projects blending creativity with practical design
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`figma-tag-badge font-semibold transition-all cursor-pointer ${
                filter === cat
                  ? 'bg-bg-dark text-white shadow-xs'
                  : 'bg-white text-text-mid-gray hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div 
            key={project.id}
            className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xs flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
          >
            {/* Project Media Thumbnail Photo / Video Poster */}
            <div className="relative h-60 overflow-hidden bg-gray-100">
              <img 
                src={projectImages[project.id]} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => e.target.style.display = 'none'}
              />
              {project.type === 'VIDEO' && (
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <span className="w-12 h-12 rounded-full bg-accent-lime text-black flex items-center justify-center font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                    ▶
                  </span>
                </div>
              )}
              <span className="absolute top-4 left-4 text-xs font-bold tracking-wider uppercase px-3.5 py-1 bg-white/90 backdrop-blur-md text-accent-purple rounded-full font-funnel border border-purple-100 shadow-xs">
                {project.type}
              </span>
            </div>

            {/* Card Content */}
            <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <h3 className="figma-title-30 text-xl md:text-2xl font-bold text-text-main leading-snug group-hover:text-accent-purple transition-colors">
                  {project.title}
                </h3>

                {/* Action Links */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target={link.url.startsWith('http') ? '_blank' : '_self'}
                      rel="noreferrer"
                      className="inline-flex items-center text-sm font-bold font-funnel underline text-text-main hover:text-accent-purple transition-colors"
                    >
                      {link.label}
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              {/* Tech Tag Badges */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-100">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="figma-tag-badge bg-bg-secondary text-text-mid-gray text-xs border border-gray-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

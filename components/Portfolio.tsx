
import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../constants';
import { EventType } from '../types';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<EventType | 'All'>('All');

  const filteredItems = filter === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.type === filter);

  const categories: (EventType | 'All')[] = ['All', 'Wedding', 'Anniversary', 'Birthday', 'Reunion', 'Baptism', 'Memorial'];

  return (
    <section id="portfolio" className="py-24 bg-seashell">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-serif text-space-indigo mb-6">Work Record</h2>
            <p className="text-dusty-grape leading-relaxed">
              A collection of moments we've meticulously designed and executed across the globe. 
              Each frame tells a story of refined detail.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 text-xs tracking-widest font-semibold text-dusty-grape">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`pb-1 transition-all border-b-2 ${
                  filter === cat ? 'border-space-indigo text-space-indigo' : 'border-transparent text-lilac-ash hover:text-dusty-grape'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 animate-fade-in">
          {filteredItems.map((item) => (
            <div key={item.id} className="masonry-item group relative overflow-hidden cursor-pointer bg-dusty-grape rounded-refined shadow-soft hover:shadow-soft-lg transition-all duration-300">
              <img 
                src={item.url} 
                alt={item.type} 
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0 rounded-refined" 
              />
              <div className="absolute inset-0 bg-space-indigo/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white rounded-refined">
                <p className="text-xs tracking-[0.3em] uppercase mb-2 text-almond-silk">{item.date}</p>
                <h3 className="text-2xl font-serif mb-1">{item.type}</h3>
                <p className="text-sm font-light italic text-seashell/90">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

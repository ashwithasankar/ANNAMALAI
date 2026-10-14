/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Compass, ShieldCheck, Star, Layers, MapPin } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData.ts';

interface HeroSectionProps {
  onNavigate: (href: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Subtle 3D tilt coordinates on mousemove for desktop
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 sm:py-28 arch-grid-pattern transition-colors duration-300 bg-[var(--bg-primary)]"
      style={{ perspective: '1200px' }}
    >
      {/* Deep Maroon & Charcoal Ambient Lighting Gradients */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] sm:h-[700px] rounded-full pointer-events-none blur-[140px] opacity-25 dark:opacity-40 transition-all duration-700"
        style={{
          background: 'radial-gradient(circle, #4B1428 0%, rgba(36, 33, 36, 0.4) 60%, transparent 100%)',
          transform: `translate(-50%, -50%) translate3d(${mousePos.x * 30}px, ${mousePos.y * 30}px, 0)`
        }}
        aria-hidden="true"
      />

      {/* Subtle Architectural Corner Coordinates / Blueprint Accents */}
      <div className="absolute top-24 left-6 sm:left-12 pointer-events-none hidden md:flex items-center gap-2 text-[10px] tracking-[0.25em] font-mono text-[var(--text-tertiary)] opacity-60">
        <Compass className="w-3.5 h-3.5 text-[#4B1428]" />
        <span>PATTUKKOTTAI // 10.428° N, 79.317° E</span>
      </div>
      <div className="absolute bottom-8 right-6 sm:right-12 pointer-events-none hidden md:flex items-center gap-2 text-[10px] tracking-[0.25em] font-mono text-[var(--text-tertiary)] opacity-60">
        <Layers className="w-3.5 h-3.5 text-[#4B1428]" />
        <span>STRUCTURAL DRAFTING // ELEVATION 1:100</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Brand & Editorial Headline (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-left space-y-6 sm:space-y-8"
          >
            {/* Verified Credentials Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xs border border-[var(--border-color)] bg-[var(--bg-secondary)]/90 backdrop-blur-sm text-[var(--text-secondary)] shadow-sm"
            >
              <div className="w-2 h-2 rounded-full bg-[#4B1428] animate-pulse" />
              <span className="text-[11px] font-mono tracking-wider uppercase font-semibold text-[var(--text-primary)]">
                Er AG. Murugesan
              </span>
              <span className="text-[11px] text-[var(--text-tertiary)]">•</span>
              <span className="text-[11px] tracking-wide uppercase text-[var(--text-tertiary)]">
                Building Designer
              </span>
            </motion.div>

            {/* Main Brand Title & Headline */}
            <div className="space-y-3">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="font-display text-xs sm:text-sm tracking-[0.3em] uppercase text-[#4B1428] dark:text-[#E8A5BC] font-semibold"
              >
                Annamalai Construction
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.7 }}
                className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.12] text-[var(--text-primary)]"
              >
                Crafting Enduring Spaces with{' '}
                <span className="italic font-serif-luxury text-[#4B1428] dark:text-[#F5F0E8] underline decoration-[#4B1428]/40 decoration-1 underline-offset-8">
                  Architectural
                </span>{' '}
                Precision.
              </motion.h1>
            </div>

            {/* Subtitle Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl font-normal"
            >
              Thoughtful residential planning, structural design, and construction consultation rooted in Pattukkottai, Tamil Nadu. Translating your family vision into durable, climate-responsive structures.
            </motion.p>

            {/* Call To Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={() => onNavigate('#contact')}
                className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-[#4B1428] hover:bg-[#631C37] text-[#F5F0E8] font-display text-xs tracking-widest uppercase rounded-xs shadow-lg transition-all duration-300 hover:shadow-[#4B1428]/40 hover:-translate-y-0.5"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('#projects')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 border border-[var(--border-color)] hover:border-[#4B1428] bg-[var(--bg-secondary)] hover:bg-[#4B1428]/15 text-[var(--text-primary)] font-display text-xs tracking-widest uppercase rounded-xs transition-all duration-300"
              >
                <span>Explore Our Work</span>
              </button>
            </motion.div>

            {/* Trust Highlights Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="pt-4 border-t border-[var(--border-color)] flex flex-wrap items-center gap-6 sm:gap-8 text-xs text-[var(--text-secondary)]"
            >
              <div className="flex items-center gap-2">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-[var(--text-primary)]">5.0 Star Rating</span>
                <span className="text-[var(--text-tertiary)]">({COMPANY_DETAILS.reviewCount} Reviews)</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#4B1428]" />
                <span>Pattukkottai Central</span>
              </div>

              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#4B1428]" />
                <span>Verified Business</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Layered 3D Parallax Architectural Showcase (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* 3D Depth Card Container with Mouse Parallax and Mobile Breathing Animation */}
            <div
              className="relative w-full aspect-[4/5] sm:aspect-[3/4] rounded-sm p-3 sm:p-4 bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-2xl transition-transform duration-200 ease-out"
              style={{
                transform: `rotateY(${mousePos.x * 12}deg) rotateX(${-mousePos.y * 12}deg)`,
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Outer Architectural Frame Corner Markers */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#4B1428]" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#4B1428]" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#4B1428]" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#4B1428]" />

              {/* Main Image with Depth Translation */}
              <div
                className="relative w-full h-full overflow-hidden rounded-xs bg-[#242124]"
                style={{ transform: 'translateZ(20px)' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                  alt="Annamalai Construction - Architectural Design Concept"
                  className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05] hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />

                {/* Scrim Overlay for Contrast */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#160F13] via-transparent to-black/25 opacity-85"
                  aria-hidden="true"
                />

                {/* Floating Architectural Badge (Layer 2) */}
                <div
                  className="absolute bottom-5 left-5 right-5 p-4 rounded-xs bg-[var(--bg-card)] backdrop-blur-md border border-[var(--border-color)] shadow-xl space-y-1.5"
                  style={{ transform: 'translateZ(40px)' }}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[var(--text-tertiary)]">
                    <span>Sample Elevation</span>
                    <span className="text-[#4B1428] font-semibold dark:text-[#E8A5BC]">Pattukkottai</span>
                  </div>
                  <h2 className="font-display font-semibold text-sm sm:text-base text-[var(--text-primary)]">
                    Nadimuthu Nagar Residence
                  </h2>
                  <p className="text-xs text-[var(--text-secondary)] line-clamp-2">
                    Contemporary residential layout engineered for natural airflow and Tamil Nadu climatic comfort.
                  </p>
                </div>
              </div>

              {/* Floating Architectural Compass Stamp (Layer 3) */}
              <div
                className="absolute -top-4 -right-4 hidden sm:flex flex-col items-center justify-center w-20 h-20 rounded-full bg-[#4B1428] text-[#F5F0E8] border-2 border-[var(--border-color)] shadow-2xl p-2 text-center"
                style={{ transform: 'translateZ(60px)' }}
              >
                <Compass className="w-5 h-5 mb-0.5 animate-spin-slow" />
                <span className="text-[8px] font-mono tracking-widest uppercase font-bold leading-none">
                  DESIGN
                </span>
                <span className="text-[7px] text-[#F5F0E8]/70 tracking-widest uppercase leading-none mt-0.5">
                  100%
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

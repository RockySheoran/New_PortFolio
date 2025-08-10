"use client"
import React, { useRef } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { GitHubContributions } from './GitHubContributions';
import { useScroll, useTransform } from "framer-motion";

export const StatsSection = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
 const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

  
  return (
    <section id="activity" ref={targetRef} className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black/100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          My Coding Stats
        </h2>

        {/* GitHub Stats */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 text-center">
            GitHub Activity
          </h3>
          
          {/* Main GitHub Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center mb-8">
            <div className="w-full max-w-md">
              <Image
                src={`https://github-readme-stats.vercel.app/api?username=RockySheoran&show_icons=true&theme=${isDark ? 'radical' : 'default'}`}
                alt="Rocky's GitHub stats"
                width={500}
                height={200}
                className="w-full h-auto rounded-lg"
                unoptimized
              />
            </div>
            <div className="w-full max-w-md">
              <Image
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=RockySheoran&layout=compact&theme=${isDark ? 'radical' : 'default'}`}
                alt="Top Languages"
                width={500}
                height={200}
                className="w-full h-auto rounded-lg"
                unoptimized
              />
            </div>
            <div className="w-full max-w-md">
              <Image
                src={`https://streak-stats.demolab.com/?user=RockySheoran&theme=${isDark ? 'dark' : 'white'}`}
                alt="GitHub Streak"
                width={500}
                height={200}
                className="w-full h-auto rounded-lg"
                unoptimized
              />
            </div>
          </div>

          {/* GitHub Contributions Calendar */}
          <GitHubContributions username="RockySheoran" />
        </div>

        {/* LeetCode Stats */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 text-center">
            LeetCode Stats
          </h3>
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <Image
                src={`https://leetcard.jacoblin.cool/rockysheoran72?theme=${isDark ? 'dark' : 'white'}&font=Abel&ext=heatmap`}
                alt="LeetCode Stats"
                width={800}
                height={300}
                className="w-full h-auto rounded-lg"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
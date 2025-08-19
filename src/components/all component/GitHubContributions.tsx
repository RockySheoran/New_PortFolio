"use client"
import React from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

interface GitHubContributionsProps {
  username: string;
}

export const GitHubContributions: React.FC<GitHubContributionsProps> = ({ username }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-colors duration-300">
      <div className="flex items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Daily Contributions
        </h3>
      </div>
      <div className="overflow-x-auto">
        <Image
          src={`https://ghchart.rshah.org/${username}?theme=${isDark ? 'dark' : 'white'}`}
          alt={`${username}'s GitHub contributions`}
          width={1100}  // Approximate width of the chart
          height={200}
          className="w-full h-auto"
          unoptimized
        />
      </div>
      <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        <p>My daily coding activity visualized</p>
      </div>
    </div>
  );
};
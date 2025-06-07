"use client";

import { motion } from "framer-motion";

const ProjectFilter = ({ tags, activeFilter, setActiveFilter }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {tags.map((tag, i) => (
        <motion.button
          key={i}
          onClick={() => setActiveFilter(tag)}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeFilter === tag
              ? "bg-indigo-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
          }`}
        >
          {tag}
        </motion.button>
      ))}
    </div>
  );
};

export default ProjectFilter;
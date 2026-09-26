import { motion } from "framer-motion";
// import type { Thought } from "../../data/thoughts";
import type { Thought } from "../../types/home";
import "./ThoughtDisplay.css";

interface ThoughtDisplayProps {
  thought: Thought;
}

const ThoughtDisplay = ({ thought }: ThoughtDisplayProps) => {
  return (
    <motion.section
      className="thought-display"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <p className="thought-display__text">
        {thought.text}
      </p>

      {thought.author && (
        <p className="thought-display__author">
          — {thought.author}
        </p>
      )}
    </motion.section>
  );
};

export default ThoughtDisplay;
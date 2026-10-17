import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  createReflection,
  getRandomThought,
} from "../../services/homeApi";

import type { Thought } from "../../types/home";

import ThoughtDisplay from "./ThoughtDisplay";
import ReflectionInput from "./ReflectionInput";
import AIResponse from "./AIResponse";

type ThoughtPhase = "reflection" | "generating" | "response";

function ThoughtExperience() {
  const [currentThought, setCurrentThought] =
    useState<Thought | null>(null);

  const [reflection, setReflection] = useState("");
  const [aiResponse, setAiResponse] = useState("");

  const [phase, setPhase] =
    useState<ThoughtPhase>("reflection");

  const [isLoadingThought, setIsLoadingThought] =
    useState(true);

  async function loadThought() {
    try {
      setIsLoadingThought(true);

      const thought = await getRandomThought();

      setCurrentThought(thought);
    } catch (error) {
      console.error("Failed to load thought:", error);
    } finally {
      setIsLoadingThought(false);
    }
  }

  /*
   * Load the first thought when the page opens.
   */
  useEffect(() => {
    loadThought();
  }, []);

  /*
   * Automatically move to another thought after 10 seconds
   * if the visitor has not started typing.
   */
  useEffect(() => {
    if (
      phase !== "reflection" ||
      reflection.trim() ||
      !currentThought
    ) {
      return;
    }

    const timer = setTimeout(() => {
      loadThought();
    }, 10000);

    return () => clearTimeout(timer);
  }, [phase, reflection, currentThought]);

  /*
   * After showing the AI response for 10 seconds,
   * load another thought.
   */
  useEffect(() => {
    if (phase !== "response") {
      return;
    }

    const timer = setTimeout(async () => {
      setReflection("");
      setAiResponse("");

      await loadThought();

      setPhase("reflection");
    }, 10000);

    return () => clearTimeout(timer);
  }, [phase]);

  /*
   * Submit the visitor's reflection.
   */
  async function handleSubmit() {
    if (!currentThought || !reflection.trim()) {
      return;
    }

    setPhase("generating");

    try {
      const response = await createReflection({
        thoughtId: currentThought.id,
        visitorResponse: reflection.trim(),
      });

      setAiResponse(response.aiResponse);

      setPhase("response");
    } catch (error) {
      console.error(
        "Failed to submit reflection:",
        error
      );

      setPhase("reflection");
    }
  }

  /*
   * Initial loading state.
   */
  if (isLoadingThought && !currentThought) {
    return (
      <section className="thought-experience">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Loading...
        </motion.p>
      </section>
    );
  }

  /*
   * Error state.
   */
  if (!currentThought) {
    return (
      <section className="thought-experience">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Something went wrong while loading the thought.
        </motion.p>
      </section>
    );
  }

  // return (
  //   <section className="thought-experience">

  //     {/* -------------------------------- */}
  //     {/* Thought transition                */}
  //     {/* -------------------------------- */}

  //     <AnimatePresence mode="wait">
  //       <motion.div
  //         key={currentThought.id}
  //         initial={{
  //           opacity: 0,
  //           y: 15,
  //         }}
  //         animate={{
  //           opacity: 1,
  //           y: 0,
  //         }}
  //         exit={{
  //           opacity: 0,
  //           y: -15,
  //         }}
  //         transition={{
  //           duration: 0.7,
  //           ease: "easeInOut",
  //         }}
  //       >
  //         <ThoughtDisplay
  //           thought={currentThought}
  //         />
  //       </motion.div>
  //     </AnimatePresence>

  //     {/* -------------------------------- */}
  //     {/* Reflection / Generating / AI     */}
  //     {/* -------------------------------- */}

  //     <AnimatePresence mode="wait">

  //       {phase === "reflection" && (
  //         <motion.div
  //           key="reflection"
  //           initial={{
  //             opacity: 0,
  //             y: 10,
  //           }}
  //           animate={{
  //             opacity: 1,
  //             y: 0,
  //           }}
  //           exit={{
  //             opacity: 0,
  //             y: -10,
  //           }}
  //           transition={{
  //             duration: 0.5,
  //             ease: "easeInOut",
  //           }}
  //         >
  //           <ReflectionInput
  //             value={reflection}
  //             onChange={setReflection}
  //             onSubmit={handleSubmit}
  //           />
  //         </motion.div>
  //       )}

  //       {phase === "generating" && (
  //         <motion.p
  //           key="generating"
  //           className="thought-status"
  //           initial={{
  //             opacity: 0,
  //           }}
  //           animate={{
  //             opacity: 1,
  //           }}
  //           exit={{
  //             opacity: 0,
  //           }}
  //           transition={{
  //             duration: 0.4,
  //           }}
  //         >
  //           Thinking...
  //         </motion.p>
  //       )}

  //       {phase === "response" && (
  //         <motion.div
  //           key="response"
  //           initial={{
  //             opacity: 0,
  //             y: 10,
  //           }}
  //           animate={{
  //             opacity: 1,
  //             y: 0,
  //           }}
  //           exit={{
  //             opacity: 0,
  //             y: -10,
  //           }}
  //           transition={{
  //             duration: 0.6,
  //             ease: "easeInOut",
  //           }}
  //         >
  //           <AIResponse
  //             response={aiResponse}
  //           />
  //         </motion.div>
  //       )}

  //     </AnimatePresence>

  //   </section>
  // );
  
return (
  <section className="thought-experience">
    {/* Fixed thought area */}
    <div className="thought-experience__thought-slot">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentThought.id}
          className="thought-experience__thought"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
        >
          <ThoughtDisplay thought={currentThought} />
        </motion.div>
      </AnimatePresence>
    </div>

    {/* Fixed interaction area */}
    <div className="thought-experience__interaction-slot">
      <AnimatePresence mode="wait">
        {phase === "reflection" && (
          <motion.div
            key="reflection"
            className="thought-experience__interaction"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <ReflectionInput
              value={reflection}
              onChange={setReflection}
              onSubmit={handleSubmit}
            />
          </motion.div>
        )}

        {phase === "generating" && (
          <motion.p
            key="generating"
            className="thought-status"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            Let’s see what Prateek might think...
          </motion.p>
        )}

        {phase === "response" && (
          <motion.div
            key="response"
            className="thought-experience__interaction"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
          >
            <AIResponse response={aiResponse} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </section>
);

}

export default ThoughtExperience;
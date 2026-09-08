"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

export function EntryLoader() {
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), reduceMotion ? 120 : 1650);
    return () => window.clearTimeout(timeout);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="entry-loader"
          initial={{ opacity: 1 }}
          exit={{ clipPath: reduceMotion ? "inset(0 0 100% 0)" : "inset(0 0 100% 0)", transition: { duration: reduceMotion ? 0.18 : 0.72, ease: [0.76, 0, 0.24, 1] } }}
          aria-label="Loading Katana Webstudios"
          role="status"
        >
          <div className="entry-loader__mark">KATANA<span>WEBSTUDIOS</span></div>
          <div className="entry-loader__bar"><motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: reduceMotion ? 0.1 : 1.15, ease: [0.76, 0, 0.24, 1] }} /></div>
          <p>Digital experiences, sharpened.</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

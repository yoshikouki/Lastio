"use client";

import { motion } from "framer-motion";

export const ActivityItemAnimation = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{
        margin: "0",

        paddingTop: "1rem",
        paddingBottom: "1rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",

        border: "1px solid transparent",
      }}
      whileInView={{
        marginLeft: "0.5rem",
        marginRight: "0.5rem",

        paddingLeft: "1rem",
        paddingRight: "1rem",

        backgroundColor: "var(--card)",
        borderRadius: "0.5rem",
        border: "0.5px solid hsl(var(--border))",
      }}
      whileHover={{
        scale: 1.03,
        transition: {
          duration: 0.1,
        },
      }}
      transition={{
        duration: 0.3,
      }}
      viewport={{
        amount: 0.6,
      }}
    >
      {children}
    </motion.div>
  );
};

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

        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
        paddingLeft: "2rem",
        paddingRight: "2rem",

        backgroundColor: "#222",
        border: "1px solid transparent",
      }}
      whileInView={{
        marginTop: "1rem",
        marginLeft: "1rem",
        marginRight: "1rem",

        paddingLeft: "1rem",
        paddingRight: "1rem",

        borderRadius: "0.5rem",
        border: "1px solid #333",
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

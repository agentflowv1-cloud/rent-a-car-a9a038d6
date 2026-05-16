import React from 'react';
import { useStore } from '../components/Store';
import { motion } from 'framer-motion';

function Home() {
  const { count } = useStore();

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Welcome to the home page!</h1>
      <p>Count: {count}</p>
    </motion.div>
  );
}

export default Home;
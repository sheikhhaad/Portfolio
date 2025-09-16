import React from 'react'
import { motion } from "framer-motion"; // Framer Motion

const AboutSec = ({title,description}) => {
  return (
    <>  <motion.div
        className="mt-20 text-center p-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <h1 className="shine-text text-xl font-sans font-bold">{title}</h1>

        <p className="text-3xl text-white mt-5 m-10 ">
         {description}
        </p>
      </motion.div>
</>
  )
}

export default AboutSec
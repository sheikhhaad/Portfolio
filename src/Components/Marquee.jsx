import React from 'react'
import {motion} from 'framer-motion'

const Marquee = () => {
  return (
    <>
    <div className=''></div>
       {/* Marquee Section */}
      <motion.div
        className="marquee mt-20 mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className="marquee-content font-semibold text-lg tracking-wide">
          <h1>
            Development ✧ Graphics ✧ Designing ✧ Websites ✧ Animations ✧ Mentor
            ✧
          </h1>
          <h1>
            Development ✧ Graphics ✧ Designing ✧ Websites ✧ Animations ✧ Mentor
            ✧
          </h1>
        </div>
      </motion.div>
      <hr />
    </>
  )
}

export default Marquee
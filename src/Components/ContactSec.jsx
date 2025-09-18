import React from 'react'
import AnimatedBtn from './AnimatedBtn'

const ContactSec = () => {
  return (
      <div className="bg-[#111116] rounded-3xl px-8 py-16 text-center w-full">
        
        {/* Status Badge */}
        <div className="flex justify-center mb-6">
          <p className="flex items-center gap-2 px-4 py-1 rounded-full bg-green-900/40 text-green-200 text-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"></span>
            Available for work
          </p>
        </div>

        {/* Main Heading */}
        <h1 className="text-white text-4xl md:text-5xl font-semibold leading-tight">
          Let's create your <br /> next big idea.
        </h1>

        {/* Button */}
        <div className="mt-10">
          <AnimatedBtn title='Contact Me'/>
                    </div>
      </div>
  )
}

export default ContactSec

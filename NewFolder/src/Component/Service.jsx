import React from 'react'
import { color, motion } from 'framer-motion';
export default function Service() {
  return (
    <div id='service' className='md:h-140 h-280 border-b' style={{ backgroundImage: 'linear-gradient(to bottom, #FFFDEA, white' }}>

      <div className='font-mont'>
        <p className='text-4xl font-semibold text-center py-10' style={{color:"#14532D"}}>White labelling services</p>
        <motion.div
          style={{ backgroundImage: 'linear-gradient(to bottom, white, #e9d7ab)' }}
          className="max-h-[70%] min-w-[80%] rounded-2xl shadow-lg ml-[10%] md:my-10 mt-10  pb-5 w-75 px-20 text-left"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.3 }}
          onViewportEnter={(entry) => {
            entry.target.classList.add("animate-float");
          }}
        >

          <p className=" text-2xl py-5 list-item">
            Build your brand with ease - custom logo packaging offered in 100g and 250g options. 🏷✨
          </p>
          <p className="text-lg px-10">
          </p>

          <p className="text-2xl py-5 list-item">
            You focus on selling we handle production and packaging - End-to-end design, printing, and packaging support. ⚙📦
          </p>

        </motion.div>


      </div>
    </div>
  )
}

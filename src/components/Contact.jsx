import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion' 

const Contact = () => {


  return (
    <div
    className='xl:mt-12 xl:flex-row flex-row-reverse flex gap-10 overflow-hidden'
    >
      <motion.div
      variants={slideIn('left','tween', 0.2 , 1)}
      className='flex-[75] bg-black-200 p-8 rounded-2xl h-full'>
          <p className={styles.sectionSubText}>Beispiele</p>
          <h3 className={styles.sectionHeadText}> Vor und Nach</h3>

          <iframe frameborder="0" class="juxtapose flex flex-col mt-12 h-[615px]" width="100%" height="360.22857142857146" src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=4092e14a-c6af-11ed-b5bd-6595d9b17862"></iframe>
          <br />
          <iframe frameborder="0" class="juxtapose flex flex-col mt-12 h-[615px]" width="100%" height="360.22857142857146" src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=f9422c20-d855-11ed-b5bd-6595d9b17862"></iframe>
      </motion.div>


      



    </div>
  )
}

export default SectionWrapper(Contact, "contact")
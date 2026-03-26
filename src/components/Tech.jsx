import React from 'react';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { flags } from '../constants';
import { motion } from 'framer-motion';
import { styles } from '../styles';


const Tech = () => {
  return (
    <>
    <motion.div>
        <p className={`${styles.sectionSubText} text-center text-white`}>
          Nicht nur in Syrien 
        </p>
        <h2 className={`${styles.sectionHeadText} text-center text-white`}>
          Wo herrscht auch Krieg
        </h2>
      </motion.div>
<br />
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {flags.map((technology) => (
          <div className='w-28 h-28 ' key={technology.name}> 
            <BallCanvas icon={technology.icon} />
          </div>
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(Tech , "")
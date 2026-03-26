import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

// "vid" Import wird nicht mehr benötigt, da das Video nun von YouTube kommt

const ReactVideoPlayer = () => {
  // Ersetze 'DEINE_VIDEO_ID' durch den Code am Ende deiner YouTube-URL
  // Beispiel: https://www.youtube.com/watch?v=dQw4w9WgXcQ -> ID ist dQw4w9WgXcQ
  

  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-200 p-8 rounded-2xl w-full'
      >
        <p className={styles.sectionSubText}>Kurzfilm</p>
        <h3 className={styles.sectionHeadText}>Anfang des Kriegs</h3>
        
        {/* Container für das richtige Seitenverhältnis (16:9) */}
        <div className='relative w-full aspect-video mt-5'>
          <iframe
            className='w-full h-full rounded-xl shadow-card'
            src={`https://youtu.be/PLIi99mjcHs?si=Plvs9n_b2T3dzT59`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>
    </div>
  )
};

export default SectionWrapper(ReactVideoPlayer, "video");
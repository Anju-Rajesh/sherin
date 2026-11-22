import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Opening from './components/Opening'
import BirthdayWish from './components/BirthdayWish'
import SoloGallery from './components/SoloGallery'
import TogetherTimeline from './components/TogetherTimeline'
import Letter from './components/Letter'
import Wishes from './components/Wishes'
import Finale from './components/Finale'
import FloatingHearts from './components/FloatingHearts'
import MusicPlayer from './components/MusicPlayer'
import Burst from './components/Burst'

export default function App() {
  const [opened, setOpened] = useState(false)
  const [burst, setBurst] = useState(null)

  const handleOpen = () => {
    setBurst({ id: Date.now() })
    setOpened(true)
    window.scrollTo(0, 0)
  }

  return (
    <>
      <MusicPlayer />
      {opened && <FloatingHearts count={12} />}

      <AnimatePresence mode="wait">
        {!opened ? (
          <Opening key="opening" onOpen={handleOpen} />
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="relative w-full overflow-x-clip"
          >
            <BirthdayWish />
            <SoloGallery />
            <TogetherTimeline />
            <Letter />
            <Wishes />
            <Finale />
          </motion.main>
        )}
      </AnimatePresence>

      {burst && <Burst key={burst.id} big count={36} y="62%" onDone={() => setBurst(null)} />}
    </>
  )
}

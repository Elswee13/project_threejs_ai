import {motion, AnimatePresence} from 'framer-motion';
import { useSnapshot } from 'valtio';

import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion';

import state from '../store';

const Home = () => {
    const snap = useSnapshot(state);
  return (
    <AnimatePresence>
        {snap.intro && (
            <motion.section className="home" {...slideAnimation('left')}>

            </motion.section>
        )}
    </AnimatePresence>
  )
}

export default Home;
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/95" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.1}} className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Build fast. Ship bold.
          </motion.h1>
          <motion.p initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.2}} className="mt-4 text-lg text-gray-600 max-w-xl">
            Modern web, mobile, and AI solutions crafted for performance and growth.
          </motion.p>
          <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.3}} className="mt-6 flex items-center gap-3">
            <Link to="/contact" className="pointer-events-auto inline-flex items-center px-5 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              Request a Quote
            </Link>
            <Link to="/projects" className="pointer-events-auto inline-flex items-center px-5 py-3 rounded-md border border-gray-300 text-gray-800 hover:bg-gray-50 transition">
              See Work
            </Link>
          </motion.div>
          <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.35}} className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-gray-600">
            <div>
              <p className="font-bold text-gray-900 text-xl">120+</p>
              <p>Projects</p>
            </div>
            <div>
              <p className="font-bold text-gray-900 text-xl">30+</p>
              <p>Industries</p>
            </div>
            <div>
              <p className="font-bold text-gray-900 text-xl">4.9/5</p>
              <p>Avg. Rating</p>
            </div>
            <div>
              <p className="font-bold text-gray-900 text-xl">24/7</p>
              <p>Support</p>
            </div>
          </motion.div>
        </div>
        <div className="relative aspect-[4/3] lg:aspect-[5/4] rounded-2xl border border-black/5 bg-white/70 backdrop-blur pointer-events-none" />
      </div>
    </section>
  )
}

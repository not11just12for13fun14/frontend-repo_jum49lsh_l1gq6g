import { motion } from 'framer-motion'
import Layout from '../components/Layout'

export default function About(){
  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMzMDU0MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-charcoal/60 to-charcoal" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <h1 className="text-white text-4xl sm:text-5xl font-extrabold">About Us</h1>
          <p className="text-white/80 mt-4 max-w-2xl">Over 20 years delivering reliable, customer-focused landscaping with attention to detail that elevates every project.</p>
        </div>
      </section>

      <section className="bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} className="space-y-4 text-white/80">
            <p>Busy Wombats Landscaping is a Sydney-based team specialising in garden makeovers, maintenance, structural landscaping and complete outdoor transformations. Our ethos is reliability, transparency and premium workmanship.</p>
            <p>From the first consultation to final handover, you’ll experience punctual communication, clean worksites and detailed finishes. We take pride in building spaces that last, using quality materials and industry-best practices.</p>
            <p>Whether it’s a small courtyard refresh or a full backyard redesign, we bring the same care and precision.</p>
          </motion.div>
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} className="grid grid-cols-2 gap-4">
            {[1,2,3,4].map(i => (
              <div key={i} className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-white/10">
                <img className="w-full h-full object-cover hover:scale-105 transition-transform" src={`https://images.unsplash.com/photo-15${i}004318641-b39e6451bec6?q=80&w=800&auto=format&fit=crop`} alt="Project" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}

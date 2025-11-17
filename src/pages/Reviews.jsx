import { motion } from 'framer-motion'
import Layout from '../components/Layout'

const reviews = [
  { text: 'George and the team did a wonderful job…', author: 'Selina N.', stars: 5 },
  { text: 'Transformed a tired yard into a dream space…', author: 'Allison B.', stars: 5 },
  { text: 'Very responsive and reliable…', author: 'Donna R.', stars: 5 },
  { text: 'Turned our yard into an oasis…', author: 'Word of Mouth Review', stars: 5 },
]

function Stars({ count }){
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-gold">★</span>
      ))}
    </div>
  )
}

export default function Reviews(){
  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMzMDU0MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-charcoal/60 to-charcoal" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <h1 className="text-white text-4xl sm:text-5xl font-extrabold">Reviews</h1>
          <p className="text-white/80 mt-4 max-w-2xl">What our clients say about working with Busy Wombats.</p>
        </div>
      </section>

      <section className="bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <motion.div key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="p-8 rounded-2xl bg-white/5 border border-white/10 text-white shadow-2xl hover:-translate-y-1 transition">
              <Stars count={r.stars} />
              <p className="text-lg mt-4">“{r.text}”</p>
              <p className="mt-4 text-white/70">— {r.author}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

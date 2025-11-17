import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

const services = [
  'Garden Makeovers','Garden Maintenance','Turf Laying','Retaining Walls','Decking','Fencing','Land Clearing'
]

const areas = ['Ryde','Epping','Eastwood','Gladesville','Parramatta','Hills District','Inner West','Western Sydney','Canterbury-Bankstown','South West Sydney']

export default function Home(){
  return (
    <Layout>
      {/* Hero with subtle parallax */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-charcoal/60 to-charcoal" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-28">
          <motion.h1 initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Expert Landscaping & Garden Makeovers Across Sydney.
          </motion.h1>
          <motion.p initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{delay:0.1}} className="text-white/80 mt-6 text-lg max-w-2xl">
            20+ years of experience, 500+ happy clients, and workmanship that speaks for itself.
          </motion.p>
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{delay:0.2}} className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className="px-6 py-3 rounded-full bg-gold text-charcoal font-bold shadow-xl hover:shadow-2xl transition-all">Get a Free Quote</Link>
            <a href="tel:+611300000000" className="px-6 py-3 rounded-full bg-white/10 text-white font-semibold ring-1 ring-white/20 hover:bg-white/20 transition">Call Now</a>
          </motion.div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              '20+ Years Experience',
              'Reliable, Affordable & Customer-Focused',
              'High Quality Workmanship',
              '500+ Happy Clients'
            ].map((item, idx) => (
              <motion.div key={idx} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:idx*0.05}} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all">
                <p className="font-semibold">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-gradient-to-b from-charcoal to-[#0b0f0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Featured Services</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div whileHover={{y:-6}} whileTap={{scale:0.98}} key={i} className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 shadow-xl">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="relative p-6 min-h-[160px] flex items-end">
                  <p className="text-white font-bold text-xl">{s}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews preview */}
      <section className="bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl font-extrabold text-white">What Clients Say</h2>
            <Link to="/reviews" className="text-gold hover:underline">Read all reviews →</Link>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {[ 
              'George and the team did a wonderful job…',
              'Transformed a tired yard into a dream space…'
            ].map((t, idx) => (
              <motion.div key={idx} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="p-8 rounded-2xl bg-white/5 border border-white/10 text-white shadow-2xl">
                <p className="text-lg">{t}</p>
                <p className="mt-4 text-white/70">— Happy Client</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="bg-gradient-to-b from-charcoal to-[#0b0f0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-extrabold text-white">Serving Sydney</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {areas.map((a, i) => (
              <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80">{a}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Ready to transform your outdoor space?</h3>
          <p className="text-white/80 mt-3">Get your free on-site quote today.</p>
          <div className="mt-8 flex justify-center gap-4">
            <Link to="/contact" className="px-6 py-3 rounded-full bg-gold text-charcoal font-bold shadow-xl hover:shadow-2xl transition-all">Get a Free Quote</Link>
            <a href="tel:+611300000000" className="px-6 py-3 rounded-full bg-white/10 text-white font-semibold ring-1 ring-white/20 hover:bg-white/20 transition">Call Now</a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

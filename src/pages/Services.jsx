import { motion } from 'framer-motion'
import Layout from '../components/Layout'

const items = [
  { title: 'Garden Makeovers', img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?q=80&w=2070&auto=format&fit=crop', desc: 'From concept to completion — planting, paving, lighting and styling.' },
  { title: 'Turf Laying', img: 'https://images.unsplash.com/photo-1601560896164-834d3f9d56d0?q=80&w=2070&auto=format&fit=crop', desc: 'Premium natural and synthetic turf with professional preparation.' },
  { title: 'Garden Maintenance', img: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?q=80&w=2070&auto=format&fit=crop', desc: 'Regular care: pruning, hedging, fertilising, clean-ups and more.' },
  { title: 'Retaining Walls', img: 'https://images.unsplash.com/photo-1581068157420-35b2b2661e28?q=80&w=2070&auto=format&fit=crop', desc: 'Structural solutions in timber, block and stone to shape your land.' },
  { title: 'Decking', img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop', desc: 'Hardwood and composite decks tailored to your home and lifestyle.' },
  { title: 'Fencing', img: 'https://images.unsplash.com/photo-1437419764061-2473afe69fc2?q=80&w=2070&auto=format&fit=crop', desc: 'Timber, Colorbond and decorative options with clean finishes.' },
  { title: 'Land Clearing & Excavation', img: 'https://images.unsplash.com/photo-1523419409543-494c1d3f9f10?q=80&w=2070&auto=format&fit=crop', desc: 'Site preparation, rubbish removal and earthworks with care.' },
]

export default function Services(){
  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-charcoal/60 to-charcoal" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <h1 className="text-white text-4xl sm:text-5xl font-extrabold">Services</h1>
          <p className="text-white/80 mt-4 max-w-2xl">A complete suite of landscaping services delivered with precision.</p>
        </div>
      </section>

      <section className="bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((card, i) => (
            <motion.div key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} whileHover={{y:-6}} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-xl">
              <div className="aspect-video overflow-hidden">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="p-6">
                <h3 className="text-white font-bold text-xl">{card.title}</h3>
                <p className="text-white/70 mt-2">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

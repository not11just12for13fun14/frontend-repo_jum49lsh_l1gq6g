import { useState } from 'react'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'

export default function Contact(){
  const [form, setForm] = useState({ name:'', email:'', phone:'', suburb:'', service:'', message:'' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => { e.preventDefault(); alert('Thanks! We\'ll be in touch shortly.')} // mock for now

  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-charcoal/60 to-charcoal" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <h1 className="text-white text-4xl sm:text-5xl font-extrabold">Get a Free Quote</h1>
          <p className="text-white/80 mt-4 max-w-2xl">Tell us a bit about your project and we’ll get back to you quickly.</p>
        </div>
      </section>

      <section className="bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-3 gap-10">
          <motion.form onSubmit={handleSubmit} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} className="lg:col-span-2 p-8 rounded-2xl bg-white/5 border border-white/10 text-white shadow-2xl space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold placeholder-white/40" />
              <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold placeholder-white/40" />
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold placeholder-white/40" />
              <input name="suburb" value={form.suburb} onChange={handleChange} placeholder="Suburb" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold placeholder-white/40" />
              <input name="service" value={form.service} onChange={handleChange} placeholder="Service Needed" className="sm:col-span-2 bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold placeholder-white/40" />
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" rows={5} className="sm:col-span-2 bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold placeholder-white/40" />
            </div>
            <button className="px-6 py-3 rounded-full bg-gold text-charcoal font-bold shadow-xl hover:shadow-2xl transition-all">Send Request</button>
          </motion.form>

          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} className="space-y-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-white">
              <h3 className="text-xl font-bold">Contact</h3>
              <p className="mt-2 text-white/80">Phone: 1300 000 000</p>
              <p className="text-white/80">Email: hello@busywombats.com.au</p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
              <iframe title="Sydney Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26528.91858578755!2d151.077!3d-33.8688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3a6a0!2sSydney!5e0!3m2!1sen!2sau!4v1610000000000" width="100%" height="300" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}

export default function Footer(){
  return (
    <footer className="bg-charcoal text-white/80 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-white font-extrabold text-lg">Busy Wombats Landscaping</h4>
          <p className="text-white/60 mt-2">Expert landscaping & garden makeovers across Sydney.</p>
        </div>
        <div>
          <h5 className="text-white font-semibold mb-2">Services</h5>
          <ul className="space-y-1 text-white/70">
            <li>Garden Makeovers</li>
            <li>Garden Maintenance</li>
            <li>Turf Laying</li>
            <li>Retaining Walls</li>
            <li>Decking</li>
            <li>Fencing</li>
            <li>Land Clearing</li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-semibold mb-2">Areas We Serve</h5>
          <p className="text-white/70">Ryde, Epping, Eastwood, Gladesville, Parramatta, Hills District, Inner West, Western Sydney, Canterbury-Bankstown, South West Sydney.</p>
        </div>
        <div>
          <h5 className="text-white font-semibold mb-2">Contact</h5>
          <p className="text-white/70">Phone: 1300 000 000</p>
          <p className="text-white/70">Email: hello@busywombats.com.au</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-white/50 text-sm">© {new Date().getFullYear()} Busy Wombats Landscaping. All rights reserved.</div>
    </footer>
  )
}

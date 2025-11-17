import Navbar from '../components/Navbar'

export default function About(){
  const timeline = [
    { year: '2019', text: 'Founded to help startups ship faster.' },
    { year: '2021', text: 'Expanded into mobile and cloud.' },
    { year: '2023', text: 'Launched AI & automation practice.' },
  ]
  const team = [
    { name: 'Jordan', role: 'Founder & Engineer' },
    { name: 'Taylor', role: 'Product Designer' },
    { name: 'Sam', role: 'Full‑stack Developer' },
  ]
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">About Us</h1>
        <p className="mt-2 text-gray-600 max-w-2xl">We craft delightful, high‑performance digital products that move the needle for your business.</p>

        <div className="mt-10 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold text-gray-900">Mission & Vision</h2>
            <p className="mt-2 text-gray-700">Empower teams to build fast, iterate confidently, and win with technology.</p>

            <h2 className="mt-8 text-xl font-semibold text-gray-900">Our Journey</h2>
            <ol className="mt-3 space-y-3">
              {timeline.map(item => (
                <li key={item.year} className="p-4 rounded-lg border border-black/5 bg-white">
                  <span className="font-semibold text-gray-900">{item.year}</span> — {item.text}
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Our Team</h2>
            <div className="mt-3 space-y-3">
              {team.map(m => (
                <div key={m.name} className="p-4 rounded-lg border border-black/5 bg-white">
                  <div className="font-semibold text-gray-900">{m.name}</div>
                  <div className="text-sm text-gray-600">{m.role}</div>
                </div>
              ))}
            </div>

            <h2 className="mt-8 text-xl font-semibold text-gray-900">Certificates / Awards</h2>
            <ul className="mt-3 list-disc list-inside text-gray-700">
              <li>AWS Partner</li>
              <li>Google Cloud Certified</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

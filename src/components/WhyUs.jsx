export default function WhyUs() {
  const points = [
    { title: 'Senior expertise', desc: 'Small, expert team that ships fast without the overhead.' },
    { title: 'Performance first', desc: 'Lighthouse-obsessed builds, robust CI/CD and monitoring.' },
    { title: 'Transparent pricing', desc: 'Clear plans, weekly demos and async communication.' },
    { title: 'End-to-end', desc: 'From problem discovery to launch and growth.' },
  ]
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-blue-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Why Choose Us</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p) => (
            <div key={p.title} className="p-6 rounded-xl border border-black/5 bg-white">
              <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

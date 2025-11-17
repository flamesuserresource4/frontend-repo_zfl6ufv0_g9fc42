import Navbar from '../components/Navbar'

export default function Policies(){
  const sections = [
    { title: 'Privacy Policy', content: 'We respect your privacy and protect your data.' },
    { title: 'Refund Policy', content: 'Simple, fair refunds within 14 days for eligible services.' },
    { title: 'Terms & Conditions', content: 'Use of our services implies agreement to these terms.' },
    { title: 'Cookie Policy', content: 'We use cookies to improve your experience.' },
  ]
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-20 mx-auto max-w-4xl px-4">
        <h1 className="text-3xl font-bold text-gray-900">Policies</h1>
        <div className="mt-8 space-y-6">
          {sections.map(s => (
            <div key={s.title} className="p-6 rounded-xl border border-black/5 bg-white">
              <h2 className="text-xl font-semibold text-gray-900">{s.title}</h2>
              <p className="mt-2 text-gray-700">{s.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

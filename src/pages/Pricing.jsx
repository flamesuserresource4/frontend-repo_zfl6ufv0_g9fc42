import Navbar from '../components/Navbar'

export default function Pricing(){
  const plans = [
    { name: 'Basic', price: '$1,999', features: ['Landing page', 'Basic SEO', '2 revisions'] },
    { name: 'Standard', price: '$4,999', features: ['Website or App', 'Analytics', '4 revisions'] },
    { name: 'Premium', price: '$9,999', features: ['Full product', 'Growth setup', 'Priority support'] },
  ]
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Pricing</h1>
        <p className="mt-2 text-gray-600">Transparent plans. Custom quotes available.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map(p => (
            <div key={p.name} className="p-6 rounded-xl border border-black/5 bg-white">
              <div className="text-xl font-semibold text-gray-900">{p.name}</div>
              <div className="mt-3 text-3xl font-bold text-gray-900">{p.price}</div>
              <ul className="mt-4 space-y-1 text-sm text-gray-700 list-disc list-inside">
                {p.features.map(f => <li key={f}>{f}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

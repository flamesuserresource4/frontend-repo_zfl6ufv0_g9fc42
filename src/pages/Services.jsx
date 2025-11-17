import Navbar from '../components/Navbar'
import ServicesSection from '../components/Services'

export default function ServicesPage(){
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20">
        <ServicesSection />
      </div>
    </div>
  )
}

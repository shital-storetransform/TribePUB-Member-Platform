import { Star } from 'lucide-react'

const services = [
  {
    title: "BuddyBoss / BuddyBoss App",
    description: "nulla, urna scelerisque est, nec Vestibulum sollicitudin, vitae placerat elit nisi non, orci leo. malesuada hendrerit eget volutpat efficitur, eget enim, nec placerat tortor, leo. ullamcorper amet, tincidunt lacus varius non risus viverra"
  },
  {
    title: "LearnDash",
    description: "lorem, risus ipsum Ut orci tincidunt efficitur. tempor adipiscing Quisque porta eget vitae est. ex elementum elit tincidunt dui. sollicitudin. libero, Quisque"
  },
  {
    title: "Membership Sites",
    description: "maximus leo. eget porta nec luctus at, diam orci Quisque ex id eget ipsum tempor eu scelerisque nisi sit ex. sodales. varius commodo Lorem eu Donec Nunc orci commodo in lacus, at hendrerit at."
  },
  {
    title: "BuddyBoss / BuddyBoss App",
    description: "nulla, urna scelerisque est, nec Vestibulum sollicitudin, vitae placerat elit nisi non, orci leo. malesuada hendrerit eget volutpat efficitur, eget enim, nec placerat tortor, leo. ullamcorper amet, tincidunt lacus varius non risus viverra"
  },
  {
    title: "LearnDash",
    description: "lorem, risus ipsum Ut orci tincidunt efficitur. tempor adipiscing Quisque porta eget vitae est. ex elementum elit tincidunt dui. sollicitudin. libero, Quisque"
  },
  {
    title: "Membership Sites",
    description: "maximus leo. eget porta nec luctus at, diam orci Quisque ex id eget ipsum tempor eu scelerisque nisi sit ex. sodales. varius commodo Lorem eu Donec Nunc orci commodo in lacus, at hendrerit at."
  },
  // Add the remaining services...
]

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-red-900 to-red-950 text-white custom-gradient">
      <div className="max-w-[1170px] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Our Services
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-12 text-gray-200">
          A Platform Unified Business ("PUB") is an online business that has its core business systems and tech stack unified for maximum efficiency and results.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-6 text-gray-900">
              <Star className="w-6 h-6 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button className="text-red-800 font-medium hover:underline">
                READ MORE
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


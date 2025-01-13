import Placeholder from "../placeholder.png"
import Memberium from '../Assets/image 12.png';

export default function MemberiumCertification() {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-red-800">One Of Only Four Certified</span>
                <br />Agency Partners In The World
              </h2>
              <p className="text-gray-600 mb-6">
                TribePUB was selected as one of the four founding and currently only Memberium Certified Agency Partners. We were selected due to our work with Enterprise Level Clients who have 250k to 1 Million+ contacts in their CRMs.
              </p>
              <p className="text-gray-600 mb-8">
                Memberium is the leading Membership Plugin in the WordPress Ecosystem. There is no comparison to its powerful and robust functionality and integration with some of the top CRMs in the industry.
              </p>
              <button className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-6 rounded-full">
                View Our Memberium Interview
              </button>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full h-[400px]">
                <img
                  src='/image 12.png'
                  alt="Memberium Certification Badge"
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
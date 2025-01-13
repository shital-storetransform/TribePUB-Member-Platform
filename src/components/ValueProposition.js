import StarImage from "../Assets/favorite-interface-multimedia_svgrepo.com.png"; // Replace with your image path
import RocketImage from "../Assets/rocket_svgrepo.com.png"; // Replace with your image path

export default function ValueProposition() {
  return (
    <section className="py-16">
      <div className="max-w-[1170px] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Which Best Describes You Best?
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-8 rounded-lg bg-white shadow-lg">
            <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-6">
              <img src={StarImage} alt="Star Icon" className="w-10 h-10 object-contain" />
            </div>
            <h3 className="text-2xl font-bold mb-4">
              I already have a membership website that I want to improve
            </h3>
            <button className="mt-4 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded button-bg">
              Find Out More →
            </button>
          </div>

          <div className="p-8 rounded-lg bg-blue-800 text-white">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
              <img src={RocketImage} alt="Rocket Icon" className="w-10 h-10 object-contain" />
            </div>
            <h3 className="text-2xl font-bold mb-4">
              I am ready to build and launch my own membership site
            </h3>
            <button className="mt-4 bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded button-bg">
              Find Out More →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

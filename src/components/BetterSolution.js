import Person from "../person.jpg"

export default function BetterSolution() {
    return (
      <>
        <section className="relative bg-gradient-to-r from-red-900 to-red-800 py-24">
          <div className="max-w-[1170px] mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Find Better <span className="relative inline-block">
                    Solution
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-amber-500"></span>
                  </span>
                  <br />For your Business
                </h2>
                <p className="mb-8 text-gray-100">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
                <button className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-6 rounded-full">
                  Explore More
                </button>
              </div>
              <div className="relative h-[400px] md:h-[500px]">
                <img
                  src={Person}
                  alt="Business Professional"
                  className="object-contain rounded-lg w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>
  
        <div className="max-w-[1170px] mx-auto px-4 mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl text-black font-bold mb-2">22+</div>
              <div className="text-black">Years Developing</div>
            </div>
            <div>
              <div className="text-4xl text-black font-bold mb-2">302+</div>
              <div className="text-black">Clients Served</div>
            </div>
            <div>
              <div className="text-4xl text-black font-bold mb-2">250K+</div>
              <div className="text-black">Paying Members</div>
            </div>
            <div>
              <div className="text-4xl text-black font-bold mb-2">50M+</div>
              <div className="text-black">CRM Contacts</div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
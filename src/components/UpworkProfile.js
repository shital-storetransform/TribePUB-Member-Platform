
import Upwork from "../Assets/image 10.png";
export default function UpworkProfile() {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-[400px]">
              <img
                src={Upwork}
                alt="Upwork Profile"
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                #1 Ranked On <span className="text-red-800">UpWork</span>
              </h2>
              <p className="text-gray-600 mb-6">
                UpWork is the top Freelancer Platform in the world. Kyle Newton, the Founder Of TribePUB, is the #1 Ranked Freelancer in the US for BuddyBoss, GamiPress, Gamification and in the Top 3 for LearnDash, Membership Sites and Memberium.
              </p>
              <p className="text-gray-600 mb-8">
                You can't fake the feedback and results on UpWork. To have a 100% Satisfaction rating and Five Star Reviews takes hard work, client focus and the ability to deliver what is promised on time and on budget.
              </p>
              <button className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-6 rounded-full">
                Visit Our Work Profile
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
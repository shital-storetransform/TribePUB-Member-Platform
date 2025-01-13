// import Placeholder from "../placeholder.png"
import Placeholder1 from "../Assets/image.png";
import Placeholder2 from "../Assets/image (1).png";
import Placeholder3 from "../Assets/image (2).png";


const blogPosts = [
    {
      title: "The best B2C marketing automation platforms for your membership business",
      date: "October 13, 2024",
      description: "Memberium is the leading Membership Plugin in the WordPress Ecosystem. There is no comparison to its powerful and robust functionality.",
      image:Placeholder1
    },
    {
      title: "The best B2C marketing automation platforms for your membership business",
      date: "October 13, 2024",
      description: "Memberium is the leading Membership Plugin in the WordPress Ecosystem. There is no comparison to its powerful and robust functionality.",
      image: Placeholder2
    },
    {
      title: "The best B2C marketing automation platforms for your membership business",
      date: "October 13, 2024",
      description: "Memberium is the leading Membership Plugin in the WordPress Ecosystem. There is no comparison to its powerful and robust functionality.",
      // image: `${Placeholder}`
      image: Placeholder3
    },
    // ... repeat for other posts
  ];
  
  export default function BlogSection() {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-[1170px] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our Blogs
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Everything you need to know about membership sites
          </p>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="overflow-hidden shadow-lg rounded-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full object-cover h-48"
                />
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <button className="text-red-800 hover:underline font-medium">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
  
          <div className="text-center mt-12">
            <button className="inline-flex items-center justify-center rounded-full border border-red-800 px-6 py-2 text-red-800 hover:bg-red-800 hover:text-white transition-colors">
              View All Blogs
            </button>
          </div>
        </div>
      </section>
    );
  }
  
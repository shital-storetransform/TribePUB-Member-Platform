import { useState } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import Youtube from "../youtube.jpeg"
import Frame from "../Assets/Frame 1(1).png"

const testimonials = [
  {
    id: 1,
    name: "Elaine Snyder",
    title: "Founder of Art xyz comms",
    thumbnail: `${Youtube}`,
    quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Ea provident soluta sed Quis omnis aut ipsa sunt est repudiandae voluptatibus. In sapiente voluptatem aut Quis repellendus vel consequuntur rerum non architecto architecto et dignissimos mollitia est molestiae dolor. Aut aspernatur dolor a officiis voluptatem sed neque reprehenderit qui quaerat debitis ut impedit voluptatem?"
  },
  {
    id: 2,
    name: "Elaine lkajdh",
    title: "Founder of Art xyz comms",
    thumbnail: `${Frame}`,
    quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Ea provident soluta sed Quis omnis aut ipsa sunt est repudiandae voluptatibus. In sapiente voluptatem aut Quis repellendus vel consequuntur rerum non architecto architecto et dignissimos mollitia est molestiae dolor. Aut aspernatur dolor a officiis voluptatem sed neque reprehenderit qui quaerat debitis ut impedit voluptatem?"
  },
  {
    id: 3,
    name: "Elaine Snadasyder",
    title: "Founder of Art xyz comms",
    thumbnail: `${Frame}`,
    quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Ea provident soluta sed Quis omnis aut ipsa sunt est repudiandae voluptatibus. In sapiente voluptatem aut Quis repellendus vel consequuntur rerum non architecto architecto et dignissimos mollitia est molestiae dolor. Aut aspernatur dolor a officiis voluptatem sed neque reprehenderit qui quaerat debitis ut impedit voluptatem?"
  },
  {
  id: 4,  // New Testimonial
    name: "Elaine Snadasyder",
    title: "Founder of Art xyz comms",
    thumbnail: `${Frame}`,
    quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Ea provident soluta sed Quis omnis aut ipsa sunt est repudiandae voluptatibus. In sapiente voluptatem aut Quis repellendus vel consequuntur rerum non architecto architecto et dignissimos mollitia est molestiae dolor. Aut aspernatur dolor a officiis voluptatem sed neque reprehenderit qui quaerat debitis ut impedit voluptatem?"
  }
  
  // Add more testimonials here
];

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const handlePrevious = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative bg-gradient-to-r from-red-900 to-red-950 custom-gradient">
      <div className="max-w-[1170px] mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Video Player */}
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
            <img
              src={Youtube}
              alt="Video thumbnail"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              {/* Progress Bar */}
              <div className="relative h-1 bg-gray-600 rounded-full mb-4">
                <div
                  className="absolute h-full bg-amber-500 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
              {/* Controls */}
              <div className="flex items-center justify-between">
                <button
                  className="text-white hover:bg-white/20 p-2"
                  onClick={togglePlay}
                >
                  {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                </button>
                <span className="text-white text-sm">
                  01:35 / 03:21
                </span>
                <button
                  className="text-white hover:bg-white/20 p-2"
                >
                  <Maximize2 className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Our Clients Trust Us
            </h2>
            <div className="flex items-center gap-4 mb-6">
              <img
                src={testimonials[currentTestimonial].thumbnail}
                alt={testimonials[currentTestimonial].name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <h3 className="font-semibold">
                  {testimonials[currentTestimonial].name}
                </h3>
                <p className="text-gray-300">
                  {testimonials[currentTestimonial].title}
                </p>
              </div>
            </div>
            <p className="text-gray-300 mb-8">
              {testimonials[currentTestimonial].quote}
            </p>
            <button className="bg-red-800 hover:bg-red-700 text-white px-4 py-2 rounded-full bg-amber-500">
              Schedule a Call
            </button>
             {/* Testimonial Carousel */}
             <div className="mt-12 relative">
              <div className="flex gap-4 overflow-x-hide pb-4 scrollbar-hide">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.id}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`relative flex-shrink-0 w-32 aspect-video rounded-lg overflow-hidden ${
                      currentTestimonial === index ? 'ring-2 ring-amber-500' : ''
                    }`}
                  >
                    <img
                      src={testimonial.thumbnail}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                      <Play className="w-6 h-6 text-white" />
                    </div>
                  </button>
                ))}
              </div>

              {/* Move the Navigation Arrows outside the carousel */}
              <button
                className="absolute left-[-40px] top-1/2 -translate-y-1/2 text-white hover:bg-white/20 p-2"
                onClick={handlePrevious}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                className="absolute right-[-40px] top-1/2 -translate-y-1/2 text-white hover:bg-white/20 p-2"
                onClick={handleNext}
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

          </div>
        </div>

        
      </div>
    </section>
  );
}

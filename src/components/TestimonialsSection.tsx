import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Opti-Mode Diagnostics has transformed our clinical workflow. Their AI-powered solutions have reduced our diagnostic time by 40% while improving accuracy.",
    author: "Dr. Sarah Johnson",
    role: "Chief of Pathology, Metro General Hospital",
    rating: 5
  },
  {
    quote: "The precision and reliability of Opti-Mode's genetic sequencing platform has been instrumental in our research. It's truly best-in-class technology.",
    author: "Prof. Michael Chen",
    role: "Director, Institute of Genomic Medicine",
    rating: 5
  },
  {
    quote: "Implementing Opti-Mode's diagnostic suite has been one of our best decisions. The integration was seamless, and the results have exceeded our expectations.",
    author: "Emma Rodriguez",
    role: "Healthcare Operations Director, Pinnacle Medical",
    rating: 5
  },
  {
    quote: "As a rural healthcare provider, Opti-Mode's remote diagnostic tools have been game-changing, allowing us to provide specialized care previously unavailable to our patients.",
    author: "Dr. James Wilson",
    role: "Medical Director, Heartland Health",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="testimonials" className="bg-[#FCF8F8] py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <span className="inline-block px-3 py-1 bg-[#9292D8]/10 text-[#9292D8] rounded-full text-sm font-medium mb-4">
            Client Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4 text-[#1B2A41]">
            Trusted by Healthcare Leaders
          </h2>
          <p className="text-black">
            Hear what healthcare professionals and institutions are saying about their experience with Opti-Mode Diagnostics.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg animate-scale-in">
            <div className="mb-6 flex">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
              "{testimonials[current].quote}"
            </blockquote>
            
            <div>
              <p className="font-bold text-foreground">{testimonials[current].author}</p>
              <p className="text-muted-foreground">{testimonials[current].role}</p>
            </div>
            
            <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-[#9292D8]/10 rounded-full flex items-center justify-center">
              <div className="w-10 h-10 bg-[#9292D8] rounded-full flex items-center justify-center">
                <div className="w-6 h-6 text-white">"</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-10 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  current === index ? 'bg-[#9292D8] scale-125' : 'bg-[#9292D8]/30'
                }`}
                onClick={() => {
                  if (isAnimating) return;
                  setIsAnimating(true);
                  setCurrent(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }}
              />
            ))}
          </div>
          
          <div className="hidden sm:flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 px-4">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#9292D8] hover:text-white transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#9292D8] hover:text-white transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

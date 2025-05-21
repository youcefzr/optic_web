import React from 'react';

interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  image: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const { name, text, rating, image } = testimonial;

  return (
    <div className="bg-blue-50 p-6 rounded-xl shadow-sm border border-blue-100 transition-all duration-300 hover:shadow-md">
      <div className="flex items-center mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-14 h-14 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="font-semibold text-gray-800">{name}</h3>
          <div className="flex">
            {[...Array(rating)].map((_, i) => (
              <svg 
                key={i} 
                className="w-5 h-5 text-yellow-500" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
      <p className="italic text-gray-600">"{text}"</p>
    </div>
  );
};

export default TestimonialCard;
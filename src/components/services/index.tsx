import React from 'react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies and best practices.',
    icon: '💻'
  },
  {
    id: 2,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
    icon: '📱'
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces designed with user experience in mind.',
    icon: '🎨'
  },
  {
    id: 4,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment solutions for your applications.',
    icon: '☁️'
  },
  {
    id: 5,
    title: 'Consulting',
    description: 'Expert technical consulting to help you make informed decisions about your projects.',
    icon: '💡'
  },
  {
    id: 6,
    title: 'Maintenance',
    description: 'Ongoing support and maintenance to keep your applications running smoothly.',
    icon: '🔧'
  }
];

export const Services: React.FC = () => {
  return (
    <section id='services' className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive solutions to help your business grow and succeed in the digital world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6">
                <button className="text-purple-600 hover:text-purple-800 font-medium transition-colors duration-200">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to get started?
            </h3>
            <p className="text-gray-600 mb-6">
              Let&apos;s discuss how we can help bring your vision to life.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};


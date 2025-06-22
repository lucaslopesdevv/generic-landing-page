import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const About: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Lucas Lopes",
      role: "CEO & Founder",
      bio: "Passionate about creating innovative solutions that make a difference in people's lives.",
      image: "https://github.com/lucaslopesdevv.png"
    },
    {
      name: "Gustavo ",
      role: "CTO",
      bio: "Technology enthusiast with 10+ years of experience in software development and architecture.",
     image: "https://github.com/gustavogamasa.png"
    },
    {
      name: "Mateus Marques",
      role: "Head of Design",
      bio: "Creative designer focused on user-centered design and beautiful, functional interfaces.",
      image: "/assets/mateus.jpg"
    }
  ];

  return (
    <div id='about' className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-violet-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl leading-relaxed">
            We're passionate about building innovative solutions that empower businesses and individuals to achieve their goals.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              To create cutting-edge technology solutions that simplify complex problems and enhance the way people work and live. 
              We believe in the power of innovation, collaboration, and user-centered design to drive meaningful change.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-violet-600">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-gray-300 text-text-primary p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4 text-text-primary">🚀</div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p>Constantly pushing boundaries and exploring new possibilities in technology.</p>
            </div>
            <div className="text-center bg-gray-300 text-text-primary p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4 text-text-primary">🤝</div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p>Working together as a team to achieve extraordinary results.</p>
            </div>
            <div className="text-center bg-gray-300 text-text-primary p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4 text-text-primary">🎯</div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p>Striving for the highest quality in everything we create.</p>
            </div>
            <div className="text-center bg-gray-300 text-text-primary p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4 text-text-primary">💡</div>
              <h3 className="text-xl font-semibold mb-3">User-First</h3>
              <p>Putting our users at the center of every decision we make.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow" >
                <div className="h-82 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-violet-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <h3 className="text-4xl font-bold mb-2">500+</h3>
              <p className="text-purple-100">Happy Clients</p>
            </div>
            <div className="p-4">
              <h3 className="text-4xl font-bold mb-2">50+</h3>
              <p className="text-purple-100">Projects Completed</p>
            </div>
            <div className="p-4">
              <h3 className="text-4xl font-bold mb-2">5+</h3>
              <p className="text-purple-100">Years Experience</p>
            </div>
            <div className="p-4">
              <h3 className="text-4xl font-bold mb-2">24/7</h3>
              <p className="text-purple-100">Support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

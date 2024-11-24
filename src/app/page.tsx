import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const HeroSection = () => (
  <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl font-bold mb-4">Software Developer</h1>
          <p className="text-xl mb-8">Specialized in Flutter Mobile Development & Python Backend</p>
          <div className="flex gap-4">
            <Button className="bg-white text-blue-800 hover:bg-blue-100">Download CV</Button>
            <Button className="bg-transparent border-2 hover:bg-blue-700">Contact Me</Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 rounded-full bg-blue-400 flex items-center justify-center">
            <span className="text-6xl">ðŸ‘¨â€ðŸ’»</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Portfolio = () => {
  const skills = {
    frontend: ['Flutter', 'Dart', 'React', 'HTML/CSS'],
    backend: ['Python', 'Flask', 'RESTful APIs', 'SQLite'],
    tools: ['Git', 'VS Code', 'Android Studio', 'Postman']
  };

  const projects = [
    {
      name: "SwapIT",
      description: "A sophisticated marketplace mobile application enabling users to trade items seamlessly. Features include real-time chat, item matching algorithm, and secure user authentication.",
      link: "https://play.google.com/store/apps/details?id=com.egyria.swapit",
      technologies: ['Flutter', 'Dart', 'Firebase'],
      image: "/api/placeholder/400/300"
    },
    {
      name: "Farmers Marketplace",
      description: "An innovative agricultural marketplace connecting farmers directly with buyers. Includes features like price tracking, inventory management, and delivery coordination.",
      link: "https://play.google.com/store/apps/details?id=com.reotech.farmers_marketplace",
      technologies: ['Flutter', 'Dart', 'Flask', 'SQLite'],
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      
      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-lg leading-relaxed">
                I am a software developer specializing in mobile app development using Flutter and Dart. 
                Currently pursuing a BSc in Mathematics and Computer Science at the National Open University of Nigeria, 
                I combine strong theoretical knowledge with practical development experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="capitalize">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, index) => (
                      <span 
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    View on Google Play
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                  <div className="space-y-4">
                    <p className="flex items-center gap-2">
                      ðŸ“§ Your Email
                    </p>
                    <p className="flex items-center gap-2">
                      ðŸ“± Your Phone Number
                    </p>
                    <div className="flex gap-4 mt-6">
                      <a href="#" className="text-gray-700 hover:text-blue-600">
                        GitHub
                      </a>
                      <a href="#" className="text-gray-700 hover:text-blue-600">
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <form className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full p-2 border rounded"
                    />
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full p-2 border rounded"
                    />
                    <textarea 
                      placeholder="Your Message" 
                      className="w-full p-2 border rounded h-32"
                    />
                    <Button className="w-full">Send Message</Button>
                  </form>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-4 sm:left-10 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-6 sm:right-20 w-1 h-1 bg-blue-400 rounded-full animate-bounce"></div>
      <div className="absolute bottom-40 left-8 sm:left-20 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>

      <div className="relative z-10 container mx-auto px-4 py-10 sm:py-12">
        {/* Header Section */}
        <header className="text-center mb-16 sm:mb-20 pt-12 sm:pt-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-green-400 text-sm font-medium">Available for opportunities</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 leading-tight">
            Hey, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent underline decoration-2 underline-offset-8">
              Faisal
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-purple-400 mb-8 font-medium">
            Creative Fullstack Developer
          </p>

          {/* Social Buttons */}
          <div className="flex justify-center flex-wrap gap-3 sm:gap-4 mb-12">
            <a
              href="https://linkedin.com/in/faisalbraitqurohman"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-5 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
            
            <a
              href="https://github.com/FaisalBraitQurohman"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-5 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>Github</span>
            </a>
            
            <a
              href="mailto:faisalbraitqurohman@gmail.com"
              className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-5 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Mail</span>
            </a>
          </div>

          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-1">
            Hi, I am Faisal, a passionate full-stack developer from Indonesia, with expertise in React, Next.js, Node.js, and modern web technologies. 
            I love creating innovative digital experiences that connect people and solve real-world problems!
          </p>
        </header>

        {/* Timeline Section */}
        <section className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 sm:mb-12 text-center">My Timeline</h2>
          <div className="max-w-4xl mx-auto relative px-2">
            {/* Centered Timeline Line */}
            <div className="absolute sm:hidden left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500"></div>
            <div className="absolute hidden sm:block left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500"></div>
            
            {[
              {
                date: "2023-12-01",
                title: "Portfolio Website",
                description: "Created personal portfolio with Next.js and modern design",
                side: "left"
              },
              {
                date: "2023-09-01", 
                title: "Web Development",
                description: "Started learning modern web technologies and frameworks",
                side: "right"
              },
              {
                date: "2023-06-01",
                title: "Programming Journey",
                description: "Began my journey in software development and coding",
                side: "left"
              },
              {
                date: "2023-01-01",
                title: "First Steps",
                description: "Discovered my passion for technology and programming",
                side: "right"
              }
            ].map((item, index) => (
              <div key={index} className="relative mb-8 flex items-center">
                {/* Timeline Dot - Centered on the line */}
                <div className="absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 left-[14px] w-3 h-3 bg-purple-500 rounded-full border-2 border-black z-10"></div>
                
                {/* Content - Positioned horizontally beside the dot */}
                <div className={`flex-1 ${item.side === 'left' ? 'pl-8 sm:pr-12 sm:text-right' : 'pl-8 sm:pl-12 sm:text-left'}`}>
                  <div className="text-purple-400 text-xs sm:text-sm mb-1 font-mono">{item.date}</div>
                  <div className="text-white font-medium text-sm sm:text-base">{item.title}</div>
                  <div className="text-gray-400 text-xs sm:text-sm">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 sm:mb-12 text-center">Tech Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {[
              { name: "Next.js", icon: "⚡" },
              { name: "React", icon: "⚛️" },
              { name: "TypeScript", icon: "📘" },
              { name: "Node.js", icon: "🟢" },
              { name: "Tailwind", icon: "🎨" },
              { name: "MongoDB", icon: "🍃" },
              { name: "PostgreSQL", icon: "🐘" },
              { name: "Git", icon: "📝" },
              { name: "Vercel", icon: "▲" },
              { name: "API", icon: "🔗" }
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-gray-900 p-4 rounded-lg text-center hover:bg-gray-800 transition-all duration-300 hover:scale-105 border border-gray-800 hover:border-purple-500"
              >
                <div className="text-2xl mb-1 sm:mb-2">{tech.icon}</div>
                <div className="text-xs sm:text-sm font-medium">{tech.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 sm:mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Portfolio Website",
                description: "Personal portfolio built with Next.js and Tailwind CSS",
                tech: ["Next.js", "TypeScript", "Tailwind"],
                link: "https://faisal-portfolio2.vercel.app/",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                title: "E-commerce Platform",
                description: "Modern e-commerce solution with React and Node.js",
                tech: ["React", "Node.js", "MongoDB"],
                link: "#",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "Task Management App",
                description: "Collaborative task management application",
                tech: ["React", "Firebase", "Material-UI"],
                link: "#",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                title: "Blog Platform",
                description: "Personal blog with static site generation",
                tech: ["Next.js", "Markdown", "SEO"],
                link: "#",
                gradient: "from-orange-500 to-red-500"
              }
            ].map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-purple-500 transition-all duration-300 hover:scale-105 group"
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm sm:text-base">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group/link"
                  >
                    View Project
                    <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Let&apos;s Create Something Amazing</h2>
          <p className="text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            I&apos;m always excited to work on new projects and collaborate with creative minds. 
            Let&apos;s bring your ideas to life!
          </p>
          <div className="flex justify-center flex-wrap gap-3 sm:gap-6">
            <a
              href="mailto:faisalbraitqurohman@gmail.com"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 font-medium"
            >
              Get In Touch
            </a>
            <a
              href="https://github.com/FaisalBraitQurohman"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gray-600 text-gray-300 hover:border-purple-500 hover:text-purple-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 font-medium"
            >
              View Code
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

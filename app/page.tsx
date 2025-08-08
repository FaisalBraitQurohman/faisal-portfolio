export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
            Faisal Brait Qurohman
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Web Developer & Designer
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="mailto:faisalbraitqurohman@gmail.com"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg transition-colors"
            >
              View Projects
            </a>
          </div>
        </header>

        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I&apos;m a passionate web developer with expertise in modern web technologies. 
              I love creating beautiful, functional, and user-friendly websites that make a difference.
              My journey in web development started with curiosity and has evolved into a passion for 
              building digital experiences that connect people.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              "React.js", "Next.js", "TypeScript", "JavaScript",
              "HTML/CSS", "Tailwind CSS", "Node.js", "Git"
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Portfolio Website",
                description: "Personal portfolio built with Next.js and Tailwind CSS",
                tech: ["Next.js", "TypeScript", "Tailwind CSS"],
                link: "https://faisal-portfolio2.vercel.app/"
              },
              {
                title: "E-commerce Platform",
                description: "Modern e-commerce solution with React and Node.js",
                tech: ["React", "Node.js", "MongoDB"],
                link: "#"
              },
              {
                title: "Task Management App",
                description: "Collaborative task management application",
                tech: ["React", "Firebase", "Material-UI"],
                link: "#"
              }
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            I&apos;m always open to new opportunities and exciting projects.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:faisalbraitqurohman@gmail.com"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors"
            >
              Get In Touch
            </a>
            <a
              href="https://github.com/FaisalBraitQurohman"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gray-600 dark:border-gray-400 text-gray-600 dark:text-gray-400 hover:bg-gray-600 hover:text-white px-8 py-3 rounded-lg transition-colors"
            >
              GitHub
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

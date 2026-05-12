import Navbar from "../components/Navbar";

export default function Home() {
  const projects = [
    {
      title: "Smart Attendance System",
      desc: "AI-powered attendance automation using computer vision and facial recognition.",
      tech: ["Python", "OpenCV", "AI"],
      emoji: " ",
    },
    {
      title: "AI / IoT Research",
      desc: "Research concept integrating AI and IoT for impactful automation.",
      tech: ["AI", "IoT", "Research"],
      emoji: " ",
    },
    {
      title: "Smart Parking Monitoring",
      desc: "Computer vision parking monitoring and automation solution.",
      tech: ["Computer Vision", "Python", "Automation"],
      emoji: " ",
    },
  ];

  const experiences = [
    "Google Developer Student Club Lead — Universitas Ciputra Makassar",
    "Faith Diversity Unity Lead — Universitas Ciputra Makassar",
    "Student Council Member — Universitas Ciputra Makassar",
    "Student Summer Program Participant — Universitas Ciputra Makassar",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* HERO */}
      <section id="about" className="pt-36 px-6 pb-20">
        <div className="section-container grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-blue-400 uppercase tracking-[0.3em] text-xs mb-4">
              AI • COMPUTER VISION • UI/UX DESIGN
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Alfian
              <br />
              Tenggara Putra
            </h1>

            <p className="mt-6 text-2xl text-slate-300">
              Web Developer • Computer Vision Developer • UI/UX Designer
            </p>

            <p className="mt-8 text-slate-400 text-lg leading-relaxed max-w-xl">
              Informatics student passionate about Artificial Intelligence,
              Computer Vision, digital innovation, and impactful technology.
            </p>

            <div className="mt-10 flex gap-4 flex-wrap">
              <a
                href="#projects"
                className="bg-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-blue-500 transition"
              >
                View Projects
              </a>

              <a
                href="./Curriculum Vitae A Alfian Tenggara Putra.pdf"
                className="border border-slate-700 px-8 py-4 rounded-2xl hover:bg-slate-800 transition"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* PROFILE IMAGE */}
          <div className="flex justify-center">
            <div className="w-[400px] h-[500px] rounded-3xl border border-slate-700 shadow-2xl overflow-hidden">
              <img
                src="/FotoAlfian.png"
                alt="Alfian Tenggara Putra"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 py-24">
        <div className="section-container">
          <h2 className="text-5xl font-bold text-center mb-16">Projects</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:-translate-y-2 transition"
              >
                <div className="h-52 rounded-2xl bg-gradient-to-br from-blue-500/20 to-slate-800 mb-6 flex items-center justify-center text-6xl">
                  {project.emoji}
                </div>

                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>

                <p className="text-slate-400 mb-6">{project.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-slate-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="px-6 py-24 bg-slate-900/40">
        <div className="section-container">
          <h2 className="text-5xl font-bold text-center mb-16">Experience</h2>

          <div className="space-y-6 max-w-4xl mx-auto">
            {experiences.map((item) => (
              <div
                key={item}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-24">
        <div className="section-container text-center">
          <h2 className="text-5xl font-bold mb-8">Let’s Connect</h2>

          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Open to AI, technology, innovation, and impactful collaborations.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://github.com/alfiantenggara"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 px-8 py-4 rounded-2xl hover:bg-blue-500 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/alfiantenggara/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-700 px-8 py-4 rounded-2xl hover:bg-slate-800 transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:ranidy632@email.com"
              className="border border-slate-700 px-8 py-4 rounded-2xl hover:bg-slate-800 transition"
            >
              Email
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
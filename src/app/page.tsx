import Navbar from "../components/Navbar";
import { Mail, Cpu, Code2, Palette, Sparkles, Clock3 } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

export default function Home() {
  const featuredProjects = [
  {
    title: "SolowaesiLand",
    image: "/images/solowaesiland.png",
    desc: "Tour & travel website developed as the 2nd Semester-end Project at Universitas Ciputra with my team. Designed to create engaging travel experiences for exploring Sulawesi destinations.",
    tech: ["JavaScript", "Web Development", "UI/UX", "Teamwork"],
  },
  {
    title: "BelajarYuk",
    image: "/images/belajaryuk.png",
    desc: "Educational application developed as the 1st Semester-end Project to support accessible and interactive learning experiences.",
    tech: ["Python", "Education App", "Teamwork"],
  },
  {
    title: "Smart Parking Monitoring",
    image: "/images/smartparking.png",
    desc: "Currently developing an intelligent parking monitoring system using computer vision for automation, plate recognition, and real-time analysis.",
    tech: ["Computer Vision", "Python", "AI", "Ongoing"],
    ongoing: true,
  },
  {
    title: "Smart Attendance System",
    image: "/images/smartattendance.png",
    desc: "AI-powered attendance automation using facial recognition and computer vision technology.",
    tech: ["OpenCV", "AI", "Python"],
  },
];

  const devStack = [
    "Python",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "OpenCV",
    "AI / Machine Learning",
    "Git",
    "GitHub",
  ];

  const creativeTools = ["Figma", "VS Code", "Canva"];

  const experiences = [
    {
      role: "President of Google Developer Group On Campus",
      org: "Google Developers Group On Campus Universitas Ciputra Makassar",
      time: "Oct 2024 — Oct 2025",
    },
    {
      role: "President of Faith Diversity Unity Islam",
      org: "Universitas Ciputra Makassar",
      time: "Jul 2024 — Jul 2025",
    },
    {
      role: "Member of Information & Communication Department",
      org: "Universitas Ciputra Makassar",
      time: "May 2024 — May 2025",
    },
    {
      role: "Information Technology Internship",
      org: "Claro Hotel Makassar",
      time: "Jan 2022 — Mar 2022",
    },
    {
      role: "Master of Ceremony — Parents Gathering",
      org: "Universitas Ciputra Makassar",
      time: "Aug 2024",
    },
    {
      role: "Master of Ceremony — Open House",
      org: "Universitas Ciputra Makassar",
      time: "May 2024",
    },
    {
      role: "Security Division — GenZ Gathering",
      org: "Universitas Ciputra Makassar",
      time: "Sep 2024",
    },
    {
      role: "President of SMK Telkom Makassar E-Sport",
      org: "SMK Telkom Makassar",
      time: "Jan 2022 — Jan 2023",
    },
    {
      role: "Member of Science & Technology",
      org: "SMK Telkom Makassar",
      time: "Jan 2022 — Jan 2023",
    },
    {
      role: "Participants Engineering Physics Week 2024",
      org: "Institut Teknologi Sepuluh Nopember",
      time: "2024",
    },
    {
      role: "Participants Polines Robotic Contest 2024",
      org: "Politeknik Negeri Semarang",
      time: "2024",
    },
    {
      role: "Participants Hasanuddin Techno Fest #8",
      org: "Universitas Hasanuddin",
      time: "2024",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAFBFF] text-slate-900">
      <Navbar />

      {/* HERO */}
      <section
        id="home"
        className="pt-36 md:pt-44 px-6 pb-28 bg-gradient-to-b from-white via-[#F8FAFF] to-[#EEF4FF]"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-slate-500 text-lg font-medium mb-4">Halo, Saya</p>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Alfian
              <br />
              Tenggara Putra
            </h1>

            <div className="mt-8">
              <p className="text-slate-500 text-lg mb-2">Seorang</p>
              <h2 className="text-2xl md:text-3xl font-semibold leading-relaxed">
                AI Engineer | Web Developer | Front-End Developer
              </h2>
            </div>

            <div className="flex gap-4 mt-8 flex-wrap">
              <a href="https://github.com/alfiantenggara" target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition">
                <FaGithub size={20} />
              </a>

              <a href="https://www.linkedin.com/in/alfiantenggara/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition">
                <FaLinkedin size={20} />
              </a>

              <a href="https://www.instagram.com/alfiantenggara_" target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition">
                <FaInstagram size={20} />
              </a>

              <a href="https://www.tiktok.com/@lahsayakanpian" target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition">
                <FaTiktok size={20} />
              </a>

              <a href="mailto:ranidy632@gmail.com?subject=Portfolio Inquiry" className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition">
                <Mail size={20} />
              </a>
            </div>

            <p className="mt-10 text-slate-600 text-lg leading-relaxed max-w-xl">
              I build intelligent digital experiences by combining artificial
              intelligence, creativity, and modern engineering to create
              meaningful real-world impact.
            </p>

            <div className="flex gap-4 mt-10 flex-wrap">
              <a href="#projects" className="px-8 py-4 rounded-2xl bg-slate-900 text-white font-medium shadow-lg hover:opacity-90 transition">
                Lihat Proyek
              </a>

              <a href="#contact" className="px-8 py-4 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-lg transition font-medium">
                Kontak Saya
              </a>

              <a href="/cv/Alfian-CV.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-lg transition font-medium">
                View CV
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-200 rounded-full blur-3xl opacity-60" />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-60" />

              <div className="relative w-[340px] md:w-[430px] h-[520px] rounded-[40px] overflow-hidden border border-white shadow-2xl bg-white">
                <img
                  src="/FotoAlfian.png"
                  alt="Alfian"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH */}
      <section id="tech" className="px-6 py-28">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-slate-500 mb-3">Tools & Expertise</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Tech Stack & Creative Tools
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-[32px] border border-slate-200 shadow-xl p-10">
              <div className="flex items-center gap-3 mb-8">
                <Code2 />
                <h3 className="text-2xl font-semibold">Development Stack</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {devStack.map((tech) => (
                  <span key={tech} className="px-5 py-3 bg-slate-100 rounded-2xl text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-[32px] border border-slate-200 shadow-xl p-10">
                <div className="flex items-center gap-3 mb-6">
                  <Palette />
                  <h3 className="text-2xl font-semibold">Creative Tools</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {creativeTools.map((tool) => (
                    <span key={tool} className="px-5 py-3 bg-slate-100 rounded-2xl text-sm font-medium">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-slate-900 to-indigo-900 rounded-[32px] p-10 text-white shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Cpu />
                  <h3 className="text-2xl font-semibold">Focus Area</h3>
                </div>

                <p className="text-slate-200 leading-relaxed">
                  Artificial Intelligence, Computer Vision, frontend engineering,
                  and impactful digital product development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* PROJECTS */}
<section
  id="projects"
  className="px-6 py-28 bg-gradient-to-b from-[#F7FAFF] to-white"
>
  <div className="max-w-7xl mx-auto">
    <div className="mb-16">
      <p className="text-slate-500 mb-3">Selected Work</p>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
        Featured Projects
      </h2>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      {featuredProjects.map((project) => (
        <div
          key={project.title}
          className="rounded-[36px] p-10 text-white shadow-2xl hover:-translate-y-2 transition min-h-[420px] flex flex-col justify-end relative overflow-hidden"
          style={{
            backgroundImage: `
              linear-gradient(
                to top,
                rgba(15,23,42,0.92),
                rgba(15,23,42,0.45)
              ),
              url(${project.image})
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {project.ongoing && (
            <div className="absolute top-6 right-6 flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-sm">
              <Clock3 size={16} />
              Ongoing
            </div>
          )}

          <div>
            <h3 className="text-3xl font-bold mb-6">
              {project.title}
            </h3>

            <p className="text-white/90 leading-relaxed text-lg mb-8">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* EXPERIENCE */}
      <section id="experience" className="px-6 py-28">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-slate-500 mb-3">Journey & Leadership</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Experience
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp) => (
              <div
                key={exp.role}
                className="bg-white border border-slate-200 rounded-[28px] p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition"
              >
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-slate-600 mt-2">{exp.org}</p>
                <p className="text-sm text-indigo-600 mt-4 font-medium">
                  {exp.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-28 bg-gradient-to-b from-white to-[#F8FAFF]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-slate-500 mb-4">About Me</p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Building Technology With Purpose
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            I am an Informatics student passionate about artificial intelligence,
            computer vision, leadership, and impactful digital innovation.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 pb-24">
        <div className="max-w-6xl mx-auto rounded-[40px] p-14 md:p-20 text-white text-center shadow-2xl bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900">
          <p className="text-slate-300 mb-4">Let’s Connect</p>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            Let’s build something impactful together.
          </h2>

          <div className="flex justify-center gap-4 flex-wrap">
            <a href="mailto:ranidy632@gmail.com?subject=Portfolio Inquiry" className="px-8 py-4 rounded-2xl bg-white text-slate-900 font-semibold">
              Email Me
            </a>

            <a href="https://www.linkedin.com/in/alfiantenggara/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-2xl border border-white/20">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
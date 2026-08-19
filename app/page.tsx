"use client";

import Image from "next/image";

const projects = [
  {
    title: "MyJobTracker",
    description:
      "A full-stack job application tracking platform designed to help students organize applications, interviews, deadlines, and application progress.",
    tech: "Next.js • React • TypeScript • Tailwind CSS • Supabase",
    link: "https://github.com/trishant957/myjob-tracker",
    image: "/screenshots/myjobtracker.png",
  },
  {
    title: "Supermarket Sales Analysis",
    description:
      "An end-to-end data analytics project analyzing 1,000 supermarket transactions to identify sales, customer, product, and payment trends.",
    tech: "Excel • MySQL • SQL • Power BI",
    link: "https://github.com/trishant957/Supermarket-analysis-Excel-power-bi-MySQL-",
    image: "/screenshots/supermarket.png",
  },
  {
    title: "AI Supermarket Sales Analyst",
    description:
      "An interactive supermarket sales analysis application built with Python, Pandas, Plotly, and Streamlit for exploring business and sales data.",
    tech: "Python • Pandas • Plotly • Streamlit",
    link: "https://github.com/trishant957/AI-Supermarket-Sales-Analyst",
    image: "/screenshots/ai-supermarket.png",
  },
];

const skills = [
  {
    title: "Programming",
    description: "Python, JavaScript, TypeScript, SQL",
  },
  {
    title: "Web Development",
    description: "React, Next.js, Tailwind CSS, HTML, CSS",
  },
  {
    title: "Data & Analytics",
    description: "Pandas, Excel, MySQL, Power BI, Data Visualization",
  },
  {
    title: "Databases",
    description: "MySQL, PostgreSQL, Supabase",
  },
  {
    title: "Tools",
    description: "Git, GitHub, VS Code, Cursor",
  },
  {
    title: "Other",
    description: "Streamlit, Plotly, Canva, WordPress",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-xl font-bold tracking-tight">
            Trishant.
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium sm:flex">
            <a href="#about" className="transition hover:text-zinc-500">
              About
            </a>

            <a href="#skills" className="transition hover:text-zinc-500">
              Skills
            </a>

            <a href="#projects" className="transition hover:text-zinc-500">
              Projects
            </a>

            <a href="#contact" className="transition hover:text-zinc-500">
              Contact
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-black px-5 py-2 text-white transition hover:bg-zinc-800"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="mx-auto flex min-h-[680px] max-w-6xl items-center px-6 py-20"
      >
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Computer Science Student • Software & Data
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            Hi, I&apos;m Trishant.
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-zinc-600 sm:text-3xl">
            I build software and turn data into useful insights.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl">
            I&apos;m a Computer Science student focused on software
            development, data analytics, and building practical applications
            with Python, SQL, Power BI, React, and Next.js.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-black px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-zinc-800"
            >
              View My Projects
            </a>

            <a
              href="https://github.com/trishant957"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-300 px-7 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-zinc-100"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/trishant-nset-b69442285/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-300 px-7 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-zinc-100"
            >
              LinkedIn
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-300 px-7 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-zinc-100"
            >
              Resume
            </a>
          </div>

          <div className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-zinc-200 pt-8">
            <div>
              <p className="text-3xl font-bold">3+</p>
              <p className="mt-1 text-sm text-zinc-500">Projects</p>
            </div>

            <div>
              <p className="text-3xl font-bold">10+</p>
              <p className="mt-1 text-sm text-zinc-500">Technologies</p>
            </div>

            <div>
              <p className="text-3xl font-bold">CS</p>
              <p className="mt-1 text-sm text-zinc-500">Student</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                About Me
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Computer Science student who enjoys building things.
              </h2>
            </div>

            <div className="text-lg leading-8 text-zinc-600">
              <p>
                I&apos;m a Computer Science student interested in software
                development, data analytics, and technology. I enjoy building
                applications, working with data, and turning problems into
                practical solutions.
              </p>

              <p className="mt-5">
                My current projects combine web development and data analytics,
                including a job application tracker, a supermarket analytics
                dashboard, and a Python-based sales analysis application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Skills
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Tools & technologies
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-black text-sm font-bold text-white">
                  {skill.title.charAt(0)}
                </div>

                <h3 className="text-lg font-bold">{skill.title}</h3>

                <p className="mt-3 leading-7 text-zinc-600">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Projects
          </p>

          <div className="mt-3 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Things I&apos;ve built
            </h2>

            <a
              href="https://github.com/trishant957"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold hover:underline"
            >
              View all on GitHub →
            </a>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Screenshot */}
                <div className="relative h-52 overflow-hidden bg-zinc-100">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Project Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-4 flex-1 leading-7 text-zinc-600">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.split(" • ").map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-fit items-center rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-800"
                  >
                    View on GitHub →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Software
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Building Applications
              </h3>

              <p className="mt-4 leading-7 text-zinc-600">
                Developing practical web applications using React, Next.js,
                TypeScript, Tailwind CSS, and Supabase.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Data
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Analyzing Data
              </h3>

              <p className="mt-4 leading-7 text-zinc-600">
                Using SQL, Excel, Python, Pandas, and Power BI to explore
                datasets and communicate useful insights.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Learning
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Always Improving
              </h3>

              <p className="mt-4 leading-7 text-zinc-600">
                Continuously learning new technologies and building projects
                to strengthen my software and data skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-zinc-200">
        <div className="mx-auto max-w-4xl px-6 py-28 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Contact
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s connect.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
            I&apos;m interested in software development, data analytics, and
            internship opportunities where I can learn, contribute, and grow.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/trishant957"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-black px-7 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/trishant-nset-b69442285/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-300 px-7 py-3 text-sm font-semibold transition hover:bg-zinc-100"
            >
              LinkedIn
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-300 px-7 py-3 text-sm font-semibold transition hover:bg-zinc-100"
            >
              View Resume
            </a>

            <a
              href="mailto:trishantme@gmail.com"
              className="rounded-full border border-zinc-300 px-7 py-3 text-sm font-semibold transition hover:bg-zinc-100"
            >
              Email Me
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Trishant Basnet</p>

          <p>Built with Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </main>
  );
}
export default function Home() {
  const experiences = [
    {
      role: "Software Engineer Team Member",
      company: "Buckeye Vertical",
      date: "Feb 2026 — Present",
      description:
        "Developing Python and C++ software for autonomous systems and real-time computer vision on NVIDIA Jetson embedded platforms. Building perception pipelines with YOLO, OpenCV, OCR, and DINOv2/DETR, alongside a Unity3D domain-randomization pipeline generating 12K+ synthetic target configurations.",
      tags: ["Python", "C++", "ROS2", "Computer Vision", "TensorRT"],
    },
    {
      role: "Machine Learning Team Member",
      company: "iGEM — SprayAway",
      date: "2026 — Present",
      description:
        "Engineering Python-based biomedical data pipelines using Pandas, NumPy, and SciPy to process experimental PK/PD time-series data. Developing machine learning approaches that combine experimental observations with mechanistic model predictions.",
      tags: ["Python", "NumPy", "SciPy", "Machine Learning", "Time Series"],
    },
    {
      role: "Neuroimaging Research Assistant",
      company: "OSU Center for Cognitive and Behavioral Brain Imaging",
      date: "Mar 2026 — Present",
      description:
        "Engineering Python-based computational workflows for high-dimensional fMRI data using Pandas, Jupyter, and Nilearn. Developing reproducible validation and testing workflows while investigating data quality, edge cases, and reliability across participants.",
      tags: ["Python", "Pandas", "Nilearn", "Jupyter", "Data Analysis"],
    },
  ];

  const projects = [
    {
      title: "Medical Knowledge RAG Assistant",
      description:
        "An end-to-end healthcare question-answering application that combines semantic retrieval with large language models to generate evidence-supported responses from medical knowledge sources.",
      tags: [
        "Python",
        "FastAPI",
        "LangChain",
        "Hugging Face",
        "ChromaDB",
      ],
    },
    {
      title: "Medical Image Classification & Explainability",
      description:
        "A computer vision pipeline for skin lesion classification using CNN and transfer-learning models, with Grad-CAM analysis to investigate model predictions and failure modes.",
      tags: ["Python", "TensorFlow", "Keras", "CNN", "Computer Vision"],
    },
    {
      title: "Intraoperative Physiological Event Intelligence Platform",
      description:
        "A multimodal clinical time-series platform that reconstructs physiological timelines from ECG, SpO₂, blood pressure, respiratory signals, and medication events while detecting significant physiological events.",
      tags: ["Python", "PyTorch", "FastAPI", "PostgreSQL", "SciPy"],
    },
  ];

  const skills = [
    "Python",
    "C++",
    "C",
    "Java",
    "C#",
    "SQL",
    "JavaScript",
    "Git",
    "Docker",
    "Linux",
    "ROS2",
    "FastAPI",
    "PyTorch",
    "TensorFlow",
    "OpenCV",
    "YOLO",
    "TensorRT",
  ];

  return (
    <main className="min-h-screen bg-[#fafaf9] text-zinc-900">
      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full border-b border-zinc-200/70 bg-[#fafaf9]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a
            href="#top"
            className="text-lg font-semibold tracking-tight transition-opacity hover:opacity-60"
          >
            Lakshmi.
          </a>

          <div className="hidden gap-8 text-sm text-zinc-500 md:flex">
            <a href="#about" className="transition-colors hover:text-zinc-900">
              About
            </a>
            <a
              href="#experience"
              className="transition-colors hover:text-zinc-900"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="transition-colors hover:text-zinc-900"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="transition-colors hover:text-zinc-900"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="transition-colors hover:text-zinc-900"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="top"
        className="mx-auto flex min-h-screen max-w-6xl items-center px-6 pb-20 pt-32"
      >
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            CSE · The Ohio State University
          </p>

          <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl md:text-7xl">
            I build software
            <br />
            for{" "}
            <span className="text-zinc-400">
              intelligent systems.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-500">
            I&apos;m an Honors Computer Science & Engineering student interested
            in building reliable software at the intersection of{" "}
            <span className="font-medium text-zinc-800">AI/ML</span>,{" "}
            <span className="font-medium text-zinc-800">
              computer vision
            </span>
            , and <span className="font-medium text-zinc-800">healthcare</span>.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-zinc-700"
            >
              Explore my work
            </a>

            <a
              href="#contact"
              className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-700 transition-all hover:-translate-y-0.5 hover:border-zinc-500"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-t border-zinc-200/80 bg-white"
      >
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">

            {/* Left side */}
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
                About
              </p>

              <div className="mt-8 overflow-hidden rounded-2xl">
                <img
                  src="/profile.jpg"
                  alt="Lakshmi"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Right side */}
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Curious about how technology can make a meaningful difference.
              </h2>

              <div className="mt-8 space-y-5 text-base leading-7 text-zinc-500">
                <p>
                  I&apos;m a Computer Science & Engineering student at The Ohio
                  State University, with minors in Psychology and Statistics.
                </p>

                <p>
                  My interests span software engineering, machine learning,
                  computer vision, and systems that work with real-world data.
                  I enjoy taking problems that are messy or complex and turning
                  them into systems that are useful, testable, and reliable.
                </p>

                <p>
                  Outside the classroom, I build autonomous systems with
                  Buckeye Vertical, develop machine learning models through
                  iGEM, and work with computational neuroimaging research at
                  Ohio State.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* EXPERIENCE */}
      <section id="experience" className="border-t border-zinc-200/80">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="mb-16">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
              Experience
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Building beyond the classroom.
            </h2>
          </div>

          <div className="space-y-0">
            {experiences.map((experience, index) => (
              <div
                key={experience.company}
                className="group grid gap-6 border-t border-zinc-200 py-10 md:grid-cols-[180px_1fr]"
              >
                <div className="text-sm text-zinc-400">
                  {experience.date}
                </div>

                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold">
                        {experience.role}
                      </h3>
                      <p className="mt-1 text-sm text-zinc-500">
                        {experience.company}
                      </p>
                    </div>

                    <span className="text-xl text-zinc-300 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>

                  <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-500">
                    {experience.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {experience.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div className="border-t border-zinc-200" />
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="border-t border-zinc-200/80 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="mb-16">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
              Selected Work
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Things I&apos;ve built.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group flex min-h-[360px] flex-col rounded-2xl border border-zinc-200 bg-[#fafaf9] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-200/40"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium tracking-[0.2em] text-zinc-400">
                    0{index + 1}
                  </span>

                  <span className="text-xl text-zinc-300 transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </div>

                <h3 className="mt-12 text-xl font-semibold tracking-tight">
                  {project.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-6 text-zinc-500">
                  {project.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="border-t border-zinc-200/80">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
                Skills
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                Tools I work with.
              </h2>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-4">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-lg text-zinc-500 transition-colors hover:text-zinc-900"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-zinc-200/80 bg-zinc-900 text-white"
      >
        <div className="mx-auto max-w-6xl px-6 py-28">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Contact
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Let&apos;s build something meaningful.
          </h2>

          <p className="mt-6 max-w-xl text-zinc-400">
            I&apos;m always interested in software engineering, AI/ML, and
            healthcare technology opportunities.
          </p>

          <div className="mt-10 flex flex-wrap gap-6 text-sm">
            <a
              href="mailto:lakshmiamondeddu@gmail.com"
              className="transition-colors hover:text-zinc-300"
            >
              Email ↗
            </a>

            <a
              href="https://github.com/lakshmimon"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-zinc-300"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/lakshmimon/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-zinc-300"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-900 px-6 pb-10 text-sm text-zinc-600">
        <div className="mx-auto flex max-w-6xl justify-between border-t border-zinc-800 pt-6">
          <span>© {new Date().getFullYear()} Lakshmi Mondeddu</span>
          <span>Built with Next.js</span>
        </div>
      </footer>
    </main>
  );
}


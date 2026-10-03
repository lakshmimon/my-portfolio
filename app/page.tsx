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
  title: "Flight Operations Event Platform",
  description:
    "An event-driven platform for processing and monitoring flight operations across distributed services.",
  tags: [
    "Python",
    "FastAPI",
    "Apache Kafka",
    "PostgreSQL",
    "Redis",
    "React",
    "Docker",
  ],
  details: [
    "Engineered an event-driven flight operations platform using FastAPI, Apache Kafka, and PostgreSQL to process flight, crew, gate, and operational events across distributed services.",
    "Built RESTful APIs and asynchronous Kafka consumers with retry handling, idempotent event processing, and persistent state management to support reliable real-time updates.",
    "Developed a React dashboard with WebSocket-based updates and Redis caching to monitor flight status, crew assignments, gate availability, and system events in real time.",
    "Containerized services with Docker and implemented automated testing and CI/CD pipelines to validate API functionality, event-processing workflows, and service integration.",
  ],
},
{
  title: "Real-Time Drone Monitoring & Anomaly Detection",
  description:
    "A real-time telemetry and monitoring platform for autonomous aircraft with anomaly detection.",
  tags: [
    "Python",
    "C++",
    "ROS2",
    "Apache Kafka",
    "PostgreSQL",
    "React",
    "PyTorch",
    "Docker",
  ],
  details: [
    "Engineered a real-time drone telemetry platform using ROS2, C++, and Apache Kafka to ingest and process flight data including position, altitude, velocity, heading, and battery status.",
    "Built asynchronous data-processing services and REST APIs to detect abnormal flight behavior, persist telemetry in PostgreSQL, and generate real-time operational alerts.",
    "Developed a React monitoring dashboard with live telemetry visualization and historical flight analysis, enabling operators to track multiple autonomous aircraft simultaneously.",
    "Trained and integrated an anomaly-detection model in PyTorch and containerized the system with Docker, implementing automated testing and CI/CD for reproducible deployment.",
  ],
},
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
      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden border-b border-zinc-200/80 bg-[#fafafa]">
        {/* Subtle background grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #e4e4e7 1px, transparent 1px), linear-gradient(to bottom, #e4e4e7 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Soft background glow */}
        <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-zinc-200/40 blur-3xl" />

        <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl items-center px-6 py-24">
          <div className="grid w-full items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">

            {/* LEFT — INTRO */}
            <div>
              <div className="mb-8 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
                <span className="h-px w-8 bg-zinc-400" />
                CSE · Ohio State University
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-zinc-950 sm:text-6xl lg:text-7xl">
                I build software
                <br />
                <span className="text-zinc-400">for intelligent systems.</span>
              </h1>

              <p className="mt-8 text-lg leading-8 text-zinc-600">
  Hi! I&apos;m Lakshmi, an Honors Computer Science and Engineering student
  at The Ohio State University, with minors in Psychology and Statistics.
  I&apos;m interested in AI/ML and enjoy building data-driven systems that
  turn complex problems into practical solutions for people.
</p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-3 rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-800"
                >
                  View my work
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-medium text-zinc-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-500"
                >
                  Get in touch
                </a>
              </div>

              <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 text-sm text-zinc-400">
                <span>Python</span>
                <span>C++</span>
                <span>Computer Vision</span>
                <span>Machine Learning</span>
              </div>
            </div>

            {/* RIGHT — TECHNICAL VISUAL */}
            <div className="relative hidden lg:block">
              <div className="relative mx-auto aspect-square max-w-[430px]">

                {/* Outer rings */}
                <div className="absolute inset-8 rounded-full border border-zinc-200" />
                <div className="absolute inset-20 rounded-full border border-zinc-200" />
                <div className="absolute inset-32 rounded-full border border-zinc-300" />

                {/* Connection lines */}
                <div className="absolute left-1/2 top-1/2 h-px w-[78%] -translate-x-1/2 bg-zinc-300" />
                <div className="absolute left-1/2 top-1/2 h-[78%] w-px -translate-x-1/2 -translate-y-1/2 bg-zinc-300" />

                {/* Center */}
                <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-300 bg-white shadow-sm">
                  <div className="h-3 w-3 rounded-full bg-zinc-900" />
                </div>

                {/* Nodes */}
                <div className="absolute left-[12%] top-[25%] h-4 w-4 rounded-full border-4 border-[#fafafa] bg-zinc-800 shadow-sm" />
                <div className="absolute right-[14%] top-[22%] h-4 w-4 rounded-full border-4 border-[#fafafa] bg-zinc-500 shadow-sm" />
                <div className="absolute bottom-[21%] left-[17%] h-4 w-4 rounded-full border-4 border-[#fafafa] bg-zinc-500 shadow-sm" />
                <div className="absolute bottom-[17%] right-[19%] h-4 w-4 rounded-full border-4 border-[#fafafa] bg-zinc-800 shadow-sm" />

                {/* Labels */}
                <div className="absolute left-[4%] top-[13%] text-xs font-medium uppercase tracking-[0.15em] text-zinc-400">
                  Vision
                </div>

                <div className="absolute right-[0%] top-[12%] text-xs font-medium uppercase tracking-[0.15em] text-zinc-400">
                  ML
                </div>

                <div className="absolute bottom-[10%] left-[3%] text-xs font-medium uppercase tracking-[0.15em] text-zinc-400">
                  Systems
                </div>

                <div className="absolute bottom-[8%] right-[0%] text-xs font-medium uppercase tracking-[0.15em] text-zinc-400">
                  Data
                </div>

                {/* Floating technical card */}
                <div className="absolute left-1/2 top-1/2 w-48 -translate-x-1/2 translate-y-[82px] rounded-xl border border-zinc-200 bg-white/90 p-4 shadow-lg backdrop-blur">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-medium text-zinc-400">
                      CURRENT FOCUS
                    </span>
                    <span className="h-2 w-2 rounded-full bg-zinc-900" />
                  </div>

                  <p className="text-sm font-medium text-zinc-800">
                    Building intelligent systems
                  </p>

                  <p className="mt-1 text-xs leading-5 text-zinc-400">
                    Software · ML · Computer Vision
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:text-zinc-700 md:flex"
        >
          Scroll
          <span className="h-8 w-px bg-zinc-300" />
        </a>
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
      <section
        id="skills"
        className="border-t border-zinc-200/80 bg-[#fafafa]"
      >
        <div className="mx-auto max-w-6xl px-6 py-28">
          {/* Section heading */}
          <div className="mb-16">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
              Skills
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              What I work with.
            </h2>
          </div>

          <div className="space-y-12">
            {/* LANGUAGES */}
            <div className="grid gap-6 md:grid-cols-[0.25fr_0.75fr]">
              <div>
                <h3 className="text-sm font-medium uppercase tracking-[0.15em] text-zinc-400">
                  Languages
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  "Python",
                  "C++",
                  "C",
                  "Java",
                  "C#",
                  "SQL",
                  "JavaScript",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-400 hover:bg-zinc-50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* FRAMEWORKS & LIBRARIES */}
            <div className="grid gap-6 border-t border-zinc-200/80 pt-12 md:grid-cols-[0.25fr_0.75fr]">
              <div>
                <h3 className="text-sm font-medium uppercase tracking-[0.15em] text-zinc-400">
                  Frameworks & Libraries
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  "FastAPI",
                  "PyTorch",
                  "TensorFlow",
                  "Keras",
                  "scikit-learn",
                  "Pandas",
                  "NumPy",
                  "SciPy",
                  "OpenCV",
                  "Hugging Face",
                  "LangChain",
                  "Nilearn",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-400 hover:bg-zinc-50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* TOOLS & PLATFORMS */}
            <div className="grid gap-6 border-t border-zinc-200/80 pt-12 md:grid-cols-[0.25fr_0.75fr]">
              <div>
                <h3 className="text-sm font-medium uppercase tracking-[0.15em] text-zinc-400">
                  Tools & Platforms
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  "Git",
                  "Docker",
                  "Linux",
                  "PostgreSQL",
                  "ChromaDB",
                  "ROS2",
                  "TensorRT",
                  "NVIDIA Jetson",
                  "Jupyter",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-400 hover:bg-zinc-50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* AREAS */}
            <div className="grid gap-6 border-t border-zinc-200/80 pt-12 md:grid-cols-[0.25fr_0.75fr]">
              <div>
                <h3 className="text-sm font-medium uppercase tracking-[0.15em] text-zinc-400">
                  Areas
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  "AI / ML",
                  "Computer Vision",
                  "Software Engineering",
                  "Autonomous Systems",
                  "Scientific Computing",
                  "Data Pipelines",
                  "REST APIs",
                  "Embedded Systems",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-400 hover:bg-zinc-50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
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


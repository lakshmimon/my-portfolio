
const experiences = [
  {
    role: "Software Engineer Team Member",
    company: "Buckeye Vertical",
    date: "2026 — Present",
    location: "Columbus, OH",
    bullets: [
      "Developed ROS2 software in C++ for NVIDIA Jetson platforms, integrating autonomous mission algorithms and real-time processing for unmanned aerial systems.",
      "Built computer vision pipelines using DINOv2, DETR, YOLO, and OpenCV, benchmarking three architectures for object detection across varying aerial flight conditions.",
      "Generated 12K+ synthetic training variations through a Unity3D/C# domain-randomization pipeline and integrated TensorRT optimization, achieving 95% accuracy on real-world evaluation data.",
    ],
    description: "",
    tags: ["C++", "Python", "ROS2", "Computer Vision", "TensorRT", "Unity3D"],
  },
  {
    role: "Data Engineer",
    company: "EquiData",
    date: "September 2026 — Present",
    location: "Columbus, OH",
    bullets: [
      "Developed Python and Pandas document-processing pipelines to transform 100+ unstructured community project reports into structured, searchable datasets.",
      "Built an LLM-powered extraction and classification workflow using LangChain, structured outputs, semantic retrieval, and automated validation to improve document accessibility and reduce manual review.",
    ],
    description: "",
    tags: ["Python", "Pandas", "LangChain", "LLMs", "Data Pipelines"],
  },
  {
    role: "Machine Learning Team Member",
    company: "iGEM — SprayAway",
    date: "2026 — Present",
    location: "Columbus, OH",
    bullets: [],
    description:
      "Engineering Python-based biomedical data pipelines using Pandas, NumPy, and SciPy to process experimental PK/PD time-series data. Developing machine learning approaches that combine experimental observations with mechanistic model predictions.",
    tags: ["Python", "NumPy", "SciPy", "Machine Learning", "Time Series"],
  },
  {
    role: "Neuroimaging Research Assistant",
    company: "OSU Center for Cognitive and Behavioral Brain Imaging",
    date: "March 2026 — Present",
    location: "Columbus, OH",
    bullets: [],
    description:
      "Engineering Python-based computational workflows for high-dimensional fMRI data using Pandas, Jupyter, and Nilearn. Developing reproducible validation and testing workflows while investigating data quality, edge cases, and reliability across participants.",
    tags: ["Python", "Pandas", "Nilearn", "Jupyter", "Data Analysis"],
  },
  {
    role: "Data Analytics Intern",
    company: "Greater Cleveland Partnership",
    date: "May 2024 — March 2025",
    location: "Cleveland, OH",
    bullets: [
      "Analyzed workforce and salary datasets across cybersecurity, data analytics, and software engineering occupations, identifying industry and compensation trends.",
      "Collaborated on technical analytics initiatives and digital projects within a five-intern team, applying Agile practices to coordinate deliverables and communicate findings to stakeholders.",
    ],
    description: "",
    tags: ["Python", "Data Analytics", "Excel", "Agile", "Workforce Analytics"],
  },
];

const leadership = [
  {
    organization: "Association for Computing Machinery (ACM)",
    role: "Communications Director",
  },
  {
    organization: "Women in Cybersecurity (WiCyS)",
    role: "Website Manager",
  },
];

const featuredProjects = [
  {
    number: "01",
    category: "Distributed Systems",
    title: "FlightOps",
    subtitle: "Backend Engineering · Event-Driven Architecture",
    status: "Featured project",
    description:
      "An event-driven flight operations platform built to process, manage, and monitor operational events across distributed services. Integrated asynchronous event streaming, persistent data storage, and caching to support reliable backend workflows and real-time operational visibility.",
    tags: [
      "Python",
      "FastAPI",
      "Apache Kafka",
      "PostgreSQL",
      "Redis",
      "React",
      "Docker",
    ],
  },
  {
    number: "02",
    category: "Computer Vision",
    title: "WasteVision",
    subtitle: "Deep Learning · Image Classification",
    status: "Featured project",
    description:
      "A deep learning-based waste classification system designed to identify and categorize recyclable materials from images. Developed and evaluated CNN architectures, including VGG16, using a dataset of 150,000+ images to achieve 96% validation accuracy.",
    tags: [
      "Python",
      "CNN",
      "VGG16",
      "Deep Learning",
      "Computer Vision",
    ],
  },
  {
    number: "03",
    category: "Applied AI · Full-Stack",
    title: "Speaker Outreach Platform",
    subtitle: "AI-Powered Discovery · Outreach Management",
    status: "In Development",
    description:
      "Building an AI-powered speaker discovery and outreach platform for student organizations. Officers can describe an event and receive ranked speaker recommendations with supporting sources, generate context-aware outreach drafts, and manage contacts through a shared pipeline that preserves outreach history across leadership transitions.",
    tags: [
      "Python",
      "AI / LLMs",
      "Information Retrieval",
      "Full-Stack Development",
      "Workflow Automation",
      "Contact Management",
    ],
  },
];

const otherProjects = [
  {
    number: "01",
    category: "Machine Learning",
    title: "FraudLens",
    subtitle: "Predictive Modeling · Data Analytics",
    description:
      "A machine learning pipeline for identifying potentially fraudulent transactions in imbalanced datasets. Applied exploratory data analysis, feature preparation, and SMOTE-based resampling before training and evaluating Random Forest classification models using ROC-AUC and other performance metrics.",
    tags: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Random Forest",
      "SMOTE",
    ],
  },
  {
    number: "02",
    category: "Computer Vision",
    title: "Medical Image Classification",
    subtitle: "Deep Learning · Model Explainability",
    description:
      "A computer vision pipeline for skin lesion classification using CNN and transfer-learning models, with Grad-CAM analysis to investigate model predictions and failure modes.",
    tags: [
      "Python",
      "TensorFlow",
      "Keras",
      "CNN",
      "Computer Vision",
    ],
  },
  {
    number: "03",
    category: "Applied Machine Learning",
    title: "Intraoperative Physiological Event Intelligence",
    subtitle: "Time-Series Analysis · Predictive Modeling",
    description:
      "A multimodal clinical time-series platform that reconstructs physiological timelines from ECG, SpO₂, blood pressure, respiratory signals, and medication events while detecting significant physiological events.",
    tags: [
      "Python",
      "PyTorch",
      "FastAPI",
      "PostgreSQL",
      "SciPy",
    ],
  },
  {
    number: "04",
    category: "Applied AI",
    title: "MedKnowledge AI",
    subtitle: "Retrieval-Augmented Generation · NLP",
    description:
      "A retrieval-augmented generation (RAG) application that combines semantic document retrieval with large language models to deliver context-aware responses from a curated knowledge base. Implemented embedding-based search, vector storage, and an interactive interface for querying relevant information.",
    tags: [
      "Python",
      "LangChain",
      "Hugging Face",
      "ChromaDB",
      "BGE Embeddings",
      "FastAPI",
      "Streamlit",
    ],
  },
];

const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "C++", "C", "Java", "C#", "SQL", "JavaScript"],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "FastAPI",
      "React",
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
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git",
      "Docker",
      "Linux",
      "PostgreSQL",
      "Redis",
      "Apache Kafka",
      "ChromaDB",
      "ROS2",
      "TensorRT",
      "NVIDIA Jetson",
      "Jupyter",
    ],
  },
  {
    title: "Areas",
    skills: [
      "Software Engineering",
      "Distributed Systems",
      "AI / ML",
      "Computer Vision",
      "Autonomous Systems",
      "Scientific Computing",
      "Data Pipelines",
      "REST APIs",
      "Embedded Systems",
    ],
  },
];

export default function Home() {
  return (
    <main
      id="top"
      className="min-h-screen overflow-hidden bg-[#0b0e0c] text-[#f0f2ef]"
    >
      {/* NAVIGATION */}
      <nav className="fixed top-0 z-50 w-full border-b border-[#29322b] bg-[#0b0e0c]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
          <a
            href="#top"
            className="font-editorial text-2xl text-[#f0f2ef] transition-colors hover:text-[#a2d6a8]"
          >
            Lakshmi.
          </a>

          <div className="hidden items-center gap-7 font-mono text-[11px] tracking-wide text-[#929d93] md:flex">
            <a href="#about" className="transition-colors hover:text-[#a2d6a8]">
              About
            </a>
            <a href="#experience" className="transition-colors hover:text-[#a2d6a8]">
              Experience
            </a>
            <a href="#leadership" className="transition-colors hover:text-[#a2d6a8]">
              Leadership
            </a>
            <a href="#projects" className="transition-colors hover:text-[#a2d6a8]">
              Projects
            </a>
            <a href="#skills" className="transition-colors hover:text-[#a2d6a8]">
              Skills
            </a>
            <a href="#contact" className="transition-colors hover:text-[#a2d6a8]">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="border border-[#526b55] px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-[#a2d6a8] transition-colors hover:bg-[#183a27]"
          >
            Get in touch ↗
          </a>
        </div>
      </nav>

      {/* HERO / ABOUT */}
      <section
        id="about"
        className="editorial-grid relative flex min-h-[760px] items-center overflow-hidden border-b border-[#29322b] px-6 pb-24 pt-36 sm:px-10 lg:min-h-[850px] lg:px-16"
      >
        <div className="green-glow pointer-events-none absolute -right-40 top-20 h-[600px] w-[600px] rounded-full opacity-70" />

        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="animate-fade-up">
            <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-[#a2d6a8]">
              <span className="h-px w-8 bg-[#a2d6a8]" />
              CSE · Ohio State University
            </div>

            <h1 className="max-w-4xl text-5xl font-medium leading-[1.08] tracking-[-0.045em] text-[#f0f2ef] sm:text-6xl lg:text-7xl">
              I build software
              <br />
              <span className="font-editorial font-normal italic text-[#a2d6a8]">
                for intelligent systems.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-[#a4ada5] sm:text-lg">
              Hi, I&apos;m Lakshmi — an Honors Computer Science and Engineering
              student at The Ohio State University, with minors in Psychology
              and Statistics. I&apos;m interested in software engineering,
              AI/ML, and building data-driven systems that turn complex
              problems into practical solutions.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 bg-[#a2d6a8] px-6 py-3 text-sm font-medium text-[#0b0e0c] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#b8e5bd]"
              >
                Explore my work
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center border border-[#526b55] px-6 py-3 text-sm text-[#d4ddd5] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#a2d6a8] hover:text-[#a2d6a8]"
              >
                Get in touch
              </a>
            </div>

            <div className="mt-14 flex flex-wrap gap-x-7 gap-y-3 font-mono text-xs text-[#737e74]">
              <span>Python</span>
              <span>C++</span>
              <span>Computer Vision</span>
              <span>Machine Learning</span>
              <span>Distributed Systems</span>
            </div>
          </div>

          {/* ABSTRACT TECHNICAL VISUAL */}
          <div className="relative mx-auto hidden aspect-square w-full max-w-[420px] lg:block">
            <div className="absolute inset-8 rounded-full border border-[#29322b]" />
            <div className="absolute inset-20 rounded-full border border-[#344337]" />
            <div className="absolute inset-32 rounded-full border border-[#526b55]" />

            <div className="absolute left-1/2 top-1/2 h-px w-[85%] -translate-x-1/2 bg-[#344337]" />
            <div className="absolute left-1/2 top-1/2 h-[85%] w-px -translate-x-1/2 -translate-y-1/2 bg-[#344337]" />

            <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#526b55] bg-[#141a16]">
              <span className="font-editorial text-4xl text-[#a2d6a8]">
                LM
              </span>
            </div>

            <div className="absolute left-[12%] top-[23%] h-3 w-3 rounded-full bg-[#a2d6a8] shadow-[0_0_20px_#a2d6a8]" />
            <div className="absolute right-[13%] top-[22%] h-3 w-3 rounded-full bg-[#6c9b74]" />
            <div className="absolute bottom-[21%] left-[16%] h-3 w-3 rounded-full bg-[#6c9b74]" />
            <div className="absolute bottom-[17%] right-[18%] h-3 w-3 rounded-full bg-[#a2d6a8] shadow-[0_0_20px_#a2d6a8]" />

            <span className="absolute left-[3%] top-[12%] font-mono text-[10px] uppercase tracking-[0.2em] text-[#737e74]">
              Vision
            </span>
            <span className="absolute right-[1%] top-[11%] font-mono text-[10px] uppercase tracking-[0.2em] text-[#737e74]">
              ML
            </span>
            <span className="absolute bottom-[9%] left-[2%] font-mono text-[10px] uppercase tracking-[0.2em] text-[#737e74]">
              Systems
            </span>
            <span className="absolute bottom-[7%] right-[0%] font-mono text-[10px] uppercase tracking-[0.2em] text-[#737e74]">
              Data
            </span>

            <div className="absolute bottom-[36%] left-1/2 w-52 -translate-x-1/2 border border-[#344337] bg-[#141a16]/95 p-4 shadow-xl backdrop-blur">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-[9px] tracking-[0.18em] text-[#737e74]">
                  CURRENT FOCUS
                </span>
                <span className="h-2 w-2 rounded-full bg-[#a2d6a8]" />
              </div>
              <p className="text-sm text-[#f0f2ef]">
                Building intelligent systems
              </p>
              <p className="mt-1 text-xs text-[#929d93]">
                Software · ML · Computer Vision
              </p>
            </div>
          </div>
        </div>

        <a
          href="#experience"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[9px] uppercase tracking-[0.22em] text-[#737e74] transition-colors hover:text-[#a2d6a8] md:flex"
        >
          Scroll to explore
          <span className="h-8 w-px bg-[#526b55]" />
        </a>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="border-b border-[#29322b] px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-[#a2d6a8]">
                01 / Experience
              </p>
              <h2 className="font-editorial text-4xl text-[#f0f2ef] sm:text-5xl">
                Where I&apos;ve worked
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-[#929d93]">
              Building software, exploring data, and applying technology to
              real-world problems.
            </p>
          </div>

          <div className="divide-y divide-[#29322b]">
            {experiences.map((experience, index) => (
              <article
                key={experience.company}
                className="grid gap-6 py-10 first:pt-0 last:pb-0 md:grid-cols-[190px_1fr] md:gap-12"
              >
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-xs text-[#a2d6a8]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-[#c2cbc3]">{experience.date}</p>
                  <p className="text-xs text-[#737e74]">
                    {experience.location}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium tracking-tight text-[#f0f2ef]">
                    {experience.role}
                  </h3>

                  <p className="mt-1 text-sm text-[#a2d6a8]">
                    {experience.company}
                  </p>

                  {experience.bullets.length > 0 ? (
                    <ul className="mt-6 max-w-3xl space-y-3">
                      {experience.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-3 text-sm leading-7 text-[#a4ada5] sm:text-[15px]"
                        >
                          <span className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-[#a2d6a8]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-5 max-w-3xl text-sm leading-7 text-[#a4ada5] sm:text-[15px]">
                      {experience.description}
                    </p>
                  )}

                  <div className="mt-6 flex flex-wrap gap-2">
                    {experience.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-[#29322b] px-3 py-1 font-mono text-[10px] tracking-wide text-[#929d93]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP & INVOLVEMENT */}
      <section
        id="leadership"
        className="border-b border-[#29322b] px-6 py-20 sm:px-10 lg:px-16"
      >
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-[#a2d6a8]">
              02 / Involvement
            </p>
            <h2 className="font-editorial text-4xl text-[#f0f2ef] sm:text-5xl">
              Leadership
            </h2>
          </div>

          <div className="divide-y divide-[#29322b]">
            {leadership.map((item) => (
              <div
                key={item.organization}
                className="flex flex-col justify-between gap-2 py-5 first:pt-0 sm:flex-row sm:items-center"
              >
                <h3 className="text-sm font-medium text-[#f0f2ef]">
                  {item.organization}
                </h3>
                <p className="font-mono text-xs text-[#a2d6a8]">
                  {item.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="border-b border-[#29322b] px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-16">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-[#a2d6a8]">
              03 / Selected Work
            </p>
            <h2 className="font-editorial text-4xl text-[#f0f2ef] sm:text-5xl">
              Projects & experiments
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[#929d93]">
              A selection of systems, applications, and experiments exploring
              software engineering, machine learning, and applied AI.
            </p>
          </div>

          {/* FEATURED PROJECTS */}
          <div>
            <div className="mb-8 flex items-center justify-between border-b border-[#29322b] pb-4">
              <h3 className="text-sm font-medium tracking-wide text-[#f0f2ef]">
                Featured Projects
              </h3>
              <span className="font-mono text-xs text-[#737e74]">
                03 SELECTED
              </span>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {featuredProjects.map((project, index) => (
                <article
                  key={project.title}
                  className={`group flex flex-col border border-[#29322b] bg-[#141a16] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#526b55] sm:p-9 ${
                    index === 0 ? "lg:col-span-2" : ""
                  }`}
                >
                  <div className="mb-10 flex items-center justify-between">
                    <span className="font-mono text-xs text-[#a2d6a8]">
                      {project.number} / {project.category}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#a2d6a8]">
                      {project.status}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h4 className="font-editorial text-4xl text-[#f0f2ef] transition group-hover:text-[#a2d6a8] sm:text-5xl">
                      {project.title}
                    </h4>

                    <p className="mt-3 text-xs tracking-wide text-[#a2d6a8]">
                      {project.subtitle}
                    </p>

                    <p className="mt-6 max-w-3xl text-sm leading-7 text-[#a4ada5]">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-9 border-t border-[#29322b] pt-5">
                    <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[#737e74]">
                      Tech stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-[#29322b] px-3 py-1.5 font-mono text-[10px] text-[#a4ada5]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* OTHER PROJECTS */}
          <div className="mt-24">
            <div className="mb-8 flex items-center justify-between border-b border-[#29322b] pb-4">
              <h3 className="text-sm font-medium tracking-wide text-[#f0f2ef]">
                Other Projects
              </h3>
              <span className="font-mono text-xs text-[#737e74]">
                04 MORE
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((project) => (
                <article
                  key={project.title}
                  className="group flex flex-col border border-[#29322b] p-6 transition duration-300 hover:border-[#526b55] hover:bg-[#141a16]"
                >
                  <div className="mb-8">
                    <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#a2d6a8]">
                      {project.number} / {project.category}
                    </p>
                  </div>

                  <div className="flex-1">
                    <h4 className="text-xl font-medium tracking-tight text-[#f0f2ef] transition group-hover:text-[#a2d6a8]">
                      {project.title}
                    </h4>

                    <p className="mt-2 text-xs text-[#929d93]">
                      {project.subtitle}
                    </p>

                    <p className="mt-5 text-sm leading-7 text-[#929d93]">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-7 border-t border-[#29322b] pt-5">
                    <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.18em] text-[#737e74]">
                      Tech stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-[#29322b] px-2.5 py-1 font-mono text-[9px] text-[#929d93]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="border-b border-[#29322b] px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-16">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-[#a2d6a8]">
              04 / Toolkit
            </p>
            <h2 className="font-editorial text-4xl text-[#f0f2ef] sm:text-5xl">
              What I work with.
            </h2>
          </div>

          <div className="space-y-0">
            {skillGroups.map((group, index) => (
              <div
                key={group.title}
                className={`grid gap-6 py-9 md:grid-cols-[0.3fr_0.7fr] ${
                  index !== 0 ? "border-t border-[#29322b]" : ""
                }`}
              >
                <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-[#929d93]">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="border border-[#29322b] bg-[#141a16] px-4 py-2 text-sm text-[#c2cbc3] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#526b55] hover:text-[#a2d6a8]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative overflow-hidden bg-[#141a16] px-6 py-28 sm:px-10 lg:px-16"
      >
        <div className="green-glow pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full opacity-60" />

        <div className="relative mx-auto max-w-6xl">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-[#a2d6a8]">
            05 / Contact
          </p>

          <h2 className="max-w-3xl font-editorial text-5xl leading-tight text-[#f0f2ef] sm:text-6xl">
            Let&apos;s build something meaningful.
          </h2>

          <p className="mt-7 max-w-xl text-sm leading-7 text-[#a4ada5] sm:text-base">
            I&apos;m always interested in opportunities to work on thoughtful
            software, intelligent systems, and technology that solves
            meaningful problems.
          </p>

          <div className="mt-10 flex flex-wrap gap-6 text-sm">
            <a
              href="mailto:lakshmiamondeddu@gmail.com"
              className="text-[#a2d6a8] transition-colors hover:text-[#f0f2ef]"
            >
              Email ↗
            </a>

            <a
              href="https://github.com/lakshmimon"
              target="_blank"
              rel="noreferrer"
              className="text-[#a4ada5] transition-colors hover:text-[#a2d6a8]"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/lakshmimon/"
              target="_blank"
              rel="noreferrer"
              className="text-[#a4ada5] transition-colors hover:text-[#a2d6a8]"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0b0e0c] px-6 pb-8 pt-6 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 border-t border-[#29322b] pt-6 text-xs text-[#737e74] sm:flex-row">
          <span>© {new Date().getFullYear()} Lakshmi Mondeddu</span>
          <span className="font-mono">Designed & built with Next.js</span>
        </div>
      </footer>
    </main>
  );
}
